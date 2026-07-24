export type CertLevel = 'Expert' | 'Practitioner' | 'Professional' | 'Associate'

export type Certification = {
  id: string
  title: string
  level: CertLevel
  issued: string
  validThrough: string
  pdf: string
  thumb: string
  verifyUrl: string
}

export const certifications: Certification[] = [
  {
    id: '23e92511-6241-43ae-a94c-2a14ab10933f',
    title: 'Nexthink Expert',
    level: 'Expert',
    issued: 'July 23, 2026',
    validThrough: 'July 22, 2028',
    pdf: 'certs/joseph-gurak-23e92511-6241-43ae-a94c-2a14ab10933f-certificate-2.pdf',
    thumb: 'certs/thumbs/joseph-gurak-23e92511-6241-43ae-a94c-2a14ab10933f-certificate-2.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/23e92511-6241-43ae-a94c-2a14ab10933f',
  },
  {
    id: '8579d8b4-cbd4-4b35-b33c-736390a3cb1e',
    title: 'NQL Practitioner',
    level: 'Practitioner',
    issued: 'July 17, 2026',
    validThrough: 'July 16, 2028',
    pdf: 'certs/joseph-gurak-8579d8b4-cbd4-4b35-b33c-736390a3cb1e-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-8579d8b4-cbd4-4b35-b33c-736390a3cb1e-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/8579d8b4-cbd4-4b35-b33c-736390a3cb1e',
  },
  {
    id: '2795067b-649b-4e96-b06f-9a0a2c2a6145',
    title: 'DEX Automation Practitioner',
    level: 'Practitioner',
    issued: 'July 21, 2026',
    validThrough: 'July 20, 2028',
    pdf: 'certs/joseph-gurak-2795067b-649b-4e96-b06f-9a0a2c2a6145-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-2795067b-649b-4e96-b06f-9a0a2c2a6145-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/2795067b-649b-4e96-b06f-9a0a2c2a6145',
  },
  {
    id: 'e40c4d54-d9a1-47cb-82f8-a3d1948769cd',
    title: 'Platform Administration Professional',
    level: 'Professional',
    issued: 'July 3, 2026',
    validThrough: 'July 2, 2028',
    pdf: 'certs/joseph-gurak-e40c4d54-d9a1-47cb-82f8-a3d1948769cd-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-e40c4d54-d9a1-47cb-82f8-a3d1948769cd-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/e40c4d54-d9a1-47cb-82f8-a3d1948769cd',
  },
  {
    id: 'b3693c86-f219-4097-93f6-18d0d5e44261',
    title: 'DEX Management Professional',
    level: 'Professional',
    issued: 'April 24, 2026',
    validThrough: 'April 23, 2028',
    pdf: 'certs/joseph-gurak-b3693c86-f219-4097-93f6-18d0d5e44261-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-b3693c86-f219-4097-93f6-18d0d5e44261-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/b3693c86-f219-4097-93f6-18d0d5e44261',
  },
  {
    id: 'fcbaf4c9-ad26-44ef-81f8-fa7247cc15b5',
    title: 'Application Experience Management Professional',
    level: 'Professional',
    issued: 'May 19, 2026',
    validThrough: 'May 18, 2028',
    pdf: 'certs/joseph-gurak-fcbaf4c9-ad26-44ef-81f8-fa7247cc15b5-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-fcbaf4c9-ad26-44ef-81f8-fa7247cc15b5-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/fcbaf4c9-ad26-44ef-81f8-fa7247cc15b5',
  },
  {
    id: '24907e6d-9b14-41ee-97ed-7b2e758c37cc',
    title: 'Content Management Professional',
    level: 'Professional',
    issued: 'June 12, 2026',
    validThrough: 'June 11, 2028',
    pdf: 'certs/joseph-gurak-24907e6d-9b14-41ee-97ed-7b2e758c37cc-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-24907e6d-9b14-41ee-97ed-7b2e758c37cc-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/24907e6d-9b14-41ee-97ed-7b2e758c37cc',
  },
  {
    id: '2e0df1e0-0fb4-45ea-8b57-fbf1ac56f0b9',
    title: 'Digital Adoption Management Professional',
    level: 'Professional',
    issued: 'May 16, 2026',
    validThrough: 'May 15, 2028',
    pdf: 'certs/joseph-gurak-2e0df1e0-0fb4-45ea-8b57-fbf1ac56f0b9-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-2e0df1e0-0fb4-45ea-8b57-fbf1ac56f0b9-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/2e0df1e0-0fb4-45ea-8b57-fbf1ac56f0b9',
  },
  {
    id: 'e62282fe-0b55-4583-af56-94aef3081c90',
    title: 'IT Support Professional',
    level: 'Professional',
    issued: 'May 16, 2026',
    validThrough: 'May 15, 2028',
    pdf: 'certs/joseph-gurak-e62282fe-0b55-4583-af56-94aef3081c90-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-e62282fe-0b55-4583-af56-94aef3081c90-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/e62282fe-0b55-4583-af56-94aef3081c90',
  },
  {
    id: '2eeb89b4-0eff-4577-9274-9a2a97f95d95',
    title: 'Nexthink Associate',
    level: 'Associate',
    issued: 'April 9, 2026',
    validThrough: 'April 8, 2028',
    pdf: 'certs/joseph-gurak-2eeb89b4-0eff-4577-9274-9a2a97f95d95-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-2eeb89b4-0eff-4577-9274-9a2a97f95d95-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/2eeb89b4-0eff-4577-9274-9a2a97f95d95',
  },
  {
    id: '0be414a6-6fcd-4501-ada2-927aaa9b7354',
    title: 'Digital Adoption Management Associate',
    level: 'Associate',
    issued: 'April 10, 2026',
    validThrough: 'April 9, 2028',
    pdf: 'certs/joseph-gurak-0be414a6-6fcd-4501-ada2-927aaa9b7354-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-0be414a6-6fcd-4501-ada2-927aaa9b7354-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/0be414a6-6fcd-4501-ada2-927aaa9b7354',
  },
  {
    id: '39122e7b-0187-4430-824b-621c3dced0f7',
    title: 'IT Support Associate',
    level: 'Associate',
    issued: 'April 9, 2026',
    validThrough: 'April 8, 2028',
    pdf: 'certs/joseph-gurak-39122e7b-0187-4430-824b-621c3dced0f7-certificate.pdf',
    thumb: 'certs/thumbs/joseph-gurak-39122e7b-0187-4430-824b-621c3dced0f7-certificate.png',
    verifyUrl: 'https://learn.nexthink.com/certificates/39122e7b-0187-4430-824b-621c3dced0f7',
  },
]

export const expertCert = certifications.find((c) => c.level === 'Expert')!

export const certsByLevel: { level: CertLevel; items: Certification[] }[] = (
  ['Practitioner', 'Professional', 'Associate'] as CertLevel[]
).map((level) => ({
  level,
  items: certifications.filter((c) => c.level === level),
}))
