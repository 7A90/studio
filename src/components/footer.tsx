'use client';

import { useState, useEffect } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This ensures the year is calculated on the client, preventing hydration mismatches.
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 md:px-8 md:py-0 bg-card border-t mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          بناها 7490. &copy; {year}
        </p>
      </div>
    </footer>
  );
}
