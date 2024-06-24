'use client'
import { projectData } from "@/ProjectData/ProjeectData";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {React, useState } from "react";


const uniqueCategories = [
  'all project',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all project');
  const filteredProject = projectData.filter((project) => {
    return category === 'all project' ? project : project.category === category;
  });
  return ( 
    <div className="container pt-12 max-w-[1100px] flex flex-col">
      <div>
        <p className="section-title bg-gradient-to-r from-blue-600 to-[#07D2FB] bg-clip-text text-transparent align-middle justify-center ">
          My Projects
        </p>
      </div>
      <div className="pt-10 w-full  items-center flex  justify-center m-0">
        <Tabs defaultValue={category} className="flex flex-col items-center justify-center">
          <TabsList className="border flex flex-wrap justify-around gap-x-3">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-auto">{category}</TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 pt-5 gap-4">
            {filteredProject.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>

    </div>
  )
}

export default Projects
