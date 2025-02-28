import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface GameCardProps {
  title: string;
  description: string;
  id?: string;
  color: string;
  image: string;
}

export default function GameCard({
  title,
  description,
  id,
  color,
  image,
}: GameCardProps) {
  return (
    <div className={`overflow-hidden ${color} relative rounded-2xl`}>
      <div className="p-4 relative z-10 h-full flex flex-col justify-between min-h-[220px]">
        <div>
          <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
          {id && <p className="text-white/70 text-sm">ID Number: {id}</p>}
          <p className="text-white/90 text-sm mt-4">{description}</p>
        </div>

        <div className="flex mt-4">
          <Button variant="ghost" className="rounded-full bg-white p-2 h-8 w-8">
            <ChevronRight className="h-4 w-4 text-[#0A7CFF]" />
          </Button>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 h-full w-1/2 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="object-contain absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
