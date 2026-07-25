import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  certsByLevel,
  certVerifyPath,
  expertCert,
  type Certification,
} from '../data/certifications.ts'
import {
  featuredProjects,
  proofCapabilities,
  secondaryProjects,
  skillGroups,
  siteMeta,
} from '../data/projects.ts'
import { asset } from '../lib/asset.ts'
import { CertLightbox } from '../components/CertLightbox.tsx'

export function HomePage() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null)

  return (
    <div className="site">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand-mark" href="#top">
            {siteMeta.name}
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#credentials">Credentials</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-brand">
          <div className="hero-atmosphere" aria-hidden="true">
            <div className="hero-grid" />
            <div className="hero-nodes">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="hero-line" />
            <div className="hero-line" />
            <div className="hero-line" />
          </div>
          <div className="container">
            <div className="hero-copy">
              <h1 id="hero-brand" className="hero-brand">
                {siteMeta.name}
              </h1>
              <p className="hero-headline">{siteMeta.headline}</p>
              <p className="hero-support">{siteMeta.supporting}</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#credentials">
                  View credentials
                </a>
                <a className="btn btn-ghost" href="#work">
                  View work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="proof" aria-label="Core capabilities">
          <div className="container">
            <ul className="proof-list">
              {proofCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container reveal">
            <header className="section-head">
              <p className="section-kicker">Featured work</p>
              <h2 className="section-title">Tools that reduce friction</h2>
              <p className="section-lead">
                Projects that show how I approach employee experience: automate the repetitive,
                ship clear desktop and browser tooling, and leave people with less to fight.
              </p>
            </header>

            <div className="work-list">
              {featuredProjects.map((project) => (
                <article key={project.id} className="work-item">
                  <h3 className="work-name">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </h3>
                  <p className="work-summary">{project.summary}</p>
                  <p className="work-why">
                    <strong>Why it matters for DEX: </strong>
                    {project.whyItMatters}
                  </p>
                  <ul className="stack">
                    {project.stack.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="secondary-work">
              <h3>Also building</h3>
              <ul className="secondary-list">
                {secondaryProjects.map((project) => (
                  <li key={project.id}>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="credentials" className="section">
          <div className="container reveal">
            <header className="section-head">
              <p className="section-kicker">Nexthink credentials</p>
              <h2 className="section-title">Twelve certifications, Expert spotlight</h2>
              <p className="section-lead">
                Formal depth across NQL, DEX automation, platform administration, and experience
                management — earned while using Nexthink in an IT support context, not as a
                full-time DEX engineer role.
              </p>
            </header>

            <div className="cert-spotlight">
              <div className="cert-spotlight-copy">
                <span className="level-chip">{expertCert.level}</span>
                <h3>{expertCert.title}</h3>
                <p>
                  Issued {expertCert.issued} · Valid through {expertCert.validThrough}. Open the
                  certificate PDF, or verify the credential on the embedded Certified page.
                </p>
                <div className="cta-row">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setActiveCert(expertCert)}
                  >
                    View certificate
                  </button>
                  {expertCert.accredibleId ? (
                    <Link className="btn btn-ghost" to={certVerifyPath(expertCert.id)}>
                      Verify credential
                    </Link>
                  ) : null}
                </div>
              </div>
              <button
                type="button"
                className="cert-thumb-btn"
                onClick={() => setActiveCert(expertCert)}
                aria-label={`Open ${expertCert.title} certificate`}
              >
                <img
                  src={asset(expertCert.thumb)}
                  alt={`${expertCert.title} certificate preview`}
                />
              </button>
            </div>

            {certsByLevel.map((group) => (
              <div key={group.level} className="cert-group">
                <h3>{group.level}</h3>
                <div className="cert-grid">
                  {group.items.map((cert) => (
                    <button
                      key={cert.id}
                      type="button"
                      className="cert-tile"
                      onClick={() => setActiveCert(cert)}
                    >
                      <img src={asset(cert.thumb)} alt="" />
                      <p className="cert-tile-title">{cert.title}</p>
                      <p className="cert-tile-meta">
                        {cert.issued} · through {cert.validThrough}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container reveal">
            <header className="section-head">
              <p className="section-kicker">Skills bridge</p>
              <h2 className="section-title">Evidence-backed capabilities</h2>
              <p className="section-lead">
                DEX concepts and Nexthink fluency paired with the scripting and product skills that
                make remediation and tooling real.
              </p>
            </header>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-block">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container reveal">
            <header className="section-head">
              <p className="section-kicker">About</p>
              <h2 className="section-title">Honest path into DEX</h2>
            </header>
            <p className="about-text">
              At my current job I use Nexthink as part of IT support work — it is a meaningful tool
              in my toolkit, not my primary role title. I have invested in Nexthink certifications
              (including Expert, NQL, and DEX Automation) and build endpoint automation and desktop
              tools that improve day-to-day experience for people and support teams. I am targeting
              Digital Employee Experience roles where that combination of platform fluency,
              scripting, and practical tooling matters.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container reveal">
            <header className="section-head">
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Let&apos;s talk DEX</h2>
            </header>
            <p className="contact-text">
              Open to conversations about Digital Employee Experience, Nexthink-adjacent roles, and
              IT tooling that makes work feel lighter.
            </p>
            <div className="contact-links">
              <a className="btn btn-primary" href={`mailto:${siteMeta.email}`}>
                {siteMeta.email}
              </a>
              <a
                className="btn btn-ghost"
                href={siteMeta.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--navy-900)', borderColor: 'var(--line)' }}
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {siteMeta.name}
          </span>
          <span>{siteMeta.location}</span>
        </div>
      </footer>

      <CertLightbox cert={activeCert} onClose={() => setActiveCert(null)} />
    </div>
  )
}
