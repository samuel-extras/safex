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
    title:
      "I will do bulk email blast, email marketing and email marketing campaign",
    status: "Approved",
    category: "Email marketing",
    isPublished: true,

    views: 30,
  },
  {
    title: "I will be your social media manager and content creator",
    status: "Approved",
    category: "Social media marketing ",
    isPublished: true,
    views: 65,
  },
  {
    title:
      "I will set up and manage highly profitable google ads and PPC campaigns",
    status: "rejected",
    category: "Search Engine marketing",
    isPublished: true,

    views: 69,
  },
  {
    title:
      "Our agency will do premium SEO backlinks service package for google top ranking",
    status: "Approved",
    category: "Search Engine optimization",
    isPublished: true,

    views: 33,
  },
  {
    title: "I will create custom hand lettering, calligraphy, typography logo",
    status: "Approved",
    category: "Font and Typography ",
    isPublished: true,

    views: 37,
  },
  {
    title:
      "I will develop responsive wordpress website design redesign and clone landing page",
    status: "Approved",
    category: "Website development ",
    isPublished: true,

    views: 101,
  },
  {
    title:
      "I will build wordpress website design with elementor pro, woocommerce store, wordpress",
    status: "Approved",
    category: "Website platforms",
    isPublished: true,

    views: 92,
  },
  {
    title:
      "I will be your lawyer for legal contracts, agreements, terms and conditions, nda, eula",
    status: "Approved",
    category: "Legal services",
    isPublished: true,

    views: 77,
  },
  {
    title:
      "I will create a custom conceptual video art using collage animation",
    status: "Approved",
    category: "Video art",
    isPublished: true,

    views: 67,
  },
  {
    title: "I will create your blog content strategy with SEO keyword advice",
    status: "Approved",
    category: "Content writing",
    isPublished: true,

    views: 54,
  },
  {
    title: "I will create a fun, catchy selfie style ugc video",
    status: "Approved",
    category: "Social marketing videos",
    isPublished: true,

    views: 82,
  },
  {
    title: "I will be your songwriter and write a custom song with you",
    status: "Approved",
    category: "Custom songs",
    isPublished: true,

    views: 63,
  },
];

export function TableComponent() {
  return (
    <Table className="w-full min-w-[700px]">
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
              <div className="relative flex w-8 h-8 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                  alt={gig.title}
                  className="w-8 h-8 rounded-full bg-blend-overlay flex-shrink-0"
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
