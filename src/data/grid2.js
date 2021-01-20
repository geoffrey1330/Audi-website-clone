import { v4 as uuidv4 } from 'uuid'

const data = [
  {
    id: uuidv4(),
    image: './images/sustainabililty.webp',
    title:
      'Sustainability in the supply chain: both a challenge and an opportunity',
    desc:
      "Audi is present in more than 100 markets and produces at 12 production locations in 10 countries in order to be as close to its customers as possible. Accordingly, the company's supply chain is highly complex.",
  },
  {
    id: uuidv4(),
    image: './images/mq.webp',
    title: "MQ! Virtual Innovation Summit: the creators of tomorrow's mobility",
    desc:
      'With the first exclusively digital installation of the MQ! Innovation Summit on the 10th & 11th November, Audi pushed their renowned innovation conference to the next level, inviting the brightest minds of the digital and automotive world to at 25-hour online event.',
  },
  {
    id: uuidv4(),
    image: './images/culture_drive.webp',
    title: 'The Culture Drive - in tune with the city',
    desc:
      "It all begins with a first step: FC Bayern Munich have switched their car fleet to electric vehicles. Together with Audi, FC Bayern is demonstrating its commitment to a more sustainable future in the city with the aim of inspiring and positively influencing Munich's citizens.",
  },
]

export default data
