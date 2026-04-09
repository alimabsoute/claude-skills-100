// Top 100 Claude Code skills & skill packs — April 2026
// Curated from GitHub research (stars + recent activity)
// Excludes skills already installed in Ali's workspace
window.SKILLS = [
  // ========== MEGA SKILL PACKS (Tier 1 — 1000+ skills each) ==========
  {
    id: 1, name: "anthropics/skills", type: "pack", category: "official",
    author: "anthropics", stars: 113437,
    url: "https://github.com/anthropics/skills",
    tagline: "Official Anthropic Agent Skills — the reference implementation.",
    description: "Anthropic's public repository for the Agent Skills standard. Includes reference skills, the SKILL.md spec, authoring guidelines, and examples maintained by the Claude team. The canonical source of truth for what a well-formed skill looks like.",
    details: "Contains Anthropic's production-tested skills plus the specification every other skill pack builds on. If you're building your own skills, this is the reference. Receives continuous updates from the Claude Code team.",
    uses: ["Author new skills following Anthropic's spec", "Reference reliable, audited example skills", "Stay aligned with upstream changes to the Skill tool"]
  },
  {
    id: 2, name: "sickn33/antigravity-awesome-skills", type: "pack", category: "meta",
    author: "sickn33", stars: 31705,
    url: "https://github.com/sickn33/antigravity-awesome-skills",
    tagline: "1,370+ installable agentic skills with a one-shot CLI installer.",
    description: "The largest single installable library of agentic skills. Bundles work across Claude Code, Cursor, Codex CLI, Gemini CLI, Antigravity, and more. Ships with an installer, workflow bundles, and curated community collections.",
    details: "Aggregates official and community skills into one place behind a versioned installer. You pick a bundle (e.g. 'full-stack-engineer') and it wires everything up. Strong choice if you want breadth without picking skills one-by-one.",
    uses: ["Bootstrap a new dev machine with hundreds of skills in one command", "Discover niche skills you didn't know existed", "Share a curated subset across a team"]
  },
  {
    id: 3, name: "VoltAgent/awesome-agent-skills", type: "pack", category: "meta",
    author: "VoltAgent", stars: 14861,
    url: "https://github.com/VoltAgent/awesome-agent-skills",
    tagline: "1000+ agent skills spanning official and community collections.",
    description: "A curated aggregation of agent skills from official dev teams and the community, compatible with Claude Code, Codex, Antigravity, Gemini CLI, Cursor and others. Heavy emphasis on cross-tool portability.",
    details: "Works as a reference catalog plus installable drop-ins. Skills are tagged by vendor origin and freshness so you can filter out abandoned ones. One of the most active curation projects in the ecosystem.",
    uses: ["Find a skill for an obscure tool or vendor", "Evaluate multiple skills that solve the same problem", "Track what's trending across coding agents"]
  },
  {
    id: 4, name: "ComposioHQ/awesome-claude-skills", type: "pack", category: "meta",
    author: "ComposioHQ", stars: 52273,
    url: "https://github.com/ComposioHQ/awesome-claude-skills",
    tagline: "Composio's curated awesome-list for Claude Skills and resources.",
    description: "A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows. Maintained by the Composio team, who build the Composio agent toolkit — so entries are evaluated against real agent production use.",
    details: "Less about installation, more about navigation. Annotated with quality signals and commentary. Great starting point if you want editorial judgment rather than raw volume.",
    uses: ["Learn which skills are actually worth installing", "Find skills that integrate cleanly with other tools", "Discover high-leverage hooks and slash commands"]
  },
  {
    id: 5, name: "hesreallyhim/awesome-claude-code", type: "pack", category: "meta",
    author: "hesreallyhim", stars: 37593,
    url: "https://github.com/hesreallyhim/awesome-claude-code",
    tagline: "The original 'awesome' list for Claude Code — skills, hooks, commands, agents.",
    description: "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code. The most-referenced index for newcomers orienting themselves in the ecosystem.",
    details: "Broader than skills — also covers CLAUDE.md patterns, hooks, status lines, and subagent orchestrators. If someone says 'there's an awesome list for that' about Claude Code, this is it.",
    uses: ["Explore the full Claude Code ecosystem, not just skills", "Find working CLAUDE.md examples from top setups", "Discover proven hook and command patterns"]
  },
  {
    id: 6, name: "travisvn/awesome-claude-skills", type: "pack", category: "meta",
    author: "travisvn", stars: 10851,
    url: "https://github.com/travisvn/awesome-claude-skills",
    tagline: "Curated skills specifically for Claude AI workflows, especially Claude Code.",
    description: "A focused awesome-list exclusively for Claude Skills, without the broader hooks/commands noise. Emphasizes skills that show up in serious production use rather than demos.",
    details: "Tight editorial focus — each entry is annotated with what it does and why it's listed. Less overlap with generic agent-skill lists.",
    uses: ["Focused skill discovery without distractions", "Find well-maintained skills with real users", "Cross-reference claims made in bigger aggregator lists"]
  },

  // ========== MASSIVE CURATED PACKS (Tier 2) ==========
  {
    id: 7, name: "alirezarezvani/claude-skills", type: "pack", category: "full-stack",
    author: "alirezarezvani", stars: 10120,
    url: "https://github.com/alirezarezvani/claude-skills",
    tagline: "220+ cross-tool skills for engineering, marketing, product, finance, C-level advisory.",
    description: "220+ Claude Code skills and agent plugins compatible with Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents. Organized by business function rather than just engineering. Ships with a skill authoring standard and a skill pipeline.",
    details: "Top-level folders include engineering-team, business-growth, c-level-advisor, custom-gpt, finance, marketing-skill, orchestration, product-team, project-management. Notably strong for non-engineering workflows.",
    uses: ["Advisor-style CFO/CTO/CMO role-play for strategic decisions", "Cross-functional workflows that touch product + engineering + marketing", "Standardize skill authoring on a published spec"]
  },
  {
    id: 8, name: "Jeffallan/claude-skills", type: "pack", category: "engineering",
    author: "Jeffallan", stars: 8019,
    url: "https://github.com/Jeffallan/claude-skills",
    tagline: "66 specialized full-stack engineer skills — one per language/framework/role.",
    description: "66 specialized skills covering every major language and framework: angular-architect, api-designer, chaos-engineer, cpp-pro, django-expert, flutter-expert, java-architect, kotlin-specialist, legacy-modernizer, playwright-expert, rails-expert, salesforce-developer, and many more. Turn Claude into your expert pair programmer for any stack.",
    details: "Each skill is a deep persona with domain-specific idioms, gotchas, and testing patterns. The roster is opinionated — if you work in one of the covered stacks you get senior-level guidance on tap.",
    uses: ["Get rails-expert guidance on a Ruby monolith", "Use legacy-modernizer when touching old COBOL/VB/Perl", "Summon chaos-engineer to design a failure-injection plan"]
  },
  {
    id: 9, name: "K-Dense-AI/claude-scientific-skills", type: "pack", category: "science",
    author: "K-Dense-AI", stars: 17755,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills",
    tagline: "Research, science, engineering, analysis, finance, and writing skills. 100+ scientific libraries.",
    description: "Ready-to-use skills wrapping 100+ scientific Python libraries — biopython, rdkit, deepchem, qiskit, astropy, pymatgen, scanpy, dask, statsmodels, pytorch-lightning, and many more. Each is a domain-aware wrapper, not a generic library doc.",
    details: "Skills are organized by scientific domain: bioinformatics, chemistry, materials, physics, quantum, clinical, imaging, statistics. Comes with higher-order skills like literature-review, scientific-writing, hypothesis-generation, and research-grants.",
    uses: ["Run computational chemistry workflows via rdkit/deepchem", "Process single-cell data with scanpy/scvi-tools", "Draft grant applications grounded in real literature review"]
  },
  {
    id: 10, name: "Orchestra-Research/AI-Research-SKILLs", type: "pack", category: "research",
    author: "Orchestra-Research", stars: 6421,
    url: "https://github.com/Orchestra-Research/AI-Research-SKILLs",
    tagline: "Open-source AI research & engineering skills — turn any agent into a research agent.",
    description: "A comprehensive skill library for AI research tasks: model architecture, fine-tuning, mechanistic interpretability, safety/alignment, distributed training, RAG, inference serving, MLOps, prompt engineering, evaluation, multimodal, paper writing, ideation.",
    details: "Organized as numbered domains (01-model-architecture through 21-research-ideation). Each skill embeds the relevant mental models, common failure modes, and pointers to SOTA. Used by Orchestra Research for their own work.",
    uses: ["Design a fine-tuning run with the right hyperparameter defaults", "Plan an interpretability study without reinventing methodology", "Draft an ML paper with proper sectioning and citations"]
  },
  {
    id: 11, name: "K-Dense-AI scientific-skills: qiskit", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/qiskit",
    tagline: "Quantum computing skill for IBM Qiskit.",
    description: "Skill wrapping the IBM Qiskit quantum computing SDK. Handles circuit design, transpilation, simulation, noise models, and submission to real IBM Quantum backends.",
    details: "Includes templates for canonical algorithms (Shor, Grover, QAOA, VQE), plus best practices for transpilation and error mitigation. Knows which IBM backends exist and their topology.",
    uses: ["Prototype a quantum algorithm and run it on a simulator", "Design a VQE experiment for a small molecule", "Port a textbook quantum circuit to production Qiskit"]
  },
  {
    id: 12, name: "K-Dense-AI scientific-skills: cirq", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/cirq",
    tagline: "Google Cirq quantum computing framework skill.",
    description: "Skill for Google's Cirq quantum computing library — the alternative to Qiskit favored for near-term algorithms on Google Quantum AI hardware.",
    details: "Covers Cirq-specific gate abstractions, moment-level circuit optimization, and integration with TensorFlow Quantum. Useful if you're targeting Sycamore-class hardware or hybrid classical/quantum models.",
    uses: ["Build a quantum machine learning model with TFQ", "Optimize a circuit for Google's hardware topology", "Port research papers written against Cirq to runnable code"]
  },
  {
    id: 13, name: "K-Dense-AI scientific-skills: biopython", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/biopython",
    tagline: "Bioinformatics foundation skill covering sequence analysis, BLAST, and file formats.",
    description: "Wraps BioPython for sequence IO (FASTA, GenBank, etc.), alignment, BLAST queries, phylogenetics, and structural biology. The go-to foundation for any bioinformatics workflow.",
    details: "Includes canonical recipes for common tasks (translate, reverse-complement, parse GFF3) plus integration hints for downstream tools like ete3 and pymol. Aware of sequence format pitfalls.",
    uses: ["Parse and filter a multi-GB FASTA", "Automate NCBI BLAST queries over a sequence set", "Build a small phylogenetic pipeline"]
  },
  {
    id: 14, name: "K-Dense-AI scientific-skills: rdkit", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/rdkit",
    tagline: "Cheminformatics skill — molecule parsing, descriptors, fingerprints, substructure search.",
    description: "Skill for RDKit, the standard open-source cheminformatics toolkit. Handles SMILES/SDF parsing, descriptor calculation, similarity search, reaction enumeration, and molecular drawing.",
    details: "Includes best practices for standardization, stereochemistry, and tautomer handling — things that silently break naive RDKit code. Useful upstream of any drug discovery model.",
    uses: ["Compute Morgan fingerprints for a compound library", "Filter a virtual library by Lipinski rules", "Draw 2D depictions for a publication figure"]
  },
  {
    id: 15, name: "K-Dense-AI scientific-skills: scanpy", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/scanpy",
    tagline: "Single-cell RNA-seq analysis skill using the Scanpy toolkit.",
    description: "Skill wrapping Scanpy for single-cell transcriptomics. Covers QC, normalization, batch correction, clustering, marker genes, and trajectory analysis.",
    details: "Knows the canonical Scanpy workflow order and the sharp edges (e.g. batch effects before clustering). Integrates with anndata, scVI, and celltypist for downstream tasks.",
    uses: ["Build a QC + clustering pipeline for a new scRNA-seq dataset", "Identify marker genes for a novel cluster", "Perform trajectory inference on a differentiation experiment"]
  },
  {
    id: 16, name: "K-Dense-AI scientific-skills: astropy", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/astropy",
    tagline: "Astronomy skill — coordinates, time, units, FITS, WCS.",
    description: "Skill wrapping Astropy for astronomical computing: coordinate transformations, time scales, FITS file IO, WCS projections, cosmology calculations, and table IO.",
    details: "Includes pitfalls around time scales (TAI vs UTC vs TT) and coordinate frames (ICRS vs FK5). Great for building pipelines that ingest survey data.",
    uses: ["Transform coordinates between reference frames", "Load and manipulate FITS images from a telescope", "Compute cosmological distances from redshifts"]
  },
  {
    id: 17, name: "K-Dense-AI scientific-skills: pymatgen", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/pymatgen",
    tagline: "Materials Genomics skill for crystal structures and DFT workflows.",
    description: "Skill for pymatgen, the Python Materials Genomics library. Handles crystal structures, symmetry analysis, phase diagrams, VASP/Quantum ESPRESSO input generation, and Materials Project API queries.",
    details: "Integrates with the Materials Project database for instant access to millions of computed properties. Knows the conventions for k-point sampling, pseudopotentials, and convergence testing.",
    uses: ["Query Materials Project for DFT-computed band gaps", "Generate a VASP input set for a new crystal structure", "Build a phase diagram from computed energies"]
  },
  {
    id: 18, name: "K-Dense-AI scientific-skills: pydicom", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/pydicom",
    tagline: "Medical imaging (DICOM) skill for clinical data workflows.",
    description: "Skill for pydicom — reading, writing, and modifying DICOM medical images from CT, MRI, X-ray, ultrasound. Handles multi-frame series, DICOM tags, anonymization, and conversion to NumPy arrays.",
    details: "Aware of clinical data handling requirements: HIPAA-safe anonymization, modality-specific pitfalls, and the conventions that trip up non-radiologists. Integrates with MONAI and SimpleITK for downstream processing.",
    uses: ["Anonymize a DICOM study for research sharing", "Extract pixel data for ML model inference", "Walk a PACS export directory and index studies"]
  },
  {
    id: 19, name: "K-Dense-AI scientific-skills: clinical-decision-support", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/clinical-decision-support",
    tagline: "Evidence-based clinical decision support skill.",
    description: "Skill that helps draft evidence-graded clinical decision support outputs — treatment options, drug interactions, dosing, contraindications — grounded in cited literature.",
    details: "Enforces evidence grading (e.g. USPSTF levels), always attaches citations, and flags off-label use. Explicitly designed to remain advisory rather than diagnostic.",
    uses: ["Draft a differential diagnosis with evidence references", "Check a medication regimen for interactions", "Summarize guideline updates for a clinical team"]
  },
  {
    id: 20, name: "K-Dense-AI scientific-skills: molecular-dynamics", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/molecular-dynamics",
    tagline: "Molecular dynamics simulation skill for GROMACS, OpenMM, and AMBER.",
    description: "Skill for setting up, running, and analyzing molecular dynamics simulations with GROMACS, OpenMM, or AMBER. Covers system preparation, solvation, equilibration, production runs, and trajectory analysis.",
    details: "Knows force field tradeoffs (AMBER vs CHARMM vs OPLS), water models, and the common failure modes in membrane or protein-ligand systems. Integrates with MDAnalysis for postprocessing.",
    uses: ["Set up a protein-in-water simulation end-to-end", "Analyze RMSD/RMSF for a production MD trajectory", "Prepare a membrane protein for equilibration"]
  },

  // ========== AGENT HARNESS & META-FRAMEWORKS ==========
  {
    id: 21, name: "affaan-m/everything-claude-code", type: "pack", category: "meta",
    author: "affaan-m", stars: 147452,
    url: "https://github.com/affaan-m/everything-claude-code",
    tagline: "Agent harness performance optimization — skills, instincts, memory, security, research-first dev.",
    description: "A full performance optimization layer for Claude Code: skills, agent instincts, memory systems, security guards, and a research-first development methodology. One of the most-starred Claude Code ecosystem repos.",
    details: "Less a skill pack, more a complete opinionated harness upgrade. Includes skill bundles plus hooks, memory patterns, and security rules. Claims significant productivity improvements when adopted wholesale.",
    uses: ["Upgrade an existing Claude Code setup with proven patterns", "Adopt a research-first workflow for complex problems", "Get opinionated defaults for memory + security"]
  },
  {
    id: 22, name: "obra/superpowers", type: "pack", category: "meta",
    author: "obra", stars: 142189,
    url: "https://github.com/obra/superpowers",
    tagline: "Agentic skills framework + software development methodology.",
    description: "An opinionated agentic skills framework and methodology by Jesse Vincent. Includes core skills like spec-driven-development, test-driven-development, incremental-implementation, planning-and-task-breakdown, security-and-hardening.",
    details: "Ships as a complete workflow, not individual skills — you adopt the methodology and the skills fall out of it. Includes subskills for context engineering, frontier UI engineering, debugging-and-error-recovery.",
    uses: ["Adopt a proven agentic development methodology", "Get high-quality TDD and spec-driven workflows", "Use well-scoped planning-and-task-breakdown skills"]
  },
  {
    id: 23, name: "thedotmack/claude-mem", type: "plugin", category: "memory",
    author: "thedotmack", stars: 46466,
    url: "https://github.com/thedotmack/claude-mem",
    tagline: "Claude Code plugin that auto-captures, compresses, and replays session context.",
    description: "A plugin that transparently captures everything Claude does in a session, compresses it with the Anthropic agent SDK, and injects the relevant bits back into future sessions. Addresses the core context-loss problem of long-running work.",
    details: "Works like a memory augmentation layer — no manual 'save notes' calls needed. Uses Claude itself to decide what's worth keeping. Drops in as a plugin with zero code changes to your existing setup.",
    uses: ["Resume a multi-day feature build without re-explaining context", "Keep a rolling summary of a long debugging session", "Let the assistant recall decisions from weeks ago"]
  },
  {
    id: 24, name: "NevaMind-AI/memU", type: "pack", category: "memory",
    author: "NevaMind-AI", stars: 13340,
    url: "https://github.com/NevaMind-AI/memU",
    tagline: "Memory system for 24/7 proactive agents.",
    description: "A memory system built for long-running proactive agents — chatbots, clawdbots, moltbots. Provides structured memory that persists across sessions and supports retrieval by relevance, not just recency.",
    details: "Handles the harder memory problems: deduplication, forgetting, conflict resolution, and retrieval re-ranking. Used as a substrate by 'always-on' bot deployments rather than one-off sessions.",
    uses: ["Build a long-running personal assistant with real memory", "Power a support bot that remembers customers across months", "Prevent context thrash in a never-ending coding session"]
  },
  {
    id: 25, name: "parcadei/Continuous-Claude-v3", type: "plugin", category: "meta",
    author: "parcadei", stars: 3684,
    url: "https://github.com/parcadei/Continuous-Claude-v3",
    tagline: "Context management via ledgers, handoffs, and isolated subagent context windows.",
    description: "A context management system using hooks to maintain state via ledgers and handoffs. Enables MCP tool execution without polluting main context, and agent orchestration with isolated context windows per subagent.",
    details: "The main value is making long-running work resilient: instead of one giant context, you get a structured ledger plus per-subagent isolation. Works entirely through hooks — no API dependency.",
    uses: ["Run MCP-heavy workflows without context bloat", "Orchestrate multiple subagents with clean boundaries", "Maintain a durable ledger across sessions"]
  },
  {
    id: 26, name: "ruvnet/ruflo", type: "pack", category: "orchestration",
    author: "ruvnet", stars: 30831,
    url: "https://github.com/ruvnet/ruflo",
    tagline: "Multi-agent swarm orchestration platform with native Claude Code integration.",
    description: "An agent orchestration platform for Claude — deploy multi-agent swarms, coordinate autonomous workflows, build conversational systems. Features distributed swarm intelligence and RAG integration.",
    details: "More ambitious than a skill pack — it's a full orchestration layer. Brings RAG, swarm patterns, and autonomous workflow execution as first-class primitives, with Claude Code and Codex integrations.",
    uses: ["Run a swarm of 10+ specialized agents on a task", "Build a production chatbot backed by Claude", "Coordinate long autonomous runs with checkpoint recovery"]
  },
  {
    id: 27, name: "wshobson/agents", type: "pack", category: "orchestration",
    author: "wshobson", stars: 33220,
    url: "https://github.com/wshobson/agents",
    tagline: "Intelligent automation and multi-agent orchestration for Claude Code.",
    description: "wshobson's multi-agent orchestration library — one of the early and most-copied patterns for splitting work across specialized subagents. Ships with a library of ready-made agent definitions.",
    details: "Each agent has a narrow responsibility (reviewer, tester, refactorer, etc.). Includes dispatch logic so the main thread delegates cleanly. Influential enough that many other skill packs cite it as the base pattern.",
    uses: ["Add a mature multi-agent layer to an existing project", "Pick-and-choose individual specialized agents", "Learn reference patterns for subagent design"]
  },
  {
    id: 28, name: "Yeachan-Heo/oh-my-claudecode", type: "pack", category: "orchestration",
    author: "Yeachan-Heo", stars: 26498,
    url: "https://github.com/Yeachan-Heo/oh-my-claudecode",
    tagline: "Teams-first multi-agent orchestration for Claude Code.",
    description: "Takes oh-my-zsh's philosophy (themes, plugins, community contributions) and applies it to Claude Code. Focused on multi-agent teams rather than solo sessions.",
    details: "Provides a plugin architecture on top of Claude Code plus team-based agent orchestration. You get a curated starter config and can layer community plugins on top.",
    uses: ["Bootstrap a new Claude Code environment with sensible team defaults", "Install community plugins from a marketplace", "Run a multi-agent team with shared config"]
  },
  {
    id: 29, name: "davila7/claude-code-templates", type: "pack", category: "meta",
    author: "davila7", stars: 24335,
    url: "https://github.com/davila7/claude-code-templates",
    tagline: "CLI tool for configuring and monitoring Claude Code — one of the biggest template libraries.",
    description: "A CLI plus template library for bootstrapping Claude Code projects. Includes commands, agents, hooks, and skills that you apply selectively. Also includes monitoring utilities for running sessions.",
    details: "The template library is the main draw — hundreds of ready-made command+agent combinations you can copy into your own setup. Project is very actively maintained.",
    uses: ["Clone a template for a new Next.js/Django/etc. project", "Monitor a running Claude Code session's activity", "Steal proven commands for your own CLAUDE.md"]
  },
  {
    id: 30, name: "iannuttall/dotagents", type: "pack", category: "meta",
    author: "iannuttall", stars: 666,
    url: "https://github.com/iannuttall/dotagents",
    tagline: "One location for all hooks, commands, skills, and AGENT/CLAUDE.md files.",
    description: "A dotfiles-style setup for agent configurations. Single repo holds your hooks, commands, skills, and AGENT/CLAUDE.md files — version controlled and portable across machines.",
    details: "Solves the 'my Claude setup is scattered across five folders' problem. You sync one repo and everything follows. Includes sensible layout conventions.",
    uses: ["Sync your Claude Code setup across laptops", "Share your setup with a colleague in one command", "Version-control your agent config alongside code"]
  },

  // ========== SPECIALIZED CAPABILITY SKILLS ==========
  {
    id: 31, name: "OthmanAdi/planning-with-files", type: "skill", category: "productivity",
    author: "OthmanAdi", stars: 18353,
    url: "https://github.com/OthmanAdi/planning-with-files",
    tagline: "Manus-style persistent markdown planning — the workflow behind the $2B acquisition.",
    description: "Implements the persistent markdown planning pattern made famous by Manus (the agent acquired for $2B). The agent maintains a living plan file on disk, updates it as it works, and uses it as its primary scratchpad.",
    details: "The pattern's power is that the plan survives restarts, subagent handoffs, and context compaction. You get a single source of truth for what the agent is doing, why, and what's next. Influential enough to be widely copied.",
    uses: ["Run multi-hour complex tasks without losing track", "Let the user see and edit the agent's plan mid-execution", "Hand off work between sessions cleanly"]
  },
  {
    id: 32, name: "yusufkaraaslan/Skill_Seekers", type: "skill", category: "productivity",
    author: "yusufkaraaslan", stars: 12548,
    url: "https://github.com/yusufkaraaslan/Skill_Seekers",
    tagline: "Convert doc sites, GitHub repos, and PDFs into Claude AI skills automatically.",
    description: "A skill that generates new skills. Point it at a documentation website, GitHub repo, or PDF and it produces a structured SKILL.md with conflict detection against your existing skill library.",
    details: "Handles the tedious part of skill authoring — extracting the relevant knowledge, structuring it, and detecting when it would duplicate an existing skill. Makes it realistic to turn any good doc into a skill.",
    uses: ["Turn a library's docs into a production skill in minutes", "Convert a paper PDF into a research skill", "Keep your skill library in sync with evolving upstream docs"]
  },
  {
    id: 33, name: "Lum1104/Understand-Anything", type: "skill", category: "productivity",
    author: "Lum1104", stars: 8016,
    url: "https://github.com/Lum1104/Understand-Anything",
    tagline: "Turn any codebase, Dockerfile, or docs into a queryable knowledge graph.",
    description: "Builds an interactive, queryable knowledge graph from any folder of code, docs, papers, or images. Once built, you can explore, search, and ask questions grounded in the actual structure of the content.",
    details: "Multi-platform (Claude Code, Codex, Cursor, Copilot, Gemini CLI). The knowledge-graph output is the differentiator — you get relationship structure, not just text chunks.",
    uses: ["Onboard onto a 500k-line legacy codebase", "Explore a research paper plus its citations as a graph", "Query a Dockerfile + infra repo together as one structure"]
  },
  {
    id: 34, name: "gadievron/raptor", type: "pack", category: "security",
    author: "gadievron", stars: 1864,
    url: "https://github.com/gadievron/raptor",
    tagline: "Turns Claude Code into a general-purpose offensive/defensive security agent.",
    description: "A security-focused configuration (CLAUDE.md rules, subagents, skills, tool orchestration) that transforms Claude Code into an adversarial-thinking security agent. Supports both offensive research and defensive operations.",
    details: "Pre-configures Claude for security tool orchestration (nmap, burp, semgrep, etc.) with adversarial thinking patterns. Intended for authorized pentesting, CTFs, and defensive work — not unauthorized targeting.",
    uses: ["Run authorized pentesting engagements", "Solve CTF challenges systematically", "Perform threat modeling with adversarial perspective"]
  },
  {
    id: 35, name: "prompt-security/clawsec", type: "pack", category: "security",
    author: "prompt-security", stars: 887,
    url: "https://github.com/prompt-security/clawsec",
    tagline: "Security skill suite — drift detection, automated audits, skill integrity verification.",
    description: "A defensive security skill suite for agent configurations. Protects SOUL.md/CLAUDE.md/agent config files from drift, runs automated audits, provides live security recommendations, and verifies skill integrity.",
    details: "Treats agent config itself as a security surface. Detects when someone (or something) has modified your agent rules, audits skills before you install them, and recommends hardening.",
    uses: ["Audit a third-party skill before installing", "Detect unauthorized changes to your CLAUDE.md", "Harden agent config against prompt injection"]
  },
  {
    id: 36, name: "nidhinjs/prompt-master", type: "skill", category: "productivity",
    author: "nidhinjs", stars: 4854,
    url: "https://github.com/nidhinjs/prompt-master",
    tagline: "Writes accurate prompts for any AI tool with full context retention.",
    description: "A skill for authoring high-quality prompts for any AI tool (image, video, music, chat, code). Maintains context across sessions so you build up a personal prompt library without redoing work.",
    details: "The value is the memory layer — it learns what your 'voice' looks like and produces increasingly on-target prompts over time. Useful if you work across many AI tools.",
    uses: ["Author image prompts for Midjourney/Flux with consistent style", "Craft system prompts for new projects", "Maintain a library of reusable prompt templates"]
  },
  {
    id: 37, name: "teng-lin/notebooklm-py", type: "skill", category: "research",
    author: "teng-lin", stars: 9618,
    url: "https://github.com/teng-lin/notebooklm-py",
    tagline: "Programmatic NotebookLM access — features the web UI doesn't expose.",
    description: "An unofficial Python API plus agent skill for Google NotebookLM. Full programmatic access to notebooks, including capabilities the web UI doesn't expose. Callable from Claude Code, Codex, and other agents.",
    details: "Lets you treat NotebookLM as a backend service: create notebooks, upload sources, generate audio overviews, query notebooks programmatically. Bridges the gap between NotebookLM's research powers and your agent workflows.",
    uses: ["Automate research note-taking across dozens of sources", "Generate audio overviews of technical papers", "Use NotebookLM as a RAG backend from your agent"]
  },
  {
    id: 38, name: "santifer/career-ops", type: "pack", category: "productivity",
    author: "santifer", stars: 25532,
    url: "https://github.com/santifer/career-ops",
    tagline: "AI-powered job search — 14 skill modes, Go dashboard, PDF generation.",
    description: "A job search system built on Claude Code. Includes 14 skill modes covering resume tailoring, cover letters, interview prep, offer negotiation, salary research, referral finding, and more. Ships with a Go dashboard and PDF generation.",
    details: "Treats job search as an ops problem with structured skills for each phase. The PDF generation and dashboard are production-grade — not a toy.",
    uses: ["Tailor a resume to a specific job posting", "Generate interview prep for a target company", "Track an active job search pipeline"]
  },
  {
    id: 39, name: "aakashg/pm-claude-code-setup", type: "pack", category: "productivity",
    author: "aakashg", stars: 87,
    url: "https://github.com/aakashg/pm-claude-code-setup",
    tagline: "Ready-to-use CLAUDE.md and starter skills for product managers.",
    description: "A pre-configured Claude Code setup tailored for product managers. Includes CLAUDE.md defaults, starter skills for roadmaps, PRDs, user interviews, and prioritization frameworks.",
    details: "Small but targeted — designed for PMs who want to use Claude Code without learning the engineering-oriented ecosystem. A good starting point for non-coders.",
    uses: ["Draft a PRD with proper structure", "Summarize user interviews into themes", "Run a RICE/ICE prioritization session"]
  },
  {
    id: 40, name: "skalesapp/skales", type: "pack", category: "automation",
    author: "skalesapp", stars: 746,
    url: "https://github.com/skalesapp/skales",
    tagline: "Local AI desktop agent with SKILL.md support, 15+ providers, no Docker.",
    description: "A local desktop agent for Windows, macOS, and Linux. Runs Agent Skills (SKILL.md), supports autonomous coding, multi-agent teams, desktop automation, and 15+ AI providers. No Docker, no terminal dependencies.",
    details: "Think of it as a Claude Code alternative with a GUI and desktop automation primitives. Useful when you need the agent to drive your desktop, not just edit files.",
    uses: ["Automate desktop workflows (clicking, filling forms)", "Run agent skills with a GUI frontend", "Run multi-agent teams without Docker"]
  },

  // ========== AWS / CLOUD SKILLS ==========
  {
    id: 41, name: "AWS Agent Skills Suite", type: "pack", category: "devops",
    author: "community", stars: null,
    url: "https://github.com/search?q=aws-agent-skills&type=repositories",
    tagline: "18 AWS service skills — lambda, dynamodb, eks, bedrock, step-functions, and more.",
    description: "A community-maintained collection of one skill per core AWS service: api-gateway, bedrock, cloudformation, cloudwatch, cognito, dynamodb, ec2, ecs, eks, eventbridge, iam, lambda, rds, s3, secrets-manager, sns, sqs, step-functions.",
    details: "Each skill wraps the specific service's idioms, common gotchas, and CDK/Terraform templates. Much more targeted than a generic 'AWS expert' skill.",
    uses: ["Scaffold a new Lambda with proper IAM permissions", "Design a DynamoDB table with sensible partition keys", "Build an EKS cluster without a week of reading docs"]
  },
  {
    id: 42, name: "AWS bedrock skill", type: "skill", category: "devops",
    author: "community", stars: null,
    url: "https://github.com/search?q=claude-code+skill+bedrock&type=repositories",
    tagline: "AWS Bedrock skill — run Claude and other models through AWS.",
    description: "A skill for AWS Bedrock, the managed service for running foundation models including Claude, Llama, Mistral, and Amazon Titan. Covers model selection, IAM, streaming, and Agents for Bedrock.",
    details: "Knows the quirks: which models are available in which regions, the streaming API differences, how to set up Bedrock Agents with Action Groups. Useful if you're enterprise-locked to AWS.",
    uses: ["Deploy a Claude-powered app entirely on AWS", "Set up Bedrock Agents with custom Action Groups", "Migrate from direct Anthropic API to Bedrock"]
  },
  {
    id: 43, name: "AWS step-functions skill", type: "skill", category: "devops",
    author: "community", stars: null,
    url: "https://github.com/search?q=step+functions+skill&type=repositories",
    tagline: "Design AWS Step Functions workflows with proper error handling.",
    description: "Skill for designing AWS Step Functions workflows — state machines, choice states, parallel branches, map state, error handling, and integration with Lambda/ECS/SNS.",
    details: "Step Functions ASL is notoriously fiddly; this skill knows the common gotchas (Map vs Parallel, retry vs catch ordering, integration pattern choice). Ships with tested templates.",
    uses: ["Design a fanout workflow with error handling", "Convert an ad-hoc Lambda orchestration into Step Functions", "Audit an existing state machine for anti-patterns"]
  },
  {
    id: 44, name: "AWS eks skill", type: "skill", category: "devops",
    author: "community", stars: null,
    url: "https://github.com/search?q=eks+skill&type=repositories",
    tagline: "Amazon EKS skill — cluster design, IRSA, networking, upgrades.",
    description: "EKS-specific skill covering cluster creation, managed node groups, IAM Roles for Service Accounts (IRSA), VPC CNI, ALB controller, and version upgrades. Generic Kubernetes skills don't know the AWS-specific parts.",
    details: "Focuses on the parts of EKS that bite you in production — IRSA setup, networking mode choice, cluster upgrade sequencing, CoreDNS/kube-proxy addon management.",
    uses: ["Design a new multi-tenant EKS cluster", "Upgrade an EKS cluster to the next minor version safely", "Debug IRSA permission issues"]
  },

  // ========== WORKFLOW & TOOLING SKILLS ==========
  {
    id: 45, name: "FrancyJGLisboa/agent-skill-creator", type: "skill", category: "meta",
    author: "FrancyJGLisboa", stars: 678,
    url: "https://github.com/FrancyJGLisboa/agent-skill-creator",
    tagline: "One SKILL.md, every platform — 14+ tool targets.",
    description: "Turns any workflow into reusable AI agent skills that install across 14+ tools — Claude Code, Copilot, Cursor, Windsurf, Codex, Gemini, Kiro, and more. The value is cross-tool portability: write once, run everywhere.",
    details: "Handles the per-tool quirks in how skills are loaded. If you're maintaining a skill library for a team using heterogeneous tools, this removes the per-tool port burden.",
    uses: ["Publish a skill that works on every major coding agent", "Migrate a Claude-only skill to support Cursor too", "Maintain one source of truth across tools"]
  },
  {
    id: 46, name: "alirezarezvani/claude-code-skill-factory", type: "skill", category: "meta",
    author: "alirezarezvani", stars: null,
    url: "https://github.com/alirezarezvani/claude-code-skill-factory",
    tagline: "Toolkit for building and deploying production Claude skills at scale.",
    description: "An open-source toolkit for building production-ready Claude Skills, Code Agents, custom slash commands, and LLM prompts at scale. Generates structured skill templates, automates workflow integration, and streamlines agent development.",
    details: "More batteries-included than agent-skill-creator — it's a framework for running a skill factory, not just authoring one skill. Useful if your org treats skill authoring as an ongoing engineering discipline.",
    uses: ["Stand up a skill authoring pipeline for a company", "Template-generate new skills from a spec", "Automate skill quality checks before shipping"]
  },
  {
    id: 47, name: "Narwhal-Lab/MagicSkills", type: "skill", category: "meta",
    author: "Narwhal-Lab", stars: 274,
    url: "https://github.com/Narwhal-Lab/MagicSkills",
    tagline: "Turn scattered SKILL.md folders into composable, tool-ready capabilities.",
    description: "Solves the 'my skills are duplicated across five agents' problem. MagicSkills turns scattered SKILL.md folders into a single reusable, composable, tool-ready library.",
    details: "Addresses composability specifically — skills can reference and extend other skills, rather than copy-pasting chunks. Think package manager for skills.",
    uses: ["Deduplicate an overgrown skill library", "Compose skills that extend each other", "Share a skill between multiple agent tools cleanly"]
  },
  {
    id: 48, name: "agent-sh/agnix", type: "tool", category: "devops",
    author: "agent-sh", stars: 160,
    url: "https://github.com/agent-sh/agnix",
    tagline: "Linter and LSP for CLAUDE.md, AGENTS.md, SKILL.md, hooks, MCP configs.",
    description: "The missing linter and language server for AI coding assistant configs. Validates CLAUDE.md, AGENTS.md, SKILL.md, hooks, and MCP config files with autofixes. Plugin for every major IDE.",
    details: "Treats agent config as source code — syntax check, semantic check, autofix, LSP completions. Catches whole classes of mistakes (invalid hook shapes, broken MCP JSON) before you run them.",
    uses: ["Catch hook config errors before they brick a session", "Get IDE autocomplete when editing SKILL.md", "Run as a CI check on your team's agent config repo"]
  },
  {
    id: 49, name: "hashgraph-online/skill-publish", type: "tool", category: "meta",
    author: "hashgraph-online", stars: 163,
    url: "https://github.com/hashgraph-online/skill-publish",
    tagline: "GitHub Action + CLI for validating and publishing verifiable skills.",
    description: "A GitHub Action and CLI to validate, monitor, and publish verifiable skills (SKILL.md) via a Registry Broker. Provides signing and attestation so downstream users can trust skill provenance.",
    details: "Important for supply-chain security of skills. If you install skills from untrusted sources, signature verification matters. This is the closest thing to a cryptographic registry for skills.",
    uses: ["Publish signed skills to a public registry", "Verify a downloaded skill's provenance in CI", "Monitor a skill for tampering over time"]
  },
  {
    id: 50, name: "bowenliang123/markdown-exporter", type: "skill", category: "productivity",
    author: "bowenliang123", stars: 199,
    url: "https://github.com/bowenliang123/markdown-exporter",
    tagline: "Markdown → DOCX, PPTX, XLSX, PNG, PDF, Mermaid, HTML, CSV, JSON, XML.",
    description: "An agent skill (and Dify plugin) that converts Markdown to any of 10 output formats: DOCX, PPTX, XLSX, PNG, PDF, Mermaid, HTML, MD, CSV, JSON, XML.",
    details: "Fills a common gap — you write Markdown and need to hand off to stakeholders who want docx or pptx. Handles the per-format conversion quirks properly (image embedding, table rendering, etc.).",
    uses: ["Convert design docs from Markdown to DOCX for review", "Export a plan as PPTX for a stakeholder deck", "Produce PDF reports from structured Markdown"]
  },
  {
    id: 51, name: "Agents365-ai/drawio-skill", type: "skill", category: "productivity",
    author: "Agents365-ai", stars: 135,
    url: "https://github.com/Agents365-ai/drawio-skill",
    tagline: "Natural language → draw.io diagrams exported to PNG/SVG/PDF.",
    description: "Generates draw.io (diagrams.net) diagrams from natural language descriptions. Exports directly to PNG, SVG, or PDF. Works with Claude Code, OpenClaw, and Hermes.",
    details: "Complements existing mermaid/excalidraw skills — draw.io outputs are stakeholder-friendly and round-trip editable in the draw.io web app. Good for architecture diagrams intended for non-engineers.",
    uses: ["Generate a system architecture diagram from a design doc", "Export a flowchart to PDF for a slide deck", "Create editable diagrams a PM can modify later"]
  },
  {
    id: 52, name: "jzOcb/writing-style-skill", type: "skill", category: "productivity",
    author: "jzOcb", stars: 195,
    url: "https://github.com/jzOcb/writing-style-skill",
    tagline: "Self-learning writing style skill — rules auto-extracted from your edits.",
    description: "A writing style skill template with auto-learning. You write, it drafts, you edit — and the skill extracts rules from your edits so SKILL.md improves over time. Works with Claude Code and OpenClaw.",
    details: "The compounding-over-time angle is the differentiator. Most style skills are static; this one evolves. Best for teams or individuals with a clear voice they want to enforce.",
    uses: ["Train a skill on your personal writing voice", "Enforce a team style guide that evolves", "Avoid re-explaining edits session after session"]
  },
  {
    id: 53, name: "arpitg1304/robotics-agent-skills", type: "pack", category: "hardware",
    author: "arpitg1304", stars: 169,
    url: "https://github.com/arpitg1304/robotics-agent-skills",
    tagline: "Agent skills for production-grade ROS1/ROS2 robotics software.",
    description: "Skills that make AI coding assistants write production-grade robotics software: ROS1, ROS2, design patterns, SOLID principles, testing. A rare vertical — most skill packs ignore robotics entirely.",
    details: "Covers ROS idioms (nodes, topics, services, actions, launch files, param servers) plus the things that burn robotics engineers: real-time considerations, hardware interfacing, testing without hardware.",
    uses: ["Scaffold a ROS2 package with proper launch files", "Migrate a ROS1 codebase to ROS2 systematically", "Write tests for a sensor driver without the hardware"]
  },
  {
    id: 54, name: "gapmiss/obsidian-plugin-skill", type: "skill", category: "productivity",
    author: "gapmiss", stars: 119,
    url: "https://github.com/gapmiss/obsidian-plugin-skill",
    tagline: "Agent skill specifically for Obsidian plugin development.",
    description: "A skill for developing Obsidian plugins. Knows the Obsidian plugin API, typescript + esbuild setup, the manifest format, hot-reload workflow, and the common pitfalls of the Plugin lifecycle.",
    details: "Obsidian plugin dev has just-different-enough conventions (manifest.json, main.ts structure, the Plugin class lifecycle) that a generic TS skill doesn't cut it. This fills that gap.",
    uses: ["Scaffold a new Obsidian plugin from scratch", "Add a new command or view to an existing plugin", "Publish to the Obsidian Community Plugins directory"]
  },
  {
    id: 55, name: "TheDecipherist/claude-code-mastery", type: "pack", category: "meta",
    author: "TheDecipherist", stars: 496,
    url: "https://github.com/TheDecipherist/claude-code-mastery",
    tagline: "The complete guide: CLAUDE.md, hooks, skills, MCP servers, commands.",
    description: "A reference guide covering every corner of Claude Code: CLAUDE.md patterns, hooks, skills, MCP servers, and slash commands. Written as a learning resource with worked examples.",
    details: "More educational than installable — but the examples are genuinely useful and cover patterns most users never discover. Good complement to Anthropic's official docs.",
    uses: ["Learn what every Claude Code feature actually does", "Find worked examples of non-obvious hooks", "Understand how to compose CLAUDE.md + skills + commands"]
  },
  {
    id: 56, name: "win4r/openclaw-workspace", type: "skill", category: "productivity",
    author: "win4r", stars: 259,
    url: "https://github.com/win4r/openclaw-workspace",
    tagline: "Maintain AGENTS.md, SOUL.md, TOOLS.md, MEMORY.md, checklists.",
    description: "Skill for maintaining and optimizing OpenClaw workspace files: AGENTS.md, SOUL.md, TOOLS.md, MEMORY.md, plus checklists. Keeps the growing agent config from rotting over time.",
    details: "Addresses the 'my CLAUDE.md is 3000 lines of stale junk' problem. Proactively suggests consolidation, flags conflicting rules, and nudges you to retire obsolete entries.",
    uses: ["Audit a bloated CLAUDE.md / AGENTS.md", "Keep memory files coherent over months", "Detect contradictory instructions in agent config"]
  },
  {
    id: 57, name: "mxyhi/ok-skills", type: "pack", category: "meta",
    author: "mxyhi", stars: 209,
    url: "https://github.com/mxyhi/ok-skills",
    tagline: "Curated AI coding agent skills and AGENTS.md playbooks.",
    description: "A tightly curated skill library plus AGENTS.md playbooks, compatible with any SKILL.md-compatible agent (Codex, Claude Code, Cursor, OpenClaw). Emphasis on quality over quantity.",
    details: "Smaller than the mega-packs but each entry is vetted. Includes ready-made AGENTS.md files tuned for specific workflows (React dev, data eng, etc.).",
    uses: ["Start a new project with a proven AGENTS.md", "Cherry-pick individual high-quality skills", "See what 'good' looks like in a curated library"]
  },
  {
    id: 58, name: "vibeforge1111/vibeship-spawner-skills", type: "pack", category: "meta",
    author: "vibeforge1111", stars: 842,
    url: "https://github.com/vibeforge1111/vibeship-spawner-skills",
    tagline: "Skill directory of specialized agents — more than just md files.",
    description: "A skill directory for specialized agents that live in your terminal or IDE. More sophisticated than SKILL.md-only skills — includes runtime components, not just prompts.",
    details: "Entries are 'vibeships' — full agent personalities with tools, behaviors, and state, not just static prompts. Closer to a mini-framework than a skill pack.",
    uses: ["Spawn a specialized agent with its own tools", "Use an agent that maintains its own state across sessions", "Build a team of distinct specialized agents"]
  },
  {
    id: 59, name: "zhu1090093659/spec_driven_develop", type: "skill", category: "productivity",
    author: "zhu1090093659", stars: 653,
    url: "https://github.com/zhu1090093659/spec_driven_develop",
    tagline: "Spec-driven development skill for large complex tasks — platform agnostic.",
    description: "A platform-agnostic skill that automates the pre-development workflow for large complex tasks. Not a framework or runtime — a pure SKILL.md that runs anywhere.",
    details: "Focus is on getting specs right before writing code. Useful for ambitious features where the cost of miscommunication is high. Complements GitHub's spec-kit.",
    uses: ["Write a rigorous spec before starting a big feature", "Catch requirement gaps before implementation", "Run spec workshops with an agent as facilitator"]
  },
  {
    id: 60, name: "frmoretto/stream-coding", type: "skill", category: "meta",
    author: "frmoretto", stars: 87,
    url: "https://github.com/frmoretto/stream-coding",
    tagline: "Stream Coding — 10-20x velocity methodology (the anti-vibe-coding manifesto).",
    description: "A methodology for AI-accelerated development that pushes back against 'vibe coding'. Ships as a SKILL.md for Claude, Cursor, and Windsurf, plus a complete manifesto of the approach.",
    details: "Opinionated and polarizing. Emphasizes structure, checklists, and measured velocity over intuition. Worth reading even if you don't adopt it wholesale.",
    uses: ["Adopt a structured alternative to vibe coding", "Get measurable velocity improvements on long projects", "Use the manifesto as a team discussion starter"]
  },

  // ========== JEFFALLAN INDIVIDUAL SPECIALIST SKILLS ==========
  {
    id: 61, name: "angular-architect", type: "skill", category: "frontend",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/angular-architect",
    tagline: "Senior Angular architect — modern Angular 17+, signals, standalone components.",
    description: "Specialist skill for Angular architecture. Modern Angular 17+ idioms: signals, standalone components, control flow syntax, deferrable views, SSR with SSG. Knows the common traps of the Angular upgrade story.",
    details: "Angular evolves fast and generic TS skills are always behind. This one stays aligned with the current Angular team recommendations, including NgRx / signal store tradeoffs.",
    uses: ["Design a new Angular 17+ app with signals", "Migrate an older Angular app to standalone components", "Choose between NgRx, signal store, and Akita"]
  },
  {
    id: 62, name: "chaos-engineer", type: "skill", category: "devops",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/chaos-engineer",
    tagline: "Chaos engineering skill — failure injection, game days, blast radius.",
    description: "Specialist for chaos engineering. Designs failure injection experiments, game day runbooks, and blast-radius-bounded tests. Knows Netflix Chaos Monkey, Gremlin, LitmusChaos, and Chaos Mesh patterns.",
    details: "Emphasizes safety: hypothesis-driven experiments, explicit blast radius, abort criteria. Not 'break stuff for fun' — proper steady-state-first methodology.",
    uses: ["Design your first chaos experiment for a team", "Write a game day runbook for a quarterly drill", "Audit an existing chaos setup for safety"]
  },
  {
    id: 63, name: "cpp-pro", type: "skill", category: "engineering",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/cpp-pro",
    tagline: "Modern C++ expert — C++20/23, RAII, templates, concepts, coroutines.",
    description: "Deep C++ specialist with modern C++20/23 idioms: concepts, coroutines, ranges, modules, constexpr. Knows the common UB traps and the STL subtleties that bite in production.",
    details: "C++ is a rare skill for coding agents — most default to 'C++98 with vector'. This one gets modern idioms right. Pairs well with clangd-based tooling.",
    uses: ["Write a modern C++20 library with ranges and concepts", "Debug a subtle template specialization bug", "Port older C++ code to modern idioms"]
  },
  {
    id: 64, name: "embedded-systems", type: "skill", category: "hardware",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/embedded-systems",
    tagline: "Embedded/bare-metal specialist — ARM Cortex-M, RTOS, linker scripts.",
    description: "Specialist for bare-metal and RTOS embedded development on ARM Cortex-M and similar. Knows linker scripts, startup code, interrupt vectors, memory-mapped IO, DMA, and common RTOS (FreeRTOS, Zephyr).",
    details: "Generic coding skills assume a hosted OS. Embedded is different — memory is static, determinism matters, and debugging is hard. This skill knows the differences.",
    uses: ["Set up a new STM32 project with FreeRTOS", "Debug a deadlock in an ISR vs task interaction", "Write a linker script for a custom memory layout"]
  },
  {
    id: 65, name: "flutter-expert", type: "skill", category: "mobile",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/flutter-expert",
    tagline: "Flutter specialist — Riverpod, Bloc, build-mode performance, platform channels.",
    description: "Flutter mobile specialist covering state management (Riverpod, Bloc, Provider), build modes, platform channels, custom render objects, and performance tuning.",
    details: "Flutter is a dense framework with multiple blessed state management approaches and a lot of foot-guns. This skill knows which tradeoffs apply when.",
    uses: ["Pick the right state management for a new app", "Implement a native iOS/Android plugin via platform channels", "Profile and fix jank in a long scroll view"]
  },
  {
    id: 66, name: "game-developer", type: "skill", category: "gaming",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/game-developer",
    tagline: "Game development specialist — Unity, Unreal, game loops, ECS.",
    description: "Game development specialist covering Unity, Unreal, game loop design, entity component systems, asset pipelines, and performance budgets.",
    details: "Game dev has unique constraints (frame budgets, asset pipelines, platform cert) that generic skills miss. Covers both engines at a usable level, with depth on Unity.",
    uses: ["Design a gameplay loop for a new mobile game", "Pick between ECS and OOP for a given game", "Debug a frame-rate regression"]
  },
  {
    id: 67, name: "kotlin-specialist", type: "skill", category: "mobile",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/kotlin-specialist",
    tagline: "Kotlin expert — coroutines, multiplatform, Ktor, Jetpack Compose.",
    description: "Kotlin specialist with deep coverage of coroutines, Flow, Kotlin Multiplatform (KMP), Ktor, and Jetpack Compose. Knows the sharp edges between JVM-only and multiplatform Kotlin.",
    details: "Coroutines are where most Kotlin code goes wrong. This skill knows the Flow operators, structured concurrency rules, and KMP-specific limits.",
    uses: ["Design a Kotlin Multiplatform library with shared business logic", "Debug a coroutine leak in a production app", "Build a Jetpack Compose UI with proper state hoisting"]
  },
  {
    id: 68, name: "legacy-modernizer", type: "skill", category: "engineering",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/legacy-modernizer",
    tagline: "Legacy codebase modernization — characterization tests, strangler fig, incremental migration.",
    description: "Specialist for safely modernizing legacy codebases. Knows Michael Feathers' characterization test approach, strangler fig migration, and how to make changes without tests to rely on.",
    details: "Modernization is 80% avoiding regressions and 20% writing new code. This skill emphasizes the 80%. Works for COBOL, VB6, classic ASP, old Java/C#, and anything else that scares people.",
    uses: ["Start a modernization effort on a 20-year-old codebase", "Write characterization tests before a risky refactor", "Design a strangler fig migration plan"]
  },
  {
    id: 69, name: "playwright-expert", type: "skill", category: "testing",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/playwright-expert",
    tagline: "Playwright specialist — locators, trace viewer, auth state reuse, sharding.",
    description: "Deep specialist for Playwright E2E testing. Knows locator strategies, trace viewer, auth state reuse, parallelism + sharding, and flake mitigation patterns.",
    details: "E2E tests get bad fast without discipline. This skill knows the patterns that keep a suite healthy at scale (100s of tests, minutes not hours).",
    uses: ["Design a maintainable Playwright suite for a new app", "Cut a slow test suite runtime with sharding", "Debug flaky tests using trace viewer"]
  },
  {
    id: 70, name: "postgres-pro", type: "skill", category: "data",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/postgres-pro",
    tagline: "Postgres senior DBA — query plans, vacuum, replication, extensions.",
    description: "Senior Postgres specialist — query plan analysis, vacuum tuning, replication, partitioning, extensions (pgvector, pg_stat_statements, pg_trgm), JSON/JSONB idioms.",
    details: "Goes well beyond 'here's a SELECT query'. Understands autovacuum pathologies, planner estimation errors, and the operational side of Postgres.",
    uses: ["Diagnose a slow query via EXPLAIN ANALYZE", "Design a pgvector-backed semantic search", "Plan a zero-downtime Postgres major version upgrade"]
  },
  {
    id: 71, name: "rails-expert", type: "skill", category: "backend",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/rails-expert",
    tagline: "Ruby on Rails specialist — modern Rails 7+, Hotwire, Turbo, Stimulus.",
    description: "Ruby on Rails specialist covering modern Rails 7+, Hotwire (Turbo + Stimulus), Active Record idioms, and the convention-over-configuration worldview. Knows when to reach for service objects vs fat models.",
    details: "Rails conventions matter — fighting them produces ugly code. This skill knows where the happy path lies. Also handles upgrade guidance from older Rails versions.",
    uses: ["Scaffold a new Rails 7 app with Hotwire", "Diagnose an N+1 via includes/preload/eager_load tradeoffs", "Upgrade a Rails 5 app to Rails 7"]
  },
  {
    id: 72, name: "salesforce-developer", type: "skill", category: "backend",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/salesforce-developer",
    tagline: "Apex, SOQL, LWC, Flow — Salesforce-specific idioms and governor limits.",
    description: "Salesforce development specialist — Apex, SOQL, Lightning Web Components (LWC), Flow, and the governor limits that break naive code. Knows the bulkification patterns and test data requirements.",
    details: "Salesforce is a world of its own: Apex isn't Java, SOQL isn't SQL, and governor limits silently kill code. This skill knows all of it.",
    uses: ["Write a bulkified Apex trigger", "Build an LWC component with proper wire adapters", "Debug a governor limit exception in production"]
  },
  {
    id: 73, name: "shopify-expert", type: "skill", category: "backend",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/shopify-expert",
    tagline: "Shopify platform specialist — themes, apps, GraphQL Admin API, metafields.",
    description: "Shopify development specialist covering themes (Liquid, sections, OS 2.0), apps (Node/Rails), Storefront and Admin GraphQL APIs, checkout extensibility, and metafields.",
    details: "Shopify has two distinct worlds (themes vs apps) and they use different APIs and deployment models. This skill navigates both and knows the merchant-side quirks.",
    uses: ["Build a new Shopify app with proper OAuth and webhooks", "Customize a theme with section blocks in OS 2.0", "Migrate off deprecated REST endpoints"]
  },
  {
    id: 74, name: "spring-boot-engineer", type: "skill", category: "backend",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/spring-boot-engineer",
    tagline: "Spring Boot specialist — Spring 6, reactive, Spring Data, Spring Security.",
    description: "Modern Spring Boot specialist covering Spring 6 / Boot 3, WebFlux reactive, Spring Data JPA/R2DBC, Spring Security, and Spring Cloud. Knows the configuration property conventions and auto-configuration machinery.",
    details: "Spring is dense and its magic is hard to debug. This skill knows where the magic is happening and how to override or replace it. Covers both servlet and reactive stacks.",
    uses: ["Design a new Spring Boot 3 microservice", "Debug a Spring Security config that's silently denying requests", "Convert a blocking service to reactive WebFlux"]
  },
  {
    id: 75, name: "swift-expert", type: "skill", category: "mobile",
    author: "Jeffallan", stars: null,
    url: "https://github.com/Jeffallan/claude-skills/tree/main/skills/swift-expert",
    tagline: "Swift specialist — modern Swift 6, concurrency, SwiftUI, strict concurrency checking.",
    description: "Swift specialist with modern Swift 6 idioms: strict concurrency, Sendable, actor isolation, SwiftUI, Swift Testing. Knows the iOS 17+ APIs and the Swift concurrency migration story.",
    details: "Swift concurrency is where new bugs live. This skill knows the isolation rules, the Sendable requirements, and how to fix the 50-warning wall you get when enabling strict checking.",
    uses: ["Migrate a Swift 5 app to Swift 6 strict concurrency", "Design a SwiftUI app with proper @Observable state", "Debug a data race in an actor-isolated method"]
  },

  // ========== MORE SCIENTIFIC & RESEARCH ==========
  {
    id: 76, name: "K-Dense-AI scientific-skills: statsmodels", type: "skill", category: "data",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/statsmodels",
    tagline: "Classical statistics skill — regression, time series, hypothesis tests.",
    description: "Skill for statsmodels, the classical statistics library that fills the gaps scikit-learn leaves. Regression with proper inference, time series (ARIMA, state space), survival analysis, and full hypothesis testing suite.",
    details: "Where scikit-learn says 'here's a model', statsmodels says 'here are the p-values, standard errors, and diagnostics'. This skill knows when you need that and when you don't.",
    uses: ["Run an OLS regression with proper diagnostics", "Fit an ARIMA model with model selection", "Perform a full hypothesis test with appropriate corrections"]
  },
  {
    id: 77, name: "K-Dense-AI scientific-skills: pymc", type: "skill", category: "data",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/pymc",
    tagline: "Bayesian modeling skill — PyMC probabilistic programming.",
    description: "Skill for PyMC, the modern Bayesian probabilistic programming library. Covers model specification, MCMC sampling, variational inference, diagnostics (R-hat, ESS), and posterior predictive checks.",
    details: "Bayesian modeling is powerful but easy to do wrong (non-identifiable models, bad priors, convergence failures). This skill knows the canonical workflow and the common pitfalls.",
    uses: ["Fit a hierarchical regression model", "Diagnose a model that won't converge", "Run prior/posterior predictive checks for validation"]
  },
  {
    id: 78, name: "K-Dense-AI scientific-skills: shap", type: "skill", category: "data",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/shap",
    tagline: "Model explainability skill using SHAP values.",
    description: "Skill for SHAP (SHapley Additive exPlanations) — feature attribution for any ML model. Covers TreeExplainer, DeepExplainer, KernelExplainer, and the plot family (summary, waterfall, force).",
    details: "Explainability is tricky: wrong explainer gives misleading results, and interpretation requires care. This skill knows which explainer fits which model and how to avoid over-interpreting.",
    uses: ["Explain an xgboost model's predictions", "Debug why a production model misclassifies a specific case", "Generate a feature-importance report for stakeholders"]
  },
  {
    id: 79, name: "K-Dense-AI scientific-skills: sympy", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/sympy",
    tagline: "Symbolic mathematics skill for SymPy.",
    description: "Skill for SymPy — symbolic mathematics in Python. Covers algebraic manipulation, calculus (derivatives, integrals, limits), linear algebra, equation solving, and LaTeX rendering of results.",
    details: "Useful when you need exact math, not numerical approximations. Also handy for physics and engineering where you want to derive formulas before coding them up.",
    uses: ["Derive an analytical solution to a physics problem", "Verify a hand-derived integral symbolically", "Simplify a gnarly algebraic expression for publication"]
  },
  {
    id: 80, name: "K-Dense-AI scientific-skills: polars", type: "skill", category: "data",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/polars",
    tagline: "Polars DataFrame skill — fast Rust-backed alternative to pandas.",
    description: "Skill for Polars, the Rust-backed DataFrame library that's 10-100x faster than pandas for many operations. Covers lazy vs eager API, expression syntax, and migration from pandas.",
    details: "Polars has its own idioms — chaining .with_columns() expressions rather than mutating dataframes. Skill knows the idiomatic patterns and the pandas traps to avoid bringing along.",
    uses: ["Migrate a slow pandas pipeline to Polars", "Process a multi-GB CSV without loading it all in memory", "Build a lazy query that optimizes across operations"]
  },

  // ========== INDIVIDUAL NICHE SKILLS ==========
  {
    id: 81, name: "wasp-lang/open-saas", type: "pack", category: "full-stack",
    author: "wasp-lang", stars: 14005,
    url: "https://github.com/wasp-lang/open-saas",
    tagline: "Free SaaS boilerplate with AI-tailored AGENTS.md, skills, and plugins.",
    description: "A 100% free modern JS SaaS boilerplate (React, NodeJS, Prisma) with full auth (email/Google/GitHub/Slack/MS), email, background jobs, landing page, payments (Stripe/Polar), Shadcn UI, S3 upload. Ships with tailored AGENTS.md and Claude Code plugin.",
    details: "Not a skill pack proper — it's a starter kit where the skills and agent config are first-class. If you're launching a SaaS, you get the Claude-ready config for free.",
    uses: ["Bootstrap a new SaaS with auth and payments pre-wired", "Use the AGENTS.md as a reference for production-ready config", "Steal the skill bundle for your own React+Node project"]
  },
  {
    id: 82, name: "microsoft/skills", type: "pack", category: "official",
    author: "microsoft", stars: 1990,
    url: "https://github.com/microsoft/skills",
    tagline: "Microsoft's skills, MCP servers, custom agents, and AGENTS.md for grounding coding agents.",
    description: "Microsoft's official repo for skills, MCP servers, custom agents, and AGENTS.md files for their SDKs. Positioned as the Microsoft ecosystem counterpart to anthropics/skills.",
    details: "Covers .NET, TypeScript, Azure, and the broader Microsoft dev ecosystem. Skills are tuned for Microsoft tools but many are generic enough to be useful elsewhere.",
    uses: ["Ground an agent on a .NET codebase", "Use Microsoft's official MCP servers for Azure", "Get Microsoft-specific best practices baked in"]
  },
  {
    id: 83, name: "LukeRenton/explore-claude-code", type: "tool", category: "meta",
    author: "LukeRenton", stars: 207,
    url: "https://github.com/LukeRenton/explore-claude-code",
    tagline: "Interactive IDE-style docs for Claude Code features.",
    description: "An interactive, IDE-style documentation browser for Claude Code. Lets you explore commands, MCP, skills, and CLAUDE.md patterns by clicking through like you would a codebase.",
    details: "More approachable than raw docs — you can 'jump to definition' across concepts. Helpful for learning Claude Code features you didn't know existed.",
    uses: ["Learn Claude Code features interactively", "Find a half-remembered command you saw once", "Onboard a teammate onto Claude Code"]
  },
  {
    id: 84, name: "aaron-he-zhu/seo-geo-claude-skills", type: "pack", category: "marketing",
    author: "aaron-he-zhu", stars: null,
    url: "https://github.com/aaron-he-zhu/seo-geo-claude-skills",
    tagline: "20 SEO & GEO skills — keyword research, content writing, technical audits, rank tracking.",
    description: "A focused pack of 20 SEO and GEO (Generative Engine Optimization) skills for Claude Code, Cursor, Codex, and 35+ other agents. Covers keyword research, content writing, technical audits, rank tracking, CORE-EEAT and CITE frameworks.",
    details: "Specifically covers GEO — optimizing for generative search engines — which most marketing skills ignore. The CITE framework is distinctive and worth learning even if you don't use the skill.",
    uses: ["Audit a site for generative engine citability", "Build a keyword research workflow for a new niche", "Write content that satisfies both E-E-A-T and GEO"]
  },
  {
    id: 85, name: "dashhuang/openclaw-chat-history-import", type: "skill", category: "memory",
    author: "dashhuang", stars: 126,
    url: "https://github.com/dashhuang/openclaw-chat-history-import",
    tagline: "Import external chat history into archive and MEMORY.md workflows.",
    description: "Skill for importing external chat history (from ChatGPT, Claude.ai, etc.) into a local archive, daily memory files, and MEMORY.md workflows. Preserves conversational context across tool switches.",
    details: "Handles the format conversion + conflict resolution problem. Useful if you're migrating from web Claude to Claude Code, or combining sessions from multiple tools.",
    uses: ["Import ChatGPT history into your Claude Code memory", "Archive a completed project's sessions", "Build a searchable cross-tool conversation archive"]
  },
  {
    id: 86, name: "asgeirtj/system_prompts_leaks", type: "pack", category: "research",
    author: "asgeirtj", stars: 37974,
    url: "https://github.com/asgeirtj/system_prompts_leaks",
    tagline: "Extracted system prompts from ChatGPT, Claude, Gemini, Grok, Perplexity and more.",
    description: "A curated collection of extracted system prompts from every major AI assistant: ChatGPT (GPT-5.4, 5.3, Codex), Claude (Opus 4.6, Sonnet 4.6, Claude Code), Gemini (3.1 Pro, 3 Flash, CLI), Grok (4.2, 4), Perplexity, and others.",
    details: "Not installable as a skill, but invaluable as reference material when you're designing your own system prompts or understanding how frontier assistants are steered. Updated regularly.",
    uses: ["Study how ChatGPT vs Claude handle the same task differently", "Design your own system prompts informed by what works", "Audit your prompts against frontier baselines"]
  },
  {
    id: 87, name: "CherryHQ/cherry-studio", type: "tool", category: "productivity",
    author: "CherryHQ", stars: 43182,
    url: "https://github.com/CherryHQ/cherry-studio",
    tagline: "AI productivity studio with smart chat, autonomous agents, and 300+ assistants.",
    description: "An AI productivity studio with unified access to frontier LLMs (Claude, GPT, Gemini, local models). Includes smart chat, autonomous agents, and a library of 300+ pre-built assistants.",
    details: "Positioned as a multi-provider alternative to single-vendor chat apps. If you want Claude plus GPT plus Gemini side-by-side with shared state, this is it. Includes skill-like assistant definitions.",
    uses: ["Use Claude alongside GPT and Gemini in one UI", "Run autonomous agents across multiple providers", "Pick from 300+ pre-built assistants instead of authoring your own"]
  },
  {
    id: 88, name: "shareAI-lab/learn-claude-code", type: "tool", category: "meta",
    author: "shareAI-lab", stars: 50490,
    url: "https://github.com/shareAI-lab/learn-claude-code",
    tagline: "Nano Claude Code–like agent harness built from scratch — learn by reading.",
    description: "A minimal from-scratch implementation of a Claude-Code-like agent harness in Bash. Built as a learning resource — readable in an afternoon and instructive about how the real Claude Code works under the hood.",
    details: "Not for production use. The value is education: seeing the core loop, tool dispatch, and prompt composition in ~1000 lines of bash makes the real thing much less mysterious.",
    uses: ["Understand how Claude Code works internally", "Teach yourself the agent harness pattern", "Build your own minimal agent harness"]
  },
  {
    id: 89, name: "code-yeongyu/oh-my-openagent", type: "tool", category: "meta",
    author: "code-yeongyu", stars: 49780,
    url: "https://github.com/code-yeongyu/oh-my-openagent",
    tagline: "Agent harness — previously oh-my-opencode — opinionated Claude Code alternative.",
    description: "An opinionated agent harness that positions itself as the best-in-class alternative for local agent use. Previously known as oh-my-opencode. Includes skill support, plugin architecture, and theme customization.",
    details: "If Claude Code's defaults don't fit you, this is the most popular alternative with similar primitives. Plugin-style extension means community skills and themes are first-class.",
    uses: ["Try a different agent harness without losing your skills", "Customize your agent's UX more aggressively", "Run agents locally with a different philosophy"]
  },
  {
    id: 90, name: "farion1231/cc-switch", type: "tool", category: "productivity",
    author: "farion1231", stars: 41393,
    url: "https://github.com/farion1231/cc-switch",
    tagline: "Cross-platform assistant tool for Claude Code, Codex, OpenCode, Gemini CLI.",
    description: "A cross-platform desktop all-in-one assistant tool for managing Claude Code, Codex, OpenCode, OpenClaw, and Gemini CLI from one UI. Switch between tools without re-configuring.",
    details: "Solves the 'I use five different CLI agents and my config is fragmented' problem. Presents a unified config and a single entry point, with tool-specific features preserved.",
    uses: ["Switch between Claude Code and Codex without friction", "Manage config for multiple agents in one place", "Run the right tool for the task without remembering commands"]
  },
  {
    id: 91, name: "JimLiu/baoyu-skills", type: "pack", category: "productivity",
    author: "JimLiu", stars: 13768,
    url: "https://github.com/JimLiu/baoyu-skills",
    tagline: "High-starred general-purpose skill collection from Baoyu.",
    description: "A general-purpose skill pack by JimLiu (Baoyu). 13k+ stars suggest substantial community traction. Covers everyday coding workflows without the 'one skill per framework' flood.",
    details: "More about curated, broadly-applicable skills than niche specialists. A good default library for users who don't want to pick from a 1000-skill mega-pack.",
    uses: ["Start with a curated default library", "Get solid general-purpose skills without noise", "Use as a base layer alongside specialized packs"]
  },
  {
    id: 92, name: "K-Dense-AI scientific-skills: fluidsim", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/fluidsim",
    tagline: "CFD / fluid dynamics simulation skill.",
    description: "Skill wrapping fluidsim and related CFD tooling for fluid dynamics simulations. Covers grid setup, boundary conditions, numerical scheme selection, and postprocessing.",
    details: "CFD is a niche domain where getting details wrong silently produces wrong answers. This skill embeds the standard checks (Courant number, grid convergence, energy conservation) that real CFD work requires.",
    uses: ["Set up a 2D channel flow simulation", "Debug a diverging simulation", "Perform grid convergence studies"]
  },
  {
    id: 93, name: "K-Dense-AI scientific-skills: deepchem", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/deepchem",
    tagline: "Deep learning for chemistry, biology, and materials science.",
    description: "Skill for DeepChem — deep learning for the life sciences. Molecular featurization, graph neural networks, MoleculeNet datasets, protein-ligand models, and materials property prediction.",
    details: "Bridges chemistry and deep learning — not just 'use pytorch on molecules', but the right featurizations, splits, and metrics that produce publishable results.",
    uses: ["Train a molecular property prediction model", "Featurize molecules with RDKit + DeepChem featurizers", "Benchmark against MoleculeNet leaderboards"]
  },
  {
    id: 94, name: "K-Dense-AI scientific-skills: diffdock", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/diffdock",
    tagline: "DiffDock skill for diffusion-based protein-ligand docking.",
    description: "Skill for DiffDock, the diffusion-model-based protein-ligand docking tool. Handles protein preparation, ligand input, ensemble generation, and confidence scoring.",
    details: "Diffusion-based docking is state-of-the-art for blind docking and this skill knows the right preprocessing (pocket selection, protonation, protein relaxation) to get useful predictions.",
    uses: ["Dock a small molecule library against a target protein", "Generate pose ensembles for virtual screening", "Compare DiffDock outputs to AutoDock baselines"]
  },
  {
    id: 95, name: "K-Dense-AI scientific-skills: qutip", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/qutip",
    tagline: "Quantum optics toolbox for open quantum system simulations.",
    description: "Skill for QuTiP (Quantum Toolbox in Python) — the standard library for simulating open quantum systems. Lindblad master equations, Monte Carlo wavefunction, time-dependent Hamiltonians, and quantum control.",
    details: "QuTiP is the go-to for quantum optics and atomic physics research. This skill knows the numerical traps (operator dimension explosion, time-step choice for stiff Hamiltonians) and the correct idioms.",
    uses: ["Simulate a driven dissipative two-level system", "Model an ion trap with Lindblad dynamics", "Optimize a quantum control pulse"]
  },
  {
    id: 96, name: "K-Dense-AI scientific-skills: torch-geometric", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/torch-geometric",
    tagline: "PyTorch Geometric skill for graph neural networks.",
    description: "Skill for PyTorch Geometric — graph neural networks on molecules, social networks, knowledge graphs, and 3D point clouds. Covers data loading, message passing, pooling, and benchmark datasets.",
    details: "GNN code is easy to get subtly wrong (edge direction, batching, pooling). This skill knows the PyG-specific idioms and common benchmarks (OGB, TUDataset).",
    uses: ["Train a GNN for molecular property prediction", "Implement a custom message passing layer", "Benchmark against OGB leaderboards"]
  },
  {
    id: 97, name: "K-Dense-AI scientific-skills: pytorch-lightning", type: "skill", category: "science",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/pytorch-lightning",
    tagline: "PyTorch Lightning skill — structured training loops, callbacks, multi-GPU.",
    description: "Skill for PyTorch Lightning — structuring PyTorch training loops, callbacks, multi-GPU/multi-node training, logging, and checkpointing. Knows the current Lightning API (not the legacy one).",
    details: "Lightning is structured but its API has evolved; old StackOverflow answers are usually wrong now. This skill tracks the current blessed patterns.",
    uses: ["Convert a raw PyTorch training script to Lightning", "Set up multi-GPU training with DDP", "Wire up Weights & Biases logging via callbacks"]
  },
  {
    id: 98, name: "K-Dense-AI scientific-skills: hypothesis-generation", type: "skill", category: "research",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/hypothesis-generation",
    tagline: "Hypothesis generation skill — turn observations into testable research hypotheses.",
    description: "A scientific research skill for generating testable hypotheses from observations, preliminary data, or literature. Applies Popperian falsifiability, operationalization, and power considerations.",
    details: "Bridges 'I noticed something interesting' and 'here's a study design'. Enforces explicit predictions and measurable outcomes — the opposite of hand-wavy post-hoc storytelling.",
    uses: ["Turn pilot data into a pre-registered hypothesis", "Brainstorm hypotheses for a new research direction", "Evaluate whether a hypothesis is actually falsifiable"]
  },
  {
    id: 99, name: "K-Dense-AI scientific-skills: literature-review", type: "skill", category: "research",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/literature-review",
    tagline: "Systematic literature review skill — PRISMA-style workflows.",
    description: "A skill for conducting systematic literature reviews with PRISMA-style discipline. Search strategy design, inclusion/exclusion criteria, screening, data extraction, and synthesis.",
    details: "Prevents the failure mode of cherry-picked references. Forces an explicit search strategy, screening log, and reproducible synthesis — publishable-grade process.",
    uses: ["Conduct a real systematic review, not a vibes summary", "Design a search strategy across multiple databases", "Produce a PRISMA flow diagram for a publication"]
  },
  {
    id: 100, name: "K-Dense-AI scientific-skills: scientific-writing", type: "skill", category: "research",
    author: "K-Dense-AI", stars: null,
    url: "https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills/scientific-writing",
    tagline: "Scientific writing skill — IMRaD structure, domain-appropriate tone, citation discipline.",
    description: "A scientific writing skill covering IMRaD structure, domain-appropriate tone, figure/table design, and citation discipline. Knows the conventions of different fields (physics vs biology vs CS vs medicine).",
    details: "Generic 'writing' skills produce papers that get desk-rejected. This one knows what reviewers expect and the field-specific norms that separate publishable from not.",
    uses: ["Draft an IMRaD research paper", "Revise a rejected paper against reviewer feedback", "Produce a domain-appropriate methods section"]
  }
];

