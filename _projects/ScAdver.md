---
title: "ScAdver: Adversarial Batch Correction for Single-Cell Data 🚀"
collection: projects

date: 2025-08-30
github: "https://github.com/shivaprasad-patil/ScAdver"
---

---
# 🧬 **ScAdver** — Adversarial Batch Correction for Single-Cell Data  

ScAdver is a **lightweight Python package** for **adversarial batch correction** in single-cell data 🧪.  
It offers a **compact, well-documented pipeline** with core modules:  
`scadver.core` & `scadver.model` 📦 — plus an **example workflow** (`pancreas_example.py`) and **UMAP visualizations** so you can reproduce results in minutes ⏱️.  

💡 **Focus:** Reference-only training + adversarial learning to **remove technical batch effects** while **preserving biological signal**.  

---

![🔬 Project Workflow](/files/ScAdver_workflow_diagram.png)

## 🚀 **Key Features**
- 🗂 **Reference-only training** & query mapping — no query data leakage during training.  
- 🛡 **Adversarial batch discriminator** — reduces batch-specific signals.  
- 🧩 **Biology classifier** — preserves cell-type structure.  
- 📜 **Example scripts & figures** — end-to-end reproducibility.  
- 📦 **PyPI-style packaging** with `setup.py` & open-source LICENSE.  

---

## ⚡ **Quick Install**
```bash
git clone https://github.com/shivaprasad-patil/ScAdver.git
cd ScAdver
pip install .
```

---

## 🏁 **Getting Started**
1. ▶ **Run the example** to reproduce the pancreas correction workflow:  
   ```bash
   python examples/pancreas_example.py
   ```
2. 🔍 **Explore the API** in `scadver.core` & `scadver.model` for custom pipelines.  
3. 💾 **Results & embeddings** are saved to **AnnData** `obsm` fields.  
4. 📊 **Example UMAP figures** are included for quick inspection.  

---

## 📜 **License & Contribution**
📂 Released under the repository **LICENSE**.  
💬 Contributions, issues, and ⭐ stars are welcome — open a PR or issue on the [GitHub repo](https://github.com/shivaprasad-patil/ScAdver).  

---

**📂 GitHub Repository:** [ScAdver](https://github.com/shivaprasad-patil/ScAdver)  