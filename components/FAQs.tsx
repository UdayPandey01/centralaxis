import React from "react";

const faqs = [
  {
    question:
      "Are these solutions applicable to me if I am operating a co-location?",
    answer:
      "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
  },
  {
    question: "How does pricing work?",
    answer: "Depending on your requirements, we offer flexible pricing models.",
  },
  {
    question:
      "Do you provide ongoing support and maintenance for your solutions?",
    answer:
      "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Set up a demo and we'll guide you through our offerings and start a trial!",
  },
];

const FAQs = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 lg:my-[72px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#71717A] bg-[#18181B] font-medium rounded-full px-2 py-0.5 inline-block text-sm sm:text-base">
          FAQs
        </p>
        <h2 className="text-white text-2xl sm:text-3xl lg:text-[36px] font-semibold mt-2 sm:mt-3">
          Frequently asked questions
        </h2>
        <p className="text-[#71717A] text-base sm:text-lg lg:text-[20px] max-w-[900px] mt-2 sm:mt-3 text-center px-4">
          Find answers to common questions about our solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 lg:mt-[40px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="text-white rounded-2xl p-4 sm:p-6 w-full"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">{faq.question}</h3>
            <p className="text-sm sm:text-base text-[#71717A]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;