
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'football',
    question: 'Welcher Fußballstar würde dich in sein Team wählen?',
    options: [
      { id: 'messi', text: 'Lionel Messi', image: 'https://picsum.photos/seed/messi/400/500' },
      { id: 'ronaldo', text: 'Cristiano Ronaldo', image: 'https://picsum.photos/seed/ronaldo/400/500' },
      { id: 'haaland', text: 'Erling Haaland', image: 'https://picsum.photos/seed/haaland/400/500' },
      { id: 'mbappe', text: 'Kylian Mbappé', image: 'https://picsum.photos/seed/mbappe/400/500' },
    ],
  },
  {
    id: 'celebrity',
    question: 'Welcher Star würde dich als besten Freund wählen?',
    options: [
      { id: 'swift', text: 'Taylor Swift', image: 'https://picsum.photos/seed/swift/400/500' },
      { id: 'rock', text: 'Dwayne "The Rock" Johnson', image: 'https://picsum.photos/seed/rock/400/500' },
      { id: 'stone', text: 'Emma Stone', image: 'https://picsum.photos/seed/stone/400/500' },
      { id: 'reynolds', text: 'Ryan Reynolds', image: 'https://picsum.photos/seed/reynolds/400/500' },
    ],
  },
  {
    id: 'food',
    question: 'Was würde ein Michelin-Sterne-Koch für dich zubereiten?',
    options: [
      { id: 'pasta', text: 'Italienische Pasta-Kreation', image: 'https://picsum.photos/seed/pasta/400/500' },
      { id: 'sushi', text: 'Japanisches Sushi-Menü', image: 'https://picsum.photos/seed/sushi/400/500' },
      { id: 'gourmet', text: 'Französisches Gourmet-Dinner', image: 'https://picsum.photos/seed/gourmet/400/500' },
      { id: 'hausmannskost', text: 'Deutsche Hausmannskost deluxe', image: 'https://picsum.photos/seed/hausmann/400/500' },
    ],
  },
  {
    id: 'job',
    question: 'Welcher CEO würde dich sofort einstellen?',
    options: [
      { id: 'startup', text: 'Tech-Startup Gründer', image: 'https://picsum.photos/seed/startup/400/500' },
      { id: 'media', text: 'Medien-Mogul', image: 'https://picsum.photos/seed/media/400/500' },
      { id: 'ngo', text: 'Umwelt-Aktivist Organisation', image: 'https://picsum.photos/seed/ngo/400/500' },
      { id: 'creative', text: 'Kreativ-Agentur', image: 'https://picsum.photos/seed/creative/400/500' },
    ],
  },
  {
    id: 'superpower',
    question: 'Welche Superkraft würde dich zum Helden machen?',
    options: [
      { id: 'mindreading', text: 'Gedanken lesen', image: 'https://picsum.photos/seed/mind/400/500' },
      { id: 'flying', text: 'Fliegen können', image: 'https://picsum.photos/seed/fly/400/500' },
      { id: 'time', text: 'Zeit manipulieren', image: 'https://picsum.photos/seed/time/400/500' },
      { id: 'healing', text: 'Heilen können', image: 'https://picsum.photos/seed/heal/400/500' },
    ],
  },
  {
    id: 'lifestyle',
    question: 'Welcher Lifestyle passt zu dir?',
    options: [
      { id: 'adventurer', text: 'Abenteurer & Weltreisender', image: 'https://picsum.photos/seed/adventurer/400/500' },
      { id: 'artist', text: 'Künstler & Kreativer', image: 'https://picsum.photos/seed/artist/400/500' },
      { id: 'scientist', text: 'Wissenschaftler & Forscher', image: 'https://picsum.photos/seed/scientist/400/500' },
      { id: 'family', text: 'Familienmensch & Gemeinschaftsliebhaber', image: 'https://picsum.photos/seed/family/400/500' },
    ],
  },
];
