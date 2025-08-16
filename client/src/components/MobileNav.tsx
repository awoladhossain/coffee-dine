import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-[#4B2E2E] hover:text-[#C68642] cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="space-y-2.5 p-1">
        <SheetTitle>
          <span>Welcome to Food Commerce</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="bg-[#4B2E2E] text-white hover:bg-[#C68642] flex-1 font-bold">
            Login
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
