import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    id: uuidv4(),
    image: './images/looking-back.jpg',
    title: 'Looking back at 2020: a year to reflect on',
    desc:
      'The year 2020 is certainly one to be remembered. It was less about selling cars and more about supporting one another, health and solidarity!. The "new normal" now means being more digital, more flexible and more personal than before. This is a challenge for everyone - also for Audi.',
  },
  {
    id: uuidv4(),
    image: './images/special_message.jpg',
    title: 'Special message with the Audi digital matrix light',
    desc:
      'With the help of digital matrix LED technology, Audi lighting designer and Bayern Munich fan, Cesar Muntada, sends very special configurations to his favorite team.',
  },
  {
    id: uuidv4(),
    image: './images/everyone.webp',
    title: 'Everyone has rights',
    desc:
      'United Nations Guiding Principles on Business and Human Rights are systematically integrated into the standard processes of Audi. In the interview we talked about the implementation with Jasmin Lotze and Sarah Schwellinger.',
  },
  {
    id: uuidv4(),
    image: './images/e-tron.webp',
    title:
      'The Audi e-tron triple 2020: this is what sustainable success looks like',
    desc:
      'With the e-tron triple 2020 wrap, Audi is celebrating Bayern Munich winning the triple in 2020. Audi designer, Marco Dos Santos, explains the exclusive design of the car wrap.',
  },
]

export default data
