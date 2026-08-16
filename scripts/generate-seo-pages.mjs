import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const source = fs.readFileSync(path.join(root, "app.js"), "utf8");
const baseUrl = "https://shivaprasad-patil.github.io";

function extractLiteral(startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) throw new Error(`Could not extract ${startMarker}`);
  return source.slice(start + startMarker.length, end).trim().replace(/;$/, "");
}

const projects = vm.runInNewContext(`(${extractLiteral("const projects = ", "const projectPosts =")})`);
const projectPosts = vm.runInNewContext(`(${extractLiteral("const projectPosts = ", "const publications =")})`);

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const absoluteUrl = (url) => url.startsWith("http") ? url : `${baseUrl}${url}`;
const projectUrl = (project) => `${baseUrl}/projects/${project.id}/`;
const description = (project) => project.summary.length <= 158
  ? project.summary
  : `${project.summary.slice(0, 155).replace(/\s+\S*$/, "")}…`;

function header() {
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="Shivaprasad Patil home">
        <span class="brand-mark">SP</span>
        <span><strong>Shivaprasad Patil</strong><small>Predictive AI and Bioinformatics</small></span>
      </a>
      <nav class="nav" aria-label="Primary navigation">
        <a href="/#about">About</a>
        <a href="/#projects" aria-current="page">Projects</a>
        <a href="/#publications">Publications</a>
        <a href="/#experience">Experience</a>
        <a href="/#contact">Contact</a>
      </nav>
      <button class="icon-button" id="themeToggle" type="button" aria-label="Toggle dark mode">◐</button>
    </header>`;
}

function footer() {
  return `
    <footer class="footer">
      <span>© 2026 Shivaprasad Patil</span>
      <div class="footer-links">
        <a href="https://github.com/shivaprasad-patil" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://scholar.google.com/citations?user=-beMhZYAAAAJ&amp;hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
      </div>
    </footer>
    <script>
      const toggle = document.querySelector("#themeToggle");
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme) document.documentElement.dataset.theme = savedTheme;
      toggle.addEventListener("click", () => {
        const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("portfolio-theme", theme);
      });
    </script>`;
}

function renderProject(project, index) {
  const post = projectPosts[project.id];
  if (!post) throw new Error(`Missing project post for ${project.id}`);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const related = projects.filter((item) => item.id !== project.id && item.category === project.category).slice(0, 2);
  const url = projectUrl(project);
  const image = absoluteUrl(project.image);
  const metaDescription = description(project);
  const title = `${project.title} | Shivaprasad Patil, PhD`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.title,
        headline: project.title,
        description: project.summary,
        url,
        image,
        keywords: project.methods.join(", "),
        creator: {
          "@type": "Person",
          "@id": `${baseUrl}/#person`,
          name: "Shivaprasad Patil",
          url: `${baseUrl}/`
        },
        ...(project.github ? { sameAs: project.github } : {})
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${baseUrl}/#projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: url }
        ]
      }
    ]
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(metaDescription)}">
    <meta name="author" content="Shivaprasad Patil">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="theme-color" content="#0b6e6b">
    <title>${escapeHtml(title)}</title>
    <link rel="canonical" href="${url}">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="/styles.css">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Shivaprasad Patil Portfolio">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(metaDescription)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${escapeHtml(image)}">
    <meta property="og:image:alt" content="${escapeHtml(`${project.title} infographic`)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(metaDescription)}">
    <meta name="twitter:image" content="${escapeHtml(image)}">
    <script type="application/ld+json">${JSON.stringify(structuredData)}</script>
  </head>
  <body>
    ${header()}
    <main class="seo-project-main">
      <a class="back-link" href="/#projects">← Back to all projects</a>
      <article class="project-post">
        <header class="project-post-header">
          <div>
            <p class="eyebrow">${escapeHtml(project.category)} · ${escapeHtml(project.date)}</p>
            <h1>${escapeHtml(project.title)}</h1>
            <p class="project-post-lede">${escapeHtml(project.summary)}</p>
            <div class="dialog-actions">
              ${project.slides ? `<a class="button secondary" href="${escapeHtml(project.slides)}" target="_blank" rel="noreferrer">View slides</a>` : ""}
              ${project.github ? `<a class="button ghost" href="${escapeHtml(project.github)}" target="_blank" rel="noreferrer">GitHub repository</a>` : ""}
            </div>
          </div>
          <img class="project-post-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(`${project.title} infographic`)}" fetchpriority="high">
        </header>
        <div class="project-post-body">
          <section>
            <p class="eyebrow">Overview</p>
            <h2>About the project</h2>
            <p>${escapeHtml(post.overview)}</p>
          </section>
          <section>
            <p class="eyebrow">Highlights</p>
            <h2>What it delivers</h2>
            <ul>${post.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
          <section>
            <p class="eyebrow">Methods</p>
            <h2>Technical focus</h2>
            <div class="tag-cloud">${project.methods.map((method) => `<span>${escapeHtml(method)}</span>`).join("")}</div>
            <p class="project-impact"><strong>Why it matters:</strong> ${escapeHtml(project.impact)}</p>
          </section>
        </div>
        ${related.length ? `<section class="related-projects">
          <div><p class="eyebrow">Keep exploring</p><h2>Related projects</h2></div>
          <div class="related-grid">${related.map((item) => `
            <a href="/projects/${item.id}/"><span>${escapeHtml(item.category)}</span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.summary)}</small></a>`).join("")}
          </div>
        </section>` : ""}
        <nav class="project-pagination" aria-label="Project navigation">
          <a href="/projects/${previous.id}/"><span>Previous project</span><strong>${escapeHtml(previous.title)}</strong></a>
          <a href="/projects/${next.id}/"><span>Next project</span><strong>${escapeHtml(next.title)}</strong></a>
        </nav>
      </article>
    </main>
    ${footer()}
  </body>
</html>
`;
}

for (const [index, project] of projects.entries()) {
  const directory = path.join(root, "projects", project.id);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(
    path.join(directory, "index.html"),
    renderProject(project, index).replace(/[ \t]+$/gm, "")
  );
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}/</loc><lastmod>2026-08-16</lastmod></url>
${projects.map((project) => `  <url><loc>${projectUrl(project)}</loc><lastmod>2026-08-16</lastmod></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

const notFound = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Page not found | Shivaprasad Patil</title><link rel="stylesheet" href="/styles.css"><link rel="icon" href="/favicon.svg" type="image/svg+xml"></head>
<body>${header()}<main class="seo-project-main"><section class="section-heading"><p class="eyebrow">404</p><h1>Page not found</h1><p class="project-post-lede">The page may have moved. Return to the portfolio or browse the project directory.</p><div class="hero-actions"><a class="button primary" href="/">Portfolio home</a><a class="button secondary" href="/#projects">Browse projects</a></div></section></main>${footer()}</body></html>`;
fs.writeFileSync(path.join(root, "404.html"), notFound.replace(/[ \t]+$/gm, ""));

console.log(`Generated ${projects.length} project pages, sitemap.xml, and 404.html.`);
