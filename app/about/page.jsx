export default function About() {
  return (
    <main className='min-h-[calc(100vh-64px)] bg-green-100 flex items-center justify-center p-6'>
      <section className='bg-white max-w-2xl w-full p-8 rounded-lg shadow-lg border border-gray-200'>
        <h1 className='text-3xl font-bold text-green-700 text-center mb-4'>
          About Us
        </h1>
        <p className='text-gray-700 text-center text-lg mb-6'>
          Welcome to our URL Shortener! Making links shorter, sharing easier,
          and your digital experience smoother.
        </p>
      </section>
    </main>
  );
}
