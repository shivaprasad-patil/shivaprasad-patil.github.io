const projects = [
  {
    id: "oncokg-rag",
    selected: true,
    date: "August 2026",
    title: "OncoKG-RAG",
    category: "Biomedical AI",
    image: "/files/OncoRAG_infographic-optimized.jpg",
    summary: "A real-data biomedical knowledge graph with template retrieval, local LLM synthesis, literature evidence, and graph analytics for drug discovery exploration.",
    methods: ["knowledge graphs", "KG-RAG", "Neo4j", "local LLMs"],
    github: "https://github.com/shivaprasad-patil/OncoKG-RAG",
    slides: "/files/OncoKG-RAG_Biomedical_Discovery_slides.pdf",
    impact: "Connects traceable molecular, pathway, drug-target, patient, and literature evidence in a reproducible system where the LLM summarizes retrieved graph results rather than generating database queries."
  },
  {
    id: "virtual-ifn-cell",
    selected: true,
    date: "May 2026",
    title: "Mini Virtual IFN Immune Cell",
    category: "Single-cell",
    image: "/files/virtual_ifn_cell_infographic-optimized.jpg",
    summary: "Perturbation-aware single-cell virtual cell prototype for interferon and COVID immune-state transitions.",
    methods: ["single-cell modeling", "perturbation learning", "immune-state prediction"],
    github: "https://github.com/shivaprasad-patil/virtual-ifn-cell",
    slides: "https://shivaprasad-patil.github.io/files/Virtual_IFN_Cell.pdf",
    impact: "Frames immune transitions as a lightweight prediction problem that can be exposed through an inference API."
  },
  {
    id: "multiomicsbind",
    selected: true,
    date: "September 2025",
    title: "MultiOmicsBind",
    category: "Multi-omics",
    image: "/files/MultiOmicsBind_infographic-optimized.jpg",
    summary: "A multimodal framework inspired by ImageBind for aligning genomics, transcriptomics, proteomics, and metabolomics.",
    methods: ["multimodal learning", "representation alignment", "omics integration"],
    github: "https://github.com/shivaprasad-patil/MultiOmicsBind",
    slides: "https://shivaprasad-patil.github.io/files/MultiOmicsBind.pdf",
    impact: "Creates a shared representation layer for integrated biological insight across omics modalities."
  },
  {
    id: "scadver",
    selected: true,
    date: "April 2026",
    title: "ScAdver",
    category: "Single-cell",
    image: "/files/ScAdver_infographic-optimized.jpg",
    summary: "Adversarial batch correction for single-cell RNA-seq that preserves biology while reducing protocol effects.",
    methods: ["adversarial learning", "domain adaptation", "scRNA-seq"],
    github: "https://github.com/shivaprasad-patil/ScAdver",
    slides: "https://shivaprasad-patil.github.io/files/ScAdver.pdf?v=20260419",
    impact: "Improves cross-protocol comparability without flattening biological signal."
  },
  {
    id: "bulkrna-agent",
    selected: true,
    date: "January 2026",
    title: "BulkRNA-Agent",
    category: "AI agents",
    image: "/files/BulkRNA_Agent_infographic-optimized.jpg",
    summary: "AI-powered transcriptomics analysis with dual LLM reasoning and biomedical models from QC to enrichment.",
    methods: ["LLMs", "RNA-seq", "differential expression", "enrichment"],
    github: "https://github.com/shivaprasad-patil/BulkRNA-Agent",
    slides: "https://shivaprasad-patil.github.io/files/BulkRNA-Agent.pdf",
    impact: "Packages common transcriptomics reasoning into a more reproducible analysis workflow."
  },
  {
    id: "pokemon-agent",
    date: "January 2026",
    title: "Pokemon Battle Agent",
    category: "AI agents",
    image: "/files/Pokemon_battle_agent_infographic-optimized.jpg",
    summary: "A local LLM-powered battle agent that reasons over game state, move choices, and type advantages in real time.",
    methods: ["LLMs", "Ollama", "agent systems", "Python"],
    github: "https://github.com/shivaprasad-patil/PokemonAgent",
    impact: "Demonstrates explainable, reasoning-based decisions in an interactive agent environment."
  },
  {
    id: "omicsformer",
    date: "November 2025",
    title: "OmicsFormer",
    category: "Multi-omics",
    image: "/files/OmicsFormer-optimized.jpg",
    summary: "A PyTorch transformer framework for multi-study omics integration with missing modalities and batch effects.",
    methods: ["transformers", "PyTorch", "mixture of experts", "SLE"],
    github: "https://github.com/shivaprasad-patil/OmicsFormer",
    slides: "https://shivaprasad-patil.github.io/files/OmicsFormer.pdf",
    impact: "Reached 91% accuracy across eight independent SLE studies while supporting interpretable feature importance."
  },
  {
    id: "omicsnet",
    date: "October 2025",
    title: "OmicsNet",
    category: "Multi-omics",
    image: "/files/OmicsNet_infographic-optimized.jpg",
    summary: "Feature-level network construction across omics modalities without requiring overlapping samples.",
    methods: ["network biology", "data integration", "feature graphs"],
    github: "https://github.com/shivaprasad-patil/OmicsNet",
    slides: "https://shivaprasad-patil.github.io/files/OmicsNet_Feature_Level_Integration.pdf",
    impact: "Makes cross-modal relationships explorable when conventional sample-level integration is not possible."
  },
  {
    id: "alphagenome",
    date: "October 2025",
    title: "AlphaGenome U-Net Architecture",
    category: "Genomic AI",
    image: "/files/AlphaGenome_infographic-optimized.jpg",
    summary: "An educational implementation of the U-Net core behind a large genomic sequence-to-function model.",
    methods: ["U-Net", "genomic sequence", "deep learning"],
    github: "https://github.com/shivaprasad-patil/AlphaGenome-Model-Architecture",
    impact: "Turns a complex 450M-parameter genomic architecture into an inspectable learning resource."
  },
  {
    id: "deepseek-v3",
    date: "August 2025",
    title: "DeepSeek-V3 Architecture",
    category: "Model architecture",
    image: "/files/DeepSeek_infographic-optimized.jpg",
    summary: "An implementation-focused exploration of mixture-of-experts routing and multi-token prediction.",
    methods: ["LLMs", "mixture of experts", "model architecture"],
    github: "https://github.com/shivaprasad-patil/DeepSeek-V3-Model-Architecture",
    impact: "Makes modern language-model design choices concrete through code and diagrams."
  },
  {
    id: "gpt-oss",
    date: "August 2025",
    title: "GPT-OSS Architecture",
    category: "Model architecture",
    image: "/files/GPT-OSS_infographic-optimized.jpg",
    summary: "A hands-on implementation of an open-weight language model architecture and its core components.",
    methods: ["LLMs", "attention", "PyTorch"],
    github: "https://github.com/shivaprasad-patil/GPT-OSS-Architecture",
    impact: "Provides an implementation-first path for understanding contemporary LLM internals."
  },
  {
    id: "evo2",
    date: "August 2025",
    title: "EVO2 DNA Foundation Model Demo",
    category: "Genomic AI",
    image: "/files/Evo2_infographic-optimized.jpg",
    summary: "A working StripedHyena-based neural architecture for long-context DNA sequence modeling.",
    methods: ["foundation models", "DNA", "StripedHyena"],
    github: "https://github.com/shivaprasad-patil/EVO2-Demo",
    impact: "Connects long-context foundation-model ideas to practical genomic sequence analysis."
  },
  {
    id: "llm-single-cell",
    date: "July 2025",
    title: "LLMs and Foundation Models for Single-Cell Analysis",
    category: "Single-cell",
    image: "/files/Cell2Sentence_demo_infographic-optimized.jpg",
    summary: "An exploration of combining biological foundation models with LLMs for cellular reasoning.",
    methods: ["single-cell", "foundation models", "LLMs"],
    github: "https://github.com/shivaprasad-patil/Cell2Sentenece-Demo",
    impact: "Maps emerging model capabilities to useful single-cell analysis workflows."
  },
  {
    id: "gpt2",
    date: "June 2025",
    title: "Reproducing GPT-2",
    category: "Model architecture",
    image: "/files/nano_GPT-2_infographic-optimized.jpg",
    summary: "A from-scratch reproduction and training exercise for the 124M-parameter GPT-2 model.",
    methods: ["GPT-2", "transformers", "language modeling"],
    github: "https://github.com/shivaprasad-patil/nano_GPT-2",
    impact: "Builds practical intuition for transformer training, data pipelines, and language-model engineering."
  }
];

