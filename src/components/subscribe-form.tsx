'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '@/actions/subscribe';

export default function SubscribeForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleAction(formData: FormData) {
    setStatus('loading');
    setMessage('');
    
    const result = await subscribeToNewsletter(formData);
    
    if (result?.error) {
      setStatus('error');
      setMessage(result.error);
    } else if (result?.success) {
      setStatus('success');
      setMessage('¡Gracias por suscribirte!');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-primary/10 border border-primary/20 rounded-xl animate-in fade-in zoom-in duration-500">
        <svg className="w-10 h-10 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="font-semibold text-primary">{message}</p>
      </div>
    );
  }

  return (
    <form action={handleAction} className="flex flex-col items-center gap-2">
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
        <input 
          type="email" 
          name="email"
          required
          placeholder="tu@email.com" 
          className="px-4 py-2 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:max-w-xs transition-shadow"
          disabled={status === 'loading'}
        />
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-2 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[120px]"
        >
          {status === 'loading' ? (
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Suscribirse'
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-sm text-destructive font-medium mt-2 animate-in slide-in-from-top-2">{message}</p>
      )}
    </form>
  );
}
