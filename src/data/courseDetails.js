/**
 * courseDetails.js
 * Comprehensive mock curriculum, module outlines, and lesson content
 * for all six subjects in the Canvas2Code platform.
 */

export const courseCurriculumData = {
  ai: {
    syllabus: 'Foundations of artificial intelligence, heuristics, knowledge representation, machine learning paradigms, and neural networks.',
    prerequisites: 'Data Structures, Discrete Mathematics, Linear Algebra',
    credits: 4,
    totalHours: '48 Hours',
    modules: [
      {
        id: 'ai-m1',
        title: 'Module 1: Foundations & Intelligent Agents',
        description: 'Core concepts of rationality, state-space formulations, and search strategies.',
        lessons: [
          {
            id: 'ai-l1',
            title: '1.1 Introduction to AI & Agent Environments',
            duration: '14 min',
            type: 'video',
            completed: true,
            summary: 'Understanding the PEAS (Performance, Environment, Actuators, Sensors) framework and classifying fully vs. partially observable environments.',
            notes: 'Rational agents act to maximize expected performance based on percept sequences and built-in knowledge. Environmental dimensions include discrete vs continuous, episodic vs sequential, and deterministic vs stochastic.',
            exercise: 'Map a self-driving vehicle and an automated chess program onto the PEAS classification matrix.'
          },
          {
            id: 'ai-l2',
            title: '1.2 State Space Search Formulations',
            duration: '22 min',
            type: 'reading',
            completed: true,
            summary: 'Formulating search problems with initial states, actions, transition models, goal tests, and path cost functions.',
            notes: 'Uninformed search algorithms (BFS, DFS, Uniform Cost) explore without domain-specific guidance. BFS guarantees optimality when step costs are identical; UCS guarantees optimality with positive costs.',
            exercise: 'Calculate the maximum frontier size for a branching factor b=4 and depth d=6.'
          },
          {
            id: 'ai-l3',
            title: '1.3 Heuristic Search & A* Optimality',
            duration: '28 min',
            type: 'interactive',
            completed: true,
            summary: 'Admissible and consistent heuristics. Proving that A* graph search finds the optimal path without reopening closed nodes.',
            notes: 'A* evaluates nodes by f(n) = g(n) + h(n). If h(n) is admissible (never overestimates) and consistent (obeys triangle inequality), tree search and graph search are strictly optimal.',
            exercise: 'Implement Manhattan distance heuristic on the 8-puzzle problem and compare expanded nodes against Euclidean distance.'
          }
        ]
      },
      {
        id: 'ai-m2',
        title: 'Module 2: Knowledge Representation & Logic',
        description: 'First-order logic, inference engines, and ontology construction.',
        lessons: [
          {
            id: 'ai-l4',
            title: '2.1 Propositional & First-Order Predicate Logic',
            duration: '18 min',
            type: 'video',
            completed: true,
            summary: 'Syntax, semantics, quantifiers, and inference using resolution refutation and unification.',
            notes: 'First-order logic incorporates objects, relations, and functions. Skolemization converts existential quantifiers into Skolem constants/functions for Conjunctive Normal Form (CNF) resolution.',
            exercise: 'Convert natural language statements about academic prerequisites into First-Order Predicate sentences.'
          },
          {
            id: 'ai-l5',
            title: '2.2 Semantic Networks & Knowledge Graphs',
            duration: '24 min',
            type: 'reading',
            completed: true,
            summary: 'Graph-structured knowledge representations, RDF triples, and reasoning over relational entities.',
            notes: 'Knowledge graphs represent facts as (Subject, Predicate, Object) triples. Graph embeddings like TransE map entities and relations to continuous vector spaces.',
            exercise: 'Formulate an RDF schema for college course prerequisite dependencies.'
          }
        ]
      },
      {
        id: 'ai-m3',
        title: 'Module 3: Machine Learning & Neural Networks',
        description: 'Supervised classification, backpropagation, and deep transformer architectures.',
        lessons: [
          {
            id: 'ai-l6',
            title: '3.1 Supervised vs. Unsupervised Learning Paradigms',
            duration: '20 min',
            type: 'video',
            completed: true,
            summary: 'Loss functions, gradient descent optimization, bias-variance tradeoff, and regularized regression.',
            notes: 'Supervised learning maps inputs x to labels y using empirical risk minimization. Regularization (L1 Lasso, L2 Ridge) constrains model capacity to prevent overfitting.',
            exercise: 'Compute the gradient of Mean Squared Error with respect to weight matrix W.'
          },
          {
            id: 'ai-l7',
            title: '3.2 Multi-Layer Perceptrons & Backpropagation',
            duration: '32 min',
            type: 'interactive',
            completed: false,
            summary: 'Forward activation, non-linear activation functions (ReLU, GELU), and the chain rule of calculus.',
            notes: 'Backpropagation propagates error gradients from the output layer back through hidden layers via tensor contraction of Jacobians.',
            exercise: 'Derive the partial derivative of cross-entropy loss with softmax activation.'
          },
          {
            id: 'ai-l8',
            title: '3.3 Modern Attention Mechanisms & Transformers',
            duration: '35 min',
            type: 'reading',
            completed: false,
            summary: 'Scaled dot-product attention, multi-head projections, and sequence-to-sequence autoregressive models.',
            notes: 'Attention(Q, K, V) = softmax(Q K^T / sqrt(d_k)) V. Positional encodings provide order awareness without recurrence or convolution.',
            exercise: 'Calculate query-key attention scores for a 4-token sequence with embedding dimension d=64.'
          }
        ]
      }
    ]
  },

  os: {
    syllabus: 'Kernel architectures, multi-threading, concurrency primitives, memory management, and file system implementations.',
    prerequisites: 'Computer Organization & Architecture, C Programming',
    credits: 4,
    totalHours: '45 Hours',
    modules: [
      {
        id: 'os-m1',
        title: 'Module 1: Kernel Architecture & Process Management',
        description: 'System calls, hardware interrupts, process control blocks, and CPU scheduling.',
        lessons: [
          {
            id: 'os-l1',
            title: '1.1 System Calls & Dual-Mode Execution',
            duration: '16 min',
            type: 'video',
            completed: true,
            summary: 'Transitioning between user mode and kernel supervisor mode using trap instructions and interrupt vector tables.',
            notes: 'Dual-mode operation protects OS memory from faulty user processes. Privileged instructions (I/O, timer reset, base-limit register update) trigger hardware traps when invoked in user mode.',
            exercise: 'Trace the path of a read() system call from user C library to kernel disk buffer.'
          },
          {
            id: 'os-l2',
            title: '1.2 Process Control Blocks & Context Switching',
            duration: '22 min',
            type: 'reading',
            completed: true,
            summary: 'Process state transitions, register saves, memory descriptors, and scheduler dispatch latency.',
            notes: 'The PCB stores PID, register state (PC, SP, general purpose), memory allocation, open file descriptors, and scheduling priority. Context switching saves outgoing state and loads incoming state.',
            exercise: 'Calculate CPU utilization given 12ms average burst and 1.5ms context switch overhead.'
          },
          {
            id: 'os-l3',
            title: '1.3 Preemptive CPU Scheduling Algorithms',
            duration: '26 min',
            type: 'interactive',
            completed: true,
            summary: 'Round Robin, Shortest Remaining Time First (SRTF), and Multi-Level Feedback Queues (MLFQ).',
            notes: 'MLFQ dynamically adjusts priority based on observed behavior: I/O bound jobs remain in high-priority queues, while compute-heavy jobs demote to lower-priority round-robin queues.',
            exercise: 'Simulate Round Robin with time quantum q=4 on 4 concurrent processes and compute average turnaround time.'
          }
        ]
      },
      {
        id: 'os-m2',
        title: 'Module 2: Concurrency, Deadlocks & Synchronization',
        description: 'Critical sections, mutexes, semaphores, and deadlock prevention.',
        lessons: [
          {
            id: 'os-l4',
            title: '2.1 Race Conditions & Critical Section Primitives',
            duration: '24 min',
            type: 'video',
            completed: true,
            summary: 'Mutual exclusion, progress, and bounded waiting requirements using Peterson algorithm and atomic test-and-set.',
            notes: 'Hardware primitives like Compare-and-Swap (CAS) enable lock-free data structures and spinlocks in kernel code.',
            exercise: 'Implement a thread-safe circular buffer with mutex and condition variables.'
          },
          {
            id: 'os-l5',
            title: '2.2 Semaphores, Monitors & Classic IPC Problems',
            duration: '30 min',
            type: 'reading',
            completed: false,
            summary: 'Counting semaphores applied to Producer-Consumer, Readers-Writers, and Dining Philosophers problems.',
            notes: 'Monitors encapsulate shared state with condition variables (wait, signal), avoiding raw semaphore misuse.',
            exercise: 'Write pseudo-code for Writer-Preference Readers-Writers lock without starvation.'
          },
          {
            id: 'os-l6',
            title: '2.3 Deadlock Avoidance & Banker Algorithm',
            duration: '25 min',
            type: 'interactive',
            completed: false,
            summary: 'Coffman four conditions, resource-allocation graphs, and the Banker algorithm for safe state verification.',
            notes: 'The four necessary conditions for deadlock are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.',
            exercise: 'Execute Banker algorithm safety check on a 5-process 3-resource matrix.'
          }
        ]
      },
      {
        id: 'os-m3',
        title: 'Module 3: Virtual Memory & File Systems',
        description: 'Paging, TLB, page replacement policies, and disk inode structures.',
        lessons: [
          {
            id: 'os-l7',
            title: '3.1 Paging, TLB & Page Replacement Policies',
            duration: '28 min',
            type: 'interactive',
            completed: false,
            summary: 'Multi-level page tables, translation lookaside buffers (TLB), LRU, and clock replacement algorithms.',
            notes: 'Effective Memory Access Time (EMAT) depends heavily on TLB hit ratio: EMAT = HitRatio * (TLB + Mem) + (1 - HitRatio) * (TLB + 2*Mem).',
            exercise: 'Compute page faults for reference string using FIFO vs LRU with 3 physical frames.'
          }
        ]
      }
    ]
  },

  web: {
    syllabus: 'Modern full-stack web applications, React component state, asynchronous architectures, REST APIs, and client-side performance.',
    prerequisites: 'Core Programming, Basic HTML/CSS',
    credits: 4,
    totalHours: '50 Hours',
    modules: [
      {
        id: 'web-m1',
        title: 'Module 1: Modern Frontend Architecture & React',
        description: 'Component lifecycles, virtual DOM reconciliation, and semantic layouts.',
        lessons: [
          {
            id: 'web-l1',
            title: '1.1 Semantic HTML5, CSS Grid & Responsive Typography',
            duration: '15 min',
            type: 'video',
            completed: true,
            summary: 'Accessible landmarks, CSS custom properties, fluid clamping, and modern grid template areas.',
            notes: 'Using CSS clamp() and variables enables responsive typography without media query bloat. Semantic landmarks ensure high screen reader compatibility.',
            exercise: 'Build a two-column card layout with fluid CSS grid and automatic minmax wrapping.'
          },
          {
            id: 'web-l2',
            title: '1.2 Modern JavaScript (ES6+), Event Loops & Async/Await',
            duration: '25 min',
            type: 'reading',
            completed: true,
            summary: 'Microtask vs macrotask execution, closures, promises, destructuring, and functional pipelines.',
            notes: 'Promise resolution jobs are queued in the microtask queue, executing immediately after the current script stack completes.',
            exercise: 'Write an asynchronous retry function with exponential backoff and cancellation tokens.'
          },
          {
            id: 'web-l3',
            title: '1.3 Component-Driven Architecture with React',
            duration: '30 min',
            type: 'interactive',
            completed: true,
            summary: 'JSX transformations, props contracts, unidirectional data flow, and pure rendering principles.',
            notes: 'React components are pure functions of props and state. Side effects must reside inside useEffect or event callbacks.',
            exercise: 'Build an interactive expandable accordion component with keyboard accessibility.'
          }
        ]
      },
      {
        id: 'web-m2',
        title: 'Module 2: State Management & Custom Hooks',
        description: 'Managing complex application state, memoization, and custom hooks.',
        lessons: [
          {
            id: 'web-l4',
            title: '2.1 React State, Reducers & Context API',
            duration: '28 min',
            type: 'video',
            completed: true,
            summary: 'useReducer for complex state transitions and React Context for dependency injection without prop drilling.',
            notes: 'Pairing useReducer with React Context creates an atomic store pattern ideal for modular dashboard applications.',
            exercise: 'Refactor multiple useState calls into a single reducer managing filter, sort, and pagination.'
          },
          {
            id: 'web-l5',
            title: '2.2 Custom Hooks & Reusable Logic Encapsulation',
            duration: '22 min',
            type: 'interactive',
            completed: true,
            summary: 'Extracting data fetching, local storage synchronization, and window dimension listeners into custom hooks.',
            notes: 'Custom hooks allow stateful logic composition without HOCs or render-prop pyramids.',
            exercise: 'Write a useLocalStorage hook with JSON parsing, error boundaries, and cross-tab storage event syncing.'
          },
          {
            id: 'web-l6',
            title: '2.3 Performance Optimization with useMemo & useCallback',
            duration: '20 min',
            type: 'reading',
            completed: true,
            summary: 'Avoiding unnecessary re-renders, profiling components, and stable reference equality.',
            notes: 'useMemo caches expensive calculations between renders; useCallback memoizes callback references for memoized children.',
            exercise: 'Profile a list of 500 items and eliminate re-renders using React.memo and useCallback.'
          }
        ]
      },
      {
        id: 'web-m3',
        title: 'Module 3: Full-Stack Integration & Deployment',
        description: 'RESTful API consumption, security, client-side caching, and bundle optimization.',
        lessons: [
          {
            id: 'web-l7',
            title: '3.1 RESTful API Design & HTTP Semantics',
            duration: '20 min',
            type: 'video',
            completed: true,
            summary: 'Status codes, idempotency of GET/PUT/DELETE, resource URI naming, and JSON error contracts.',
            notes: 'Proper HTTP status codes (200, 201, 204, 400, 401, 403, 404, 409, 500) guide client-side state transitions.',
            exercise: 'Design RESTful endpoint routes for a college enrollment and course registration system.'
          },
          {
            id: 'web-l8',
            title: '3.2 Web Security & Production Build Optimizations',
            duration: '26 min',
            type: 'reading',
            completed: false,
            summary: 'Cross-Origin Resource Sharing (CORS), XSS prevention, Content Security Policies, and Vite code-splitting.',
            notes: 'Vite leverages Rollup for production bundling with tree-shaking, CSS code-splitting, and dynamic import chunking.',
            exercise: 'Analyze Vite production build output sizes and configure manual chunk splitting.'
          }
        ]
      }
    ]
  },

  cloud: {
    syllabus: 'Distributed systems, virtualization, containers, Kubernetes orchestration, serverless microservices, and cloud security.',
    prerequisites: 'Operating Systems, Networking, Linux Fundamentals',
    credits: 4,
    totalHours: '42 Hours',
    modules: [
      {
        id: 'cloud-m1',
        title: 'Module 1: Cloud Architectures & Virtualization',
        description: 'Service models, shared responsibility, hypervisors, and multi-tenancy.',
        lessons: [
          {
            id: 'cloud-l1',
            title: '1.1 Cloud Service Models (IaaS, PaaS, SaaS)',
            duration: '18 min',
            type: 'video',
            completed: true,
            summary: 'Analyzing cloud responsibility boundaries, compute abstraction tiers, and cost management.',
            notes: 'In IaaS, the customer manages the OS, runtime, and app; in PaaS, the provider manages the OS and runtime; in SaaS, provider manages end-to-end.',
            exercise: 'Classify AWS EC2, Google App Engine, and Microsoft Office 365 on the cloud service model spectrum.'
          },
          {
            id: 'cloud-l2',
            title: '1.2 High Availability, Multi-Region & SLA Metrics',
            duration: '22 min',
            type: 'reading',
            completed: true,
            summary: 'Designing for failure: availability zones, active-active failover, RPO, and RTO calculations.',
            notes: 'High Availability (99.99%) allows under 52 minutes of downtime annually. Geographically dispersed zones mitigate regional catastrophe.',
            exercise: 'Calculate target RPO and RTO for a student examination database with synchronous replication.'
          }
        ]
      },
      {
        id: 'cloud-m2',
        title: 'Module 2: Containerization & Kubernetes Orchestration',
        description: 'Docker container packaging, image layers, and Kubernetes cluster controllers.',
        lessons: [
          {
            id: 'cloud-l3',
            title: '2.1 Docker Containerization & Layer Caching',
            duration: '26 min',
            type: 'interactive',
            completed: true,
            summary: 'Linux cgroups and namespaces, multi-stage Dockerfiles, and minimal base images.',
            notes: 'Namespaces isolate processes, networks, and mount points; cgroups constrain CPU, memory, and I/O quotas.',
            exercise: 'Write a multi-stage Dockerfile for a Node.js/Vite application to produce a sub-50MB production container.'
          },
          {
            id: 'cloud-l4',
            title: '2.2 Kubernetes Pods, Deployments & Service Discovery',
            duration: '34 min',
            type: 'video',
            completed: false,
            summary: 'Reconciliation loops, declarative manifests, rolling updates, ClusterIP, and Ingress routing.',
            notes: 'The Kubernetes controller manager continuously drives current state toward declared desired state via ReplicaSets.',
            exercise: 'Draft a Kubernetes Deployment manifest with readiness and liveness probes.'
          }
        ]
      },
      {
        id: 'cloud-m3',
        title: 'Module 3: Serverless Computing & Cloud Storage',
        description: 'Event-driven compute, object storage, and Infrastructure as Code.',
        lessons: [
          {
            id: 'cloud-l5',
            title: '3.1 Serverless Functions & Event-Driven Pipelines',
            duration: '24 min',
            type: 'video',
            completed: false,
            summary: 'Cold starts, execution timeouts, ephemeral storage, and event bindings.',
            notes: 'Serverless architectures scale to zero when idle, eliminating idle compute expenses for bursty workloads.',
            exercise: 'Design an automated image thumbnail generation pipeline triggered by object storage upload events.'
          },
          {
            id: 'cloud-l6',
            title: '3.2 Object Storage & Distributed Database Consistency',
            duration: '25 min',
            type: 'reading',
            completed: false,
            summary: 'CAP theorem tradeoffs, eventual consistency, object metadata, and signed URLs.',
            notes: 'Object stores offer virtually unlimited horizontal scalability with 99.999999999% durability via erasure coding.',
            exercise: 'Compare DynamoDB single-digit millisecond latency against Aurora relational queries.'
          },
          {
            id: 'cloud-l7',
            title: '3.3 Infrastructure as Code (Terraform) & Cloud Security',
            duration: '28 min',
            type: 'interactive',
            completed: false,
            summary: 'Declarative resource provisioning, state locking, IAM least privilege, and VPC isolation.',
            notes: 'IaC ensures repeatable, version-controlled cloud environments and eliminates configuration drift.',
            exercise: 'Write a Terraform HCL block provisioning a private VPC with public/private subnet routing.'
          }
        ]
      }
    ]
  },

  se: {
    syllabus: 'Agile methodologies, software architecture patterns, clean code principles, refactoring, and automated testing pipelines.',
    prerequisites: 'Object-Oriented Programming, Data Structures',
    credits: 4,
    totalHours: '46 Hours',
    modules: [
      {
        id: 'se-m1',
        title: 'Module 1: Software Lifecycle & Agile Practices',
        description: 'Agile frameworks, user story estimation, and iterative sprint execution.',
        lessons: [
          {
            id: 'se-l1',
            title: '1.1 SDLC Paradigms: Waterfall vs Agile vs Kanban',
            duration: '18 min',
            type: 'video',
            completed: true,
            summary: 'Predictive versus empirical process control, continuous feedback, and sprint retrospectives.',
            notes: 'Agile embraces evolving requirements through cross-functional collaboration and rapid prototyping.',
            exercise: 'Map a safety-critical medical device versus a consumer mobile app to their optimal SDLC models.'
          },
          {
            id: 'se-l2',
            title: '1.2 User Story Mapping & Backlog Refinement',
            duration: '20 min',
            type: 'reading',
            completed: true,
            summary: 'INVEST criteria for user stories, planning poker, velocity metrics, and acceptance criteria.',
            notes: 'Good user stories are Independent, Negotiable, Valuable, Estimable, Small, and Testable.',
            exercise: 'Write three user stories with Gherkin (Given-When-Then) acceptance scenarios.'
          }
        ]
      },
      {
        id: 'se-m2',
        title: 'Module 2: Clean Architecture & Design Patterns',
        description: 'SOLID principles, design patterns, and decoupled architectural layers.',
        lessons: [
          {
            id: 'se-l3',
            title: '2.1 SOLID Principles of Object-Oriented Design',
            duration: '25 min',
            type: 'video',
            completed: true,
            summary: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.',
            notes: 'Adhering to SOLID principles minimizes coupling and maximizes testability and refactoring safety.',
            exercise: 'Refactor a monolithic God Class into decoupled single-responsibility services.'
          },
          {
            id: 'se-l4',
            title: '2.2 Gang of Four Creational & Structural Patterns',
            duration: '30 min',
            type: 'interactive',
            completed: true,
            summary: 'Factory Method, Singleton, Builder, Adapter, and Decorator implementations.',
            notes: 'Design patterns offer battle-tested templates to recurring architectural problems without reinventing solutions.',
            exercise: 'Implement the Builder pattern for a complex CourseConfiguration object with immutable fields.'
          },
          {
            id: 'se-l5',
            title: '2.3 Behavioral Patterns & Event-Driven Communication',
            duration: '28 min',
            type: 'reading',
            completed: true,
            summary: 'Observer pattern, Strategy pattern, Command pattern, and pub/sub event emitters.',
            notes: 'The Strategy pattern enables swapping algorithms at runtime without modifying the calling context.',
            exercise: 'Build a notification dispatch system utilizing the Strategy and Observer patterns.'
          }
        ]
      },
      {
        id: 'se-m3',
        title: 'Module 3: Verification, Testing & CI/CD',
        description: 'Automated testing pyramids, code quality metrics, and continuous deployment.',
        lessons: [
          {
            id: 'se-l6',
            title: '3.1 The Testing Pyramid: Unit, Integration & E2E',
            duration: '22 min',
            type: 'video',
            completed: true,
            summary: 'Test-Driven Development (Red-Green-Refactor), mocking, and code coverage metrics.',
            notes: 'A solid testing pyramid relies heavily on fast unit tests, supported by integration and focused E2E flows.',
            exercise: 'Write Jest unit tests verifying grade computation with edge-case test doubles.'
          },
          {
            id: 'se-l7',
            title: '3.2 CI/CD Pipelines & Static Quality Gates',
            duration: '26 min',
            type: 'interactive',
            completed: false,
            summary: 'Automated linting, SonarQube static analysis, Docker build triggers, and canary deployments.',
            notes: 'Automated pipelines catch regressions before code enters staging or production environments.',
            exercise: 'Draft a GitHub Actions workflow that executes linter, unit tests, and production build checks.'
          }
        ]
      }
    ]
  },

  gd: {
    syllabus: 'Visual communication theory, color harmonies, typography systems, vector composition, branding, and UI design tokens.',
    prerequisites: 'Basic Digital Literacy, Creative Aptitude',
    credits: 3,
    totalHours: '38 Hours',
    modules: [
      {
        id: 'gd-m1',
        title: 'Module 1: Visual Communication & Color Theory',
        description: 'Principles of design, color psychology, and contrast accessibility.',
        lessons: [
          {
            id: 'gd-l1',
            title: '1.1 Color Theory & Harmonic Palette Generation',
            duration: '16 min',
            type: 'video',
            completed: true,
            summary: 'Color wheels, complementary and analogous harmonies, HSL color space, and WCAG AA/AAA contrast ratios.',
            notes: 'Tailored HSL palettes allow precise tint and shade control across UI states while ensuring accessibility compliance.',
            exercise: 'Create a 5-step monochromatic and complementary palette meeting WCAG 4.5:1 text contrast.'
          },
          {
            id: 'gd-l2',
            title: '1.2 Typography Hierarchy & Font Pairings',
            duration: '22 min',
            type: 'reading',
            completed: true,
            summary: 'Serif vs Sans-serif classifications, vertical rhythm, modular scale (1.25 Major Third), and tracking/kerning.',
            notes: 'Typography establishes visual hierarchy, guiding the reader eye through primary headlines, subheads, and body copy.',
            exercise: 'Establish a typographic modular scale from 12px caption to 40px display header.'
          },
          {
            id: 'gd-l3',
            title: '1.3 Layout Systems, Negative Space & Gestalt Principles',
            duration: '24 min',
            type: 'interactive',
            completed: true,
            summary: 'Proximity, similarity, continuity, and figure-ground relationships in modern dashboard aesthetics.',
            notes: 'Intentional negative space creates breathing room, elevating interfaces from cluttered tools to premium software.',
            exercise: 'Analyze a dashboard layout and identify the three primary Gestalt grouping mechanisms employed.'
          }
        ]
      },
      {
        id: 'gd-m2',
        title: 'Module 2: Digital Vector & Raster Composition',
        description: 'Bézier curves, SVG pathing, raster masking, and gradient rendering.',
        lessons: [
          {
            id: 'gd-l4',
            title: '2.1 Vector Geometry & Precision Bézier Curves',
            duration: '28 min',
            type: 'interactive',
            completed: true,
            summary: 'Anchor points, control handles, cubic vs quadratic curves, and Boolean vector operations.',
            notes: 'Smooth organic curves require minimal anchor points placed at curvature extrema with aligned tangent handles.',
            exercise: 'Construct a multi-lobe organic abstract vector shape using 6 cubic Bézier control points.'
          },
          {
            id: 'gd-l5',
            title: '2.2 Layer Blending Modes & Organic Translucency',
            duration: '26 min',
            type: 'video',
            completed: true,
            summary: 'Multiply, Screen, Overlay blending modes, and multi-stop alpha gradients for visual depth.',
            notes: 'Translucent gradient layering produces rich, fluid visual depth without harsh flat borders.',
            exercise: 'Combine two overlapping gradient vector shapes using multiply blend mode and evaluate color interplay.'
          }
        ]
      },
      {
        id: 'gd-m3',
        title: 'Module 3: Branding & UI Design Systems',
        description: 'Design tokens, component styling, and brand identity manuals.',
        lessons: [
          {
            id: 'gd-l6',
            title: '3.1 Brand Identity & Iconography Guidelines',
            duration: '30 min',
            type: 'reading',
            completed: false,
            summary: 'Consistent optical weight, icon bounding grids (24x24), corner radii tokens, and brand manuals.',
            notes: 'A cohesive icon system utilizes uniform stroke weight, consistent corner radiuses, and balanced visual volume.',
            exercise: 'Design three consistent utility icons on a 24x24 pixel grid with 2px uniform stroke.'
          },
          {
            id: 'gd-l7',
            title: '3.2 Design Tokens & Design System Handoff',
            duration: '25 min',
            type: 'interactive',
            completed: false,
            summary: 'Color, spacing, shadow, and radius tokens mapped directly to CSS custom properties for developer handoff.',
            notes: 'Design tokens provide the single source of truth connecting Figma designs to production CSS implementations.',
            exercise: 'Export a complete token JSON file for colors, elevation shadows, and border radiuses.'
          }
        ]
      }
    ]
  }
};
