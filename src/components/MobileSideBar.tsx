import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { Menu } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
const MobileSideBar = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-white ml-2" variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#070087] p-0 py-4 w-72">
        <aside className="  w-full flex-col  flex px-2  h-full">
          <ScrollArea>
            <div className="flex items-center  mb-4 ml-4">
              <img src="/logo.png" alt="" className="h-12 w-auto " />
              <img src="/safe-x.png" alt="" className="h-8 w-auto" />
            </div>
            <div className="flex flex-col space-y-4 px-5 pb-6">
              <nav className=" flex flex-col space-y-4 mb-4">
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
                  Safe-X is a blockchain escrow service useful majorly for
                  online transactions as it allows the parties to settle a
                  transaction in a neutral, impartial, stable and transparent
                  manner.
                </p>
                <Button className="bg-[#FFB500] h-8 rounded-[20px] text-black hover:text-[#ffb500] hover:bg-black font-medium">
                  GET STARTED
                </Button>
              </div>
            </div>
          </ScrollArea>
          <div className="mt-auto flex flex-col items-center px-6">
            {address && isConnected ? (
              <Button
                variant="ghost"
                className="w-full  rounded-lg bg-transparent text-white h-fit text-sm gap-2"
                onClick={() => open()}
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-10 h-10"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5 28.633C19.7181 28.633 22.8043 27.3546 25.0798 25.0791C27.3553 22.8036 28.6337 19.7174 28.6337 16.4993C28.6337 13.2813 27.3553 10.195 25.0798 7.9195C22.8043 5.64399 19.7181 4.36562 16.5 4.36562C13.2819 4.36562 10.1957 5.64399 7.92019 7.9195C5.64468 10.195 4.36631 13.2813 4.36631 16.4993C4.36631 19.7174 5.64468 22.8036 7.92019 25.0791C10.1957 27.3546 13.2819 28.633 16.5 28.633ZM16.5 30.25C20.1467 30.25 23.6441 28.8013 26.2227 26.2227C28.8013 23.6441 30.25 20.1467 30.25 16.5C30.25 12.8533 28.8013 9.35591 26.2227 6.77728C23.6441 4.19866 20.1467 2.75 16.5 2.75C12.8533 2.75 9.35591 4.19866 6.77728 6.77728C4.19866 9.35591 2.75 12.8533 2.75 16.5C2.75 20.1467 4.19866 23.6441 6.77728 26.2227C9.35591 28.8013 12.8533 30.25 16.5 30.25Z"
                    fill="url(#paint0_linear_8_3)"
                  />
                  <path
                    d="M16.5 27.0146C19.2886 27.0146 21.9631 25.9068 23.9349 23.935C25.9068 21.9631 27.0146 19.2887 27.0146 16.5C27.0146 13.7114 25.9068 11.0369 23.9349 9.06504C21.9631 7.09317 19.2886 5.98538 16.5 5.98538C13.7113 5.98538 11.0369 7.09317 9.06501 9.06504C7.09314 11.0369 5.98535 13.7114 5.98535 16.5C5.98535 19.2887 7.09314 21.9631 9.06501 23.935C11.0369 25.9068 13.7113 27.0146 16.5 27.0146Z"
                    fill="#627EEA"
                  />
                  <path
                    d="M16.5 14.4788V8.41089L11.649 16.5L16.5 14.4788Z"
                    fill="white"
                  />
                  <path
                    d="M16.5 14.4788V8.41089L21.3537 16.5L16.5 14.4788ZM16.5 14.4788L11.649 16.5L16.5027 19.3311L16.5 14.4788Z"
                    fill="#C1CCF7"
                  />
                  <path
                    d="M16.5 19.3311V14.4774L21.3537 16.5L16.5 19.3311Z"
                    fill="#8198EE"
                  />
                  <path
                    d="M16.5 20.5439L11.6476 17.3085L16.5014 24.5878L16.5 20.5439Z"
                    fill="white"
                  />
                  <path
                    d="M21.3537 17.3085L16.5 20.5439V24.5878L21.3537 17.3085Z"
                    fill="#C1CCF7"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8_3"
                      x1="24.1835"
                      y1="5.98538"
                      x2="8.41225"
                      y2="27.4189"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#269981" />
                      <stop offset="1" stop-color="#142D44" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="flex flex-col gap-1 items-start font-bold">
                  {address.slice(0, 4) + "....." + address.slice(-5, -1)}
                  <p>Disconnect wallet</p>
                </div>
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full  rounded-lg bg-transparent text-white"
                onClick={() => open()}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
