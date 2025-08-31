import React, { useState, useEffect, useRef } from 'react';
import AnimatedContainer from './AnimatedContainer';
import GlassCard from './GlassCard';
import AnimatedButton from './AnimatedButton';

interface GodsLetterScreenProps {
  onComplete: () => void;
  name: string;
}

const GodLetterScreen: React.FC<GodsLetterScreenProps> = ({ onComplete, name }) => {
  const fullText = `Hallo ${name},

Vielleicht kennst du mich nicht, aber ICH kenne dich.
Ich kenne jeden deiner Schritte, jeden deiner Gedanken, jede Nacht, in der du nicht schlafen konntest. (Psalm 139,1-3)

Ich habe DICH gewählt.

Nicht weil du perfekt wärst oder alles richtig gemacht hättest. Ich habe dich gewählt, weil du mein Meisterwerk bist. (Epheser 2,10)
Du warst kein Zufall. Schon bevor die Welt entstand, kannte ich dich und hatte wunderbare Pläne für dein Leben. (Jeremia 1,5 & 29,11)
Während andere dich vielleicht übersehen haben, sehe ICH dich. Während andere dich abgelehnt haben mögen, erwähle ICH dich. (1. Petrus 2,9)
Du bist wertvoll – nicht wegen dem, was du leistest, sondern einfach, weil ich dich geschaffen habe.

Meine Wahl steht fest. Sie hängt nicht von deiner Vergangenheit ab oder davon, ob andere dich wählen. ICH habe dich gewählt – und meine Entscheidung ändert sich nie. (Römer 8,38-39)

Du bist mein geliebtes Kind, mein Meisterwerk.
Ich kenne jeden deiner Träume, jede deiner Ängste, jede Träne, die du geweint hast. Und trotz allem – nein, gerade deshalb – sage ich: Du bist erwählt.

Aber jetzt liegt die Entscheidung bei dir:
Willst du mein Kind werden? Willst du meine Wahl annehmen?
Du musst nichts leisten, nichts beweisen, dich nicht erst verbessern.
Sag einfach JA zu mir. Nimm meine ausgestreckte Hand. Komm nach Hause.
Ich warte auf dich – mit offenen Armen und einem Vaterherz voller Liebe.

Welcome home, mein Kind.
Du gehörst zu mir.

Gott dein Vater.`;

  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
      }, 25);
      return () => clearTimeout(timer);
    } else {
        setIsFinished(true);
    }
  }, [displayedText, fullText]);

  return (
    <AnimatedContainer className="w-full">
      <GlassCard className="max-h-[80vh] flex flex-col">
        <div ref={contentRef} className="text-left text-base md:text-lg whitespace-pre-wrap overflow-y-auto pr-2 flex-grow text-gray-200">
          {displayedText}
          { !isFinished && <span className="animate-ping">|</span> }
        </div>
        {isFinished && (
            <div className="mt-6">
                <AnimatedButton onClick={onComplete}>Weiter</AnimatedButton>
            </div>
        )}
      </GlassCard>
    </AnimatedContainer>
  );
};

export default GodLetterScreen;