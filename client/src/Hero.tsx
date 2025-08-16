import backgroudn from "./assets/back-ground.jpg";
const Hero = () => {
  return (
    <div>
      <img
        src={backgroudn}
        alt="Hero Icon"
        className="w-full max-h-[800px] object-cover"
      />
    </div>
  );
};

export default Hero;