const projectPosts = {
  "oncokg-rag": {
    overview: "OncoKG-RAG is an open-source biomedical discovery architecture built around a focused 15-gene breast cancer panel. It integrates real public evidence from GDC/TCGA-BRCA, Reactome, STRING, DGIdb, and PubMed into Neo4j, exposes reviewed template queries through FastAPI, and uses a local Ollama model only to synthesize answers from retrieved graph rows. The result is an inspectable KG-RAG workflow with explicit provenance, caveats, and separation between observed, derived, literature, and model-ranked evidence.",
    highlights: [
      "Builds a reproducible Neo4j knowledge graph from real clinical, mutation, expression, pathway, protein-interaction, drug-target, and literature records.",
      "Provides fixed-template retrieval, molecular patient similarity, pathway alteration, drug-coverage analytics, and a Streamlit evidence interface through FastAPI.",
      "Adds dictionary-based PubMed co-mentions and optional real-data Node2Vec link ranking while keeping local LLM use restricted to answer synthesis."
    ]
  },
  "virtual-ifn-cell": {
    overview: "This project explores a compact virtual-cell system for learning how immune-cell states change under interferon stimulation and COVID-related perturbations. The trained model is designed to support repeatable inference rather than remain confined to a research notebook.",
    highlights: [
      "Learns perturbation-aware transitions from single-cell expression profiles.",
      "Connects immune-state prediction with a lightweight inference API.",
      "Creates a practical foundation for testing virtual-cell ideas on focused biological questions."
    ]
  },
  multiomicsbind: {
    overview: "MultiOmicsBind adapts the binding-modality concept popularized by ImageBind to biological data. Each omics layer is encoded into a shared representation space so information from genomics, transcriptomics, proteomics, and metabolomics can be compared and integrated.",
    highlights: [
      "Aligns heterogeneous omics modalities in a shared embedding space.",
      "Supports integration when modality scales and feature spaces differ.",
      "Provides reusable representations for downstream prediction and biological interpretation."
    ]
  },
  scadver: {
    overview: "ScAdver removes technical batch effects from single-cell RNA-seq while preserving biological variation and cell identity. Its train-once, project-forever design allows a reference encoder to be reused as new query batches arrive.",
    highlights: [
      "Uses adversarial learning to separate biology from technical batch signal.",
      "Routes query projection through direct, neighborhood, or neural-adapter paths.",
      "Supports reproducible execution across CPU, CUDA, and Apple Silicon."
    ]
  },
  "bulkrna-agent": {
    overview: "BulkRNA-Agent brings quality control, experimental-design support, differential expression, enrichment analysis, and biological interpretation into one local workflow. A reasoning model coordinates analysis while a biomedical model helps interpret results.",
    highlights: [
      "Combines dual LLM roles for analysis planning and biological interpretation.",
      "Covers the workflow from count data and metadata through enrichment results.",
      "Runs locally to keep sensitive research data under the user's control."
    ]
  },
  "pokemon-agent": {
    overview: "This project uses a local language model as a strategic decision-maker inside a Pokemon battle engine. The agent evaluates battle state, type advantages, health, and available moves before selecting and explaining an action.",
    highlights: [
      "Integrates local LLM reasoning with deterministic game logic.",
      "Compares random, heuristic, and language-model agent strategies.",
      "Exposes decisions through real-time battle commentary and performance tracking."
    ]
  },
  omicsformer: {
    overview: "OmicsFormer is a PyTorch framework for integrating data from multiple studies and omics modalities. It combines batch correction, transformer encoders, grouped attention, and mixture-of-experts components while accommodating missing modalities.",
    highlights: [
      "Supports flexible alignment strategies for incomplete multi-omics datasets.",
      "Reached approximately 91% classification accuracy across eight independent SLE studies.",
      "Provides gradient, attention, and permutation-based feature importance."
    ]
  },
  omicsnet: {
    overview: "OmicsNet integrates modalities at the feature level when datasets have no overlapping samples. Features are related through their association patterns with a shared outcome, producing a cross-modal network for exploration and hub discovery.",
    highlights: [
      "Works without shared samples across transcriptomics, proteomics, metabolomics, or imaging datasets.",
      "Builds interpretable feature networks around a common biological outcome.",
      "Supports interactive exploration and export for downstream network analysis."
    ]
  },
  alphagenome: {
    overview: "This educational implementation examines the U-Net-style architecture behind large genomic sequence-to-function models. It combines progressive sequence downsampling, long-range attention, skip connections, and task-specific output heads.",
    highlights: [
      "Processes genomic information across nucleotide-to-chromosome-scale resolutions.",
      "Explores transformer and pairwise-interaction blocks inside an encoder-decoder design.",
      "Demonstrates multi-modal output heads for genomic prediction tasks."
    ]
  },
  "deepseek-v3": {
    overview: "This implementation-focused study breaks down the major components of the DeepSeek-V3 architecture. It uses working examples and visualizations to make attention, normalization, expert routing, scaling, and inference easier to inspect.",
    highlights: [
      "Explores grouped-query attention, rotary embeddings, and RMS normalization.",
      "Demonstrates mixture-of-experts routing and expert selection.",
      "Connects individual components to the complete inference pipeline."
    ]
  },
  "gpt-oss": {
    overview: "The GPT-OSS architecture project builds core language-model components and integrates them into a working model. The emphasis is on implementation, tensor flow, and comparison rather than treating the architecture as a black box.",
    highlights: [
      "Implements grouped-query attention, rotary embeddings, RMSNorm, and mixture-of-experts layers.",
      "Explores sliding-window attention and advanced tokenization.",
      "Includes interactive comparisons of attention patterns and expert usage."
    ]
  },
  evo2: {
    overview: "This demo implements a compact StripedHyena-inspired architecture for DNA sequence modeling. It combines multi-scale convolution, attention, character-level nucleotide tokenization, and a complete training workflow.",
    highlights: [
      "Models short, medium, and long-range patterns in biological sequences.",
      "Includes training, validation, checkpointing, and loss visualization.",
      "Demonstrates a working DNA foundation-model pipeline on CPU or GPU."
    ]
  },
  "llm-single-cell": {
    overview: "This project explores how single-cell expression profiles can be represented as language-like sequences. A compact Cell2Sentence-style demo shows how biological foundation models and local language models can support cellular reasoning.",
    highlights: [
      "Encodes gene-expression profiles into sentence-like representations.",
      "Explores cell-type annotation and perturbation-response prediction.",
      "Provides a small training example for understanding the architecture from first principles."
    ]
  },
  gpt2: {
    overview: "Reproducing GPT-2 is a from-scratch exercise in building and training the 124M-parameter transformer. The project focuses on understanding the engineering decisions behind tokenization, attention, optimization, and autoregressive generation.",
    highlights: [
      "Implements the GPT-2 transformer architecture from foundational components.",
      "Builds a practical training pipeline on a real text dataset.",
      "Develops intuition for model scaling, optimization, and text generation."
    ]
  }
};

