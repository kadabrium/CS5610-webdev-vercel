export default function TailwindResponsiveDesign() {
  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold mb-4">Responsive Design</h2>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Nozzle_de_Laval_diagram.svg/960px-Nozzle_de_Laval_diagram.svg.png"
              alt="laval"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-24 w-24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="2.05" fill="currentColor" />
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4.2"
                    transform="rotate(60 12 12)"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="4.2"
                    transform="rotate(120 12 12)"
                  />
                </g>
              </svg>
              <div className="mt-2 text-2xl font-semibold">React JS</div>
            </div>
          </div>
          <div className="min-w-0 p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Professional Courses
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
            >
              Rocket Propulsion Fundamentals
            </a>
            <p className="mt-2 text-gray-500">
              An in-depth study of the fundamentals of rocket propulsion...
            </p>
          </div>
        </div>
        
      </div>
      <div id="wd-ai-responsive" className="mx-auto mt-4 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-indigo-50">
        <div className="md:flex">
          <div className="flex h-56 items-center justify-center bg-indigo-700 text-2xl font-semibold text-white md:w-48 md:shrink-0">React JS</div>
          <div className="min-w-0 p-8 lg:p-12">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Professional Courses</div>
            <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline">Rocket Propulsion Fundamentals</a>
            <p className="mt-2 text-gray-500">An in-depth study of the fundamentals of rocket propulsion...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**After the existing card, add a second sample card with id wd-ai-responsive that keeps the course sample copy,
 *  and add one more breakpoint utility (for example lg:p-12 on the text column, 
 * or md:bg-indigo-50 on the card) so padding or background clearly differs between narrow and wide viewports. */
