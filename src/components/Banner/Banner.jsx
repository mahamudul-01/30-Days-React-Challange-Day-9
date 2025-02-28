import bannerImage from '../../assets/images/user.png'

const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              One Step <br />
                Closer to Your <br />
              <span className="dark:text-[#399918]">Dream Job</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
           Your dream job is closer than you think. Imagine a career that excites you, fulfills your passions, and aligns with your goals. With just one click, you can take the first step toward making it a reality.
              <br className="hidden md:inline lg:hidden" />
              Whether it’s the role you’ve always wanted, the company you admire, or the chance to grow and thrive,
              
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-[#399918] dark:text-gray-50"
              >
                Get Started
              </a>
              
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={bannerImage}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
