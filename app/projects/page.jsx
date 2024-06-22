'use client';
import React, { useState, useEffect } from "react";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import fetchMegaProjects from "@/Mega/Mega"; // Adjust the path as per your folder structure

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['all projects']);
  const [category, setCategory] = useState('all projects');

  useEffect(() => {
    async function fetchData() {
      try {
        const projectsFromMega = await fetchMegaProjects();
        const uniqueCategories = [
          'all projects',
          ...new Set(projectsFromMega.map((item) => item.category))
        ];
        setProjects(projectsFromMega);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    fetchData();
  }, []);

  const filteredProjects = category === 'all projects' ? projects : projects.filter(project => project.category === category);

  return (
    <div className="min-h-screen pt-12 max-w-[1100px] mx-auto container">
      <div className="flex justify-center">
        <p className="section-title bg-gradient-to-r from-blue-600 to-[#07D2FB] bg-clip-text text-transparent align-middle">
          My Projects
        </p>
      </div>
      <div className="pt-10">
        <Tabs defaultValue={category}>
          <TabsList className="flex h-full md:grid-cols-4 mx-auto gap-x-4 border justify-around md:w-[500px]">
            {categories.map((cat, index) => (
              <TabsTrigger key={index} value={cat} onClick={() => setCategory(cat)} className="capitalize w-full md:w-auto">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <TabsContent key={index} value={category}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Projects;
