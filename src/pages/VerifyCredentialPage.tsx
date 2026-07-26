import { Link, useParams } from 'react-router-dom'
import { certEmbedUrl, findCertification } from '../data/certifications.ts'
import { siteMeta } from '../data/projects.ts'
import { asset } from '../lib/asset.ts'

export function VerifyCredentialPage() {
  const { certId = '' } = useParams()
  const cert = findCertification(certId)
  const embedUrl = cert?.verifyUrl ? certEmbedUrl(cert.verifyUrl) : null

  if (!cert || !cert.verifyUrl) {
    return (
      <div className="site verify-page">
        <header className="topbar">
          <div className="container topbar-inner">
            <Link className="brand-mark" to="/">
              {siteMeta.name}
            </Link>
          </div>
        </header>
        <main className="section">
          <div className="container">
            <h1 className="section-title">Credential not found</h1>
            <p className="section-lead">
              This verification page is unavailable. Return to the portfolio to view certificates.
            </p>
            <Link className="btn btn-primary" to={{ pathname: '/', hash: 'credentials' }}>
              Back to credentials
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="site verify-page">
      <header className="topbar">
        <div className="container topbar-inner">
          <Link className="brand-mark" to="/">
            {siteMeta.name}
          </Link>
          <Link
            className="btn btn-ghost verify-back"
            to={{ pathname: '/', hash: 'credentials' }}
          >
            Back to credentials
          </Link>
        </div>
      </header>

      <main className="verify-main">
        <div className="verify-layout">
          <header className="verify-head">
            <p className="section-kicker">Verified credential</p>
            <h1 className="section-title">{cert.title}</h1>
            <p className="section-lead">
              Issued {cert.issued} · Valid through {cert.validThrough}
            </p>
          </header>

          {embedUrl ? (
            <div className="verify-frame-wrap">
              <iframe
                src={embedUrl}
                title={`${cert.title} verified credential`}
                className="verify-frame"
                allowFullScreen
              />
            </div>
          ) : null}

          <div className="cta-row verify-actions">
            <a className="btn btn-primary" href={asset(cert.pdf)} target="_blank" rel="noreferrer">
              Open PDF
            </a>
            <a
              className="btn btn-ghost"
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--navy-900)', borderColor: 'var(--line)' }}
            >
              Open on Nexthink Certified
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
