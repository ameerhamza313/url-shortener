import Image from 'next/image';
import localFont from 'next/font/local';
import Link from 'next/link';

const poppins = localFont({
  src: './fonts/Poppins-ExtraBold.ttf',
  variable: '--font-poppins',
  weight: '100 900',
});

export default function Home() {
  return (
    <main className='bg-green-100'>
      {/* Section with Navbar space */}
      <section className='grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-64px)] pt-16'>
        <div className='flex flex-col gap-6 items-center justify-center p-4 text-center md:text-left'>
          {/* Title */}
          <p className='text-xl md:text-3xl font-bold ${poppins.className}'>
            The best URL shortener in the Market
          </p>

          {/* Boxed Paragraph */}
          <div className='bg-green-200 shadow-lg rounded-lg p-6 md:px-12 md:py-8 max-w-md md:max-w-lg mx-auto'>
            <p className='text-sm md:text-lg font-medium'>
              We are the most straightforward URL shortener in the world. Most
              URL shorteners will track you or require login details. We
              understand your privacy needs, which is why we've created this
              privacy-focused URL shortener.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-3 justify-center md:justify-start'>
            <Link href='/shorten'>
              <button className='bg-green-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white hover:bg-green-600 transition-colors w-full md:w-auto'>
                Try Now
              </button>
            </Link>
            <Link href='/github'>
              <button className='bg-green-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white hover:bg-green-600 transition-colors w-full md:w-auto'>
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className='relative h-[40vh] md:h-full'>
          <Image
            className='mix-blend-darken object-contain'
            alt='A vector illustration'
            src='/vector.jpg'
            fill={true}
            priority
          />
        </div>
      </section>
    </main>
  );
}

