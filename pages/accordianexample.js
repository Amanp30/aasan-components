import React from "react";
import Accordion from "../components/accordian/accordian";
function accordianexample() {
  const faqArray = [
    {
      title: "What is your return policy?",
      text: "Our return policy allows customers to return items within 30 days of purchase for a full refund.",
    },
    {
      title: "Do you offer international shipping?",
      text: "Yes, we offer international shipping to select countries.",
    },
    {
      title: "How do I track my order?",
      text: "You can track your order by logging into your account and viewing your order history.",
    },
    {
      title: "What forms of payment do you accept?",
      text: "We accept Visa, Mastercard, American Express, and PayPal.",
    },
  ];

  return (
    <>
      <section className="myaccordian">
        <div>
          {" "}
          <h1>Faq's</h1>
        </div>

        {faqArray.map(({ title, text }) => {
          return (
            <>
              <Accordion title={title} text={text} />
            </>
          );
        })}
      </section>
      <style jsx>{`
        section.myaccordian {
          width: 40%;
          margin: auto;
          padding: 2em;
        }
      `}</style>
    </>
  );
}

export default accordianexample;
