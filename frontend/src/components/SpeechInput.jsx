/**
 * frontend/src/components/SpeechInput.jsx
 * Component that handles:
 * - Recording speech via Web Speech API
 * - Sending user question + language to backend
 * - Displaying answer
 * - Speaking answer in original language
 */

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export default function SpeechInput() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [answer, setAnswer] = useState("");
  const [language, setLanguage] = useState("en-US");

  const recognition = useRef(null);

  useEffect(() => {
    if (!SpeechRecognition) {
      alert("Speech Recognition API not supported in this browser.");
      return;
    }

    recognition.current = new SpeechRecognition();
    recognition.current.continuous = false;
    recognition.current.interimResults = false;
    recognition.current.lang = language;

    recognition.current.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setTranscript(spokenText);
      setListening(false);
      askQuestion(spokenText);
    };

    recognition.current.onerror = (event) => {
      setListening(false);
      alert("Speech recognition error: " + event.error);
    };

    return () => {
      if (recognition.current) recognition.current.stop();
    };
  }, [language]);

  const startListening = () => {
    if (!recognition.current) return;
    setAnswer("");
    setTranscript("");
    setListening(true);
    recognition.current.lang = language;
    recognition.current.start();
  };

  // Detect short language code from lang tag (e.g. 'en' from 'en-US')
  const sourceLangCode = language.split("-")[0];

  // Call backend API with question and sourceLang, get answer
  async function askQuestion(questionText) {
    try {
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${backendURL}/api/ask`, {
        text: questionText,
        sourceLang: sourceLangCode,
      });
      if (response.data.answer) {
        setAnswer(response.data.answer);
        speakAnswer(response.data.answer, language);
      }
    } catch (error) {
      alert("Error fetching answer: " + error.message);
    }
  }

  // Use Speech Synthesis to speak answer aloud
  function speakAnswer(text, langTag) {
    if (!window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langTag;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <label>
        Select Language:
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ marginLeft: 10 }}
        >
          <option value="en-US">English (US)</option>
          <option value="hi-IN">Hindi</option>
          <option value="es-ES">Spanish</option>
          <option value="fr-FR">French</option>
          <option value="de-DE">German</option>
          {/* Add more languages as needed */}
        </select>
      </label>

      <div style={{ marginTop: 20 }}>
        <button onClick={startListening} disabled={listening}>
          {listening ? "Listening..." : "Start Speaking"}
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>You said:</strong> {transcript}
      </div>

      <div style={{ marginTop: 20 }}>
        <strong>Answer:</strong> {answer}
      </div>
    </div>
  );
}
