---
title: "ScAdver: Adversarial Batch Correction for Single-Cell Data"
collection: projects
excerpt: "Train once, project forever: Adversarial batch correction for single-cell RNA-seq that preserves biology while removing batch effects with fast inference (<1s per query batch)."
date: 2025-08-30
github: "https://github.com/shivaprasad-patil/ScAdver"
header:
  teaser: /images/scadver-thumb.png
---

# 🧬 ScAdver — Adversarial Batch Correction for Single-Cell Data

Adversarial batch correction for single-cell RNA-seq data that **preserves biology while removing batch effects**. Train once on reference data, then project unlimited query batches with sub-second inference.

## 🎯 Key Features

- ✅ **Train once, project forever**: Save trained model and process unlimited query batches
- ⚡ **Fast inference**: < 1 second per query batch (no retraining required)
- 🎯 **Biology preserved**: Cell types and biological variation maintained
- 🔄 **Batch-free**: Technical variation and protocol effects removed
- 🖥️ **Multi-device**: Supports CPU, CUDA, and Apple Silicon (MPS)
- 🔬 **Advanced adaptation**: Residual adapters for large domain shifts

---

## ⚡ Installation

```bash
pip install git+https://github.com/shivaprasad-patil/ScAdver.git
```

---

## 🚀 Quick Start

### Basic Usage

```python
import scanpy as sc
from scadver import adversarial_batch_correction

# Load data
adata = sc.read("your_data.h5ad")

# Run batch correction
adata_corrected, model, metrics = adversarial_batch_correction(
    adata=adata,
    bio_label='celltype',
    batch_label='batch',
    epochs=500
)

# Visualize
sc.pp.neighbors(adata_corrected, use_rep='X_ScAdver')
sc.tl.umap(adata_corrected)
sc.pl.umap(adata_corrected, color=['celltype', 'batch'])
```

### Incremental Query Processing

Train once on reference, then project unlimited query batches without retraining:

```python
import torch
from scadver import adversarial_batch_correction, transform_query

# Step 1: Train on reference (once)
adata_ref_corrected, model, metrics = adversarial_batch_correction(
    adata=adata_reference,
    bio_label='celltype',
    batch_label='tech',
    epochs=500
)

# Step 2: Save model
torch.save(model.state_dict(), 'scadver_model.pt')

# Step 3: Project query batches (< 1 second each)
adata_query1 = transform_query(model, adata_query_batch1)
adata_query2 = transform_query(model, adata_query_batch2)
# ... unlimited batches

# Step 4: Combine and analyze
adata_all = sc.concat([adata_ref_corrected, adata_query1, adata_query2])
sc.pp.neighbors(adata_all, use_rep='X_ScAdver')
sc.tl.umap(adata_all)
```

**Benefits**: 1000x faster than retraining • Consistent embeddings • Scalable to unlimited queries

### Advanced: Adaptive Query Processing 🔬

For large domain shifts (e.g., different protocols/technologies), use adaptive projection with residual adapters:

```python
from scadver import transform_query_adaptive

adata_query_adapted = transform_query_adaptive(
    model=model,
    adata_query=adata_query,
    adata_reference=adata_reference[:500],
    bio_label='celltype',
    adapter_dim=128,
    adaptation_epochs=50
)
```

**When to use**:
- ✅ Large technology differences (e.g., 10X → Smart-seq2)
- ✅ Query-specific adaptations needed
- ✅ Quality > Speed

---

## 🛠️ How It Works

The encoder learns to:
- ✅ **Keep biological patterns** (via bio-classifier)
- ❌ **Remove batch patterns** (via adversarial discriminator)

Once trained, the frozen encoder automatically applies this transformation to new data—no retraining needed.

---

## 📄 Output

- **Latent embeddings**: `adata.obsm['X_ScAdver']` (256-dimensional, batch-corrected)
- **Reconstructed expression**: `adata.layers['ScAdver_reconstructed']` (optional)
- **Metrics**: Biology preservation, batch correction, overall score

---

## 📚 Documentation

- [QUICK_SUMMARY.md](https://github.com/shivaprasad-patil/ScAdver/blob/main/QUICK_SUMMARY.md) - Overview of the mechanism
- [ENCODER_MECHANISM_EXPLAINED.md](https://github.com/shivaprasad-patil/ScAdver/blob/main/ENCODER_MECHANISM_EXPLAINED.md) - Technical details
- [RESIDUAL_ADAPTER.md](https://github.com/shivaprasad-patil/ScAdver/blob/main/RESIDUAL_ADAPTER.md) - Residual adapter for domain adaptation
- **Interactive Notebooks**:
  - [Incremental Query Notebook](https://github.com/shivaprasad-patil/ScAdver/blob/main/examples/incremental_query_notebook.ipynb)
  - [Adaptive Query Notebook](https://github.com/shivaprasad-patil/ScAdver/blob/main/examples/adaptive_query_notebook.ipynb)

---

**📂 GitHub Repository:** [ScAdver](https://github.com/shivaprasad-patil/ScAdver)  