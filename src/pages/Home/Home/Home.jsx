import About from "../About/About";
import Banner from "../Banner/Banner";
import NewArrivals from "../NewArrivals/NewArrivals";
import PopularItems from "../PopularItems/PopularItems";
import SimpleDiv from "../SimpleDiv/SimpleDiv";
import SimpleDiv3 from "../SimpleDiv3/SimpleDiv3";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <NewArrivals></NewArrivals>
      <SimpleDiv></SimpleDiv>
      <PopularItems></PopularItems>
      <About></About>
      <SimpleDiv3></SimpleDiv3>
    </div>
  );
};

export default Home;