window.CATEGORIES = [
  { key: "all", label: "All", color: "#6366f1" },
  { key: "official", label: "Official", color: "#0ea5e9" },
  { key: "meta", label: "Meta/Framework", color: "#8b5cf6" },
  { key: "engineering", label: "Engineering", color: "#10b981" },
  { key: "full-stack", label: "Full-Stack", color: "#14b8a6" },
  { key: "frontend", label: "Frontend", color: "#f59e0b" },
  { key: "backend", label: "Backend", color: "#f97316" },
  { key: "mobile", label: "Mobile", color: "#ec4899" },
  { key: "devops", label: "DevOps/Cloud", color: "#3b82f6" },
  { key: "security", label: "Security", color: "#ef4444" },
  { key: "data", label: "Data/ML", color: "#a855f7" },
  { key: "science", label: "Science", color: "#06b6d4" },
  { key: "research", label: "Research", color: "#0891b2" },
  { key: "testing", label: "Testing", color: "#84cc16" },
  { key: "productivity", label: "Productivity", color: "#eab308" },
  { key: "memory", label: "Memory/Context", color: "#d946ef" },
  { key: "orchestration", label: "Orchestration", color: "#7c3aed" },
  { key: "automation", label: "Automation", color: "#22c55e" },
  { key: "hardware", label: "Hardware/Robotics", color: "#64748b" },
  { key: "gaming", label: "Gaming", color: "#e11d48" },
  { key: "marketing", label: "Marketing", color: "#fb923c" }
];
