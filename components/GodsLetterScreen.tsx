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
Ich kenne jeden deiner Schritte, jeden deiner Gedanken, jede Nacht, in der du nicht schlafen konntest.

Ich habe DICH gewählt.

Nicht weil du perfekt wärst oder alles richtig gemacht hättest. Ich habe dich gewählt, weil du mein Meisterwerk bist.
Du warst kein Zufall. Schon bevor die Welt entstand, kannte ich dich und hatte wunderbare Pläne für dein Leben.
Während andere dich vielleicht übersehen haben, sehe ICH dich. Während andere dich abgelehnt haben mögen, erwähle ICH dich.
Du bist wertvoll – nicht wegen dem, was du leistest, sondern einfach, weil ich dich geschaffen habe.

Meine Wahl steht fest. Sie hängt nicht von deiner Vergangenheit ab oder davon, ob andere dich wählen. ICH habe dich gewählt – und meine Entscheidung ändert sich nie.

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

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioUrl = "https://github.com/jcdappen/gewaehlt/raw/2e35110dd852ef8001e881feac306b20f6cdae02/Gottes_brief.mp3";

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
  
  const toggleAudio = () => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
  };
  
  // Pause audio when component unmounts
  useEffect(() => {
    return () => {
        audioRef.current?.pause();
    }
  }, []);


  return (
    <AnimatedContainer className="w-full">
      <GlassCard className="max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/20">
            <h2 className="text-xl font-bold text-white">Ein Brief für dich</h2>
            <button 
                onClick={toggleAudio}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label={isPlaying ? "Audio anhalten" : "Audio abspielen"}
            >
                {isPlaying ? (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
            </button>
        </div>
        <div ref={contentRef} className="text-left text-base md:text-lg whitespace-pre-wrap overflow-y-auto pr-2 flex-grow text-gray-200">
          {displayedText}
          { !isFinished && <span className="animate-ping">|</span> }
        </div>
        {isFinished && (
            <div className="mt-6">
                <AnimatedButton onClick={onComplete}>Weiter</AnimatedButton>
            </div>
        )}
        <audio 
            ref={audioRef} 
            src={audioUrl} 
            onEnded={() => setIsPlaying(false)} 
            preload="auto" 
        />
      </GlassCard>
    </AnimatedContainer>
  );
};

export default GodLetterScreen;