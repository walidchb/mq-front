'use client';
import './style.css';
import React from 'react';
import Image from 'next/image';
import SectionOne from '@/components/landingPage/SectionOne';
import SectionTwo from '@/components/landingPage/SectionTwo';
import SectionThree from '@/components/landingPage/SectionThree';
import SectionFive from '@/components/landingPage/SectionFive';
import SectionFour from '@/components/landingPage/SectionFour';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navBar/navBar';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
function LandingPage() {
  const t = useTranslations('landingPage.sectionThree');

  const router = useRouter();
  const locale = useLocale();
  return (
    <div className="w-[100vw] ">
      <div className=" bg-cover bg-center bg-[url('/images/mosque.png')]">
        <NavBar currentScreen="1" />
        <SectionOne />
      </div>

      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <SectionFive />
      <Footer />

      {/* <button
        className="bg-green-400"
        onClick={() => {
          router.push(`/${locale}/register`);
        }}
      >
        register
      </button> */}
    </div>
  );
}

export default LandingPage;
