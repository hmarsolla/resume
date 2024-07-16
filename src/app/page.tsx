"use client";
import { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const skills = [
  {
    name: 'Backend',
    subskills: ['Node.js', 'Python', 'Go', 'Typescript', 'Flask', 'Express.js', 'C#', 'RESTful APIs', 'Microservices', 'RabbitMQ'],
  },
  {
    name: 'Frontend',
    subskills: ['React.js', 'Next.js', 'Angular.js', 'Vue.js', 'Tailwind CSS','HTML5', 'CSS', 'jQuery'],
  },
  {
    name: 'DevOps',
    subskills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Oracle Cloud', 'Cloudflare', 'Ansible', 'Zabbix', 'Rundeck', 'Jenkins', 'Github Actions', 'CI/CD', 'Automation'],
  },
  {
    name: 'Testing',
    subskills: ['Mocha.js', 'Chai.js', 'Jest', 'Supertest', 'Selenium', 'Pytest', 'Hypothesis'],
  },
  {
    name: 'Databases',
    subskills: ['MongoDB', 'SQL Server', 'PostgreSQL', 'Oracle DB', 'SQLite'],
  },
  {
    name: 'Servers',
    subskills: ['Linux', 'Bash/Shell (Linux)', 'Batch Script (Windows)', 'Reverse Proxies', 'NFS', 'Backups', 'Services provision', 'DNS', 'Cron'],
  },
];

export default function Home() {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const handleSkillClick = (index: any) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blueDarker text-white">
      <header className="w-full py-5 bg-purple text-center">
        <h1 className="text-4xl font-bold">Heitor Marsolla</h1>
      </header>
      <main className="flex flex-col items-center py-10 w-full px-4 sm:px-8 lg:px-16">
        <section className="mb-8 w-full max-w-4xl flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          <Image
            src="/profile.jpg"
            width={500}
            height={500}
            alt="Profile Photo"
            className="w-48 h-48 rounded-full mb-6 lg:mb-0 lg:mr-8 object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-pink">About Me</h2>
            <p className="text-lg text-white text-justify">
              Hello! I&apos;m Heitor Marsolla, a passionate problem solver and technology enthusiast. I love learning new ways to build systems that improve life. Throughout my career, I&apos;ve contributed to Back-end, Front-end, Quality Assurance, and DevOps, using various technologies. I look forward to continuing my learning journey, meeting new people, and making the world a better place through my work.
            </p>
          </div>
        </section>
        <section className="mb-8 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4 text-pink">Skills</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-white">
            {skills.map((skill, index) => (
              <li key={index} className="bg-blueDark p-4 rounded-md">
                <button
                  className="w-full text-left focus:outline-none"
                  onClick={() => handleSkillClick(index)}
                >
                  {skill.name}
                </button>
                <ul
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedSkill === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {skill.subskills.map((subskill, subIndex) => (
                    <li key={subIndex} className="pl-4 pt-2 text-sm text-white">
                      {subskill}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-8 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4 text-pink">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blueLight p-4 rounded-lg">
              <h3 className="text-2xl font-bold">Database Provisioner</h3>
              <p className="text-white">An on-premises database and resources provisioner through automation.</p>
            </div>
            <div className="bg-blueLight p-4 rounded-lg">
              <h3 className="text-2xl font-bold">Testing Framework</h3>
              <p className="text-white">An automated interface testing framework for ERPs and Web solutions.</p>
            </div>
            <div className="bg-blueLight p-4 rounded-lg">
              <h3 className="text-2xl font-bold">Automation Telegram Bot</h3>
              <p className="text-white">A bot that can trigger some remote tasks on my devices.</p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4 text-pink">Contact</h2>
          <div className="flex space-x-4 text-lg text-white">
            <a href="mailto:me@hmarsolla.dev" className="text-white">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/hmarsolla" className="text-white">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/hmarsolla" className="text-white">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </section>
      </main>
      <footer className="w-full py-5 bg-blueDark text-center">
        <p>&copy; Heitor Marsolla - 2024</p>
      </footer>
    </main>
  );
}