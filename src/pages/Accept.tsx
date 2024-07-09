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
const Accept = () => {
  const [quack, setQuack] = useState(0);
  const [quackF, setQuackF] = useState(false);

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
      <Button className="w-fit h-fit bg-gradient-to-r from-[#7B74FF] to-[#C8C7D2]  hover:bg-white text-black md:text-xl rounded-[10px] justify-center items-center font-medium px-12 md:py-4 md:mx-auto hidden md:flex">
        Accept offer
      </Button>
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
                <SelectItem value="development">development</SelectItem>
                <SelectItem value="production">production</SelectItem>
                <SelectItem value="design">design</SelectItem>
                <SelectItem value="staging">staging</SelectItem>
                <SelectItem value="analytics">analytics</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>{" "}
        </div>
        <div className="col-span-2 lg:col-span-1 w-full  items-center space-y-1.5">
          <Label className="text-white font-medium" htmlFor="category">
            TIMELINE{" "}
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-[#FFB500] border-[#FFB500]">
              <SelectValue placeholder="Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>category</SelectLabel>
                <SelectItem value="development">development</SelectItem>
                <SelectItem value="production">production</SelectItem>
                <SelectItem value="design">design</SelectItem>
                <SelectItem value="staging">staging</SelectItem>
                <SelectItem value="analytics">analytics</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>{" "}
        </div>
        <div className="col-span-2 lg:col-span-1 w-full  items-center space-y-1.5">
          <Label
            className="text-white font-medium invisible"
            htmlFor="category"
          >
            CATEGORY{" "}
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-[#FFB500] border-[#FFB500]">
              <SelectValue placeholder="Hours" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>category</SelectLabel>
                <SelectItem value="development">development</SelectItem>
                <SelectItem value="production">production</SelectItem>
                <SelectItem value="design">design</SelectItem>
                <SelectItem value="staging">staging</SelectItem>
                <SelectItem value="analytics">analytics</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>{" "}
        </div>
        <div className="col-span-2 lg:col-span-1 w-full  items-center space-y-1.5">
          <Label
            className="text-white font-medium invisible"
            htmlFor="category"
          >
            CATEGORY{" "}
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-[#FFB500] border-[#FFB500]">
              <SelectValue placeholder="Minutes" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>category</SelectLabel>
                <SelectItem value="development">development</SelectItem>
                <SelectItem value="production">production</SelectItem>
                <SelectItem value="design">design</SelectItem>
                <SelectItem value="staging">staging</SelectItem>
                <SelectItem value="analytics">analytics</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>{" "}
        </div>
        <div className="col-span-2 lg:col-span-1 w-full  items-center space-y-1.5">
          <Label
            className="text-white font-medium invisible"
            htmlFor="category"
          >
            CATEGORY{" "}
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-[#FFB500] border-[#FFB500]">
              <SelectValue placeholder="Seconds" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>category</SelectLabel>
                <SelectItem value="development">development</SelectItem>
                <SelectItem value="production">production</SelectItem>
                <SelectItem value="design">design</SelectItem>
                <SelectItem value="staging">staging</SelectItem>
                <SelectItem value="analytics">analytics</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>{" "}
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
