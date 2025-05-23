import React from 'react';

export default function FeatureCard({ title, description }) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
