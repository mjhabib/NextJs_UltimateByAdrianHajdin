import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
      {children}
    </main>
  );
}

// the parent directory (auth) is only acts as a 'route group' and it does not effect our routing address
