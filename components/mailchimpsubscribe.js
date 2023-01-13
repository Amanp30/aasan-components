import React, { useState } from "react";
import dynamic from "next/dynamic";
const Mailchimp = dynamic(() => import("mailchimp-api-v3"), { ssr: false });

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const mailchimp = new Mailchimp("17a7f0b43b2a30f5270fe8aae671297b-us9");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await mailchimp.lists.members.create({
        listId: "5399dbe0b5",
        email: {
          email: email,
        },
        status: "subscribed",
      });
      setMessage("Successfully Subscribed!");
    } catch (err) {
      setMessage(
        "Error Subscribing, please check your email address and try again"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Subscribe</button>
      <div>{message}</div>
    </form>
  );
};

export default SubscribeForm;
