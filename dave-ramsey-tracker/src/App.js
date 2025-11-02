import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";

const BABY_STEPS = [
  {
    id: 1,
    title: "Save $1,000 for your starter emergency fund",
    description:
      "Build a small emergency fund to cover minor emergencies and break the cycle of debt.",
    target: 1000,
    type: "savings",
  },
  {
    id: 2,
    title: "Pay off all debt (except the house) using the debt snowball",
    description:
      "List debts smallest to largest, pay minimums on all, attack the smallest with intensity.",
    target: null,
    type: "debt",
  },
  {
    id: 3,
    title: "Save 3–6 months of expenses in a fully funded emergency fund",
    description:
      "Build a full emergency fund to protect against major life events.",
    target: null,
    type: "savings",
  },
  {
    id: 4,
    title: "Invest 15% of your household income in retirement",
    description:
      "Start investing for retirement once you have your foundation in place.",
    target: 15,
    type: "investment",
  },
  {
    id: 5,
    title: "Save for your children's college fund",
    description:
      "Help your children avoid student loans by saving for their education.",
    target: null,
    type: "savings",
  },
  {
    id: 6,
    title: "Pay off your home early",
    description:
      "Become completely debt-free by paying off your mortgage early.",
    target: null,
    type: "debt",
  },
  {
    id: 7,
    title: "Build wealth and give",
    description: "Live like no one else so you can give like no one else.",
    target: null,
    type: "wealth",
  },
];

function App() {
  // Scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Load Voiceflow script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
      window.voiceflow.chat.load({
        verify: { projectID: "69079bd52c2c409d8b3b40d6" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
        render: {
          mode: "embedded",
          target: document.getElementById("voiceflow-chat-container"),
        },
      });
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Ramsey AI</div>
      </nav>
      <header className="hero-header">
        <div className="hero-content">
          <h1>Transform Your Financial Future</h1>
          <p>
            Follow Dave Ramsey's proven 7 Baby Steps to achieve financial peace
            and build lasting wealth
          </p>
          <div className="hero-cta">
            <p className="hero-cta-text">
              Ready to take control of your finances? Chat with our AI assistant below to discover which Baby Step you're on and get personalized guidance on your journey to financial freedom.
            </p>
          </div>
        </div>
      </header>

      <section className="chat-section">
        <div
          id="voiceflow-chat-container"
          className="voiceflow-chat-container"
        ></div>
      </section>

      <main className="steps-showcase">
        <div className="steps-container">
          <h2>The 7 Baby Steps to Financial Freedom</h2>
          <div className="steps-grid">
            {BABY_STEPS.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-number">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
