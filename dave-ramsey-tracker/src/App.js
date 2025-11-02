import React, { useEffect, useState, useRef } from "react";
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
  const [scrollLocked, setScrollLocked] = useState(true);
  const scrollPositionRef = useRef(0);

  const scrollToChat = () => {
    // Unlock scroll when user clicks the CTA button
    if (scrollLocked) {
      setScrollLocked(false);
      document.body.style.overflow = "";
    }

    const chatSection = document.querySelector(".chat-section");
    const navbar = document.querySelector(".navbar");
    if (chatSection && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const chatSectionTop =
        chatSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = chatSectionTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Lock scroll on mount and prevent browser scroll restoration
  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);

    // Prevent browser from restoring scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Cleanup: restore scroll when component unmounts
      document.body.style.overflow = "";
    };
  }, []);

  // Monitor scroll position and reset if locked
  useEffect(() => {
    if (!scrollLocked) return;

    const handleScroll = () => {
      if (scrollLocked) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLocked]);

  // Unlock scroll on user interaction
  useEffect(() => {
    if (!scrollLocked) return;

    const unlockScroll = () => {
      setScrollLocked(false);
      document.body.style.overflow = "";
    };

    // Detect user interaction events
    const events = [
      "scroll",
      "wheel",
      "touchmove",
      "keydown",
      "mousedown",
      "click",
      "touchstart",
    ];

    const handleInteraction = (e) => {
      // Allow programmatic scrolls (like CTA button)
      if (e.type === "click" && e.target.closest(".cta-button")) {
        unlockScroll();
        return;
      }

      // Check if this is actual user scrolling (not programmatic)
      if (e.type === "scroll") {
        const currentScroll =
          window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(currentScroll - scrollPositionRef.current) > 5) {
          unlockScroll();
        }
        scrollPositionRef.current = currentScroll;
      } else {
        unlockScroll();
      }
    };

    events.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    // Fallback: unlock after 5 seconds
    const timeout = setTimeout(() => {
      unlockScroll();
    }, 5000);

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
      clearTimeout(timeout);
    };
  }, [scrollLocked]);

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
              Ready to take control of your finances? Chat with our AI assistant
              below to discover which Baby Step you're on and get personalized
              guidance on your journey to financial freedom.
            </p>
            <button className="cta-button" onClick={scrollToChat}>
              Speak to Ramsey AI
            </button>
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
