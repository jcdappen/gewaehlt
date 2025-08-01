
import { Question, PersonalityTrait } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    category: 'Fußball-Stars',
    questionText: 'Welcher Fußballstar würde dich in sein Team wählen?',
    options: [
      { text: 'Lionel Messi', image: 'https://picsum.photos/seed/messi/400/500', trait: 'creative' },
      { text: 'Cristiano Ronaldo', image: 'https://picsum.photos/seed/ronaldo/400/500', trait: 'fighter' },
      { text: 'Kylian Mbappé', image: 'https://picsum.photos/seed/mbappe/400/500', trait: 'adventurer' },
      { text: 'Erling Haaland', image: 'https://picsum.photos/seed/haaland/400/500', trait: 'leader' },
    ],
  },
  {
    id: 'q2',
    category: 'Prominente',
    questionText: 'Welcher Star würde dich als besten Freund wählen?',
    options: [
      { text: 'Taylor Swift', image: 'https://picsum.photos/seed/swift/400/500', trait: 'creative' },
      { text: 'Dwayne "The Rock" Johnson', image: 'https://picsum.photos/seed/rock/400/500', trait: 'fighter' },
      { text: 'Emma Stone', image: 'https://picsum.photos/seed/stone/400/500', trait: 'community' },
      { text: 'Ryan Reynolds', image: 'https://picsum.photos/seed/reynolds/400/500', trait: 'healer' },
    ],
  },
  {
    id: 'q3',
    category: 'Essen & Lifestyle',
    questionText: 'Was würde ein Michelin-Sterne-Koch für dich zubereiten?',
    options: [
      { text: 'Italienische Pasta-Kreation', image: 'https://picsum.photos/seed/pasta/400/500', trait: 'community' },
      { text: 'Japanisches Sushi-Menü', image: 'https://picsum.photos/seed/sushi/400/500', trait: 'thinker' },
      { text: 'Französisches Gourmet-Dinner', image: 'https://picsum.photos/seed/gourmet/400/500', trait: 'creative' },
      { text: 'Deutsche Hausmannskost deluxe', image: 'https://picsum.photos/seed/hausmannskost/400/500', trait: 'community' },
    ],
  },
  {
    id: 'q4',
    category: 'Traumjob',
    questionText: 'Welcher CEO würde dich sofort einstellen?',
    options: [
      { text: 'Tech-Startup Gründer', image: 'https://picsum.photos/seed/tech/400/500', trait: 'adventurer' },
      { text: 'Medien-Mogul', image: 'https://picsum.photos/seed/media/400/500', trait: 'leader' },
      { text: 'Umwelt-Aktivist Organisation', image: 'https://picsum.photos/seed/umwelt/400/500', trait: 'healer' },
      { text: 'Kreativ-Agentur', image: 'https://picsum.photos/seed/kreativ/400/500', trait: 'creative' },
    ],
  },
  {
    id: 'q5',
    category: 'Superkraft',
    questionText: 'Welche Superkraft würde dich zum Helden machen?',
    options: [
      { text: 'Gedanken lesen', image: 'https://picsum.photos/seed/gedanken/400/500', trait: 'thinker' },
      { text: 'Fliegen können', image: 'https://picsum.photos/seed/fliegen/400/500', trait: 'adventurer' },
      { text: 'Zeit manipulieren', image: 'https://picsum.photos/seed/zeit/400/500', trait: 'leader' },
      { text: 'Heilen können', image: 'https://picsum.photos/seed/heilen/400/500', trait: 'healer' },
    ],
  },
  {
    id: 'q6',
    category: 'Lebensstil',
    questionText: 'Welcher Lifestyle passt zu dir?',
    options: [
      { text: 'Abenteurer & Weltreisender', image: 'https://picsum.photos/seed/abenteurer/400/500', trait: 'adventurer' },
      { text: 'Künstler & Kreativer', image: 'https://picsum.photos/seed/kuenstler/400/500', trait: 'creative' },
      { text: 'Wissenschaftler & Forscher', image: 'https://picsum.photos/seed/forscher/400/500', trait: 'thinker' },
      { text: 'Familienmensch & Gemeinschaftsliebhaber', image: 'https://picsum.photos/seed/familie/400/500', trait: 'community' },
    ],
  },
];

export const MAIN_BIBLE_VERSE = {
    text: "Nicht ihr habt mich erwählt, sondern ich habe euch erwählt und dazu bestimmt, dass ihr euch aufmacht und Frucht bringt und dass eure Frucht bleibt.",
    source: "Johannes 15,16"
};

export const TRAIT_VERSES: Record<PersonalityTrait, { text: string; source: string }> = {
    fighter: { text: "Denn Gott hat uns nicht einen Geist der Verzagtheit gegeben, sondern den Geist der Kraft, der Liebe und der Besonnenheit.", source: "2. Timotheus 1,7" },
    creative: { text: "Ich danke dir dafür, dass ich erstaunlich und wunderbar gemacht bin; wunderbar sind deine Werke, das erkennt meine Seele.", source: "Psalm 139,14" },
    healer: { text: "Gelobt sei der Gott und Vater unseres Herrn Jesus Christus, der Vater der Barmherzigkeit und Gott allen Trostes, der uns tröstet in all unserer Bedrängnis.", source: "2. Korinther 1,3-4" },
    adventurer: { text: "Denn ich, ich kenne meine Pläne, die ich für euch habe - Spruch des HERRN -, Pläne des Heils und nicht des Unheils; denn ich will euch eine Zukunft und eine Hoffnung geben.", source: "Jeremia 29,11" },
    community: { text: "Ihr aber seid ein auserwähltes Geschlecht, eine königliche Priesterschaft, ein heiliger Stamm, ein Volk sein besonderes Eigentum, damit ihr die großen Taten dessen verkündet, der euch aus der Finsternis in sein wunderbares Licht gerufen hat.", source: "1. Petrus 2,9" },
    leader: { text: "Sei mutig und stark! Fürchte dich also nicht und hab keine Angst; denn der HERR, dein Gott, ist mit dir bei allem, was du unternimmst.", source: "Josua 1,9" },
    thinker: { text: "Wir aber haben nicht den Geist der Welt empfangen, sondern den Geist, der aus Gott ist, damit wir erkennen, was uns von Gott geschenkt worden ist.", source: "1. Korinther 2,12" },
};
