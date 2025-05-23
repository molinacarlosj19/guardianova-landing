import React from 'react';

export default function Button({ label, onClick }) {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={onClick}>
      {label}
    </button>
  );
}
