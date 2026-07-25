import { useEffect } from 'react'
import type { Certification } from '../data/certifications.ts'
import { asset } from '../lib/asset.ts'

type Props = {
  cert: Certification | null
  onClose: () => void
}

export function CertLightbox({ cert, onClose }: Props) {
  useEffect(() => {
    if (!cert) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [cert, onClose])

  if (!cert) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onClick={onClose}
    >
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h3 className="lightbox-title">{cert.title}</h3>
        <p className="cert-tile-meta">
          Issued {cert.issued} · Valid through {cert.validThrough}
        </p>
        <img src={asset(cert.thumb)} alt={`${cert.title} certificate for Joseph Gurak`} />
        <div className="lightbox-actions">
          <a className="btn btn-primary" href={asset(cert.pdf)} target="_blank" rel="noreferrer">
            Open PDF
          </a>
          {cert.verifyUrl ? (
            <a
              className="btn btn-ghost"
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--navy-900)', borderColor: 'var(--line)' }}
            >
              Verify credential
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
