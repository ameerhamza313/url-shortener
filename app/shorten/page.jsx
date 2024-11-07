'use client';
import Link from 'next/link';
import { useState } from 'react';

const Shorten = () => {
  const [url, seturl] = useState('');
  const [shorturl, setshorturl] = useState('');
  const [generated, setGenerated] = useState('');

  const generate = () => {
    if (!url || !shorturl) {
      alert('Please fill in both fields to generate a short URL.');
      return; // Exit the function if either field is empty
    }
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('/api/generate', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl('');
        setshorturl('');
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className='bg-green-100 min-h-[calc(100vh-64px)] flex items-center justify-center'>
      <section className='mx-auto bg-green-200 p-6 md:p-8 lg:p-10 rounded-lg flex flex-col gap-6 shadow-md border border-gray-200 w-full max-w-lg'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-center text-black-700'>
          Generate Your Short URLs
        </h1>

        <div className='flex flex-col gap-4'>
          {/* URL Input */}
          <input
            type='text'
            value={url}
            required
            className='px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md text-sm md:text-base border border-gray-300'
            placeholder='Enter your URL'
            onChange={(e) => seturl(e.target.value)}
          />

          {/* Short URL Text Input */}
          <input
            type='text'
            value={shorturl}
            required
            className='px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md text-sm md:text-base border border-gray-300'
            placeholder='Enter your preferred short URL text'
            onChange={(e) => setshorturl(e.target.value)}
          />

          {/* Generate Button */}
          <button
            onClick={generate}
            className='bg-green-500 rounded-lg shadow-md py-2 text-white text-base font-semibold transition-transform duration-300 hover:scale-105'
          >
            Generate
          </button>
        </div>

        {/* Display Generated Link */}
        {generated && (
          <>
            <span className='font-semibold text-lg text-center text-green-700'>
              Your Link
            </span>
            <code className='break-all text-center text-sm md:text-base bg-gray-100 p-3 rounded-md shadow-inner'>
              <Link
                target='_blank'
                href={generated}
                className='text-blue-600 underline hover:text-blue-800'
              >
                {generated}
              </Link>
            </code>
          </>
        )}
      </section>
    </main>
  );
};

export default Shorten;
