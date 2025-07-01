import { useState } from "react";

const faqs = [
  {
    question: "What is AppRabbit?",
    answer:
      "AppRabbit is a complete SaaS toolkit that helps businesses automate client onboarding, streamline internal workflows, and scale through pre-built marketing systems. It combines CRM, calendar, email marketing, and funnel management into one simple-to-use platform. Whether you're a startup or a growing agency, AppRabbit is designed to save time and increase revenue with automation.",
  },
  {
    question: "Can I integrate it with my CRM?",
    answer:
      "Yes, AppRabbit supports integration with popular CRMs like HubSpot, Salesforce, Pipedrive, and more. You can sync leads, automate follow-ups, and manage sales pipelines without switching between tools. The integration setup is simple and requires no coding — just a few clicks and you're good to go!",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Absolutely! We offer a full-featured 14-day free trial with no credit card required. During the trial, you can explore all tools, create landing pages, test email automation, and even onboard real clients. Our support team is also available to help you make the most out of your trial experience.",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "Nope! AppRabbit is made for non-technical users. Everything from drag-and-drop page builders to automation flows is built with simplicity in mind. You can launch entire workflows and sales funnels without writing a single line of code.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-[800px] mx-auto px-6 py-12">
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 bg-white cursor-pointer hover:bg-blue-50 focus:outline-none flex justify-between items-center shadow-sm"
            >
              <span className="text-black text-lg font-semibold">
                {faq.question}
              </span>
              <span className="text-blue-600 text-2xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-5 bg-gray-50 text-black text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
