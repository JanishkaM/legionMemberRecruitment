import Link from "next/link";
import Header from "../components/Header";
import { TriangleAlert, Zap } from "lucide-react";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

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

const projects: Project[] = [
  {
    id: 7,
    name: "Demystify JavaScript",
    image: "/projects/post-img-3.jpeg",
    description: [
      `The primary aim is to "Demystify JavaScript" and make the fundamental concepts of coding "accessible to everyone," suggesting it is targeted toward beginners or those with little to no prior coding experience .`,
      `The session is scheduled for 19th November 2023 from 9:30 AM to 12:30 AM and will be conducted "VÍA ZOOM," making it an online-only event. This initiative aligns with LEGION's goal of spreading awareness and providing platforms for undergraduates to learn and improve non-academic digital skills like graphic design, web development (which uses JavaScript), and other creative platforms.`,
    ],
    status: "DONE",
    classification: "LEVEL 4",
    team: "Web Development TEAM",
    year: "2023",
    objectives: [
      "Fundamental Knowledge Transfer",
      "Accessibility and Inclusion",
      "Encourage Web Development",
      "Promote Peer Learning",
    ],
  },
  {
    id: 4,
    name: "GRAPHIC DESIGN WORKSHOP",
    image: "/projects/post-img-8.jpeg",
    description: [
      `This project is a Graphic Design Workshop which is the first installment of a "Session Series" organized by LEGION at the University of Kelaniya.`,
      `The session features Mr. Kalindu Ariyawansha, a BBST (Hons) UG from Uva Wellassa University of Sri Lanka, who is also identified as a Digital Creator and Official Photographer, as the Guest Speaker. The goal is to provide participants with foundational or specialized knowledge and skills in graphic design.`,
    ],
    status: "DONE",
    classification: "LEVEL 4",
    team: "GRAPHIC DESIGN TEAM",
    year: "2025",
    objectives: [
      "Knowledge Transfer in Graphic Design",
      "Skill Development for Aspiring Designers",
      "Engagement & Outreach within the University Community",
      "Value Provision to LEGION Members",
    ],
  },
  {
    id: 3,
    name: "VANGUARD",
    image: "/projects/post-img-7.png",
    description: [
      `The Inter-University Esports Championship is a collaborative event organized by the Legion Society of the University of Kelaniya and Mora Esports of the University of Moratuwa. This championship aims to unite competitive gamers from multiple universities to battle in top-tier esports titles.`,
      `The event focuses on building a strong inter-university esports ecosystem while giving players the opportunity to showcase their skills, teamwork, and competitive spirit on a national stage. Through this partnership, the two leading university esports communities aim to elevate the standard and recognition of esports in Sri Lanka.`,
    ],
    status: "UP COMING",
    classification: "LEVEL 1",
    team: "LEGIONS AND MORA ESPORTS",
    year: "2026",
    objectives: [
      "Strengthen Inter-University Collaboration",
      "Promote Esports as a Recognized Competitive Activity",
      "Provide a Professional Platform for University Gamers",
      "Identify and Nurture Emerging Esports Talent",
    ],
  },
  {
    id: 6,
    name: "INIZIO",
    image: "/projects/post-img-2.jpeg",
    description: [
      `This project is a high-profile online event titled "INIZIO 2021," which appears to be a workshop, seminar, or talent showcase focused on the Creative Multimedia, Entertainment, and Technology industries. The event was held on 7th October at 7:00 PM and was conducted "Via Zoom".`,
      `The event features a diverse panel of four guest speakers, indicating a broad scope that covers multiple creative and technical domains:`,
      `Ms. Manuja Wickramasinghe: BA (Hons) in Creative Multimedia`,
      `Mr. Bandula Nanayakkarawasam: Lyrics Artist`,
      `Mr. Vikum Jayasekera: Director of InGame Entertainment PVT LTD and GAMER.LK`,
      `Mr. Isuru Herath: Administrator of TECH MORPH`,
      `The inclusion of speakers from creative arts (lyrics), creative multimedia, gaming/entertainment, and technology suggests the session aims to connect academic creative skills with real-world industries`,
    ],
    status: "DONE",
    classification: "LEVEL 4",
    team: "Multimedia TEAM",
    year: "2021",
    objectives: [
      "Broad Skill Exposure",
      "ndustry Insight",
      "Creative Motivation",
      "Networking & Outreach",
    ],
  },
  {
    id: 8,
    name: "Interfaculty Esports Championship",
    image: "/projects/post-img-4.jpeg",
    description: [
      `LEGION's mission includes creating a competitive E-sport platform for university undergraduates to share and improve their skills, and they have previously collaborated on inter-university tournaments like LUDICON, which featured titles like Call of Duty 4 (COD4).`,
      `This specific competition focuses on internal university rivalry to promote gaming as a recognized non-academic skill and build community within the University of Kelaniya. The graphic uses intense, stylized imagery of video game characters and a "GET READY" call to action to generate excitement.`,
    ],
    status: "DONE",
    classification: "LEVEL 4",
    team: "Esports TEAM",
    year: "2024",
    objectives: [
      "Promote Esports",
      "Foster Faculty Rivalry",
      "Identify Talent",
      "Strengthen Community",
    ],
  },
  {
    id: 1,
    name: "NETSEC",
    image: "/projects/post-img-5.jpeg",
    description: [
      `The NetSec Mastery 1.0 – Introduction to Networking & Cybersecurity Industry workshop is designed to guide students into the world of networking and cybersecurity.`,
      `Conducted at the Faculty of Computing and Technology, University of Kelaniya, this session equips participants with essential knowledge, industry insights, and practical strategies to begin building a career in these rapidly growing fields. The session is delivered by an expert industry professional, offering real-world perspectives and career guidance.`,
    ],
    status: "DONE",
    classification: "LEVEL 4",
    team: "NETWORKING TEAM",
    year: "2023",
    objectives: [
      "Introduce the fundamentals of computer networking",
      "Explain the role and importance of cybersecurity in modern IT",
      "Expose students to real industry practices and challenges",
      "Guide students on career pathways in networking and cybersecurity",
    ],
  },
  {
    id: 5,
    name: "Interfaculty Esports Championship",
    image: "/projects/post-img-1.jpeg",
    description: [
      `LEGION is the Digital Creative and Competitive E-sport Enthusiasts Club of the University of Kelaniya. The club operates as a dual-focus platform, aiming to provide undergraduates with opportunities to share and improve both their digital creative skills and their competitive E-sport skills.`,
    ],
    status: "DONE",
    classification: "LEVEL 4",
    team: "E-SPORTS TEAM",
    year: "2023",
    objectives: [
      "Develop Non-Academic Digital Skills",
      "Foster a Competitive Esports Ecosystem",
      "Bridge University-Industry Gap",
      "Community and Membership Growth",
    ],
  },
  {
    id: 2,
    name: "LUDICON",
    image: "/projects/post-img-6.jpeg",
    description: [
      `The LUDICON Inter University E-Sports Championship is a competitive gaming event organized to bring together university gamers from across the country. This championship aims to foster teamwork, strategic thinking, and a healthy competitive spirit within the student community. With popular e-sports titles and high-intensity matches, the event creates a platform for skilled players to showcase their talent, represent their universities, and build a vibrant e-sports culture in Sri Lanka.`,
    ],
    status: "DONE",
    classification: "LEVEL 4",
    team: "E-SPORTS TEAM",
    year: "2024",
    objectives: [
      "Promote E-Sports Culture Among Universities",
      "Provide a Platform for Competitive Gaming",
      "Enhance Teamwork and Strategic Skills",
      "Unite Students Through Community Engagement",
    ],
  },
];

