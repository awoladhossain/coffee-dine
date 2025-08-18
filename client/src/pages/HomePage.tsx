import shopapp from "../assets/shop-app.jpg";
import appstore from "../assets/store-app.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-lg py-12 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-3xl font-bold tracking-tight text-[#4B2E2E] hover:text-[#C68642]">
          Welcome to the Home Page
        </h1>
        <span className="text-lg text-gray-600">
          Coffee is just a click away!
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img
          src={shopapp}
          alt="Shop App"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tight text-[#4B2E2E] hover:text-[#C68642]">
            Order Take Away
          </span>
          <span>Download Our Coffee Dine App for fast and easy ordering!</span>
          <img
            src={appstore}
            alt="App Store"
            className="w-[450px] h-[210px] rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
