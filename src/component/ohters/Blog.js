import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                  <h3 className="text-3xl font-semibold">Jhonkar Mahbub</h3>
                  <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                    Questions
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      What is cors?
                    </h3>

                    <p className="mt-3">
                      The CORS specification introduces several new HTTP headers
                      that enable cross-origin requests. If a browser supports
                      CORS, it sets these headers automatically for cross-origin
                      requests; you don't need to do anything special in your
                      JavaScript code.
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      Why are you using firebase?what other option do we have to
                      implement authentication?
                    </h3>

                    <p className="mt-3">
                      Google Firebase offers many features that pitch it as the
                      go-to backend development tool for web and mobile apps. It
                      reduces development workload and time. And it's a perfect
                      prototyping tool. Firebase is simple, lightweight,
                      friendly, and industrially recognized
                    </p>
                    <h6>
                      There is some alternative platform to build authentication
                      these are 1.parse 2.Supabase 3.Kuzzle 4.Back4app
                    </h6>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      How does private route work?
                    </h3>

                    <p className="mt-3">
                      The private route component is similar to the public
                      route, the only change is that redirect URL and
                      authenticate condition. If the user is not authenticated
                      he will be redirected to the login page and the user can
                      only access the authenticated routes If he is
                      authenticated (Logged in).
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <h3 className="text-xl font-semibold tracking-wide">
                      What is node? how does network work?
                    </h3>

                    <p className="mt-3">
                      Node.js is an open-source, cross-platform, back-end
                      JavaScript runtime environment that runs on a JavaScript
                      Engine (i.e. V8 engine) and executes JavaScript code
                      outside a web browser, which was designed to build
                      scalable network applications. Node.js lets developers use
                      JavaScript to write command line tools and for server-side
                      scripting—running scripts server-side to produce dynamic
                      web page content before the page is sent to the user's web
                      browser. Consequently, Node.js represents a "JavaScript
                      everywhere" paradigm, unifying web-application development
                      around a single programming language, rather than
                      different languages for server-side and client-side
                      scripts.
                      <strong>
                        Node.js accepts the request from the clients and sends
                        the response, while working with the request node.js
                        handles them with a single thread. To operate I/O
                        operations or requests node.js use the concept of
                        threads. Thread is a sequence of instructions that the
                        server needs to perform. It runs parallel on the server
                        to provide the information to multiple clients. Node.js
                        is an event loop single-threaded language. It can handle
                        concurrent requests with a single thread without
                        blocking it for one request. Node.js basically works on
                        two concept Asynchronous and Non-blocking I/O
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </h1>
    </div>
  );
};

export default Blog;
