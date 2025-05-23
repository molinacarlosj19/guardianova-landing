
import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Protect your digital business and stay compliant without being an expert</h1>
        <p className="text-lg text-gray-600 mb-6">
          GuardiaNova is the smart platform that helps you prevent cyber threats,
          meet legal requirements, and automate your protection.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
            Start for Free
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50 transition">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Risk Diagnosis",
              desc: "Analyze your digital risk level in minutes."
            },
            {
              title: "LegalBot Generator",
              desc: "Create personalized contracts and policies with AI."
            },
            {
              title: "Accessible Education",
              desc: "Learn practical cybersecurity through micro-courses."
            },
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-lg border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 bg-blue-50">
        <h2 className="text-2xl font-bold mb-4">Start your risk checkup today</h2>
        <p className="mb-6 text-gray-700">No credit card required. No risk. Just protection.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Create Account
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GuardiaNova, LLC — Miami, FL
      </footer>
    </div>
  );
}
