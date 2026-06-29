export const communities = [
  {
    id: 'cs-transfers',
    name: 'CS Transfers',
    tagline: 'For everyone grinding toward a CS transfer.',
    members: 1284,
    color: '#1d4ed8',
    channels: [
      { id: 'general', name: 'general' },
      { id: 'leetcode', name: 'leetcode-grind' },
      { id: 'transfer-apps', name: 'transfer-apps' },
      { id: 'internships', name: 'internships' },
    ],
  },
  {
    id: 'pre-med',
    name: 'Pre-Med Path',
    tagline: 'Orgo survivors and future doctors.',
    members: 932,
    color: '#059669',
    channels: [
      { id: 'general', name: 'general' },
      { id: 'study-groups', name: 'study-groups' },
      { id: 'mcat', name: 'mcat-prep' },
      { id: 'volunteering', name: 'volunteering' },
    ],
  },
  {
    id: 'transfer-uc',
    name: 'UC Transfer Hub',
    tagline: 'TAG, IGETC, and everything UC.',
    members: 2051,
    color: '#7c3aed',
    channels: [
      { id: 'general', name: 'general' },
      { id: 'tag', name: 'tag-questions' },
      { id: 'igetc', name: 'igetc' },
      { id: 'essays', name: 'personal-insight' },
    ],
  },
  {
    id: 'study-buddies',
    name: 'Study Buddies',
    tagline: 'Find a partner for any class, any campus.',
    members: 1620,
    color: '#ea580c',
    channels: [
      { id: 'general', name: 'general' },
      { id: 'math', name: 'math' },
      { id: 'science', name: 'science' },
      { id: 'writing', name: 'writing' },
    ],
  },
  {
    id: 'startup-cc',
    name: 'CC Founders',
    tagline: 'Build something before you transfer.',
    members: 488,
    color: '#0891b2',
    channels: [
      { id: 'general', name: 'general' },
      { id: 'ideas', name: 'ideas' },
      { id: 'cofounders', name: 'find-cofounders' },
      { id: 'demos', name: 'demos' },
    ],
  },
  {
    id: 'campus-life',
    name: 'Campus Life',
    tagline: 'Clubs, events, and making CC feel like home.',
    members: 1377,
    color: '#b91c1c',
    channels: [
      { id: 'general', name: 'general' },
      { id: 'events', name: 'events' },
      { id: 'clubs', name: 'clubs' },
      { id: 'rides', name: 'ride-share' },
    ],
  },
]

export const communityById = (id) =>
  communities.find((c) => c.id === id) || null

export const channelMessages = {
  general: [
    { id: 1, author: 'Maya Rodriguez', text: 'Welcome everyone! Drop your transfer goal below 👇', time: '9:02 AM' },
    { id: 2, author: 'Liam Kim', text: 'Berkeley EECS or bust. Anyone doing CIS 22C this term?', time: '9:14 AM' },
    { id: 3, author: 'Sophia Chen', text: 'Hi all! SMC psych here, lurking but excited 🙌', time: '9:31 AM' },
  ],
  default: [
    { id: 1, author: 'James Lee', text: 'Starting a study session at 4pm, who is in?', time: '1:10 PM' },
    { id: 2, author: 'Aaliyah Williams', text: 'Count me in, bringing flashcards.', time: '1:12 PM' },
  ],
}
