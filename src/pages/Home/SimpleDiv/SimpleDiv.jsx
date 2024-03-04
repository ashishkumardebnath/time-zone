import img1 from "../../../assets/images/simpleDiv/1.jpeg";
import img2 from "../../../assets/images/simpleDiv/2.jpeg";
import img3 from "../../../assets/images/simpleDiv/3.jpeg";
import img4 from "../../../assets/images/simpleDiv/4.jpeg";
import img5 from "../../../assets/images/simpleDiv/5.jpeg";
import img6 from "../../../assets/images/simpleDiv/6.jpeg";
import img7 from "../../../assets/images/simpleDiv/7.jpeg";
const SimpleDiv = () => {
  return (
    <div className="mt-36">
      <div className="container mx-auto  py-2  ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDiv;
