import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center bg-stone-700 w-auto h-auto p-9 m-40">
      <p className="text-white font-bold">About us <br />We are offering different courses:</p>
      <ol className="text-white font-bold list-decimal ml-6">
        <li>Generative AI</li>
        <li>GenAI for Accounting</li>
        <li>GenAI for Cyber Security</li>
      </ol>
    </div>
  );
};

export default Page;
