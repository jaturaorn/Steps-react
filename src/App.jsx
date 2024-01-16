import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Steps />
      {/* <Steps /> */}
    </>
  );
}

function Steps() {
  // ** useState is High order function
  // !Don't update state manually
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Jaturaporn" });

  function handlePrevious() {
    // *TODO: fix the bug when clicked a lot and show output not expected
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    // *TODO: fix the bug when clicked a lot and show output not expected
    if (step < 3) {
      setStep((s) => s + 1);
    }

    // setTest({ name: "Evie" });

    // ! BAD PRACTICE
    // test.name = "Evie";

    // *! React don't know that actually updates the state
    // step = step + 1;
  }

  return (
    <div>
      <button className="close" onClick={(is) => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>: {messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textcolor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textcolor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textcolor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textcolor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
