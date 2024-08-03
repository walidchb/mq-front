'use client';

import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';

function SectionTwo() {
  const locale = useLocale();

  const t = useTranslations('landingPage.sectionTwo');
  const [schoolNbr, setSchoolNbr] = useState(18);
  const [studentNbr, setStudentNbr] = useState(100);
  const [teacherNbr, setTeacherNbr] = useState(50);

  const [isCounting, setIsCounting] = useState(false);
  const sectionRef = useRef(null);

  const startCount = (endValue, setValue) => {
    let start = 0;
    const duration = 2000; // Duration of the count animation
    const incrementTime = 100; // Interval time for each increment
    const totalIncrements = duration / incrementTime;
    const incrementValue = endValue / totalIncrements;

    const counter = setInterval(() => {
      start += incrementValue;
      if (start >= endValue) {
        clearInterval(counter);
        setValue(endValue);
      } else {
        setValue(Math.ceil(start));
      }
    }, incrementTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isCounting) {
          setIsCounting(true);
          startCount(schoolNbr, setSchoolNbr);
          startCount(studentNbr, setStudentNbr);
          startCount(teacherNbr, setTeacherNbr);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [schoolNbr, studentNbr, teacherNbr, isCounting]);

  return (
    <div className="bg-[#1c3f39] flex justify-center items-center flex-col py-20">
      <div className="md:relative pt-10 px-10 md:px-20 pb-5 lg:w-[60vw] md:w-[70vw] w-[90vw] bg-[#D9D9D9] rounded-xl md:justify-start flex justify-center flex-col md:flex-row items-center">
        <div className="md:w-[50%]  w-[100%] pb-32 md:pb-0 text-center md:text-start">
          <h1 className="text-PrimaryGreen text-5xl font-extrabold">
            {t('aboutSchool')}
          </h1>
          <p className="text-PrimaryGreen leading-10 text-justify">
            {t('aboutSchoolText')}
          </p>
        </div>
        <Image
          className={`hidden md:block md:absolute   ${locale == 'ar' ? 'md:-top-32 md:-left-20' : 'md:-top-32 md:-right-20'} `}
          src="/images/10604515.png" // Path to your image
          alt="Description of the image"
          width={400} // Desired width
          height={400} // Desired height
        />
      </div>
      <Image
        className={`md:hidden -mt-44`}
        src="/images/10604515.png" // Path to your image
        alt="Description of the image"
        width={350} // Desired width
        height={350} // Desired height
      />
      {/* <div
        ref={sectionRef}
        className="mt-20 flex justify-center items-center w-[80vw]"
      >
        <div className="flex justify-center items-center flex-col px-20 border-x-2 border-white">
          <h3 className="text-PrimaryBtnColor font-bold text-2xl mb-4">
            + {schoolNbr}
          </h3>
          <h3>{t('schoolNbr')}</h3>
        </div>
        <div className="flex justify-center items-center flex-col px-20">
          <h3 className="text-PrimaryBtnColor font-bold text-2xl mb-4">
            + {studentNbr}
          </h3>
          <h3>{t('studentNbr')}</h3>
        </div>
        <div className="flex justify-center items-center flex-col px-20 border-x-2 border-white">
          <h3 className="text-PrimaryBtnColor font-bold text-2xl mb-4">
            + {teacherNbr}
          </h3>
          <h3>{t('teacherNbr')}</h3>
        </div>
      </div> */}
    </div>
  );
}

export default SectionTwo;
