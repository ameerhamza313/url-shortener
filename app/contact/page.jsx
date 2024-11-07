export default function Contact() {
  return (
    <main className='min-h-[calc(100vh-64px)] bg-green-100 flex items-center justify-center p-6'>
      <section className='bg-white max-w-lg w-full p-8 rounded-lg shadow-lg border border-gray-200'>
        <h1 className='text-3xl font-bold text-green-700 text-center mb-6'>
          Contact Us
        </h1>
        <p className='text-gray-700 text-center text-lg mb-8'>
          Let’s connect! Reach out through any of the mediums below.
        </p>

        <div className='flex justify-center gap-6'>
          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/ameerhamza-sanadi'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-green-500 transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V8h3v11zm-1.5-12.418c-.96 0-1.5-.622-1.5-1.417s.541-1.417 1.5-1.417 1.5.622 1.5 1.417-.54 1.417-1.5 1.417zM19 19h-3v-5.518c0-1.381-.492-2.322-1.725-2.322-.94 0-1.504.637-1.754 1.25-.09.218-.112.524-.112.831v5.759h-3V8h3v1.453c.403-.642 1.12-1.554 2.727-1.554 1.994 0 3.489 1.296 3.489 4.084V19z' />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href='https://github.com/ameerhamza313'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-600 hover:text-green-500 transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12c0 4.418 2.865 8.166 6.839 9.487.5.091.661-.217.661-.483v-1.709c-2.78.604-3.367-1.343-3.367-1.343-.454-1.155-1.111-1.461-1.111-1.461-.907-.62.07-.607.07-.607 1.003.071 1.53 1.031 1.53 1.031.89 1.525 2.341 1.085 2.91.83.091-.647.348-1.085.634-1.334-2.217-.252-4.555-1.108-4.555-4.93 0-1.088.39-1.98 1.029-2.678-.104-.253-.446-1.271.098-2.65 0 0 .841-.27 2.751 1.026A9.564 9.564 0 0 1 12 6.844c.853.003 1.713.115 2.513.338 1.909-1.296 2.748-1.026 2.748-1.026.546 1.379.204 2.397.1 2.65.641.698 1.028 1.59 1.028 2.678 0 3.832-2.341 4.675-4.567 4.923.358.308.678.917.678 1.849v2.739c0 .27.156.578.671.479A9.995 9.995 0 0 0 22 12c0-5.52-4.48-10-10-10z' />
            </svg>
          </a>

          {/* Email */}
          <a
            href='mailto:ameerhamzasanadi@gmail.com'
            className='text-gray-600 hover:text-green-500 transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-8 h-8'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M12 13.5l12-9v-1.5h-24v1.5zm-12 2.5v-11.9l12 8.9 12-8.9v11.9c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2z' />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
