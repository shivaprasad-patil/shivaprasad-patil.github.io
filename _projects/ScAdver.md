---
title: "ScAdver: Adversarial Batch Correction for Single-Cell Data"
collection: projects
excerpt: "Train once, project forever batch correction for single-cell RNA-seq with probe-gated adaptive query projection and robust domain adaptation."
infographic_url: '/files/ScAdver_infographic.png?v=20260419'
slides_url: '/files/ScAdver.pdf?v=20260419'
date: 2026-04-19
github: "https://github.com/shivaprasad-patil/ScAdver"
header:
  teaser: /images/scadver-thumb.png
---

## ScAdver - Adversarial Batch Correction for Single-Cell Data

ScAdver eliminates technical batch effects from single-cell RNA-seq data while preserving biological variation and cell type identity. It follows a **train-once, project-forever** paradigm: train on reference data once, then rapidly project unlimited query batches without retraining.

![ScAdver Workflow](/files/ScAdver_workflow.png?v=20260419)

### Key Features

- **Train once, project forever**: Reuse the trained encoder across any number of query batches.
- **Fully reproducible**: `set_global_seed()` seeds every random operation.
- **Biology preserved**: The adversarial discriminator removes batch effects without touching biological signal.
- **Enhanced residual adapter**: 3-layer adapter with LayerNorm, GELU, unbounded output, and learnable scale.
- **Distribution alignment**: MMD + Moment-Matching + CORAL losses for robust domain adaptation.
- **Probe-gated query projection**: `transform_query_adaptive` uses a raw latent-shift probe plus overlap and support gates to route direct, neighborhood, or neural paths.
- **Multi-device**: CPU, CUDA, and Apple Silicon (MPS).

### Installation

```bash
pip install git+https://github.com/shivaprasad-patil/ScAdver.git
```

### Workflows

#### Workflow 1: All-in-One Batch Correction

Pass all data in a single call. The model trains on everything and returns corrected embeddings and reconstructed expression.

**Use when** all data is available upfront and no new query batches are expected.

```python
from scadver import adversarial_batch_correction
adata_corrected, model, metrics = adversarial_batch_correction(
    adata=adata, bio_label='celltype', batch_label='batch',
    epochs=500, device='auto', return_reconstructed=True, seed=42,
)
```

`seed=42` is sufficient because the function calls `set_global_seed()` internally. Use standalone `set_global_seed(42)` only if you also need to seed preprocessing steps done before the function call.

#### Workflow 2: Reference to Query (Train-Then-Project)

Split data into reference and query yourself, train on reference only, then project query batches automatically. `transform_query_adaptive` encodes query data with the frozen reference model, probes for domain shift, and routes query projection only when needed.

**Use when** query batches arrive over time, come from a different protocol, or you want to deploy a reusable model.

- **[Pancreas walkthrough](https://github.com/shivaprasad-patil/ScAdver/blob/main/examples/ScAdver_pancreas_batch_correction.ipynb)**
- **[Pancreas neural-adapter walkthrough](https://github.com/shivaprasad-patil/ScAdver/blob/main/examples/ScAdver_pancreas_neural_residual_adapter.ipynb)**
- **[PBMC v2/v3 walkthrough](https://github.com/shivaprasad-patil/ScAdver/blob/main/examples/ScAdver_pbmc_batch_correction.ipynb)**

#### Which to choose?

| Scenario | Workflow |
|----------|----------|
| All data available, one-time analysis | **1** - All-in-One |
| Query batches arrive over time | **2** - Train-Then-Project |
| Large protocol shift (e.g. 10X to Smart-seq2) | **2** - adaptive projection |
| Deploying as a service or reusable model | **2** - Train-Then-Project |

### Output

| Key | Description |
|-----|-------------|
| `adata.obsm['X_ScAdver']` | 256-d batch-corrected latent embeddings for UMAP, clustering, and trajectory analysis. |
| `adata.layers['ScAdver_reconstructed']` | Batch-corrected gene expression for DE and gene program analysis. Requires `return_reconstructed=True`. |
| `metrics` | `biology_preservation`, `batch_correction`, and `overall_score`. |

### How It Works

The encoder is trained adversarially:
- A **bio-classifier** pushes the encoder to retain cell-type signal.
- A **batch discriminator** pushes the encoder to discard technical batch signal.

`transform_query_adaptive` uses probe-and-gate routing:
1. Encode query with the frozen reference encoder and compute a raw latent-shift probe.
2. If the raw shift is small (`norm(Δ(z)) <= 0.1`), return direct projection.
3. If the raw shift is larger, shared bio-label coverage is strong, and every shared class has enough cells in both reference and query, use neighborhood residual mode.
4. Otherwise, use the neural adapter path.

| Route | Method |
|-------|--------|
| **Direct projection** | Frozen encoder only when raw shift is small. |
| **Neighborhood residual** | Same-class, assay-balanced neighbor targets with deterministic residual step. |
| **Neural adapter** | `EnhancedResidualAdapter` with adversarial and alignment losses, warmup, early stopping, and a final safeguard. |

### Documentation

- **[ENCODER_MECHANISM_EXPLAINED.md](https://github.com/shivaprasad-patil/ScAdver/blob/main/ENCODER_MECHANISM_EXPLAINED.md)** - Encoder training and projection mechanics.
- **[RESIDUAL_ADAPTER.md](https://github.com/shivaprasad-patil/ScAdver/blob/main/RESIDUAL_ADAPTER.md)** - Residual adapter and adaptation details.
- **[Pancreas notebook](https://github.com/shivaprasad-patil/ScAdver/blob/main/examples/ScAdver_pancreas_batch_correction.ipynb)** - End-to-end walkthrough.
- **[Pancreas neural-adapter notebook](https://github.com/shivaprasad-patil/ScAdver/blob/main/examples/ScAdver_pancreas_neural_residual_adapter.ipynb)** - Adapter-focused walkthrough.
- **[PBMC notebook](https://github.com/shivaprasad-patil/ScAdver/blob/main/examples/ScAdver_pbmc_batch_correction.ipynb)** - v2/v3 protocol integration.

---

**GitHub Repository:** [ScAdver](https://github.com/shivaprasad-patil/ScAdver)
