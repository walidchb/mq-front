'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import './style.css';

interface NavBarProps {
  currentScreen: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const NavBar: React.FC<NavBarProps> = ({ currentScreen }) => {
  const locales = ['ar', 'fr'];
  const localePrefix = 'always'; // Default
  const { usePathname } = createSharedPathnamesNavigation({
    locales,
    localePrefix,
  });
  const locale = useLocale();
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: `/${locale}`, current: true },
    { name: 'Documentation', href: `/${locale}/Documentation`, current: false },
    { name: 'Contact', href: `/${locale}/Contact`, current: false },
    { name: 'About', href: `/${locale}/About`, current: false },
  ]);
  const [curScreen, setCurScreen] = useState(currentScreen);

  const [auth, setAuth] = useState(false);
  const t = useTranslations('navBar');
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLanguage = (localee: string) => {
    const loc = locale === 'fr' ? 'ar' : 'fr';
    router.replace(`/${loc}${pathname}`);
  };

  const [bgChanged, setBgChanged] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 200) {
        setBgChanged(true);
      } else {
        setBgChanged(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={`flex justify-center items-center h-[10vh] sticky top-0 z-50 w-[100vw] ${bgChanged ? 'bg-white shaddowNavBar' : ''}`}
    >
      <div
        className={`flex items-center justify-between w-[100vw] px-4 lg:w-[90vw] ${bgChanged ? '' : 'border-b-2 border-white'} py-2`}
      >
        <h1
          className={`hidden lg:flex text-3xl ${bgChanged ? 'text-PrimaryBtnColor' : 'text-white'}`}
        >
          {t('appName')}
        </h1>
        <ul className="md:flex items-center hidden ">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`mx-4 flex justify-center items-center text-center ${bgChanged ? 'text-black' : 'text-white'}`}
              >
                {t(item.name)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center md:hidden">
          <button onClick={toggleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={bgChanged ? 'black' : 'white'}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6h15m-15 6h15m-15 6h15"
              />
            </svg>
          </button>
        </div>
        {dropdownOpen && (
          <div className="md:hidden absolute top-[10vh] left-0 w-full bg-white shadow-lg z-40">
            <ul className="flex flex-col items-start p-4">
              {navigation.map((item) => (
                <li key={item.name} className="w-full mb-2">
                  <a
                    href={item.href}
                    className="w-full text-left py-2 px-4 text-black"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {t(item.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-center items-center">
          <button
            className={`hidden sm:flex justify-center items-center mx-4 text-sm font-medium underline hover:no-underline ${bgChanged ? 'text-black' : 'text-white'}`}
            onClick={() => handleChangeLanguage(locale)}
          >
            {locale === 'fr' ? 'ع' : 'FR'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={bgChanged ? 'black' : 'white'}
              className="w-6 h-6 mx-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
          </button>
          <h1
            className={`font-bold mx-2 ${bgChanged ? 'text-black' : 'text-white'}`}
          >
            {t('login')}
          </h1>
          <button
            className={`rounded-lg px-3 py-1 text-black mx-1 ${bgChanged ? 'bg-PrimaryBtnColor' : 'bg-white'}`}
          >
            {t('register')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
