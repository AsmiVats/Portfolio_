import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface ShowcaseCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export function ShowcaseCard({
  title,
  description,
  features,
  imageUrl,
}: ShowcaseCardProps) {
  return (
    <Card className="bg-[#f4f2ef] flex p-4 max-w-4xl font-manrope mx-auto">
         <div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="space-y-2">
        <ul className="space-y-1 rounded-md">
          {features.map((item, index) => (
            <li key={index} className="flex  my-1 items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-black flex items-center justify-center">
                <Check className="h-2 w-2 text-white" />
              </div>
              <span className="text-xs">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className=" gap-4">
        <Link
          href="#"
          className="inline-flex items-center text-xs hover:underline"
        >
          View Project
          <svg
            className="ml-1 h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>

      </CardFooter>
     </div>
      
      <div className="relative w-full h-auto">
          <Image
            src={imageUrl}
            alt={`${title} interface screenshot`}
            fill
            className="relative rounded-lg object-cover"
          />
        </div>
    </Card>
  );
}