const publications = [
  {
    theme: "Conference",
    year: "2025",
    title: "Unlocking Biological Insights Through AI-driven Multi-Omics Integration",
    detail: "Spanish Drug Discovery Network Conference 2025 · Poster presentation",
    link: "https://www.sddn.es/poster/unlocking-biological-insights-thro/"
  },
  {
    theme: "Oncology",
    year: "2024",
    title: "The value of subcutaneous xenografts for individualised radiotherapy in HNSCC: Robust gene signature correlates with radiotherapy outcome in patients and xenografts",
    detail: "Radiotherapy and Oncology · Volume 191, 110055",
    link: "https://www.sciencedirect.com/science/article/pii/S0167814023093623"
  },
  {
    theme: "Oncology",
    year: "2024",
    title: "ALDH1A1 drives prostate cancer metastases and radioresistance by interplay with AR- and RAR-dependent transcription",
    detail: "Theranostics · 14(2):714-737 · DOI: 10.7150/thno.88057",
    link: "https://www.thno.org/v14p0714.htm"
  },
  {
    theme: "Thesis",
    year: "2022",
    title: "Molecular characterisation of tumours and biomarker identification for personalised radiation oncology using genomic data of patients with locally advanced HNSCC",
    detail: "Doctoral thesis · Technical University of Dresden",
    link: "https://shivaprasad-patil.github.io/publications/"
  },
  {
    theme: "Oncology",
    year: "2022",
    title: "A Novel 2-Metagene Signature to Identify High-Risk HNSCC Patients amongst Those Clinically at Intermediate Risk and Treated with PORT",
    detail: "Cancers · 14(12), 3031 · DOI: 10.3390/cancers14123031",
    link: "https://www.mdpi.com/2072-6694/14/12/3031"
  },
  {
    theme: "Oncology",
    year: "2022",
    title: "Development and validation of a 6-gene signature for loco-regional control in HPV-negative locally advanced HNSCC",
    detail: "Radiotherapy and Oncology · Postoperative radio(chemo)therapy",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167814022001876"
  },
  {
    theme: "Oncology",
    year: "2022",
    title: "Plasticity within aldehyde dehydrogenase-positive cells determines prostate cancer radiosensitivity",
    detail: "Molecular Cancer Research",
    link: "https://shivaprasad-patil.github.io/publications/"
  },
  {
    theme: "Oncology",
    year: "2022",
    title: "Analyses of molecular subtypes and their association to mechanisms of radioresistance in HPV-negative HNSCC",
    detail: "Radiotherapy and Oncology",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0167814022000032"
  },
  {
    theme: "Virology",
    year: "2020",
    title: "Assessing the in vitro resistance development in Enterovirus 71 in the context of combination antiviral treatment",
    detail: "ACS Infectious Diseases",
    link: "https://shivaprasad-patil.github.io/publications/"
  },
  {
    theme: "Virology",
    year: "2019",
    title: "The Role of the Virome in the Gut-Liver Axis",
    detail: "Book chapter · The Human Gut-Liver-Axis in Health and Disease · Springer, Cham",
    link: "https://shivaprasad-patil.github.io/publications/"
  },
  {
    theme: "Thesis",
    year: "2015",
    title: "Male calling and spacing in natural chorus of Platygryllus sp.: implications for masking interference and mate choice",
    detail: "Master's thesis",
    link: "https://shivaprasad-patil.github.io/publications/"
  }
];

