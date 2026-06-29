import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// Generates public/_headers at build time so the deployed site is protected
// with HTTP Basic Auth. Credentials come from Netlify env vars, falling back
// to the documented defaults for local builds.
const __dirname = dirname(fileURLToPath(import.meta.url))
const user = process.env.BASIC_AUTH_USER || 'splint'
const password = process.env.BASIC_AUTH_PASSWORD || 'V&R26'

const headersPath = resolve(__dirname, '..', 'public', '_headers')
const contents = `/*
  Basic-Auth: ${user}:${password}
`

mkdirSync(dirname(headersPath), { recursive: true })
writeFileSync(headersPath, contents)
console.log(`[generate-headers] wrote ${headersPath} (user: ${user})`)
