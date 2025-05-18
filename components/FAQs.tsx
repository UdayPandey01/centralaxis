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
    <div className="w-[1400px] mx-auto mt-[72px] mb-[72px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#71717A] bg-[#18181B] font-medium rounded-4xl px-2 py-0.5 inline-block text-[16px]">
          FAQs
        </p>
        <h2 className="text-white text-[36px] font-semibold mt-[12px]">
          Frequently asked questions
        </h2>
        <p className="text-[#71717A] text-[20px] max-w-[900px] mt-[12px]">
          Find answers to common questions about our solutions.
        </p>
      </div>

      <div className="flex flex-wrap ml-[26px] gap-[40px] mt-[40px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" text-white rounded-2xl p-6 w-[424px] h-auto"
          >
            <h3 className="text-[18px] font-semibold mb-4">{faq.question}</h3>
            <p className="text-[16px] text-[#71717A]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
