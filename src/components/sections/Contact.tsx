import { RevealOnScroll } from "../ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 top-0 left-0 w-full overflow-hidden">
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
        </div>
        <form
          action="https://formspree.io/f/mvgzdwnw"
          method="POST"
          className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-1">
              Name
            </label>
            <div className="flex items-center  bg-black border border-gray-600 rounded-lg">
              <svg
                className="w-5 h-5 ml-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A3 3 0 017 14.121V10a3 3 0 016 0v4.121a3 3 0 011.879 3.683m-9.757 0a3.001 3.001 0 005.758 0"
                />
              </svg>
              <input
                className="w-full p-3 text-white bg-transparent outline-none"
                placeholder="Your Name"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-1">
                Email
              </label>
              <div className="flex items-center  bg-black border border-gray-600 rounded-lg">
                <svg
                  className="w-5 h-5 ml-3 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m8 4H8m8-8H8m-2 0a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8z"
                  />
                </svg>
                <input
                  className="w-full p-3 text-white bg-transparent outline-none"
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-400 mb-1">
                Phone
              </label>
              <div className="flex items-center  bg-black border border-gray-600 rounded-lg">
                <svg
                  className="w-5 h-5 ml-3 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3m-6 6l6-6m6 6l6-6"
                  />
                </svg>
                <input
                  className="w-full p-3 text-white bg-transparent outline-none"
                  placeholder="Your Phone Number"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-400 mb-1">
              Message
            </label>
            <textarea
              className="w-full h-32 p-3 text-white bg-black border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
              id="message"
              name="message"
              required></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-5 py-3 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition duration-300">
            <span className="text-base font-medium">Send Message</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </RevealOnScroll>
    </section>
  );
};
