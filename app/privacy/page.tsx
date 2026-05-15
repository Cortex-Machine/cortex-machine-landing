export default function PrivacyPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Cortex-Machines home">
          <img className="brand-mark" src="/logo-mark.svg" alt="" aria-hidden="true" />
          <span>Cortex-Machines</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/terms">Terms</a>
        </nav>
      </header>

      <section className="legal-page">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>
          Cortex-Machines is in private development. This site collects only the
          information you choose to send, such as an email message sent through a
          contact link.
        </p>

        <h2>Information we receive</h2>
        <p>
          If you contact us, we may receive your email address, message content,
          and any details you include voluntarily.
        </p>

        <h2>How we use it</h2>
        <p>
          We use contact information to respond to inquiries, coordinate private
          conversations, and maintain basic business records.
        </p>

        <h2>Third parties</h2>
        <p>
          We do not sell personal information. Basic hosting, email, analytics,
          or infrastructure providers may process limited technical data needed
          to operate the site.
        </p>

        <h2>Contact</h2>
        <p>
          Questions can be sent to{" "}
          <a href="mailto:sauravjaiswal999@gmail.com">privacy@cortex-machines.com</a>.
        </p>
      </section>
    </main>
  );
}
