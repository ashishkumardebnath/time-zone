import img1 from "../../../assets/images/about/1.webp";
import img2 from "../../../assets/images/about/2.webp";
const About = () => {
  return (
    <div className="mt-28 lg:space-y-16">
      <div className="flex justify-around px-16">
        <div className="flex justify-center items-center">
          <div>
            <h4 className="text-4xl font-semibold mb-6">Watch of Choice</h4>
            <p className="font-sans mb-8">
              Enim ad minim veniam, quis nostrud exercitation ullamco <br />{" "}
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br />{" "}
              irure dolor in reprehenderit in voluptate velit esse.
            </p>

            <button className="text-red font-sans font-semibold hover:before:bg-redborder-red-500 relative h-[50px] w-52 overflow-hidden border border-[#ff2022] bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#ff2022] before:transition-all before:duration-500 hover:text-white hover:shadow-[#ff2022] hover:before:left-0 hover:before:w-full">
              <span className="relative z-10"> View more product</span>
            </button>
          </div>
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="flex justify-around px-16">
        <div>
          <img src={img2} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <h4 className="text-4xl font-semibold mb-6">Watch of Choice</h4>
            <p className="font-sans mb-8">
              Enim ad minim veniam, quis nostrud exercitation ullamco <br />{" "}
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br />{" "}
              irure dolor in reprehenderit in voluptate velit esse.
            </p>

            <button className="text-red font-sans font-semibold hover:before:bg-redborder-red-500 relative h-[50px] w-52 overflow-hidden border border-[#ff2022] bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#ff2022] before:transition-all before:duration-500 hover:text-white hover:shadow-[#ff2022] hover:before:left-0 hover:before:w-full">
              <span className="relative z-10"> View more product</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
