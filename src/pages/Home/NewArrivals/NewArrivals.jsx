import img1 from "../../../assets/images/New Arrivals/1.webp";
import img2 from "../../../assets/images/New Arrivals/2.webp";
import img3 from "../../../assets/images/New Arrivals/3.webp";
const NewArrivals = () => {
  return (
    <div className="mt-28">
      <h4 className="text-4xl font-semibold font-serif mb-10">
        New <span className="text-[#ff2022] ">Arrivals</span>
      </h4>
      <div className="flex justify-between">
        <div className="border-2 border-[#ff2022] p-5 rounded-t-3xl bg-gray-100">
          <div className="overflow-hidden">
            <img
              className="rounded-t-3xl hover:scale-125 transition duration-500 cursor-pointer"
              src={img1}
              alt=""
            />
          </div>
          <h2 className="text-xl font-semibold text-center mt-5 mb-2">
            Thermo Ball Etip Gloves
          </h2>
          <p className="text-[#ff2022] text-center">$ 45,743</p>
        </div>
        <div className="border-2 border-[#ff2022] p-5 rounded-t-3xl bg-gray-100">
          <div className="overflow-hidden">
            <img
              className="rounded-t-3xl hover:scale-125 transition duration-500 cursor-pointer"
              src={img2}
              alt=""
            />
          </div>{" "}
          <h2 className="text-xl font-semibold text-center mt-5 mb-2">
            Thermo Ball Etip Gloves
          </h2>
          <p className="text-[#ff2022] text-center">$ 45,743</p>
        </div>
        <div className="border-2 border-[#ff2022] p-5 rounded-t-3xl bg-gray-100">
          <div className="overflow-hidden">
            <img
              className="rounded-t-3xl hover:scale-125 transition duration-500 cursor-pointer"
              src={img3}
              alt=""
            />
          </div>{" "}
          <h2 className="text-xl font-semibold text-center mt-5 mb-2">
            Thermo Ball Etip Gloves
          </h2>
          <p className="text-[#ff2022] text-center">$ 45,743</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
