export const institutions = [
  { id: 'smc', name: 'Santa Monica College', city: 'Santa Monica', color: '#1d4ed8' },
  { id: 'demc', name: 'De Anza College', city: 'Cupertino', color: '#059669' },
  { id: 'pcc', name: 'Pasadena City College', city: 'Pasadena', color: '#b91c1c' },
  { id: 'dvc', name: 'Diablo Valley College', city: 'Pleasant Hill', color: '#7c3aed' },
  { id: 'cccd', name: 'Orange Coast College', city: 'Costa Mesa', color: '#ea580c' },
  { id: 'sdcc', name: 'San Diego City College', city: 'San Diego', color: '#0891b2' },
]

export const institutionById = (id) =>
  institutions.find((i) => i.id === id) || null
