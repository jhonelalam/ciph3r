/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css"; 
import ContactForm from "./components/ContactForm"; // Adjust the path if needed

const App: React.FC = () => {

  return (
    <>
      <Nav />
      <main id="home" className="w-full">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 md:pt-0 bg-white dark:bg-black">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Start Your Security Journey with{" "}
            <span id="dynamicWords" className="text-green-500 font-bold">
              Ethical Hacking Fundamentals
            </span>
          </h1>

            <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
            As an entry-level cybersecurity enthusiast, I help others get started with the basics of digital safety and practical, beginner-friendly solutions.
            </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            More About Me
            <svg
              // eslint-disable-next-line tailwindcss/enforces-shorthand
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800 rounded-[9px]"
          >
            Contact Me!
          </a>
        </div>
        <div 
          id="hacker-logo" 
          className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
          style={{ opacity: 0 }} // This ensures it's initially invisible but still rendered
        >
            <div className="relative inline-block group transition-all duration-300 hover:scale-105">
              <img
                src="./assets/images/hacker.png"
                alt="hacker"
                className="rounded-full transition-all duration-300 group-hover:scale-110 group-hover:saturate-150"
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  boxShadow: `
                    0 0 24px 4px rgba(34,197,94,0.25),
                    0 0 48px 12px rgba(34,197,94,0.15),
                    0 0 96px 32px rgba(34,197,94,0.10)
                  `
                }}
              />
              {/* Remove the span overlay that causes darkening */}
            </div>
        </div>
      </div>
    </section>

    {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20 rounded-[9px]">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="0">-1</span>
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Year of Experience</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="3">3</span>+
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Projects Completed</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                      <span data-counter-target="120">0</span>+
                  </dt>
                  <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Hours Learning</dd>
              </div>
          </dl>
                    </div>
                    
        </section>

        {/* #### SERVICES SECTION #### */}
          <section id="services" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">

              <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Learning and Growing in Cybersecurity
                </h2>
                <p className="text-gray-500 text-2xl dark:text-gray-400">
                I focus on foundational security skills, helping others get started with safe web practices, basic vulnerability checks, and understanding how to protect their digital lives.
                </p>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg 
                      className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1" 
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Basic System Analytics</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Entry-level security assessments to spot common vulnerabilities and learn how to fix them.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Network Analysis</h3>
                    <p className="text-gray-500 text-xl dark:text-gray-400">
                      Learning how to monitor network traffic, recognize basic suspicious activity, and understand how data moves online to build foundational cybersecurity knowledge.
                    </p>
                </div>
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Zm-1-9.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.49999-1.1193-2.49999-2.5S8.8334 9 10.2141 9s2.5 1.1193 2.5 2.5Z"/>
                  </svg>

                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Application Security</h3>
                    <p className="text-gray-500 text-xl dark:text-gray-400">
                    Learning and adopting application security best practices to protect software from common threats and vulnerabilities.
                    </p>
                </div>
                {/* ...other cards can be removed or simplified... */}
              </div>
            </div>
          </section>
          

          {/* #### SERVICES SECTION #### */}
          <section id="about" className="bg-white dark:bg-black pt-8">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                About Me, CIPH3R
              </h2>
              <p className="mb-4 text-3xl text-justify">
                I'm an entry-level cybersecurity enthusiast passionate about helping others learn the basics of digital safety. My journey started with online courses and hands-on labs, and I'm eager to share what I've learned so far.
              </p>
                <p className="text-xl text-justify">
                Starting out as a security engineer can feel overwhelming, but every expert was once a beginner. I'm committed to sharing my journey and resources to help others learn, grow, and build a strong foundation in cybersecurity from day one.
                </p>
                <a
                  className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray- rounded-[9px]"
                  href="./assets/files/Alam_Jhonel_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download C.V.
                </a>
            </div>
]            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-8">
              <img
                className="w-full h-auto max-h-[400px] object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:z-20 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
                src="./assets/images/monitor-sec.jpg"
                alt="monitor-sec"
                style={{ transitionProperty: "transform, filter, z-index" }}
              />
            </div>
          </div>
          <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="transform transition-all duration-300 hover:scale-125">
              <p className="text-2xl font-medium py-8 text-gray-900 dark:text-white">
                "The biggest threat to cybersecurity is the assumption that someone else is handling it."
              </p>
            </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full transition-opacity duration-300 hover:opacity-70"
                src="./assets/images/hacker.png"
                alt="profile picture"
              />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Anonymous
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    Anonymous Author
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
        <section id="contact" className="bg-white dark:bg-black">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full h-auto max-h-[400px] object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:z-20 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/data.jpg"
              alt="dashboard image"
              loading="lazy"
              style={{ maxHeight: 400, filter: "contrast(1.1) brightness(1.05) saturate(1.1)" }}
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-justify">
              Eager to Begin My Journey in Cybersecurity — Ready to Learn, Adapt, and Grow Securely.
              </h2>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400 text-justify">
              Let’s connect and explore how I can begin contributing to your cybersecurity efforts—learning to identify vulnerabilities before threats do.
              </p>
            </div>
            </div>
        </section> 
      </main>
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
