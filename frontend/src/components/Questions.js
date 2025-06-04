import React, { useState } from "react";

function Questions() {
  const faqs = [
    {
      question: "What is Neftap?",
      answer:
        "Neftap is a smart NFC business card that lets you share your contact info with just a tap—no app needed.",
    },
    {
      question: "Do I need to install any app to use Neftap?",
      answer:
        "No, Neftap works without any app installation. Just tap and share—simple!",
    },
    {
      question: "How do I update my contact details?",
      answer:
        "Log in to your Neftap account and edit your profile. Changes reflect instantly on your public link.",
    },
    {
      question: "Can I customize my profile link?",
      answer:
        "Yes! You get a unique link like neftap.com/yourname that’s easy to share and remember.",
    },
    {
      question: "Is Neftap compatible with all smartphones?",
      answer:
        "Neftap works with most NFC-enabled Android and iOS devices. For non-NFC phones, a QR code is provided.",
    },
    {
      question: "What info can I include in my Neftap profile?",
      answer:
        "You can add your name, photo, phone number, email, website, WhatsApp, Instagram, company name, and more.",
    },
    {
      question: "Can I use Neftap for business and personal contacts?",
      answer:
        "Absolutely! You can use your profile for professional networking, lead generation, or personal sharing.",
    },
    {
      question: "How secure is my data on Neftap?",
      answer:
        "Neftap uses secure hosting and encryption to protect your data. You can update or delete your info anytime.",
    },
    {
      question: "Can I link my Neftap to my social media accounts?",
      answer:
        "Yes, you can link your Instagram, LinkedIn, WhatsApp, and other profiles directly from your Neftap page.",
    },
    {
      question: "What if someone doesn’t have NFC on their phone?",
      answer:
        "No problem! Neftap cards also display a QR code they can scan to access your profile.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-black mb-12 md:mb-28 md:mt-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[400px] mt-6 md:mt-16 space-y-6 order-1 md:order-1 mb-10 md:mb-20">
            <p className="text-2xl md:text-4xl">FAQ</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="md:w-[700px] mt-12 order-2 md:ml-32 space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border-b pb-4 space-y-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="text-left w-full text-xl md:text-2xl font-medium text-black hover:underline"
                >
                  {faq.question}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-700 text-sm md:text-xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
