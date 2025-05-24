import React from 'react';

export default function About() {
  return (
    <section className="section about-page">
      <div className="container card">
        <h1 className="text-3xl font-bold text-primary mb-4">About Her Legal Rights</h1>

        <p className="text-lg mb-6 text-gray-700">
          <strong>Her Legal Rights</strong> is a platform dedicated to empowering women by educating them about their legal rights in India.
          Our goal is to bridge the knowledge gap and make the law accessible, understandable, and actionable—especially for women who may not have immediate access to legal support.
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-tertiary mb-2">Why This Platform Matters</h2>
          <p className="text-gray-700">
            In India, despite progressive laws, many women remain unaware of their rights due to legal jargon, limited outreach, and societal barriers.
            Her Legal Rights simplifies the law using clear language, practical examples, and interactive tools—so women can learn, assert, and protect their rights with confidence.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-tertiary mb-2">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Voice Query:</strong> Ask your legal questions using voice input and get spoken answers in multiple Indian languages.</li>
            <li><strong>Rights Explorer:</strong> Browse categorized legal rights related to workplace, education, property, domestic violence, family law, and more.</li>
            <li><strong>Emergency Help:</strong> Access verified 24x7 national helplines and NGO contacts for immediate legal and emotional support.</li>
            <li><strong>Multilingual Support:</strong> Ask and receive responses in English, Hindi etc—breaking language barriers.</li>
            
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-tertiary mb-2">Who This Is For</h2>
          <p className="text-gray-700">
            This platform is designed for women, social workers, educators, and anyone who wants to understand and advocate for women's legal rights in India.
            Whether you're facing challenges or just want to be informed, Her Legal Rights gives you the power of knowledge.
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-primary p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-primary mb-2">Our Mission</h2>
          <p className="text-gray-700">
            To ensure every woman in India knows her rights, feels empowered to seek justice, and never stands alone in the face of injustice.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-lg font-bold mb-2 text-gray-800">Need Help or Have Feedback?</h3>
          <p className="mb-4 text-gray-600">We're here to listen and improve. Reach out to us for support or to share your suggestions.</p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
