import React, { useState, useEffect, useRef } from 'react';

export default function VoiceQuery() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [listening, setListening] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const recognitionRef = useRef(null);

  const languages = [
    { code: 'en-US', name: 'English', label: 'English' },
    { code: 'hi-IN', name: 'Hindi', label: 'हिंदी' },

  ];

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Sorry, your browser does not support Speech Recognition.');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = selectedLanguage;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript);
      setListening(false);
    };

    recognition.onend = () => setListening(false);
    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setListening(false);
    };

    recognitionRef.current = recognition;
  }, [selectedLanguage]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      setAnswer('');
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const speakText = (text, languageCode) => {
    if (!window.speechSynthesis) {
      console.warn('Speech Synthesis not supported');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmitClick = () => {
    if (!userInput.trim()) return;
    setShowLanguageSelector(true);
  };

  const translateText = async (text, targetLanguage) => {
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`);
      const data = await response.json();
      return data.responseData.translatedText || text;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  const handleSubmitWithLanguage = async (languageCode) => {
    setShowLanguageSelector(false);
    setAnswer('Loading...');

    try {
      const response = await fetch('http://localhost:5000/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: userInput,
          language: languageCode
        }),
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      let reply = data.answer || 'No answer found.';

      if (languageCode !== 'en-US') {
        const targetLang = languageCode === 'hi-IN' ? 'hi' : 'kn';
        setAnswer('Translating...');
        reply = await translateText(reply, targetLang);
      }

      setAnswer(reply);
      speakText(reply, languageCode);
    } catch (error) {
      const errorMsg = 'Error fetching answer. Please try again.';
      setAnswer(errorMsg);
      speakText(errorMsg, selectedLanguage);
    }
  };

  return (
    <section className="voice-query-container section">
      <div className="container card">
        <h2 className="section-title">Ask Your Legal Question</h2>

        <textarea
          rows="4"
          placeholder="Type your question or use voice input..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg resize-vertical mb-4"
        />

        <div className="rights-filter">
          <button
            className={`btn ${listening ? 'btn-emergency' : 'btn-primary'}`}
            onClick={toggleListening}
          >
            {listening ? '🎙️ Listening...' : '🎤 Start Voice Input'}
          </button>

          <button
            className="btn btn-secondary"
            onClick={handleSubmitClick}
            disabled={!userInput.trim() || listening}
          >
            Submit Question
          </button>
        </div>

        {showLanguageSelector && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="card max-w-md w-full mx-4 p-6">
              <h3 className="text-xl font-bold text-center mb-4">Select Language</h3>
              <p className="text-center text-gray-600 mb-4">Choose the language you'd like to hear the answer in:</p>

              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSubmitWithLanguage(lang.code)}
                  className="btn w-full mb-2 btn-primary"
                >
                  {lang.name} – {lang.label}
                </button>
              ))}

              <button
                onClick={() => setShowLanguageSelector(false)}
                className="btn btn-secondary w-full mt-2"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {answer && (
          <div className="mt-6 p-4 emergency-section" aria-live="polite">
            <h3 className="text-lg font-bold mb-2">Answer:</h3>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </section>
  );
}
