'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CostumBtnPrimary from '../costum/costumBtnPrimary';
function SectionFive() {
  const t = useTranslations('landingPage.sectionFive');
  const locale = useLocale();
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t('nameRequired')),
    email: Yup.string().email(t('InvalidEmail')).required(t('emailRequired')),
    phone: Yup.string()
      .matches(/^[0-9]+$/, t('MustDigits'))
      .min(10, t('tenDigits'))
      .max(10, t('tenDigits'))
      .required(t('phoneRequired')),
    message: Yup.string().required(t('messageRequired')),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };
  return (
    <div className="flex px-8 sm:px-10 md:px-10 py-20 w-[100vw] bg-white  justify-around items-center">
      <div className="w-[100%] md:w-[50%] ">
        <h1 className="text-PrimaryGreen text-5xl font-extrabold text-center md:text-start">
          {t('title')}
        </h1>
        <p className="text-PrimaryGreen leading-10  text-center md:text-start">
          {t('contactUsText')}
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div>
                  <Field
                    placeholder={t('yourName')}
                    className="bg-[#dfdfdf] text-PrimaryGreen border-PrimaryGreen border-2 my-1 py-2 px-3 flex justify-center items-center rounded-lg w-[100%] md:w-[70%]"
                    type="text"
                    id="name"
                    name="name"
                  />
                  <ErrorMessage
                    className="text-red-400"
                    name="name"
                    component="div"
                  />
                </div>
                <div>
                  <Field
                    placeholder={t('yourEmail')}
                    className="bg-[#dfdfdf] text-PrimaryGreen border-PrimaryGreen border-2 my-1 py-2 px-3 flex justify-center items-center rounded-lg w-[100%] md:w-[70%]"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <ErrorMessage
                    className="text-red-400"
                    name="email"
                    component="div"
                  />
                </div>
                <div>
                  <Field
                    placeholder={t('yourPhone')}
                    className="bg-[#dfdfdf] text-PrimaryGreen border-PrimaryGreen border-2 my-1 py-2 px-3 flex justify-center items-center rounded-lg w-[100%] md:w-[70%]"
                    type="text"
                    id="phone"
                    name="phone"
                  />
                  <ErrorMessage
                    className="text-red-400"
                    name="phone"
                    component="div"
                  />
                </div>
                <div>
                  <Field
                    placeholder={t('yourMessage')}
                    className="bg-[#dfdfdf] text-PrimaryGreen h-44 border-PrimaryGreen border-2 py-2 px-3 flex justify-center items-center rounded-lg w-[100%] md:w-[90%]"
                    as="textarea"
                    id="message"
                    name="message"
                  />
                  <ErrorMessage
                    className="text-red-400"
                    name="message"
                    component="div"
                  />
                </div>
                <div className="w-[100%] md:w-[90%] flex justify-end mt-2 ">
                  <button className="custom-button-primary" type="submit">
                    {t('submit')}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Image
        className={`hidden md:block `}
        src="/images/maskgroup.png" // Path to your image
        alt="Description of the image"
        width={350} // Desired width
        height={350} // Desired height
      />
    </div>
  );
}

export default SectionFive;
