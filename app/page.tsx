const publicPrinciples = [
  {
    title: "Reliable agent memory",
    text: "Agents should carry useful context without blindly trusting everything they have seen before.",
  },
  {
    title: "Reasoning with evidence",
    text: "The next generation of AI systems will need stronger ways to connect actions to the information behind them.",
  },
  {
    title: "Human control",
    text: "We are building for systems that collaborate with people, adapt to real workflows, and remain understandable.",
  },
  {
    title: "Long-term infrastructure",
    text: "The product is being designed as a foundation for dependable AI work, not a short-lived wrapper around models.",
  },
];

function CortexLogo() {
  return (
    <a className="brand" href="/" aria-label="Cortex-Machines home">
      <img className="brand-mark" src="/logo-mark.svg" alt="" aria-hidden="true" />
      <span>Cortex Machines</span>
    </a>
  );
}

function IntelligenceField() {
  return (
    <div className="intelligence-field" aria-hidden="true">
      <svg viewBox="0 0 640 640" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#111111" stopOpacity="0.18" />
            <stop offset="52%" stopColor="#4f7cff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#111111" stopOpacity="0.16" />
          </linearGradient>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#111111" stopOpacity="0.16" />
            <stop offset="58%" stopColor="#4f7cff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="320" cy="320" r="236" fill="url(#coreGradient)" />
        <path className="field-orbit" d="M120 320c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200-200-89.5-200-200Z" />
        <path className="field-orbit" d="M200 146c94 46 173 160 225 348" />
        <path className="field-orbit" d="M118 346c142-108 286-145 432-110" />
        <path className="field-orbit" d="M182 484c64-120 151-222 260-306" />
        <path className="field-line" d="M198 198 424 156 510 306 406 476 206 438 132 292Z" />
        <path className="field-line" d="M198 198 320 320 510 306M206 438 320 320 424 156M132 292 320 320 406 476" />
        <circle className="field-node dark" cx="198" cy="198" r="9" />
        <circle className="field-node blue" cx="424" cy="156" r="9" />
        <circle className="field-node dark" cx="510" cy="306" r="9" />
        <circle className="field-node green" cx="406" cy="476" r="9" />
        <circle className="field-node dark" cx="206" cy="438" r="9" />
        <circle className="field-node amber" cx="132" cy="292" r="9" />
        <circle className="field-core" cx="320" cy="320" r="17" />
      </svg>
      <div className="field-label label-one">source</div>
      <div className="field-label label-two">belief</div>
      <div className="field-label label-three">action</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <CortexLogo />
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#access">Access</a>
        </nav>
      </header>

      <section className="hero" aria-label="Cortex Machines">
        <div className="hero-text">
          <p className="eyebrow">Artificial intelligence research and product company.</p>
          <h1>Cortex-Machines</h1>
          <p className="lede">
            Accountable intelligence for agents that act in the world.
          </p>
          <p className="quiet-copy">
            We are building a product and research foundation for AI agents
            that can use memory, evidence, and validation before taking action.
          </p>
        </div>
        <IntelligenceField />
      </section>

      <section className="statement-band" id="about">
        <p>
          Cortex-Machines is an AI research and product company focused on
          making autonomous systems more dependable, adaptable, and accountable
          in real-world work.
        </p>
      </section>

      <section className="signal-section" aria-label="Research signals">
        {publicPrinciples.map((signal, index) => (
          <div className="signal" key={signal.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{signal.title}</h2>
              <p>{signal.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="access-section" id="access">
        <p>We are keeping the implementation private while the system matures.</p>
        <a href="mailto:sauravjaiswal999@gmail.com">Talk to founder {">"}</a>
      </section>

      <footer className="site-footer">
        <p>Copyright © 2026 Cortex-Machines. All rights reserved.</p>
        <div>
          <a href="https://github.com/Cortex-Machines" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </main>
  );
}
