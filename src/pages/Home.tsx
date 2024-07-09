import { MoreVertical, Search, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { TableComponent } from "@/components/Table";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

const chartData = [
  { month: "January", desktop: 18600, mobile: 8000 },
  { month: "February", desktop: 30500, mobile: 20000 },
  { month: "March", desktop: 23700, mobile: 12000 },
  { month: "April", desktop: 7300, mobile: 19000 },
  { month: "May", desktop: 20900, mobile: 13000 },
  { month: "June", desktop: 21400, mobile: 14000 },
  { month: "July", desktop: 21400, mobile: 14000 },
  { month: "August", desktop: 21400, mobile: 14000 },
  { month: "September", desktop: 30500, mobile: 20000 },
  { month: "October", desktop: 23700, mobile: 12000 },
  { month: "November", desktop: 7300, mobile: 19000 },
  { month: "December", desktop: 20900, mobile: 13000 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "white",
  },
  mobile: {
    label: "Mobile",
    color: "#fff",
  },
} satisfies ChartConfig;
const Home = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  return (
    <div className="flex flex-col px-4 gap-6 xl:px-10 w-full ">
      <div className="ml-auto md:flex flex-col items-center px-6 hidden ">
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
      <div>
        <form className="max-w-md">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="text-[#7B74FF]" />
            </div>
            <Input
              className="bg-[#7B74FF] bg-opacity-15 h-8 rounded-[10px] border-none pl-10 placeholder:text-[#7b74ff] text-white"
              placeholder="Find something..."
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4  md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card className="bg-[#7B74FF] bg-opacity-15 border-none">
          <CardHeader className=" flex-row justify-between items-center p-5">
            <div className="h-8 w-8 rounded-full bg-[#7B74FF]/30 flex justify-center items-center">
              <Wallet className="text-[#7B74FF] size-5" />
            </div>
            <MoreVertical className="text-[#7B74FF] size-6" />
          </CardHeader>
          <CardContent className="p-0 px-5 pb-5">
            <div className="text-xs ">
              <p className="text-[#7B74FF] font-medium">Total Balance</p>
              <div className="flex items-center justify-between flex-wrap">
                <p className="text-white font-bold text-lg">$632.000</p>
                <Badge className="bg-[#7B74FF] bg-opacity-25 text-[#7B74FF] hover:text-white">
                  +1.29%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#7B74FF] bg-opacity-15 border-none">
          <CardHeader className=" flex-row justify-between items-center p-5">
            <div className="h-8 w-8 rounded-full bg-[#7B74FF]/30 flex justify-center items-center">
              <Wallet className="text-[#7B74FF] size-5" />
            </div>
            <MoreVertical className="text-[#7B74FF] size-6" />
          </CardHeader>
          <CardContent className="p-0 px-5 pb-5">
            <div className="text-xs ">
              <p className="text-[#7B74FF] font-medium">Total Balance</p>
              <div className="flex items-center justify-between flex-wrap">
                <p className="text-white font-bold text-lg">$632.000</p>
                <Badge className="bg-[#7B74FF] bg-opacity-25 text-[#7B74FF] hover:text-white">
                  +1.29%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#7B74FF] bg-opacity-15 border-none">
          <CardHeader className=" flex-row justify-between items-center p-5">
            <div className="h-8 w-8 rounded-full bg-[#7B74FF]/30 flex justify-center items-center">
              <Wallet className="text-[#7B74FF] size-5" />
            </div>
            <MoreVertical className="text-[#7B74FF] size-6" />
          </CardHeader>
          <CardContent className="p-0 px-5 pb-5">
            <div className="text-xs ">
              <p className="text-[#7B74FF] font-medium">Total Balance</p>
              <div className="flex items-center justify-between flex-wrap">
                <p className="text-white font-bold text-lg">$632.000</p>
                <Badge className="bg-[#7B74FF] bg-opacity-25 text-[#7B74FF] hover:text-white">
                  +1.29%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#7B74FF] bg-opacity-15 border-none">
          <CardHeader className=" flex-row justify-between items-center p-5">
            <div className="h-8 w-8 rounded-full bg-[#7B74FF]/30 flex justify-center items-center">
              <Wallet className="text-[#7B74FF] size-5" />
            </div>
            <MoreVertical className="text-[#7B74FF] size-6" />
          </CardHeader>
          <CardContent className="p-0 px-5 pb-5">
            <div className="text-xs ">
              <p className="text-[#7B74FF] font-medium">Total Balance</p>
              <div className="flex items-center justify-between flex-wrap">
                <p className="text-white font-bold text-lg">$632.000</p>
                <Badge className="bg-[#7B74FF] bg-opacity-25 text-[#7B74FF] hover:text-white">
                  +1.29%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-[#7B74FF] bg-opacity-15 border-none overflow-hidden">
        <CardHeader>
          <CardTitle className="text-white">Analytics</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-5">
          <ScrollArea>
            <ChartContainer config={chartConfig} className="min-h-60">
              <BarChart accessibilityLayer data={chartData}>
                {/* <CartesianGrid vertical={false} /> */}
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) =>
                    value < 1000 ? value : `${Math.floor(value / 1000)}k`
                  }
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="desktop" fill="#070087" radius={30} />
                <Bar dataKey="mobile" fill="#7B74FF" radius={30} />
              </BarChart>
            </ChartContainer>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
      <div className="flex items-center">
        <h4 className="text-white font-medium">Favorite</h4>{" "}
        <Button className="text-[#7B74FF] mx-auto" variant="ghost">
          View All
        </Button>
      </div>
      <Card className="p-0">
        <CardContent className="p-0">
          <TableComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
