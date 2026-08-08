import React from 'react';

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide global layout components */
        header, footer, .whatsapp-pulse { 
          display: none !important; 
        }
        
        /* Make parent main container span 100vw full screen and ignore limits */
        main.container {
          max-width: 100vw !important;
          width: 100vw !important;
          padding: 0 !important;
          margin: 0 !important;
        }
      ` }} />
      {children}
    </>
  );
}
