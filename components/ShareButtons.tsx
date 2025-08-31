import React from 'react';

const ShareButtons: React.FC = () => {
    const shareUrl = "https://gott-hat-dich-gewaehlt.de"; // Placeholder URL
    const shareTitle = "Ich habe dich gewählt - Entdecke eine Wahrheit, die dein Leben verändert";

    const socialLinks = [
        {
            name: "Facebook",
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z" /></svg>
        },
        {
            name: "Twitter",
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
            icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.1 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.98-2.08z" /></svg>
        },
        {
            name: "WhatsApp",
            href: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
            icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.85L2 22l5.3-1.38c1.41.72 3.01 1.15 4.7 1.15 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.5 0-2.93-.4-4.18-1.11l-.3-.18-3.12.81.83-3.04-.2-.31a8.28 8.28 0 0 1-1.26-4.38c0-4.54 3.68-8.22 8.22-8.22s8.22 3.68 8.22 8.22-3.68 8.22-8.22 8.22zm4.4-5.93c-.24-.12-1.43-.7-1.65-.78-.23-.08-.39-.12-.56.12-.17.24-.62.78-.76.93-.14.15-.28.17-.52.05-.24-.12-1.02-.38-1.93-1.2-.72-.63-1.2-1.4-1.34-1.64s-.02-.23.1-.34c.1-.1.24-.26.36-.39.12-.13.16-.21.24-.35.08-.14.04-.27 0-.39-.04-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.42h-.5c-.15 0-.39.04-.6.23-.2.2-.78.76-.78 1.85s.8 2.15.91 2.3s1.58 2.41 3.82 3.36c.55.23.97.36 1.31.46.43.12.82.1.1.07.35-.04 1.02-.42 1.16-.81.14-.39.14-.73.1-.81-.04-.08-.15-.12-.39-.24z" /></svg>
        }
    ];

    return (
        <div className="flex justify-center space-x-6">
            {socialLinks.map(link => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transform transition-all hover:scale-110"
                    aria-label={`Share on ${link.name}`}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default ShareButtons;