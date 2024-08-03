import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
function SectionFour() {
  const locale = useLocale();

  const t = useTranslations('landingPage.sectionFour');

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      questionFr: 'What is your return policy?',
      answerFr:
        'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.',
      questionAr: 'ما هي سياسة الإرجاع الخاصة بكم؟',
      answerAr:
        'تستمر سياسة الإرجاع الخاصة بنا لمدة 30 يومًا. إذا مرت 30 يومًا منذ شرائك، للأسف، لا يمكننا أن نقدم لك استردادًا أو استبدالًا.',
    },
    {
      questionFr: 'How do I track my order?',
      answerFr:
        'Once your order has shipped, we will send you an email with a tracking number and a link to track your package.',
      questionAr: 'كيف يمكنني تتبع طلبي؟',
      answerAr:
        'بمجرد شحن طلبك، سنرسل لك بريدًا إلكترونيًا يحتوي على رقم تتبع ورابط لتتبع الطرد الخاص بك.',
    },
    {
      questionFr: 'Do you ship internationally?',
      answerFr:
        'Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on the destination.',
      questionAr: 'هل تقومون بالشحن دوليًا؟',
      answerAr:
        'نعم، نقوم بالشحن إلى معظم الدول حول العالم. تختلف رسوم الشحن وأوقات التسليم حسب الوجهة.',
    },
    {
      questionFr: 'How can I contact customer service?',
      answerFr:
        'You can contact our customer service team by emailing support@example.com or calling 1-800-123-4567.',
      questionAr: 'كيف يمكنني الاتصال بخدمة العملاء؟',
      answerAr:
        'يمكنك الاتصال بفريق خدمة العملاء لدينا عن طريق إرسال بريد إلكتروني إلى support@example.com أو الاتصال بالرقم 1-800-123-4567.',
    },
    {
      questionFr: 'Can I change my order after it has been placed?',
      answerFr:
        'If you need to make a change to your order, please contact us as soon as possible. We will do our best to accommodate your request.',
      questionAr: 'هل يمكنني تغيير طلبي بعد أن يتم تقديمه؟',
      answerAr:
        'إذا كنت بحاجة إلى إجراء تغيير في طلبك، يرجى الاتصال بنا في أسرع وقت ممكن. سنبذل قصارى جهدنا لتلبية طلبك.',
    },
  ];

  return (
    <div className="bg-PrimaryGreen p-4 md:p-20">
      {' '}
      <h2 className="text-2xl font-bold mb-6 text-center md:text-start">
        {t('faqTitle')}
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4  ">
          <div
            className={` p-4 flex justify-between items-center   cursor-pointer ${activeIndex != index ? 'border-2 rounded-lg' : 'border-t-2 border-r-2 border-l-2 rounded-t-lg'}  border-white`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-start items-center">
              <Image
                className={` mx-2 `}
                src="/icons/Help.png" // Path to your image
                alt="Description of the image"
                width={40} // Desired width
                height={40} // Desired height
              />
              <h3 className="text-sm md:text-lg font-medium">
                {locale === 'ar' ? faq.questionAr : faq.questionFr}
              </h3>
            </div>
            <Image
              className={`mx-2 `}
              src="/icons/ExpandArrow.png" // Path to your image
              alt="Description of the image"
              width={30} // Desired width
              height={30} // Desired height
            />
          </div>
          {activeIndex === index && (
            <div
              className={` p-4   cursor-pointer ${activeIndex == null ? 'border-2 rounded-lg' : 'border-b-2 border-r-2 border-l-2 rounded-b-lg'}  border-white`}
            >
              <p>{locale === 'ar' ? faq.answerAr : faq.answerFr}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SectionFour;
