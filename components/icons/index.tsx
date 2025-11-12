import React from 'react';

// A generic SVG props type for our icons
interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const WorldIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-18 0h18z" />
  </svg>
);

export const SwordIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 19.467L4.533 8.818a2.25 2.25 0 010-3.182l2.228-2.228a2.25 2.25 0 013.182 0l10.649 10.649m-1.5 1.5l-2.228 2.228a2.25 2.25 0 01-3.182 0l-4.5-4.5a2.25 2.25 0 010-3.182l2.228-2.228" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75l-2.25-2.25" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 5.25l2.25 2.25" />
  </svg>
);

export const BookIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export const ChoiceIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l6 6m0 0l-6 6m6-6H9a6 6 0 010-12h3" />
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.94.07 4.28 4.28 0 004 2.98 8.52 8.52 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.5 20.33 8.79c0-.21 0-.42-.01-.63.84-.6 1.56-1.36 2.14-2.23z" />
    </svg>
);
export const TwitchIcon: React.FC<IconProps> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M11.571 4.714h1.715v5.143H11.57zM15.714 4.714h1.715v5.143h-1.715zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0H6zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z" />
    </svg>
);
export const YoutubeIcon: React.FC<IconProps> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M21.582 7.337c-.225-.84-.875-1.49-1.715-1.715C18.25 5.2 12 5.2 12 5.2s-6.25 0-7.867.422c-.84.225-1.49.875-1.715 1.715C2 9.092 2 12 2 12s0 2.908.422 4.663c.225.84.875 1.49 1.715 1.715C5.75 18.8 12 18.8 12 18.8s6.25 0 7.867-.422c.84-.225 1.49-.875 1.715-1.715C22 14.908 22 12 22 12s0-2.908-.418-4.663zM9.75 14.8V9.2l4.5 2.8-4.5 2.8z" />
    </svg>
);
export const DiscordIcon: React.FC<IconProps> = (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.3,3.3c-1.6-1.1-3.5-1.8-5.5-2.1C14.6,1.8,14.3,2.4,14,3c-1.8-0.2-3.6-0.2-5.4,0C8.3,2.4,8,1.8,7.8,1.2 C5.8,1.5,3.9,2.2,2.3,3.3c-2.8,1.9-3.4,5.1-2.2,8.4c1,2.8,3.2,5.1,6,6.3c0.6,0.2,1.1,0.4,1.6,0.5c0.7-0.5,1.3-1.1,1.8-1.7 c-0.5-0.2-1-0.3-1.5-0.5c-0.2-0.1-0.4-0.2-0.6-0.3c-0.1,0-0.2-0.1-0.2-0.1c-1.4-0.6-2.6-1.5-3.6-2.8c-0.2-0.3-0.4-0.6-0.5-0.9 c0,0,0,0-0.1-0.1c0.1-0.1,0.2-0.2,0.2-0.2c4.3,1.6,9.1,1.6,13.4,0c0.1,0.1,0.2,0.1,0.2,0.2c0,0.1-0.1,0.1-0.1,0.1 c-0.1,0.3-0.3,0.6-0.5,0.9c-1,1.3-2.2,2.2-3.6,2.8c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.4,0.2-0.6,0.3c-0.5,0.2-1,0.3-1.5,0.5 c0.5,0.6,1.1,1.2,1.8,1.7c0.5-0.1,1-0.3,1.6-0.5c2.8-1.2,5-3.5,6-6.3C23.7,8.4,23.1,5.2,20.3,3.3z M9.1,14.5 c-0.9,0-1.7-0.9-1.7-2c0-1.1,0.8-2,1.7-2s1.7,0.9,1.7,2C10.8,13.6,10,14.5,9.1,14.5z M15.5,14.5c-0.9,0-1.7-0.9-1.7-2 c0-1.1,0.8-2,1.7-2s1.7,0.9,1.7,2C17.2,13.6,16.4,14.5,15.5,14.5z" />
    </svg>
);

export const DragonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M13.293 3.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L15 6.414V10a1 1 0 11-2 0V6.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3zM5.43 10.571A1 1 0 016 10h12a1 1 0 110 2H6a1 1 0 01-.57-.929zM10.707 15.293a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 12.586V9a1 1 0 112 0v3.586l1.293-1.293a1 1 0 111.414 1.414l-3 3zM5.43 15.571A1 1 0 016 15h12a1 1 0 110 2H6a1 1 0 01-.57-.929z" />
        <path fillRule="evenodd" d="M12 2a1 1 0 011 1v18a1 1 0 11-2 0V3a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
);

export const HammerIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l-3.75 3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25L11.25 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 11.25l3.75-3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 11.25" />
    </svg>
);

export const MonsterIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c-3.14 0-6 2.15-6 5.25 0 2.52 2.01 4.5 4.5 4.5H6v2.25c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V13.5h-1.5c2.49 0 4.5-1.98 4.5-4.5C18 5.9 15.14 3.75 12 3.75zM9 11.25c-.69 0-1.25-.56-1.25-1.25S8.31 8.75 9 8.75s1.25.56 1.25 1.25S9.69 11.25 9 11.25zm6 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.75v1.5m4.5-1.5v1.5" />
    </svg>
);