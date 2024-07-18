import { TableComponent } from "@/components/Table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
const Accept = () => {
  const [quack, setQuack] = useState(0);
  const [quackF, setQuackF] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  return (
    <div className="flex flex-col gap-6 px-4 lg:px-10 ">
      <Breadcrumb className=" md:hidden">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-white">
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#7B74FF]">
              Accept Offer
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="hidden md:flex justify-center relative">
        <Button className="w-fit h-fit bg-gradient-to-r from-[#7B74FF] to-[#C8C7D2]  hover:bg-white text-black md:text-xl rounded-[10px] justify-center items-center font-medium px-12 md:py-4 md:mx-auto hidden md:flex">
          Accept offer
        </Button>
        <div className="ml-auto md:flex flex-col items-center px-6 hidden ">
          {address && isConnected ? (
            <Button
              variant="ghost"
              className="w-fit  rounded-lg bg-transparent text-white h-fit text-sm gap-2"
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
              className="w-fit  rounded-lg bg-transparent text-white"
              onClick={() => open()}
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </div>

      <form className="grid w-full grid-cols-4 gap-4">
        <div className="col-span-full lg:col-span-3 w-full  items-center space-y-1.5">
          <Label className="text-white font-medium" htmlFor="offer">
            WHAT ARE YOU OFFERING?
          </Label>
          <Input
            id="offer"
            type="text"
            className="w-full bg-[#FFB500] border-[#FFB500]"
          />
        </div>
        <div className="col-span-full lg:col-span-1 w-full  items-center space-y-1.5">
          <Label className="text-white font-medium" htmlFor="category">
            CATEGORY{" "}
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-[#FFB500] border-[#FFB500]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>category</SelectLabel>

                <SelectItem value="Email marketing">Email marketing</SelectItem>
                <SelectItem value="Social media marketing">
                  Social Media marketing
                </SelectItem>
                <SelectItem value="Search engine marketing">
                  Search engine marketing
                </SelectItem>
                <SelectItem value="Search engine optimization">
                  Search Engine optimization
                </SelectItem>
                <SelectItem value="Font and Typography">
                  Font and Typography
                </SelectItem>
                <SelectItem value="Website development">
                  Website development
                </SelectItem>
                <SelectItem value="Website platforms">
                  Website platforms
                </SelectItem>
                <SelectItem value="Legal services">Legal services</SelectItem>
                <SelectItem value="Video art">Video art</SelectItem>

                <SelectItem value="Content writing">Content writing</SelectItem>
                <SelectItem value="Social marketing videos">
                  Social marketing videos
                </SelectItem>
                <SelectItem value="Custom songs">Custom songs</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>{" "}
        </div>
        <div className="col-span-2 lg:col-span-1 w-full  items-center space-y-1.5">
          <Label className="text-white font-medium" htmlFor="days">
            TIMELINE{" "}
          </Label>
          <Input
            id="days"
            type="number"
            placeholder="Days"
            className="w-full bg-[#FFB500] border-[#FFB500] placeholder:text-black"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 w-full  items-center space-y-1.5">
          <Label className="text-white font-medium invisible" htmlFor="hours">
            Hours{" "}
          </Label>
          <Input
            id="hours"
            type="number"
            placeholder="Hours"
            className="w-full bg-[#FFB500] border-[#FFB500] placeholder:text-black"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 w-full  items-center space-y-1.5">
          <Label className="text-white font-medium invisible" htmlFor="minutes">
            Minutes{" "}
          </Label>
          <Input
            id="minutes"
            type="number"
            placeholder="Minutes"
            className="w-full bg-[#FFB500] border-[#FFB500] placeholder:text-black"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 w-full  items-center space-y-1.5">
          <Label className="text-white font-medium invisible" htmlFor="seconds">
            Seconds{" "}
          </Label>
          <Input
            id="seconds"
            type="number"
            placeholder="Seconds"
            className="w-full bg-[#FFB500] border-[#FFB500] placeholder:text-black"
          />
        </div>
        <div className=" w-full col-span-full  items-center space-y-1.5 ">
          <Label className="text-white font-medium" htmlFor="category">
            DELIVERABLES{" "}
          </Label>
          <Textarea rows={8} className="bg-[#FFB500] border-[#FFB500]" />
        </div>
        <div className="flex col-span-full  lg:col-span-2 justify-between gap-2 lg:gap-4 mb-6">
          <Button
            className="bg-transparent border-2 border-[#FFD700] px-5 text-white"
            variant="outline"
            type="button"
            onClick={() => setQuack((prev) => prev - 1)}
            disabled={quack === 0}
          >
            {" "}
            -
          </Button>
          <label className="w-full h-fit relative">
            {!quack && !quackF ? (
              <p className="font-bold absolute text-white text-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                {quack}
              </p>
            ) : null}
            <Input
              type="number"
              value={quack > 0 ? quack : ""}
              onChange={(e) => setQuack(Number(e.target.value))}
              className="bg-transparent text-white border-[#FFD700] ring-offset-[#FFD700]  w-full"
              min={0}
              onFocus={() => setQuackF(true)}
              onBlur={() => setQuackF(false)}
            />
          </label>
          <Button
            className="bg-transparent border-2 border-[#FFD700] px-5 text-white"
            variant="outline"
            type="button"
            onClick={() => setQuack((prev) => prev + 1)}
          >
            {" "}
            +
          </Button>
        </div>
        <Button className="w-full col-span-full  lg:col-span-2 bg-gradient-to-r from-[#7B74FF] to-[#C8C7D2]  hover:bg-white text-black rounded-[10px] flex justify-center items-center font-medium  mx-auto">
          Accept Offer{" "}
        </Button>
      </form>
      <Card className="p-0">
        <CardContent className="p-0">
          <TableComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default Accept;
