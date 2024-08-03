'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/navBar/navBar';
import { useTranslations, useLocale } from 'next-intl';

export default function Home() {
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    // Redirect to the specific page, for example, '/specific-page'
    router.push(`/${locale}/landingPage`);
  }, [locale, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <NavBar /> */}
      lsdhjkfbsdl Redirecting...
    </main>
  );
}
