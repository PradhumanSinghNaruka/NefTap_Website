import React, { useState } from "react";

import * as motion from "motion/react-client";

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
  const ball = {
    width: 200,
    height: 200,
    borderRadius: "50%",
    background:
      "linear-gradient(to right, rgb(43,160,152), hsl(246,50%,72%), #bad2f0)",
  };
  const ball2 = {
    width: 100,
    height: 100,
    borderRadius: "50%",
    background: 
    "linear-gradient(to right, rgb(43,160,152), hsl(246,50%,72%), #bad2f0)"
  };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-black mb-12 md:mb-2 md:mt-4"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-6 md:mt-16 order-1 md:order-1 mb-10 md:mb-20">
            <p className="text-2xl md:text-4xl">FAQ</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-0 md:mb-20 mt-4">
            <span className="leading-tight bg-clip-text">Frequently</span>
            <span className="bg-gradient-to-tr from-[hsl(176,79%,34%)] via-[rgb(69,56,216)] to-[rgb(14,82,165)] leading-tight bg-clip-text text-transparent">
              Asked Questions
            </span>
            </h1>
            <motion.div
              style={ball}
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0, 10, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: -10,
                transition: { type: "spring", stiffness: 200, damping: 12 },
              }}
            />
            <motion.div
              style={ball2}
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0, 10, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: -10,
                transition: { type: "spring", stiffness: 200, damping: 12 },
              }}
            />
          </div>
          <div className="md:w-1/2 mt-12 order-2 space-y-2">
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
