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
  return (
    <div className="flex flex-col gap-6 px-10 max-w-5xl ">
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
      <div className="grid grid-cols-4 gap-4">
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
              <div className="flex items-center justify-between">
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
              <div className="flex items-center justify-between">
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
              <div className="flex items-center justify-between">
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
              <div className="flex items-center justify-between">
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
        <CardContent>
          {/* <ScrollArea className="w-[80%]"> */}
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
          {/* <ScrollBar orientation="horizontal" />
      </ScrollArea> */}
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
