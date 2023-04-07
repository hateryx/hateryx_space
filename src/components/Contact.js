import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative z-8">
      <div className="bg-yellow-300 py-12 border-t-2 border-blue-700 flex flex-reverse items-start md:grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center items-center">
            <h2 className="text-base text-blue-800 font-semibold tracking-wide uppercase">
              Contact Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-light tracking-tight text-blue-900 sm:text-4xl">
              Let's Connect
            </p>
            <p className="mt-4 max-w-2xl text-xl font-light justify-content text-black lg:mx-auto">
              I'm always open to hearing about new opportunities and connecting
              with like-minded professionals. Feel free to reach out to me via
              email or LinkedIn.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center font-light justify-content md:justify-center space-x-4 space-y-4 pr-4 text-sm">
          <div className="flex items-center ml-4 py-3">
            <a
              href="https://github.com/hateryx"
              className="text-gray-900 hover:text-indigo-500 flex"
            >
              <svg
                className="h-6 w-6 text-indigo-600 mr-3"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1.5"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <div>
                <p className="text-sm md:text-base text-gray-900">GitHub</p>
                <div className="hidden md:flex">See my code repositories</div>
              </div>
            </a>
          </div>
          <div className="flex items-center pb-2">
            <a
              href="mailto:rsdamag.cpa.8@gmail.com"
              className="text-gray-900 hover:text-indigo-500 flex"
            >
              <svg
                className="h-6 w-6 text-indigo-600 mr-3"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
                  fill="white"
                />
                <path
                  d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                  fill="#EA4335"
                />
                <path
                  d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                  fill="#FBBC05"
                />
                <path
                  d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                  fill="#34A853"
                />
                <path
                  d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                  fill="#C5221F"
                />
                <path
                  d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                  fill="#C5221F"
                />
                <path
                  d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                  fill="#C5221F"
                />
                <path
                  d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                  fill="#4285F4"
                />
              </svg>
              <div>
                <p className="text-sm md:text-base text-gray-900">Email</p>
                <div className="hidden md:flex">rsdamag.cpa.8@gmail.com</div>
              </div>
            </a>
          </div>

          <div className="items-center pb-2">
            <a
              href="https://www.linkedin.com/in/richmond-damag-989190205/"
              className="text-gray-900 hover:text-indigo-500 flex"
            >
              <svg
                className="h-6 w-6 text-indigo-600 mr-3"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="#0A66C2"
                  d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                />
              </svg>
              <div>
                <div className="text-sm md:text-base text-gray-900">
                  LinkedIn
                </div>
                <div className="hidden md:flex"> Connect with me</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
