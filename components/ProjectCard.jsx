import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <Card className="group relative">
        <CardHeader className="p-0">
          <div className="relative w-full h-[300px] flex items-center justify-center bg-teriary overflow-hidden">
            <Image
              className="absolute bottom-0 shadow-2xl object-contain h-full w-full"
              src={project.image} 
              width={500}
              height={500}
              alt=''
              priority
              
            />
          </div>
          <div className="flex flex-row justify-center gap-x-2">
            <div className="justify-center flex">
              <Link
                href={project.link}
                className="bg-gradient-to-r from-blue-600 to-[#07D2FB] w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Link2Icon />
              </Link>
            </div>
            <div className="justify-center flex">
              <Link
                href={project.github}
                className="bg-gradient-to-r from-blue-600 to-[#07D2FB] w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <Github />
              </Link>
            </div>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <div>
            <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 bg-gradient-to-r from-blue-600 to-[#07D2FB]">
              {project.category}
            </Badge>
          </div>
          <div>
            <h4 className="h4 mb-1 font-bold">{project.name}</h4>
          </div>
          <div className="flex h-[280px]">
            <p className="text-muted-foreground text-lg overflow-y-auto pt-2">
              {project.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
