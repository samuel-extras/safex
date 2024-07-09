import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col  md:flex px-2 pb-3 pt-1">
      <a
        href="https://www.safe-escrow.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center -space-x-2 mb-5">
          <img src="/logo.png" alt="" className="h-16 w-auto " />
          <img src="/safe-x.png" alt="" className="h-9 w-auto" />
        </div>
      </a>
      <div className="flex flex-col space-y-4 px-5">
        <nav className=" flex flex-col space-y-4 mb-5">
          <Link
            to="/"
            className="w-full h-8 bg-gradient-to-r from-[#D9D9D9] to-[#D9D9D9] [&.active]:from-[#7B74FF] [&.active]:to-[#C8C7D2]  hover:bg-white text-black text-xs rounded-[10px] flex justify-center items-center font-medium"
          >
            Dashboard
          </Link>

          <Link
            to="/create-offer"
            className="w-full h-8 bg-gradient-to-r from-[#D9D9D9] to-[#D9D9D9] [&.active]:from-[#7B74FF] [&.active]:to-[#C8C7D2]  hover:bg-white text-black text-xs rounded-[10px] flex justify-center items-center font-medium"
          >
            Create Offer{" "}
          </Link>

          <Link
            to="/accept-offer"
            className="w-full h-8 bg-gradient-to-r from-[#D9D9D9] to-[#D9D9D9] [&.active]:from-[#7B74FF] [&.active]:to-[#C8C7D2]  hover:bg-white text-black text-xs rounded-[10px] flex justify-center items-center font-medium"
          >
            Accept Offer{" "}
          </Link>

          <Link
            to="/terms"
            className="w-full h-8 bg-gradient-to-r from-[#D9D9D9] to-[#D9D9D9] [&.active]:from-[#7B74FF] [&.active]:to-[#C8C7D2]  hover:bg-white text-black text-xs rounded-[10px] flex justify-center items-center font-medium"
          >
            Terms
          </Link>
        </nav>
        <div className="bg-[#483EFF] flex flex-col items-center rounded-[40px] px-5 py-3 space-y-2">
          <img src="/logo.png" alt="" className="h-auto w-full " />
          <p className="text-white text-xs text-center font-medium ">
            Safe-X is a blockchain escrow service useful majorly for online
            transactions as it allows the parties to settle a transaction in a
            neutral, impartial, stable and transparent manner.
          </p>
          <Button className="bg-[#FFB500] h-8 rounded-[20px] text-black hover:text-[#ffb500] hover:bg-black font-medium">
            GET STARTED
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
