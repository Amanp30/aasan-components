import React, { useEffect, useState } from "react";
import Quizcheck from "./quizcheck";
import Quizradio from "./quizradio";
function Quizcomp({ hello }) {
  const [question, setQuestion] = useState("");
  const [options, setoptions] = useState([]);
  const [selected, setselected] = useState("");
  const [correctanswer, setcorrectanswer] = useState("");
  const [info, setinfo] = useState("");
  const [prevIndex, setPrevIndex] = useState(null);

  const bank = [
    {
      question: "What data it will send to backend?",
      options: ["aman", "object", "array"],
      answer: "string",
      info: "this will be there",
    },
    {
      question: "where is tushar",
      options: ["string", "atharv", "array"],
      answer: "string",
      info: "this will be there",
    },
    {
      question: "where is ashok",
      options: ["string", "object", "arya"],
      answer: "string",
      info: "this will be there",
    },
    {
      question: "you are here ",
      options: ["honey", "object", "array"],
      answer: "string",
      info: "this will be there",
    },
    {
      question: "sab moh maya hai",
      options: ["string", "keshav", "array"],
      answer: "string",
      info: "this will be there",
    },
  ];

  useEffect(() => {
    randompick(bank);
  }, []);

  function fromto(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randompick(bank) {
    const length = bank.length;
    let random = fromto(0, length);

    setQuestion(bank[random].question);
    setoptions(bank[random].options);
    setcorrectanswer(bank[random].answer);
    setinfo(bank[random].info);
  }

  function anotherone() {
    setselected("");
    randompick(bank);
  }

  return (
    <>
      <div
        className="quizdiv"
        style={{ width: "50%", margin: "auto", paddingTop: "5em" }}
      >
        <h2> {question}</h2>
        <Quizradio options={options} state={selected} setstate={setselected} />
        {selected} - {correctanswer}
        <Quizcheck
          correct={correctanswer}
          selected={selected}
          info={info}
          another={(e) => anotherone()}
        />
      </div>
    </>
  );
}

export default Quizcomp;
