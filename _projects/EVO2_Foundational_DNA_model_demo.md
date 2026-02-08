---
title: "EVO2 DNA Foundational model Demo"
collection: projects

date: 2025-08-02
github: "https://github.com/shivaprasad-patil/EVO2-Demo"
paper_link: "https://www.biorxiv.org/content/10.1101/2025.02.18.638918v1.full"
---

## 🧬 EVO2 DNA FOUNDATIONAL MODEL Demo Summary 🚀

### 🎯 **What This Notebook Does**

This notebook provides a **complete, working implementation** of a StripedHyena-based neural network architecture specifically designed for DNA sequence modeling. It demonstrates the entire pipeline from model architecture design to successful training with real loss curves.

#### 🔬 **Core Functionality**

1. **🧬 DNA Sequence Processing**
   - Custom `CharLevelTokenizer` for genomic data with special tokens (`<PAD>`, `<UNK>`, `<START>`, `<END>`)
   - Handles variable-length DNA sequences with proper padding and tokenization
   - Support for standard nucleotides (A, C, G, T) and ambiguous bases (N, R, Y, etc.)

2. **🏗️ StripedHyena Architecture Implementation**
   - **Multi-scale Convolution Layers**: Short, medium, and long-range dependency modeling
   - **Hybrid Architecture**: Combines convolutional layers with multi-head attention
   - **Optimized for DNA**: Hierarchical pattern recognition from local motifs to long-range interactions

3. **⚡ Advanced Neural Network Components**
   - `RMSNorm`: Root Mean Square normalization for stable training
   - `RotaryEmbedding`: Position-aware embeddings for sequence understanding
   - `MultiHeadAttention`: Self-attention with rotary position encoding
   - `FeedForward`: Efficient feed-forward networks with SiLU activation

#### 🚀 **Key Achievements**

#### ✅ **Complete Training Infrastructure**
- `StripedHyenaTrainer` class with comprehensive training loop
- Automatic loss tracking and visualization
- Model checkpointing and validation
- Real-time training progress monitoring

#### ✅ **Successful Training Demonstration**
- Working model that trains on DNA sequence data
- Loss curves showing actual learning progress
- No tensor dimension errors or training failures
- Proper convergence behavior

#### 🔧 **Technical Implementation Details**

#### **Model Architecture Layers:**
```
Input DNA Sequence → Tokenization
    ↓
Character-Level Embedding (vocab_size=32, hidden_size=128)
    ↓
Positional Encoding (Rotary Embeddings)
    ↓
┌─────────────────────────────────────┐
│ StripedHyena Layers (Repeated)      │
├─────────────────────────────────────┤
│ • Short Convolution (HyenaConvShort)│  ← Local patterns (3-nucleotide motifs)
│ • Medium Convolution (HyenaConvMedium)│ ← Medium patterns (15-nucleotide motifs)  
│ • Long Convolution (HyenaConvLong)  │  ← Long-range dependencies
│ • Multi-Head Attention             │  ← Global context understanding
│ • Feed-Forward Network             │  ← Feature transformation
│ • Layer Normalization              │  ← Training stability
└─────────────────────────────────────┘
    ↓
Final Layer Normalization
    ↓
Output Projection (hidden_size → vocab_size)
    ↓
DNA Sequence Prediction/Generation
```

#### **Training Configuration:**
- **Optimizer**: AdamW with weight decay (0.01)
- **Learning Rate**: 5e-4 with warmup scheduling
- **Batch Processing**: Efficient DataLoader with proper collation
- **Validation**: Regular evaluation with separate validation set
- **Checkpointing**: Automatic model saving at best validation loss


**The model successfully demonstrates that the StripedHyena architecture can effectively learn from DNA sequence data with proper tensor dimension handling and training procedures.**


#### 🏗️ Key Components Built:
- 🔧 **StripedHyenaConfig**: Flexible configuration system for model architecture
- 🧠 **Multi-Scale Convolutions**: Short, Medium & Long-range DNA pattern recognition
- 🎭 **Character-Level Tokenizer**: IUPAC nucleotide encoding (A, T, G, C, N, etc.)
- 🏢 **Complete Model Architecture**: Embeddings → Striped Blocks → Output Layers
- 🎓 **Training Infrastructure**: Full trainer with validation, checkpointing & visualization

#### 📊 Performance Achieved:
- ✅ **157,056 parameters** - Efficient yet powerful model size
- 📈 **93.1% loss reduction** over just 2 training epochs
- 🎯 **Zero tensor dimension errors** - Robust architecture implementation
- 🚀 **GPU/CPU compatibility** - Flexible deployment options

This notebook is for:
- 📖 **Educational demonstrations** of modern DNA modeling.
---

**📂 GitHub Repository:** [EVO2-Demo](https://github.com/shivaprasad-patil/EVO2-Demo)  

**📄 Related Paper:** [Read the paper](https://www.biorxiv.org/content/10.1101/2025.02.18.638918v1.full)
