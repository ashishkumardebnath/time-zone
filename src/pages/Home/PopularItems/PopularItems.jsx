import { useEffect } from "react";
import { useState } from "react";
import { BsCart4 } from "react-icons/bs";

const PopularItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="mt-28">
      <h4 className="text-4xl font-semibold text-center">Popular Items</h4>
      <p className="font-sans text-center mt-3">
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna <br /> aliqua. Quis ipsum suspendisse ultrices gravida.
      </p>
      <div className="grid lg:grid-cols-3 lg:gap-y-12 gap-y-4 mt-12">
        {items.map((item) => (
          <div key={item.id}>
            <div className="group">
              <div className="relative overflow-hidden">
                <img
                  className="border-2 border-b-[#ff2022]"
                  src={item.img}
                  alt=""
                />
                <div className="absolute w-[365px]  flex justify-center items-center -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500  ">
                  <button className="bg-[#ff2022] text-white  hover:border-black/40 py-3 mt-80 w-full flex justify-center items-center gap-2">
                    <BsCart4 />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* <img
                className="border-2 border-b-[#ff2022]"
                src={item.img}
                alt=""
              /> */}

              <h1 className="text-xl font-semibold text-center mt-5 mb-2">
                {item.name}
              </h1>
              <p className="text-[#ff2022] text-center">$ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-20">
        <button className="text-red font-sans font-semibold hover:before:bg-redborder-red-500 relative h-[50px] w-52 overflow-hidden border border-[#ff2022] bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#ff2022] before:transition-all before:duration-500 hover:text-white hover:shadow-[#ff2022] hover:before:left-0 hover:before:w-full">
          <span className="relative z-10"> View more product</span>
        </button>
      </div>
    </div>
  );
};

export default PopularItems;
