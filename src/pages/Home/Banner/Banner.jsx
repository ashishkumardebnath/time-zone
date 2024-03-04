import img from "../../../assets/images/banner/watch.png.webp";
const Banner = () => {
  return (
    <div className="flex px-36 bg-gray-100">
      <div className="flex justify-center items-center">
        <div className="space-y-7">
          <h6 className="text-6xl font-extrabold">
            Select Your New Perfect Style
          </h6>
          <p className="font-sans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            error officiis neque dignissimos quia velit.
          </p>
          <button className="btn bg-gray-700 text-white font-sans">
            SHOP NOW
          </button>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
