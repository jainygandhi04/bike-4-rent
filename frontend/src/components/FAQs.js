import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQS = () => {
  const faqs = [
    {
      question: 'What is Bike-4-Rent?',
      answer: 'Bike-4-Rent is a premium two-wheeler rental service that allows you to rent bikes with ease across the city.',
    },
    {
      question: 'What makes us special?',
      answer: 'We offer assured quality bikes, lowest prices, flexible rental options, and excellent customer support.',
    },
    {
      question: 'How does Bike-4-Rent work?',
      answer: 'You choose your bike, select dates, upload necessary documents, and pick up your ride at the designated location.',
    },
    {
      question: 'What documents need to be uploaded?',
      answer: 'You will need a valid driver’s license and a government-issued ID proof.',
    },
    {
      question: 'Is fuel included in the tariff?',
      answer: 'No, fuel charges are not included in the rental tariff. The vehicle will be provided with minimal fuel.',
    },
    {
      question: 'Is there any limit on the number of kilometres?',
      answer: 'No, we offer unlimited kilometres with our rentals unless specified otherwise.',
    },
    {
      question: 'Do I have to pay a deposit?',
      answer: 'Yes, a refundable deposit is required at the time of booking.',
    },
    {
      question: 'When can we expect the refund?',
      answer: 'Refunds are processed within 24-48 hours after you return the bike.',
    },
    {
      question: 'Is there any penalty for late return?',
      answer: 'Yes, late returns will incur additional charges as per the company policy.',
    },
    {
      question: 'How do I cancel my booking?',
      answer: 'You can cancel via your dashboard or contact our customer support team.',
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Cancellations made 24 hours before the booking time will get a full refund.',
    },
    {
      question: 'Who should I contact to pick up the vehicle and how?',
      answer: 'Our local partner details will be provided post booking confirmation.',
    },
    {
      question: 'Can I pick and drop the vehicle at different locations?',
      answer: 'Yes, this option is available with extra fees for selected cities.',
    },
    {
      question: 'Is there any limit on the age of the rider?',
      answer: 'Yes, the rider must be at least 18 years old and hold a valid driving license.',
    },
  ];

  return (
    <section className="max-w-4xl px-4 py-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center text-slate-900">FAQ&apos;s</h1>
      <Collapse accordion bordered={false} className="faq-collapse">
        {faqs.map((item, idx) => (
          <Panel header={item.question} key={idx}>
            <p>{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </section>
  );
};

export default FAQS;
