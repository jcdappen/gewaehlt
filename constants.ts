import type { AgeGroup, Question } from './types';

export const questionsByAge: Record<AgeGroup, Question[]> = {
  'under20': [
    { id: 1, question: "Warst du bei der Mannschaftswahl im Sportunterricht einer der ersten?" },
    { id: 2, question: "Wurdest du schon mal als Klassensprecher oder in die Schülervertretung gewählt?" },
    { id: 3, question: "Haben dich Freunde als Vertrauensperson für ihre Geheimnisse gewählt?" },
    { id: 4, question: "Wurdest du für die Hauptrolle im Schultheaterstück oder für den Schulchor ausgewählt?" },
    { id: 5, question: "Kommst du bei Gruppenfotos automatisch in die Mitte?" },
    { id: 6, question: "Suchen sich kleine Kinder oder Tiere oft ausgerechnet dich aus?" },
    { id: 7, question: "Wirst du von Mitschülern oft um Hilfe bei Hausaufgaben oder Problemen gebeten?" },
    { id: 8, question: "Hat dich schon mal jemand als 'beste Freundin' oder 'besten Freund' bezeichnet?" },
    { id: 9, question: "Warst du Kapitän einer Sportmannschaft oder Anführer einer Clique?" },
    { id: 10, question: "Fühlen sich neue Mitschüler oder Austauschschüler schnell zu dir hingezogen?" },
  ],
  '20-30': [
    { id: 1, question: "Wurdest du für deinen Traumjob oder Studienplatz ausgewählt?" },
    { id: 2, question: "Hat dich jemand als Lebenspartner 'gewählt' und um deine Hand angehalten?" },
    { id: 3, question: "Wurdest du von Kommilitonen oder Kollegen zum Gruppensprecher gewählt?" },
    { id: 4, question: "Haben Freunde dich als Trauzeugen oder Brautjungfer ausgewählt?" },
    { id: 5, question: "Wirst du oft als Organisator für Partys oder Gruppenaktivitäten 'gewählt'?" },
    { id: 6, question: "Hat dein Chef dich für ein wichtiges Projekt oder eine Schulung ausgewählt?" },
    { id: 7, question: "Vertrauen dir Freunde ihre Beziehungsprobleme oder wichtigen Entscheidungen an?" },
    { id: 8, question: "Wurdest du als Pate oder Patin für ein Kind ausgewählt?" },
    { id: 9, question: "Kommen WG-Mitbewohner oder Nachbarn oft zu dir, wenn sie Rat brauchen?" },
    { id: 10, question: "Wurdest du in einem Verein oder einer Organisation in den Vorstand gewählt?" },
    { id: 11, question: "Warst du bei der Mannschaftswahl im Sportunterricht einer der ersten?" },
  ],
  'over30': [
    { id: 1, question: "Haben Kollegen dich als Betriebsrat oder Teamleiter gewählt?" },
    { id: 2, question: "Wurdest du von anderen Eltern als Elternvertreter oder Elternbeirat gewählt?" },
    { id: 3, question: "Vertrauen dir Familienmitglieder wichtige Entscheidungen oder Familienangelegenheiten an?" },
    { id: 4, question: "Wurdest du zum Vorstand eines Vereins oder einer Gemeindeorganisation gewählt?" },
    { id: 5, question: "Suchen jüngere Kollegen oder Nachbarn oft deinen Rat bei Lebensentscheidungen?" },
    { id: 6, question: "Wurdest du als Schiedsrichter bei Familienkonflikten oder Nachbarschaftsstreitigkeiten 'gewählt'?" },
    { id: 7, question: "Haben dich Freunde oder Familie als Organisator für wichtige Familienfeiern ausgewählt?" },
    { id: 8, question: "Vertrauen dir Menschen ihre tiefsten Sorgen und Ängste an?" },
    { id: 9, question: "Wurdest du von der Gemeinde oder Nachbarschaft für ein Ehrenamt ausgewählt?" },
    { id: 10, question: "Fühlen sich Menschen unterschiedlicher Generationen zu dir hingezogen und suchen deine Nähe?" },
    { id: 11, question: "Warst du bei der Mannschaftswahl im Sportunterricht einer der ersten?" },
  ],
};

export const ANSWER_OPTIONS = [
  "Ja",
  "Gelegentlich",
  "Eher nicht so",
];