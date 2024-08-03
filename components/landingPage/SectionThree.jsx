import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

function SectionThree() {
  const t = useTranslations('landingPage.sectionThree');

  return (
    <div className="w-[100vw] flex justify-center items-center flex-col bg-white py-20 px-10 ">
      <h1 className="text-PrimaryGreen text-5xl font-bold my-4 text-center">
        {t('title')}
      </h1>
      <h3 className="text-PrimaryGreen mb-10 text-center">{t('paragraph')}</h3>
      <div className="flex justify-around items-center flex-col md:flex-row w-[90vw]">
        <div className="flex justify-center items-center flex-col">
          <p className="bg-PrimaryGreen  overflow-auto w-[80vw] md:w-[30vw] lg:w-[25vw] mx-1 md:h-[20vw] h-auto  rounded-lg pb-8 pt-4 px-8 text-justify">
            {t('quran')}
          </p>
          <Image
            className="bg-white rounded-full -mt-8 p-2"
            // classNae={`absolute ${locale == 'ar' ? '-top-32 -left-20' : '-top-32 -right-20'} `}
            src="/images/ta7fidquran.png" // Path to your image
            alt="Description of the image"
            width={80} // Desired width
            height={80} // Desired height
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="bg-PrimaryGreen overflow-auto w-[80vw] md:w-[30vw] lg:w-[25vw] mx-1 md:h-[20vw] h-auto  rounded-lg pb-8 pt-4 px-8 text-justify">
            {t('summer')}
          </p>
          <Image
            className="bg-white rounded-full -mt-8 p-4"
            // classNae={`absolute ${locale == 'ar' ? '-top-32 -left-20' : '-top-32 -right-20'} `}
            src="/images/summerprogramme.png" // Path to your image
            alt="Description of the image"
            width={80} // Desired width
            height={80} // Desired height
          />
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="bg-PrimaryGreen overflow-auto w-[80vw] md:w-[30vw] lg:w-[25vw] mx-1 md:h-[20vw] h-auto  rounded-lg pb-8 pt-4 px-8 text-justify">
            {t('primaire')}
          </p>
          <Image
            className="bg-white rounded-full -mt-8 p-4"
            // classNae={`absolute ${locale == 'ar' ? '-top-32 -left-20' : '-top-32 -right-20'} `}
            src="/images/ta7diri.png" // Path to your image
            alt="Description of the image"
            width={80} // Desired width
            height={80} // Desired height
          />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