const books = [
  { category: "Technical", title: "Deep Learning from Scratch", author: "Seth Weidman", link: "https://www.oreilly.com/library/view/deep-learning-from/9781492041405/" },
  { category: "Technical", title: "Fundamentals of Deep Learning", author: "Nithin Buduma, Nikhil Buduma, Joe Papa", link: "https://www.oreilly.com/library/view/fundamentals-of-deep/9781492082170/" },
  { category: "Technical", title: "Deep Learning for the Life Sciences", author: "Bharath Ramsundar, Peter Eastman, Pat Walters, Vijay Pande", link: "https://www.oreilly.com/library/view/deep-learning-for/9781492039822/" },
  { category: "Technical", title: "Python Data Science Handbook", author: "Jake VanderPlas", link: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
  { category: "Technical", title: "Beyond the Basic Stuff with Python", author: "Al Sweigart", link: "https://nostarch.com/beyond-basic-stuff-python" },
  { category: "Technical", title: "Automate the Boring Stuff with Python", author: "Al Sweigart", link: "https://automatetheboringstuff.com/" },
  { category: "Technical", title: "Biological Data Exploration with Python, Pandas and Seaborn", author: "Dr. Martin Jones", link: "https://pythonforbiologists.com/biological-data-exploration-book.html" },
  { category: "Non-technical", title: "Steve Jobs", author: "Walter Isaacson", link: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537" },
  { category: "Non-technical", title: "Einstein: His Life and Universe", author: "Walter Isaacson", link: "https://www.amazon.com/Einstein-Life-Universe-Walter-Isaacson/dp/0743264746" },
  { category: "Non-technical", title: "Elon Musk", author: "Walter Isaacson", link: "https://www.amazon.com/Elon-Musk-Walter-Isaacson/dp/1982181281" },
  { category: "Non-technical", title: "The Code Breaker", author: "Walter Isaacson", link: "https://www.amazon.com/Code-Breaker-Jennifer-Doudna-Editing/dp/1982115858" },
  { category: "Non-technical", title: "Invent and Wander", author: "Jeff Bezos and Walter Isaacson", link: "https://www.amazon.com/Invent-Wander-Collected-Writings-Introduction/dp/1647820715" },
  { category: "Non-technical", title: "Atomic Habits", author: "James Clear", link: "https://jamesclear.com/atomic-habits" }
];

const timeline = [
  {
    date: "10/2024 - Present",
    role: "Associate Director, Predictive AI & Bioinformatics",
    place: "AstraZeneca · Barcelona",
    bullets: [
      "Developing predictive AI and bioinformatics pipelines to translate omics and imaging data into mechanistic insights.",
      "Building multi-omics workflows to refine toxicity predictions and accelerate candidate prioritization.",
      "Designing AI models to extract predictive morphology from Cell Painting for safety decisions.",
      "Advancing proteomics-driven models to improve compound selection in early discovery."
    ]
  },
  {
    date: "07/2022 - 09/2024",
    role: "Scientific Investigator - Human Genetics & Genomics",
    place: "GSK · Heidelberg",
    bullets: [
      "Integrated bulk and single-cell multi-omics to uncover biological mechanisms across programs.",
      "Performed post-hoc analyses of clinical trial data to inform precision medicine strategies.",
      "Built translational modeling frameworks linking iPSC-derived Alzheimer's models with multi-omics data to characterize disease progression.",
      "Identified molecular subtypes and translational signatures that enabled indication expansion."
    ]
  },
  {
    date: "06/2019 - 06/2022",
    role: "Bioinformatician & ML Researcher",
    place: "National Center for Radiation Research in Oncology - University Hospital Dresden",
    bullets: [
      "Predicted patient prognosis in head and neck squamous cell carcinoma across 8 cohorts (1,500 patients).",
      "Applied statistical and machine learning methods to identify biomarkers for personalized radiation oncology.",
      "Enabled patient selection for prospective clinical trials with multidisciplinary teams.",
      "Delivered 50+ poster and oral presentations and served as a reviewer for Radiotherapy & Oncology."
    ]
  },
  {
    date: "08/2017 - 09/2018",
    role: "Bioinformatics Research Associate",
    place: "Katholieke Universiteit Leuven · Belgium",
    bullets: [
      "Built a pipeline for viral metagenomic analysis and assembled a catalog of 3,000 viral genes and proteins.",
      "Identified biomarkers for early diagnosis of liver fibrosis in a cohort of 200 patients."
    ]
  },
  {
    date: "2015 - 07/2017",
    role: "Bioinformatician",
    place: "Institute of Genomics & Integrative Biology · New Delhi, India",
    bullets: [
      "Identified and annotated 60,000+ novel circular RNAs across 38 datasets.",
      "Contributed to a multi-center project with 280 clinicians and researchers across 60 centers, advancing exome sequencing for rare disease.",
      "Advanced variant prioritization and non-coding RNA studies for gene regulation insights."
    ]
  }
];

const skills = [
  "Python", "R", "PyTorch", "TensorFlow", "Nextflow", "Docker",
  "bulk RNA-seq", "single-cell omics", "spatial transcriptomics", "proteomics",
  "multi-omics integration", "generative models", "representation learning",
  "model interpretability", "causal inference", "biomarker discovery"
];

const projectGrid = document.querySelector("#projectGrid");
const selectedProjectGrid = document.querySelector("#selectedProjectGrid");
const filters = document.querySelector("#projectFilters");
const search = document.querySelector("#projectSearch");
const dialog = document.querySelector("#projectDialog");
const dialogContent = document.querySelector("#dialogContent");
const dialogClose = document.querySelector("#dialogClose");
const publicationTabs = document.querySelector("#publicationTabs");
const publicationList = document.querySelector("#publicationList");
const technicalBookGrid = document.querySelector("#technicalBookGrid");
const nonTechnicalBookGrid = document.querySelector("#nonTechnicalBookGrid");
const timelineNode = document.querySelector("#timeline");
const skillsNode = document.querySelector("#skills");
const themeToggle = document.querySelector("#themeToggle");
const projectPostContent = document.querySelector("#projectPostContent");
const projectCount = document.querySelector("#projectCount");
const randomProjectButton = document.querySelector("#randomProjectButton");
const readingProgress = document.querySelector("#readingProgress span");
const scienceScene = document.querySelector("#scienceScene");
const viewPanels = [...document.querySelectorAll("[data-view-panel]")];
const viewLinks = [...document.querySelectorAll(".nav a")];

let activeCategory = "All";
let activePublication = "All";

function categoryList() {
  return ["All", ...new Set(projects.map((project) => project.category))];
}

function renderFilters() {
  filters.innerHTML = categoryList().map((category) => `
    <button class="${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function projectCard(project) {
  const visual = project.image
    ? `<img src="${project.image}" alt="${project.title} infographic" loading="lazy">`
    : `<div class="project-placeholder" aria-label="${project.title} methods overview">
        <strong>${project.title}</strong>
        <div>${project.methods.slice(0, 3).map((method) => `<span>${method}</span>`).join("")}</div>
      </div>`;

  return `
    <article class="project-card reveal-item">
      <a class="project-visual-link" href="/projects/${project.id}/" aria-label="Read ${project.title} project page">
        ${visual}
      </a>
      <div class="project-card-body">
        <div class="project-meta"><span class="chip">${project.category}</span><span>${project.date}</span></div>
        <h3><a href="/projects/${project.id}/">${project.title}</a></h3>
        <p>${project.summary}</p>
        <div class="project-card-actions">
          <button type="button" data-project-id="${project.id}">Quick view</button>
          <a href="/projects/${project.id}/">Read post</a>
          ${project.slides ? `<a href="${project.slides}" target="_blank" rel="noreferrer">Slides</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderSelectedProjects() {
  selectedProjectGrid.innerHTML = projects.filter((project) => project.selected).map(projectCard).join("");
  observeReveals();
}

function renderProjects() {
  const term = search.value.trim().toLowerCase();
  const visible = projects.filter((project) => {
    const haystack = [project.title, project.category, project.summary, ...project.methods].join(" ").toLowerCase();
    const categoryMatch = activeCategory === "All" || project.category === activeCategory;
    return categoryMatch && (!term || haystack.includes(term));
  });

  projectGrid.innerHTML = visible.length
    ? visible.map(projectCard).join("")
    : `<p class="empty-state">No projects match this search.</p>`;
  projectCount.textContent = `${visible.length} project${visible.length === 1 ? "" : "s"}`;
  observeReveals();
}

function renderProjectDialog(project) {
  const visual = project.image
    ? `<img class="dialog-visual" src="${project.image}" alt="${project.title} infographic">`
    : "";

  dialogContent.innerHTML = `
    ${visual}
    <p class="eyebrow">${project.category}</p>
    <h2>${project.title}</h2>
    <p class="muted">${project.date}</p>
    <p>${project.summary}</p>
    <p><strong>Why it matters:</strong> ${project.impact}</p>
    <div class="tag-cloud">${project.methods.map((method) => `<span>${method}</span>`).join("")}</div>
    <div class="dialog-actions">
      <a class="button primary" href="/projects/${project.id}/">Read project post</a>
      ${project.slides ? `<a class="button secondary" href="${project.slides}" target="_blank" rel="noreferrer">View slides</a>` : ""}
      ${project.github ? `<a class="button ghost" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
    </div>
  `;
  dialog.showModal();
}

function renderProjectPost(project) {
  const post = projectPosts[project.id];
  const visual = project.image
    ? `<img class="project-post-image" src="${project.image}" alt="${project.title} infographic">`
    : `<div class="project-post-diagram">${project.methods.map((method) => `<span>${method}</span>`).join("")}</div>`;

  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];
  const related = projects
    .filter((item) => item.id !== project.id && item.category === project.category)
    .slice(0, 2);

  projectPostContent.innerHTML = `
    <header class="project-post-header">
      <div>
        <p class="eyebrow">${project.category} · ${project.date}</p>
        <h1>${project.title}</h1>
        <p class="project-post-lede">${project.summary}</p>
        <div class="dialog-actions">
          ${project.slides ? `<a class="button secondary" href="${project.slides}" target="_blank" rel="noreferrer">View slides</a>` : ""}
          ${project.github ? `<a class="button ghost" href="${project.github}" target="_blank" rel="noreferrer">GitHub repository</a>` : ""}
        </div>
      </div>
      ${visual}
    </header>
    <div class="project-post-body">
      <section>
        <p class="eyebrow">Overview</p>
        <h2>About the project</h2>
        <p>${post.overview}</p>
      </section>
      <section>
        <p class="eyebrow">Highlights</p>
        <h2>What it delivers</h2>
        <ul>${post.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
      </section>
      <section>
        <p class="eyebrow">Methods</p>
        <h2>Technical focus</h2>
        <div class="tag-cloud">${project.methods.map((method) => `<span>${method}</span>`).join("")}</div>
        <p class="project-impact"><strong>Why it matters:</strong> ${project.impact}</p>
      </section>
    </div>
    ${related.length ? `
      <section class="related-projects reveal-item">
        <div>
          <p class="eyebrow">Keep exploring</p>
          <h2>Related projects</h2>
        </div>
        <div class="related-grid">${related.map((item) => `
          <a href="/projects/${item.id}/">
            <span>${item.category}</span>
            <strong>${item.title}</strong>
            <small>${item.summary}</small>
          </a>
        `).join("")}</div>
      </section>
    ` : ""}
    <nav class="project-pagination" aria-label="Project navigation">
      <a href="/projects/${previous.id}/"><span>Previous project</span><strong>${previous.title}</strong></a>
      <a href="/projects/${next.id}/"><span>Next project</span><strong>${next.title}</strong></a>
    </nav>
  `;
  observeReveals();
}

function renderPublications() {
  const themes = ["All", ...new Set(publications.map((publication) => publication.theme))];
  publicationTabs.innerHTML = themes.map((theme) => `
    <button class="${theme === activePublication ? "active" : ""}" type="button" data-theme-tab="${theme}">
      ${theme}
    </button>
  `).join("");

  publicationList.innerHTML = publications
    .filter((publication) => activePublication === "All" || publication.theme === activePublication)
    .map((publication) => `
      <article class="publication-card">
        <strong>${publication.year}</strong>
        <div>
          <p class="eyebrow">${publication.theme}</p>
          <h3><a href="${publication.link}" target="_blank" rel="noreferrer">${publication.title}</a></h3>
          <p>${publication.detail}</p>
        </div>
      </article>
    `).join("");
}

function renderBooks() {
  function bookCards(category) {
    return books
      .filter((book) => book.category === category)
      .map((book, index) => `
      <article class="book-card">
        <span class="book-number">${String(index + 1).padStart(2, "0")}</span>
        <div>
          <p class="eyebrow">${book.category}</p>
          <h3>${book.title}</h3>
          <p>${book.author}</p>
        </div>
        <a href="${book.link}" target="_blank" rel="noreferrer" aria-label="View ${book.title}">View book</a>
      </article>
    `).join("");
  }

  technicalBookGrid.innerHTML = bookCards("Technical");
  nonTechnicalBookGrid.innerHTML = bookCards("Non-technical");
}

function renderTimeline() {
  timelineNode.innerHTML = timeline.map((item) => `
    <article class="timeline-item">
      <div>
        <p class="timeline-date">${item.date}</p>
        <p class="muted">${item.place}</p>
      </div>
      <div>
        <h3>${item.role}</h3>
        <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  skillsNode.innerHTML = skills.map((skill) => `<span>${skill}</span>`).join("");
}

function restoreTheme() {
  const stored = localStorage.getItem("portfolio-theme");
  if (stored) document.documentElement.dataset.theme = stored;
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
}

let revealObserver;

function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-item").forEach((item) => item.classList.add("revealed"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal-item:not(.revealed)").forEach((item) => revealObserver.observe(item));
}

function updateReadingProgress() {
  if (!document.body.classList.contains("project-reading")) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
  readingProgress.style.width = `${percent}%`;
}

async function initScienceScene() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const constrainedDevice = window.matchMedia("(max-width: 620px)").matches || navigator.connection?.saveData;
  if (!scienceScene || reducedMotion || constrainedDevice) {
    if (scienceScene) scienceScene.hidden = true;
    return;
  }
  try {
    const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.178.0/build/three.module.js");
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    scienceScene.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 10);
    const structure = new THREE.Group();
    scene.add(structure);
    scene.add(new THREE.AmbientLight(0xffffff, 1.7));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(4, 6, 8);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x6ed8ff, 1.5);
    rimLight.position.set(-5, -2, -4);
    scene.add(rimLight);

    const colors = {
      teal: 0x21b6a8,
      rose: 0xe45883,
      amber: 0xf3ad35,
      blue: 0x4588e6,
      violet: 0x8b66d9,
      lime: 0x74b84b
    };
    const floatingCells = [];

    function clearStructure() {
      structure.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      structure.clear();
      structure.rotation.set(0, 0, 0);
    }

    function cylinderBetween(start, end, radius, color, opacity = 1) {
      const direction = new THREE.Vector3().subVectors(end, start);
      const geometry = new THREE.CylinderGeometry(radius, radius, direction.length(), 10);
      const material = new THREE.MeshStandardMaterial({ color, transparent: opacity < 1, opacity });
      const cylinder = new THREE.Mesh(geometry, material);
      cylinder.position.copy(start).add(end).multiplyScalar(0.5);
      cylinder.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
      structure.add(cylinder);
    }

    function buildDNA() {
      const sphereGeometry = new THREE.SphereGeometry(0.2, 18, 18);
      const strandA = new THREE.MeshStandardMaterial({ color: colors.teal, roughness: 0.28, metalness: 0.12 });
      const strandB = new THREE.MeshStandardMaterial({ color: colors.rose, roughness: 0.28, metalness: 0.12 });
      for (let index = 0; index < 34; index += 1) {
        const angle = (index / 33) * Math.PI * 4.5;
        const y = -3.4 + (index / 33) * 6.8;
        const first = new THREE.Vector3(Math.cos(angle) * 1.5, y, Math.sin(angle) * 1.5);
        const second = new THREE.Vector3(Math.cos(angle + Math.PI) * 1.5, y, Math.sin(angle + Math.PI) * 1.5);
        const beadA = new THREE.Mesh(sphereGeometry, strandA);
        const beadB = new THREE.Mesh(sphereGeometry, strandB);
        beadA.position.copy(first);
        beadB.position.copy(second);
        structure.add(beadA, beadB);
        if (index % 2 === 0) cylinderBetween(first, second, 0.045, index % 4 === 0 ? colors.amber : colors.blue, 0.85);
      }
      structure.rotation.z = 0.2;
    }

    function buildProtein() {
      const points = Array.from({ length: 18 }, (_, index) => {
        const t = index / 17;
        return new THREE.Vector3(
          Math.sin(t * Math.PI * 5.2) * (1.5 + Math.cos(t * Math.PI * 3) * 0.45),
          (t - 0.5) * 6.4,
          Math.cos(t * Math.PI * 4.2) * 1.35 + Math.sin(t * Math.PI * 7) * 0.35
        );
      });
      const curve = new THREE.CatmullRomCurve3(points);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 180, 0.2, 12, false),
        new THREE.MeshStandardMaterial({ color: colors.violet, roughness: 0.3, metalness: 0.16 })
      );
      structure.add(tube);
      const residueGeometry = new THREE.SphereGeometry(0.28, 18, 18);
      [0.08, 0.2, 0.33, 0.48, 0.62, 0.78, 0.92].forEach((position, index) => {
        const residue = new THREE.Mesh(
          residueGeometry,
          new THREE.MeshStandardMaterial({ color: [colors.amber, colors.rose, colors.blue, colors.lime][index % 4] })
        );
        residue.position.copy(curve.getPoint(position));
        structure.add(residue);
      });
      structure.rotation.z = Math.PI / 2.2;
    }

    function buildAI() {
      const layerCounts = [5, 7, 7, 4];
      const layerColors = [colors.blue, colors.violet, colors.teal, colors.amber];
      const layers = layerCounts.map((count, layerIndex) => Array.from({ length: count }, (_, nodeIndex) => {
        const x = -3.3 + layerIndex * 2.2;
        const y = (nodeIndex - (count - 1) / 2) * 0.82;
        const z = Math.sin(nodeIndex * 1.7 + layerIndex) * 0.45;
        const position = new THREE.Vector3(x, y, z);
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(layerIndex === 3 ? 0.3 : 0.23, 18, 18),
          new THREE.MeshStandardMaterial({ color: layerColors[layerIndex], roughness: 0.24, metalness: 0.2 })
        );
        node.position.copy(position);
        structure.add(node);
        return position;
      }));

      for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex += 1) {
        layers[layerIndex].forEach((source, sourceIndex) => {
          layers[layerIndex + 1].forEach((target, targetIndex) => {
            if ((sourceIndex + targetIndex) % 2 !== 0) return;
            const geometry = new THREE.BufferGeometry().setFromPoints([source, target]);
            const line = new THREE.Line(
              geometry,
              new THREE.LineBasicMaterial({ color: layerColors[layerIndex], transparent: true, opacity: 0.28 })
            );
            structure.add(line);
          });
        });
      }
    }

    function buildCells() {
      const positions = [
        [-5.2, 2.7, -1.8, 0.62], [-3.9, -2.8, -2.6, 0.82], [-1.8, 3.1, -3.1, 0.48],
        [1.8, -3.0, -2.2, 0.72], [3.8, 2.3, -3.6, 0.55], [4.8, -1.1, -2.8, 0.42]
      ];
      positions.forEach(([x, y, z, scale], index) => {
        const cell = new THREE.Group();
        const membrane = new THREE.Mesh(
          new THREE.SphereGeometry(scale, 28, 28),
          new THREE.MeshStandardMaterial({
            color: [colors.blue, colors.violet, colors.lime][index % 3],
            transparent: true,
            opacity: 0.22,
            roughness: 0.18,
            metalness: 0.08
          })
        );
        const nucleus = new THREE.Mesh(
          new THREE.SphereGeometry(scale * 0.36, 20, 20),
          new THREE.MeshStandardMaterial({ color: colors.rose, transparent: true, opacity: 0.58 })
        );
        nucleus.position.set(scale * 0.16, -scale * 0.08, scale * 0.1);
        cell.add(membrane, nucleus);
        cell.position.set(x, y, z);
        cell.userData = { baseY: y, phase: index * 0.9, speed: 0.55 + index * 0.07 };
        floatingCells.push(cell);
        structure.add(cell);
      });
    }

    function resizeScene() {
      const width = scienceScene.clientWidth || 900;
      const height = scienceScene.clientHeight || Math.max(500, Math.min(760, width * 0.66));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    }

    buildDNA();
    buildCells();
    structure.position.set(2.7, 0, -1.8);
    structure.scale.setScalar(0.82);
    resizeScene();
    new ResizeObserver(resizeScene).observe(scienceScene);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const clock = new THREE.Clock();
      function animate() {
        const elapsed = clock.getElapsedTime();
        structure.rotation.y += 0.0014;
        floatingCells.forEach((cell) => {
          cell.position.y = cell.userData.baseY + Math.sin(elapsed * cell.userData.speed + cell.userData.phase) * 0.24;
          cell.rotation.y = elapsed * 0.12 + cell.userData.phase;
        });
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
    }
  } catch (error) {
    scienceScene.hidden = true;
  }
}

function showView() {
  const requested = window.location.hash.slice(1);
  const projectId = requested.startsWith("project/") ? requested.slice("project/".length) : "";
  const project = projects.find((item) => item.id === projectId);
  const view = project
    ? "project"
    : viewPanels.some((panel) => panel.dataset.viewPanel === requested) ? requested : "about";

  if (project) renderProjectPost(project);
  if (dialog.open) dialog.close();
  document.body.classList.toggle("project-reading", Boolean(project));
  readingProgress.style.width = "0%";

  viewPanels.forEach((panel) => {
    panel.hidden = panel.dataset.viewPanel !== view;
  });

  viewLinks.forEach((link) => {
    const activeView = view === "project" ? "projects" : view;
    const isActive = link.getAttribute("href") === `#${activeView}`;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  const viewTitles = {
    about: "Shivaprasad Patil, PhD | Predictive AI and Bioinformatics",
    projects: "AI and Bioinformatics Projects | Shivaprasad Patil, PhD",
    publications: "Research Publications | Shivaprasad Patil, PhD",
    books: "Recommended Books | Shivaprasad Patil, PhD",
    experience: "Bioinformatics and AI Experience | Shivaprasad Patil, PhD",
    education: "Education | Shivaprasad Patil, PhD",
    contact: "Contact Shivaprasad Patil, PhD"
  };
  document.title = project ? `${project.title} | Shivaprasad Patil, PhD` : viewTitles[view];
  window.scrollTo({ top: 0, behavior: "auto" });
  requestAnimationFrame(updateReadingProgress);
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderProjects();
});

function openProjectFromEvent(event) {
  const button = event.target.closest("button[data-project-id]");
  if (!button) return;
  renderProjectDialog(projects.find((project) => project.id === button.dataset.projectId));
}

projectGrid.addEventListener("click", openProjectFromEvent);
selectedProjectGrid.addEventListener("click", openProjectFromEvent);

publicationTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-theme-tab]");
  if (!button) return;
  activePublication = button.dataset.themeTab;
  renderPublications();
});

search.addEventListener("input", renderProjects);
dialogClose.addEventListener("click", () => dialog.close());
themeToggle.addEventListener("click", toggleTheme);
randomProjectButton.addEventListener("click", () => {
  const project = projects[Math.floor(Math.random() * projects.length)];
  window.location.href = `/projects/${project.id}/`;
});
window.addEventListener("hashchange", showView);
window.addEventListener("scroll", updateReadingProgress, { passive: true });

restoreTheme();
renderFilters();
renderSelectedProjects();
renderProjects();
renderPublications();
renderBooks();
renderTimeline();
renderSkills();
showView();
if ("requestIdleCallback" in window) {
  window.requestIdleCallback(initScienceScene, { timeout: 1600 });
} else {
  window.setTimeout(initScienceScene, 400);
}
