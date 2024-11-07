import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='bg-green-100 min-h-[calc(100vh-64px)] flex items-center justify-center p-4 sm:p-6 lg:p-8'>
      <div className='flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl mx-auto'>
        {/* Content Card */}
        <section className='bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-md border border-gray-200 w-full md:w-1/2'>
          <div className='text-center flex flex-col items-center justify-center gap-3 sm:gap-4'>
            {/* Heading */}
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-700'>
              The Best URL Shortener
            </h1>

            {/* Description */}
            <p className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 px-2 sm:px-4'>
              A simple, privacy-focused URL shortener. No tracking, no login—just
              fast, easy link shortening.
            </p>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full'>
              <Link href='/shorten' passHref className='w-full sm:w-auto'>
                <span className='block bg-green-500 rounded-lg shadow-md px-4 sm:px-5 py-2 text-sm sm:text-base font-semibold text-white hover:bg-green-600 transition-all duration-300 cursor-pointer text-center'>
                  Try Now
                </span>
              </Link>
              <Link href='/github' target='_blank' passHref className='w-full sm:w-auto'>
                <span className='block bg-green-500 rounded-lg shadow-md px-4 sm:px-5 py-2 text-sm sm:text-base font-semibold text-white hover:bg-green-600 transition-all duration-300 cursor-pointer text-center'>
                  GitHub
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Separate Image Section */}
        <section className='relative h-[200px] sm:h-[300px] md:h-[400px] w-full md:w-1/2 bg-green-100'>
          <Image
            src="/vector.jpg"
            alt="Abstract illustration of URL shortening"
            priority
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className='mix-blend-multiply object-contain'
          />
        </section>
      </div>
    </main>
  );
}

