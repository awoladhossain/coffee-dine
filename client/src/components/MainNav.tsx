import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <Button
      variant={"ghost"}
      className="bg-[#C68642] hover:bg-[#D97B4D] text-white px-4 py-2 rounded-lg cursor-pointer hidden md:block"
    >
      Order Now
    </Button>
  );
};

export default MainNav;
