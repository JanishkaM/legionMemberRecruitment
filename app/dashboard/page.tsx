// app/dashboard/page.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import { FolderLock, TriangleAlert, X, Zap } from 'lucide-react'

interface Project {
  id: number
  name: string
  image: string
  description: string
  status: string
  classification: string
  team: string
  year: string
  objectives: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'NETSEC',
    image: '/projects/netsec.jpeg',
    description: 'The NetSec Mastery 1.0 – Introduction to Networking & Cybersecurity Industry workshop is designed to guide students into the world of networking and cybersecurity. Conducted at the Faculty of Computing and Technology, University of Kelaniya, this session equips participants with essential knowledge, industry insights, and practical strategies to begin building a career in these rapidly growing fields. The session is delivered by an expert industry professional, offering real-world perspectives and career guidance.',
    status: 'DONE',
    classification: 'LEVEL 4',
    team: 'NETWORKING TEAM',
    year: '2023',
    objectives: [
      'Introduce the fundamentals of computer networking',
      'Explain the role and importance of cybersecurity in modern IT',
      'Expose students to real industry practices and challenges',
      'Guide students on career pathways in networking and cybersecurity'
    ]
  },
  {
    id: 2,
    name: 'LUDICON',
    image: '/projects/ludicon.jpeg',
    description: 'The LUDICON Inter University E-Sports Championship is a competitive gaming event organized to bring together university gamers from across the country. This championship aims to foster teamwork, strategic thinking, and a healthy competitive spirit within the student community. With popular e-sports titles and high-intensity matches, the event creates a platform for skilled players to showcase their talent, represent their universities, and build a vibrant e-sports culture in Sri Lanka.',
    status: 'DONE',
    classification: 'LEVEL 4',
    team: 'E-SPORTS TEAM',
    year: '2024',
    objectives: [
      'Promote E-Sports Culture Among Universities',
      'Provide a Platform for Competitive Gaming',
      'Enhance Teamwork and Strategic Skills',
      'Unite Students Through Community Engagement'
    ]
  },
  {
    id: 3,
    name: 'VANGUARD',
    image: '/projects/van2.png',
    description: 'The Inter-University Esports Championship is a collaborative event organized by the Legion Society of the University of Kelaniya and Mora Esports of the University of Moratuwa. This championship aims to unite competitive gamers from multiple universities to battle in top-tier esports titles. The event focuses on building a strong inter-university esports ecosystem while giving players the opportunity to showcase their skills, teamwork, and competitive spirit on a national stage. Through this partnership, the two leading university esports communities aim to elevate the standard and recognition of esports in Sri Lanka.',
    status: 'UP COMING',
    classification: 'LEVEL 1',
    team: 'LEGIONS AND MORA ESPORTS',
    year: '2026',
    objectives: [
      'Strengthen Inter-University Collaboration',
      'Promote Esports as a Recognized Competitive Activity',
      'Provide a Professional Platform for University Gamers',
      'Identify and Nurture Emerging Esports Talent'
    ]
  },
  {
    id: 4,
    name: 'GRAPHIC DESIGN WORKSHOP',
    image: '/projects/graphic.jpeg',
    description: 'This project is a Graphic Design Workshop which is the first installment of a "Session Series" organized by LEGION at the University of Kelaniya. The session features Mr. Kalindu Ariyawansha, a BBST (Hons) UG from Uva Wellassa University of Sri Lanka, who is also identified as a Digital Creator and Official Photographer, as the Guest Speaker. The goal is to provide participants with foundational or specialized knowledge and skills in graphic design.',
    status: 'DONE',
    classification: 'LEVEL 4',
    team: 'GRAPHIC DESIGN TEAM',
    year: '2025',
    objectives: [
      'Knowledge Transfer in Graphic Design',
      'Skill Development for Aspiring Designers',
      'Engagement & Outreach within the University Community',
      'Value Provision to LEGION Members'
    ]
  }
]

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="min-h-screen hex-pattern relative">
      <div className="scanline" />
      {/* Header */}
      <Header />

      <div className="container mx-auto px-3 pt-32 pb-16">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mission Brief */}
          <div className="lg:col-span-1">
            <div className="panel p-6 corner-deco">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 tracking-wider">
                MISSION
              </h2>
              <div className="space-y-4">
                {/* <p>
                  The <span className="text-cyan-400 font-semibold">Legion Club</span> is the university's premier tactical gaming collective.
                </p> */}
                <p className="text-gray-400 mb-5">
                  The mission of <span className="text-cyan-400 font-semibold">Legions</span> is to provide an opportunity for university undergraduates to train, enhance, and share the skills that
                  will assist them in digital creative and
                  competitive E-sport platforms to make an
                  ethical, professional community.
                </p>
                <div className="pt-4 border-t text-xs border-cyan-400/30">
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 flex items-center gap-1">
                      <Zap className='inline-block mb-2 md:mb-0 size-4' />
                      <span>STATUS:</span>
                    </div>
                    <div className="text-green-400">RECRUITING</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Legion Club */}
          <div className="lg:col-span-1">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4 cyan-glow tracking-wider">
                LEGION SOCIETY
              </h1>
              <p className="text-cyan-400 text-sm tracking-widest">
                EST. 2020 // UOK
              </p>
            </div>

            <Link href="/registration" className="btn-primary w-full panel p-4 text-cyan-400 font-bold tracking-wider hover:bg-cyan-400/10 transition-all corner-deco group block">
              <span className="flex items-center justify-center">
                REGISTER NOW
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="panel p-4 text-center corner-deco">
                <div className="text-3xl font-bold text-cyan-400">08</div>
                <div className="text-xs text-gray-400 mt-1">UPCOMING EVENTS</div>
              </div>
              <div className="panel p-4 text-center corner-deco">
                <div className="text-3xl font-bold text-cyan-400">05</div>
                <div className="text-xs text-gray-400 mt-1">YEARS</div>
              </div>
            </div>
          </div>

          {/* Intel Feed */}
          <div className="lg:col-span-1">
            <div className="panel p-6 corner-deco">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 tracking-wider">
                VISION
              </h2>
              <div className="space-y-4">
                {/* <div className="border-l-2 border-cyan-400 pl-4">
                  <div className="flex items-center mb-1">
                    <span className="text-xs text-cyan-400">📡 LAN WARFARE</span>
                  </div>
                  <div className="text-sm text-gray-400">OCT 24 // 1800 HOURS</div>
                  <div className="text-xs text-gray-500">MAIN HALL</div>
                </div>
                <div className="border-l-2 border-orange-400 pl-4">
                  <div className="flex items-center mb-1">
                    <span className="text-xs text-orange-400">🤖 ROBO-HACK</span>
                  </div>
                  <div className="text-sm text-gray-400">NOV 02 // 0900 HOURS</div>
                  <div className="text-xs text-gray-500">LABORATORY 4</div>
                </div> */}

                <p className="text-gray-400 mb-5">
                  To create an island-wide digital creative and competitive E-sport platform where all the university undergraduates can share
                  and improve their skills.
                </p>
                <div className="pt-4 border-t border-cyan-400/30">
                  <div className="text-xs flex items-center gap-2 text-yellow-400 animate-pulse">
                    <TriangleAlert className='inline-block size-4' />
                    <span>ALERT: REGISTRATION CLOSING SOON.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classified Projects */}
        <div className="mt-21">
          <div className="panel p-3">
            <div className="md:flex text-center md:text-start items-center justify-between mt-3 mb-6">
              <h2 className="text-xl md:text-2xl flex flex-col md:flex-row items-center font-bold text-cyan-400 tracking-wider">
                <FolderLock className='inline-block mb-2 md:mb-0 size-8 md:size-6' />
                <span className="ml-2">CLASSIFIED PROJECT ARCHIVE</span>
              </h2>
              <span className="text-xs text-end text-cyan-400">SECURE ACCESS: LEVEL 4</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="panel  hover:bg-cyan-400/10 transition-all cursor-pointer group corner-deco"
                >
                  <div className="aspect-square bg-gray-900 mb-3  overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-400/20 via-purple-500/10 to-transparent" />
                    <div className="absolute top-2 right-2 text-xs text-cyan-400 bg-black/50 px-2 py-1 rounded">
                      IMG_{String(project.name).substring(0, 10)}
                    </div>
                    <div className="absolute bottom-2 left-2 text-xs text-yellow-400 bg-black/50 px-2 py-1 rounded">
                      {project.classification}
                    </div>
                  </div>
                  <div className='p-3'>
                    <div className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 mb-1">
                      {project.name}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-cyan-100">
                      {String(project.description).substring(0, 100)}...
                    </div>
                    {
                      project.status === 'DONE' ? (
                        <div className="text-xs text-green-400 mt-3">DONE</div>
                      ) : (
                        <div className="text-xs text-gray-400 mt-3">UPCOMING</div>
                      )
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="panel border-t border-cyan-400/30 mt-16 py-6">
        <div className="container mx-auto px-6 text-center text-xs text-gray-500">
          <p>COORD: XK-4433 Polhygoda</p>
          <p className="mt-1">SYSTEM INTEGRITY: 100% // UPTIME: 24/7</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="panel max-w-4xl w-full max-h-[90vh] overflow-y-auto corner-deco relative"
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
                className="w-full h-auto"
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
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 tracking-wider cyan-glow">
                PROJECT: {selectedProject.name}
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="text-gray-500">TEAM:</span>
                  <span className="text-cyan-400 ml-2">{selectedProject.team}</span>
                </div>
                <div>
                  <span className="text-gray-500">YEAR:</span>
                  <span className="text-cyan-400 ml-2">{selectedProject.year}</span>
                </div>
              </div>

              <div className="border-t border-cyan-400/30 pt-6 mb-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 tracking-wider">
                  MISSION BRIEF
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="border-t border-cyan-400/30 pt-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 tracking-wider">
                  PRIMARY OBJECTIVES
                </h3>
                <ul className="space-y-3">
                  {selectedProject.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">▸</span>
                      <span className="text-gray-300">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-cyan-400/30 flex flex-col md:flex-row gap-7 justify-between items-center">
                <div className="text-xs text-gray-500">
                  ACCESS GRANTED: {new Date().toLocaleString('en-US', {
                    hour12: false,
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
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
    </main>
  )
}