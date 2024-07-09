import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { MoreVertical } from "lucide-react";
import { Button } from "./ui/button";

const gigs = [
  {
    title: "I Will Create a Stunning 3D Logo for Your Brand",
    status: "Approved",
    category: "Graphics & Design Logo Design",
    isPublished: true,

    views: 30,
  },
  {
    title: "Professional Graphic Design Services for Your Business Needs",
    status: "Approved",
    category: "Graphics & Design Logo Design",
    isPublished: true,
    views: 65,
  },
  {
    title: "Unique and Creative 3D Logo Design for Your Company",
    status: "rejected",
    category: "Graphics & Design Logo Design",
    isPublished: true,

    views: 69,
  },
  {
    title: "Expert Graphic Design and 3D Logo Creation for Your Brand",
    status: "Approved",
    category: "Graphics & Design Logo Design",
    isPublished: true,

    views: 101,
  },
];

export function TableComponent() {
  return (
    <Table>
      <TableCaption className="sr-only">
        A list of your recent gigs.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#070087] text-xs">Gig Title</TableHead>
          <TableHead className="text-[#070087] text-xs text-center whitespace-nowrap">
            Gig Views
          </TableHead>
          <TableHead className="text-[#070087] text-xs text-center w-[160px]">
            Category
          </TableHead>
          <TableHead className="text-[#070087] text-xs text-center whitespace-nowrap">
            Is Published
          </TableHead>
          <TableHead className="text-[#070087] text-xs text-center">
            Status
          </TableHead>
          <TableHead className="text-[#070087] text-xs text-center">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {gigs.map((gig) => (
          <TableRow key={gig.title}>
            <TableCell
              rowSpan={1}
              className="font-medium text-xs text-[#7B74FF] flex items-center gap-1"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                  alt={gig.title}
                  className="w-8 h-8 rounded-full bg-blend-overlay"
                />
                <div className="w-8 h-8 rounded-full bg-blend-overlay bg-[#7B74FF] bg-opacity-40 absolute inset-0"></div>
              </div>
              {gig.title}
            </TableCell>
            <TableCell className="text-center text-[#7B74FF] ">
              <Badge className="bg-[#7B74FF] bg-opacity-20 text-[#7B74FF] hover:text-white  rounded-sm">
                {gig.views}
              </Badge>
            </TableCell>
            <TableCell className="text-center text-[#7B74FF] italic">
              {gig.category}
            </TableCell>
            <TableCell className="text-center">
              <Badge className="bg-[#7B74FF] bg-opacity-20 text-[#7B74FF] hover:text-white  rounded-sm">
                {gig.isPublished ? "Yes" : "No"}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge className="bg-[#7B74FF] bg-opacity-20 text-[#7B74FF] hover:text-white  rounded-sm">
                {gig.status}
              </Badge>
            </TableCell>
            <TableCell>
              {" "}
              <Button
                variant="outline"
                className="text-[#7B74FF] hover:text-black bg-transparent rounded-full w-8 h-8 px-0 py-0"
              >
                <MoreVertical className="size-3" />{" "}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
