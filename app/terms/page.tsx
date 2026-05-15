export default function TermsPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Cortex-Machine home">
          <img className="brand-mark" src="/logo-mark.svg" alt="" aria-hidden="true" />
          <span>Cortex-Machine</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </header>

      <section className="legal-page">
        <p className="eyebrow">Terms</p>
        <h1>Terms of Use</h1>
        <p>
          By using this site, you agree to use it only for lawful purposes and
          not to interfere with its operation.
        </p>

        <h2>Site content</h2>
        <p>
          The content on this site is provided for general informational
          purposes. It does not disclose the full Cortex-Machines architecture,
          roadmap, or implementation details.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Cortex-Machines names, marks, copy, visuals, and site materials are
          owned by Cortex-Machines unless otherwise stated.
        </p>

        <h2>No warranty</h2>
        <p>
          The site is provided as is, without warranties of any kind. Access may
          change as the company develops.
        </p>

        <h2>Contact</h2>
        <p>
          Questions can be sent to{" "}
          <a href="mailto:sauravjaiswal999@gmail.com">terms@cortex-machines.com</a>.
        </p>
      </section>
    </main>
  );
}
