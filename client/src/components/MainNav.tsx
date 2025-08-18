import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserInfo from "./UserInfo";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span>
      {isAuthenticated ? (
        <UserInfo />
      ) : (
        <Button
          variant={"ghost"}
          className="bg-[#C68642] hover:bg-[#D97B4D] text-white px-4 py-2 rounded-lg cursor-pointer hidden md:block"
          onClick={async () => await loginWithRedirect()}
        >
          Login
        </Button>
      )}
    </span>
  );
};

export default MainNav;
