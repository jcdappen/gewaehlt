
import React from 'react';
import { ShareIcon, LinkIcon, PrayerIcon } from './icons';

const ActionScreen: React.FC = () => {
  const shareData = {
    title: 'Gott hat dich gewählt',
    text: 'Ich habe gerade eine erstaunliche Reise gemacht und entdeckt, warum Gott mich gewählt hat. Finde es auch heraus!',
    url: window.location.href,
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert('Teilen wird von diesem Browser nicht unterstützt. Kopiere einfach den Link!');
      }
    } catch (error) {
      console.error('Fehler beim Teilen:', error);
    }
  };

  return (
    <div className="mt-12 w-full">
      <h3 className="text-xl font-bold text-white mb-6">Wie geht es weiter?</h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-200 transition-transform duration-300 transform hover:scale-105"
        >
          <ShareIcon className="w-5 h-5" />
          Teile deine Erfahrung
        </button>
        <a
          href="https://www.google.com/search?q=kirche+in+meiner+n%C3%A4he"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 font-semibold text-white bg-amber-600 rounded-lg hover:bg-amber-500 transition-transform duration-300 transform hover:scale-105"
        >
          <LinkIcon className="w-5 h-5" />
          Finde eine Gemeinde
        </a>
         <button
          onClick={() => alert('Hier könnte ein Gebets-Kontaktformular oder eine Ressource verlinkt sein.')}
          className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 font-semibold text-white bg-transparent border-2 border-slate-500 rounded-lg hover:bg-slate-800 hover:border-slate-400 transition-colors duration-300"
        >
          <PrayerIcon className="w-5 h-5" />
          Gebet & Kontakt
        </button>
      </div>
    </div>
  );
};

export default ActionScreen;
