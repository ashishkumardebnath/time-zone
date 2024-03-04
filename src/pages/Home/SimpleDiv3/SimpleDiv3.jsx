import img1 from "../../../assets/images/simpleDiv3/img1.png";
import img2 from "../../../assets/images/simpleDiv3/img2.png";
import img3 from "../../../assets/images/simpleDiv3/img3.png";
const SimpleDiv3 = () => {
  return (
    <div className="bg-[#ff2022] p-8 flex justify-between mt-28 shadow-xl shadow-[#ca6565]">
      <div>
        <img className="w-20" src={img1} alt="" />
        <p className="text-lg font-sans text-white font-semibold mt-3 mb-1">
          Free Shipping Method
        </p>
        <p className="font-sans text-white ">
          aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
        </p>
      </div>
      <div>
        <img className="w-20" src={img2} alt="" />
        <p className="text-lg font-sans text-white font-semibold mt-3 mb-1">
          Secure Payment System
        </p>
        <p className="font-sans text-white ">
          aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
        </p>
      </div>
      <div>
        <img className="w-20" src={img3} alt="" />
        <p className="text-lg font-sans text-white font-semibold mt-3 mb-1">
          Free Shipping Method
        </p>
        <p className="font-sans text-white ">
          aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
        </p>
      </div>
    </div>
  );
};

export default SimpleDiv3;