export default function Dashboard() {

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
                  The mission of{" "}
                  <span className="text-cyan-400 font-semibold">Legions</span>{" "}
                  is to provide an opportunity for university undergraduates to
                  train, enhance, and share the skills that will assist them in
                  digital creative and competitive E-sport platforms to make an
                  ethical, professional community.
                </p>
                <div className="pt-4 border-t text-xs border-cyan-400/30">
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 flex items-center gap-1">
                      <Zap className="inline-block mb-2 md:mb-0 size-4" />
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

            <Link
              href="/registration"
              className="btn-primary w-full panel p-4 text-cyan-400 font-bold tracking-wider hover:bg-cyan-400/10 transition-all corner-deco group block"
            >
              <span className="flex items-center justify-center">
                REGISTER NOW
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="panel p-4 text-center corner-deco">
                <div className="text-3xl font-bold text-cyan-400">08</div>
                <div className="text-xs text-gray-400 mt-1">
                  UPCOMING EVENTS
                </div>
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
                  To create an island-wide digital creative and competitive
                  E-sport platform where all the university undergraduates can
                  share and improve their skills.
                </p>
                <div className="pt-4 border-t border-cyan-400/30">
                  <div className="text-xs flex items-center gap-2 text-yellow-400 animate-pulse">
                    <TriangleAlert className="inline-block size-4" />
                    <span>ALERT: REGISTRATION CLOSING SOON.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Projects projects={projects} />
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
