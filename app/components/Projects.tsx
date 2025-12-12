"use client";
import { FolderLock, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ProjectImage from "./ProjectImage";

interface Project {
  id: number;
  name: string;
  image: string;
  description: string[];
  status: string;
  classification: string;
  team: string;
  year: string;
  objectives: string[];
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="mt-21">
        <div className="panel p-3">
          <div className="md:flex text-center md:text-start items-center justify-between mt-3 mb-6">
            <h2 className="text-xl md:text-2xl flex flex-col md:flex-row items-center font-bold text-cyan-400 tracking-wider">
              <FolderLock className="inline-block mb-2 md:mb-0 size-8 md:size-6" />
              <span className="ml-2">CLASSIFIED PROJECT ARCHIVE</span>
            </h2>
            <span className="text-xs text-end text-cyan-400">
              SECURE ACCESS: LEVEL 4
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 uppercase lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="panel  hover:bg-cyan-400/10 transition-all cursor-pointer group corner-deco"
              >
                <ProjectImage ProjectImage={project.image} ProjectName={project.name} ProjectClassification={project.classification} />
                <div className="p-3">
                  <div className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 mb-1">
                    {project.name}
                  </div>
                  <div className="text-sm text-gray-400 capitalize tracking-wide group-hover:text-cyan-100">
                    {String(project.description[0]).substring(0, 100)}...
                  </div>
                  {project.status === "DONE" ? (
                    <div className="text-xs text-green-400 mt-3">DONE</div>
                  ) : (
                    <div className="text-xs text-gray-400 mt-3">UPCOMING</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex items-center uppercase justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="panel max-w-4xl md:max-w-2xl w-full max-h-[90vh] overflow-y-auto corner-deco relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 text-2xl z-10 w-10 h-10 flex items-center justify-center panel"
            >
              <X />
            </button>

            {/* Project Image */}
            <div className="relative bg-gray-900 overflow-hidden">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400/30 via-purple-500/20 to-transparent" />
              <div className="grid absolute top-4 left-4 gap-2 z-10">
                <div className="text-xs text-cyan-400 bg-black/70 px-3 py-1 rounded inline-block">
                  CLASSIFICATION: {selectedProject.classification}
                </div>
                <div className="text-xs text-yellow-400 bg-black/70 px-3 py-1 rounded block w-fit">
                  STATUS: {selectedProject.status}
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-3 tracking-wider cyan-glow">
                PROJECT: {selectedProject.name}
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-gray-500">TEAM:</span>
                  <span className="text-cyan-400 ml-2">
                    {selectedProject.team}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">YEAR:</span>
                  <span className="text-cyan-400 ml-2">
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              <div className="border-t border-cyan-400/30 pt-6 mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 tracking-wider">
                  MISSION BRIEF
                </h3>
                {selectedProject.description.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-gray-300 mb-2 capitalize font-serif tracking-wide leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="border-t border-cyan-400/30 pt-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 tracking-wider">
                  PRIMARY OBJECTIVES
                </h3>
                <ul className="space-y-3">
                  {selectedProject.objectives.map((objective, idx) => (
                    <li
                      key={idx}
                      className="flex items-start capitalize font-serif"
                    >
                      <span className="text-cyan-400 mr-3 mt-1">▸</span>
                      <span className="text-gray-300">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-cyan-400/30 flex flex-col md:flex-row gap-7 justify-between items-center">
                <div className="text-xs text-gray-500">
                  ACCESS GRANTED:{" "}
                  {new Date().toLocaleString("en-US", {
                    hour12: false,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary panel px-6 py-2 text-cyan-400 font-bold text-sm tracking-wider hover:bg-cyan-400/10 transition-all"
                >
                  <span>CLOSE FILE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
