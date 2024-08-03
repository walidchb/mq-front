import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import CostumBtnPrimary from '../costum/costumBtnPrimary';
import CostumBtnBordered from '../costum/costumBtnBordered';

function SectionOne() {
  const t = useTranslations('landingPage.sectionOne');
  return (
    <div className="sectionOneGradian h-[90vh] flex flex-col justify-center items-center  ">
      <h1 className="md:w-[40vw] w-[90vw] text-center font-bold text-6xl">
        {t('header')}
      </h1>
      <p className="md:w-[40vw] w-[70vw] text-center mb-5">{t('pargraph')}</p>
      <div className="flex justify-center items-center ">
        <button className="custom-button-primary" type="submit">
          {t('readNow')}
        </button>
        <button className="custom-button-bordered" type="submit">
          {t('knowMore')}
        </button>
      </div>
    </div>
  );
}

export default SectionOne;
