import React, { useState, useEffect, useRef } from 'react';
import AnimatedContainer from './AnimatedContainer';
import GlassCard from './GlassCard';
import AnimatedButton from './AnimatedButton';
import { godLetterAudioBase64 } from '../services/audioData';

interface GodsLetterScreenProps {
  onComplete: () => void;
  name: string;
}

// FIX: Renamed component to `GodsLetterScreen` to match filename and conventions.
const GodsLetterScreen: React.FC<GodsLetterScreenProps> = ({ onComplete, name }) => {
  const fullText = `Hallo ${name || 'mein Kind'},

Vielleicht kennst du mich nicht, aber ich kenne dich.
Ich kenne jeden deiner Schritte, jeden deiner Gedanken, jede Nacht, in der du nicht schlafen konntest.

Ich habe dich gewählt.

Nicht weil du perfekt wärest oder alles richtig gemacht hättest. Ich habe dich gewählt, weil du mein Meisterwerk bist.
Du warst kein Zufall. Schon bevor die Welt entstand, kannte ich dich und hatte wunderbare Pläne für dein Leben.
Während andere dich vielleicht übersehen haben, sehe ich dich. Während andere dich abgelehnt haben mögen, erwähle ich dich.
Du bist wertvoll. Nicht wegen dem, was du leistest, sondern einfach, weil ich dich geschaffen habe.

Meine Wahl steht fest. Sie hängt nicht von deiner Vergangenheit ab oder davon, ob andere dich wählen.
Ich habe dich gewählt und meine Entscheidung ändert sich nie.

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
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
      }, 35); // Slightly slower for better sync
      return () => clearTimeout(timer);
    } else {
        setIsTypingFinished(true);
    }
  }, [displayedText, fullText]);

  useEffect(() => {
    if (isTypingFinished) {
        const audio = new Audio(godLetterAudioBase64);
        audioRef.current = audio;
        audio.play().catch(error => {
            console.error("Audio autoplay was prevented.", error);
        });

        return () => {
            if (audio) {
                audio.pause();
                audio.src = '';
                audioRef.current = null;
            }
        };
    }
  }, [isTypingFinished]);


  return (
    <AnimatedContainer className="w-full">
      <GlassCard className="max-h-[80vh] flex flex-col">
        <div ref={contentRef} className="text-left text-base md:text-lg whitespace-pre-wrap overflow-y-auto pr-2 flex-grow text-gray-200">
          {displayedText}
          { !isTypingFinished && <span className="animate-ping">|</span> }
        </div>
        {isTypingFinished && (
            <div className="mt-6">
                <AnimatedButton onClick={onComplete}>Weiter</AnimatedButton>
            </div>
        )}
      </GlassCard>
    </AnimatedContainer>
  );
};

// FIX: Removed duplicate 'export' keyword.
export default GodsLetterScreen;