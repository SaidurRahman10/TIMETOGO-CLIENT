import React from "react";

const Blog = () => {
  return (
    <div>
      <section
        className="
   
   pt-20
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   overflow-hidden
   "
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[520px]">
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  
                  mb-4
                  "
                >
                  Some Important Question
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 px-4">
              <div
                className="
               single-faq
               w-full
               
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
              >
                <button className="faq-btn flex w-full text-left">
                  <div
                    className="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                  >
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold ">
                      WHAT IS CORS ?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq1" className="faq-content pl-[62px]">
                  <p className="text-base  leading-relaxed py-3">
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                    mechanism that allows a server to indicate any origins
                    (domain, scheme, or port) other than its own from which a
                    browser should permit loading resources. CORS also relies on
                    a mechanism by which browsers make a "preflight" request to
                    the server hosting the cross-origin resource, in order to
                    check that the server will permit the actual request. In
                    that preflight, the browser sends headers that indicate the
                    HTTP method and headers that will be used in the actual
                    request.
                  </p>
                </div>
              </div>

              <div
                className="
               single-faq
               w-full
               
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
              >
                <button className="faq-btn flex w-full text-left">
                  <div
                    className="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                  >
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold ">
                      Why we using firebase? What other options do we have to
                      implement authentication?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq1" className="faq-content pl-[62px]">
                  <p className="text-base  leading-relaxed py-3">
                    Firebase Authentication provides backend services,
                    easy-to-use SDKs, and ready-made UI libraries to
                    authenticate users to your app. It supports authentication
                    using passwords, phone numbers, popular federated identity
                    providers like Google, Facebook and Twitter, and more.{" "}
                    <br /> <br />
                    <h1 className="font-bold">
                      We have other options do we have to implement
                      authentication
                    </h1>
                    STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloa,
                    Frontegg, Authress and etc.
                  </p>
                </div>
              </div>
              <div
                className="
               single-faq
               w-full
               
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
              >
                <button className="faq-btn flex w-full text-left">
                  <div
                    className="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                  >
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>

                  <div className="w-full">
                    <h4 className="text-lg font-semibold ">
                      How does the private route work?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq6" className="faq-content pl-[62px]">
                  <p className="text-base  leading-relaxed py-3">
                    The react private route component renders child components (
                    children ) if the user is logged in. If not logged in the
                    user is redirected to the /login page with the return url
                    passed in the location state property.
                  </p>
                </div>
              </div>
              <div
                className="
               single-faq
               w-full
               
               border border-[#F3F4FE]
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
              >
                <button className="faq-btn flex w-full text-left">
                  <div
                    className="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
                  >
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="fill-current icon"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                      />
                    </svg>
                  </div>

                  <div className="w-full">
                    <h4 className="text-lg font-semibold ">
                      What is Node? How does Node work?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq6" className="faq-content pl-[62px]">
                  <p className="text-base  leading-relaxed py-3">
                    Node. js (Node) is an open source development platform for
                    executing JavaScript code server-side. It is a used as
                    backend service where javascript works on the server-side of
                    the application. This way javascript is used on both
                    frontend and backend. Node. js runs on chrome v8 engine
                    which converts javascript code into machine code, it is
                    highly scalable, lightweight, fast, and data-intensive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Blog;
