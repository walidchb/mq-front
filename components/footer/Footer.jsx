import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

function Footer() {
  const [navigation, setNavigation] = useState([
    { name: 'quran' },
    { name: 'primaire' },
    { name: 'summer' },
  ]);
  const locale = useLocale();

  const t = useTranslations('Footer');
  return (
    <footer className="flex justify-around items-center flex-col bg-cover bg-center bg-PrimaryGreen bg-[url('/images/zalij.png')] text-white pt-12 border-b-8 border-b-PrimaryBtnColor">
      <div className="w-[100vw] flex flex-col md:flex-row justify-center items-start md:justify-start md:items-start mb-12 px-20">
        <div className="md:w-[30vw]  lg:px-8">
          <h1 className="mb-4 text-3xl">{t('DivOneTitle')}</h1>
          <p className="text-justify">{t('DivOneText')}</p>
        </div>
        <div className="lg:px-20 md:px-8 my-4 md:my-0">
          <h1 className="mb-4 text-3xl">{t('DivTwoTitle')}</h1>
          <ul className="flex justify-start items-start flex-col">
            {navigation.map((item) => (
              <li key={item.name} className="flex justify-start items-center">
                <Image
                  className={locale === 'fr' ? 'rotate-180' : ''}
                  src="/icons/BackArrow.png" // Path to your image
                  alt="Description of the image"
                  width={30} // Desired width
                  height={30} // Desired height
                />
                <a href={item.href} className={`mx-4 'text-white'}`}>
                  {t(item.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:px-20">
          {' '}
          <h1 className="mb-4 text-3xl">{t('ContactUs')}</h1>
          <div className="flex justify-start items-center">
            {' '}
            <Image
              className={` `}
              src="/icons/Email.png" // Path to your image
              alt="Description of the image"
              width={30} // Desired width
              height={30} // Desired height
            />{' '}
            <Image
              className={` mx-2`}
              src="/icons/FacebookCircled.png" // Path to your image
              alt="Description of the image"
              width={30} // Desired width
              height={30} // Desired height
            />{' '}
            <Image
              className={` `}
              src="/icons/Phone.png" // Path to your image
              alt="Description of the image"
              width={30} // Desired width
              height={30} // Desired height
            />
          </div>
        </div>
      </div>
      <p className=" w-[80vw] py-4 border-t-2 border-t-white  flex justify-center items-center">
        {t('copyrights')}
      </p>
    </footer>
  );
}

export default Footer;
