import React from 'react';

function ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
      </h1>
      <p className="text-white text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
      <a class="px-6 py-2 font-semibold rounded-md bg-slate-600 text-white" href='/'>
          Back to Home
      </a>
    </div>
  );
}

export default ComingSoon;



