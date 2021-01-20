import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    id: uuidv4(),
    title: 'Services',
    links: ['myAudi', 'Press', 'Contact'],
  },
  {
    id: uuidv4(),
    title: 'Experience Audi',
    links: [
      'Models & Technology',
      'Mobility & Trends',
      'Inspiration & Lifestyle',
      'Audi Sport',
    ],
  },
  {
    id: uuidv4(),
    title: 'AUDI AG',
    links: ['Strategy', 'Investor Relations', 'Sustainability', 'Career'],
  },
]

export default data
