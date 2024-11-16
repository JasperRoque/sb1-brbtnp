import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: "How do I get started with Healers U?",
    answer: "Begin by booking a free Apprenticeship Interview where we'll discuss your goals and find the perfect program for your journey.",
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Yes! All our programs are designed to be flexible, allowing you to learn at your own pace while still receiving regular support and guidance.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "We offer flexible payment plans for all our programs. Details can be discussed during your Apprenticeship Interview.",
  },
  {
    question: "Is prior healing experience required?",
    answer: "No prior experience is required. Our programs are designed for both beginners and experienced practitioners.",
  },
  {
    question: "How much support will I receive?",
    answer: "You'll receive ongoing support through our community platform, regular group calls, and one-on-one sessions with our expert mentors.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-sage-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about our programs</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="bg-white rounded-lg shadow-sm">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary-500">
                    <span className="text-lg text-gray-900">{faq.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-primary-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}