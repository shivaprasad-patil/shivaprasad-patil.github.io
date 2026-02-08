---
title: "BulkRNA-Agent: AI-Powered Transcriptomics Analysis."
collection: projects
excerpt: "Open-source AI tool combining dual LLM architecture for intelligent bulk RNA-seq analysis with 100% local processing."
infographic_url: '/files/BulkRNA_Agent_infographic.png'
slides_url: '/files/BulkRNA-Agent.pdf'
date: 2026-01-17
github: "https://github.com/shivaprasad-patil/BulkRNA-Agent"
classes: project-detail
header:
  teaser: /images/bulkrna-agent-thumb.png
---

## Introducing BulkRNA-Agent: AI-Powered Transcriptomics Analysis Made Easy 🧬🤖

<div class="project-callout">
  <p><strong>TL;DR:</strong> BulkRNA-Agent is a free, open-source tool that combines artificial intelligence with traditional bioinformatics to revolutionize bulk RNA-seq analysis. With dual LLM architecture, interactive visualizations, and 100% local processing, it's designed for researchers who want powerful insights without compromising data privacy.</p>
</div>

<div class="project-divider"></div>

### The Problem with Traditional RNA-seq Analysis 😓

If you've ever analyzed bulk RNA-seq data, you know the pain points:

- **Steep Learning Curve**: R, Bioconductor, command-line tools... the barrier to entry is high
- **Fragmented Workflow**: Jump between multiple tools for QC, DE analysis, and enrichment
- **Design Complexity**: Choosing the right design formula feels like navigating a maze
- **Interpretation Challenges**: You get a list of differentially expressed genes... now what?

### Enter BulkRNA-Agent 🚀

BulkRNA-Agent is my answer to these challenges. It's an AI-powered tool that brings intelligence to every step of the RNA-seq analysis pipeline.

#### 🎯 What Makes It Unique?

#### 1. **Dual LLM Architecture**
Unlike other tools, BulkRNA-Agent uses TWO specialized language models:
- **Reasoning Model (gpt-oss:20b)**: Handles tool selection, analysis planning, and statistical decisions
- **Biomedical Model (biomistral)**: Provides expert interpretation of gene functions, pathways, and biological context

This dual approach ensures you get both computational accuracy AND biological insight.

#### 2. **AI-Powered Design Suggestions** 🧠
Stuck on what design formula to use? The agent analyzes your metadata and suggests optimal designs with explanations. No more guesswork!

#### 3. **Complete Pipeline in One Place**
```
Upload Data → QC → Differential Expression → Enrichment → Chat with Your Results
```
Everything flows seamlessly in an intuitive web interface.

#### 4. **Privacy First** 🔒
Your data never leaves your machine. Everything runs locally using Ollama, so sensitive patient data stays secure.

<div class="project-divider"></div>

### Key Features ✨

#### 🔬 Quality Control
- Automated low-count filtering
- PCA visualization
- Comprehensive RNAseqQC plots:
  - Total sample counts
  - Library complexity
  - Variance stabilization
  - Sample clustering heatmaps
  - Multi-PC scatter plots

#### 📊 Differential Expression Analysis
- Powered by DESeq2 and PyDESeq2
- Interactive volcano and MA plots
- Automatic normalization
- Support for complex experimental designs
- Clear visualization of top genes

#### 🧬 Enrichment Analysis
- GO (Biological Process, Molecular Function, Cellular Component)
- KEGG pathways
- Reactome pathways
- Automatic analysis with adjusted p-values

#### 💬 AI Chat Interface
Ask questions like:
- "What are the main biological processes affected?"
- "Explain the function of gene XYZ"
- "Why might this pathway be enriched?"

The agent provides context-aware, intelligent responses!

<div class="project-divider"></div>

### How It Works 🛠️

#### Installation (3 Steps!)

```bash
# 1. Install Ollama and models
ollama pull gpt-oss:20b
ollama pull cniongolo/biomistral

# 2. Clone and install
git clone https://github.com/shivaprasad-patil/BulkRNA-Agent.git
cd BulkRNA-Agent
./install.sh

# 3. Launch!
./start.sh
```

Open your browser to `http://localhost:7860` and you're ready to go!

#### Example Workflow

**Step 1: Upload Your Data** 📁
- Count matrix (genes × samples)
- Sample metadata (conditions, treatments, etc.)

**Step 2: Quality Control** ✅
The agent filters low-count genes and generates QC plots to ensure data quality.

**Step 3: Get Design Suggestions** 💡
The AI analyzes your metadata and suggests:
```
~ condition + batch
~ treatment * genotype
~ 0 + group
```
With explanations for each!

**Step 4: Run Differential Expression** 📈
One click, and you get:
- Normalized counts
- Statistical results for all contrasts
- Interactive volcano and MA plots
- List of significant genes

**Step 5: Enrichment Analysis** 🎯
Automatically runs GO, KEGG, and Reactome analysis on your significant genes.

**Step 6: Chat for Insights** 💬
Ask the AI questions about your results and get intelligent, context-aware answers.

---

### Real-World Use Cases 🌍

#### 🧪 **Academic Research**
- Compare treated vs control samples
- Identify affected pathways
- Generate publication-ready figures

#### 💊 **Drug Discovery**
- Screen compound effects on gene expression
- Identify potential drug targets
- Understand mechanism of action

#### 🎓 **Education**
- Teach RNA-seq analysis concepts
- Hands-on learning without coding barriers
- Immediate visual feedback

#### 🏥 **Clinical Research**
- Analyze patient samples
- Identify disease signatures
- Privacy-preserving local analysis

---

### Technical Highlights 🔧

- **Built with**: Python, Gradio, Ollama, DESeq2, PyDESeq2, RNAseqQC
- **Architecture**: ReAct agent framework with tool selection
- **License**: MIT (completely free!)
- **Platform**: macOS, Linux (Windows via WSL)
- **Requirements**: Python 3.9+, R (optional), Ollama

---

### What's Next? 🔮

I'm actively developing new features:
- 📦 Docker container for easier deployment
- 📄 PDF report generation
- 🔬 Support for more organisms
- ⚡ Performance optimizations
- 🎨 More visualization options

**Want to contribute?** Check out the [Contributing Guide](https://github.com/shivaprasad-patil/BulkRNA-Agent/blob/main/CONTRIBUTING.md)!

---

### Try It Today! 🎉
🔗 **GitHub**: [BulkRNA-Agent](https://github.com/shivaprasad-patil/BulkRNA-Agent)  
🎥 **Demo Video**: Watch it in action  
📚 **Documentation**: Complete guides and tutorials included  

Whether you're a seasoned bioinformatician or just starting with RNA-seq analysis, BulkRNA-Agent makes transcriptomics accessible, intelligent, and secure.

---

### Join the Community! 🤝

Have questions? Found a bug? Want to request a feature?

- 🐛 Open an issue on GitHub
- ⭐ Star the repository if you find it useful
- 🔄 Share with colleagues who might benefit

---

**What challenges do you face in RNA-seq analysis? How could AI make your research easier? Drop a comment below!** 👇

#Bioinformatics #RNAseq #ArtificialIntelligence #MachineLearning #Genomics #DataScience #OpenSource #Transcriptomics #ComputationalBiology #AIinScience #ResearchTools #LLM #BioTech #ScienceAndTechnology

---

*BulkRNA-Agent - Bringing AI to Transcriptomics, One Analysis at a Time* 🧬🤖
