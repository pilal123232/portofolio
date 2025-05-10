"use client"

import { useRef, useEffect, useState } from "react"
import {  FaBroadcastTower , FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa"
import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si"
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdMovieEdit  } from "react-icons/md"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skills = [
    { name: "Adobe Premier", icon: <SiAdobepremierepro  className="text-[#9999FF]" size={36} /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" size={36} /> },
    { name: "Adobe Aftereffects", icon: <SiAdobeaftereffects  className="text-[#9999FF]" size={36} /> },
    { name: "Adobe Audition", icon: <SiAdobeaudition  className="text-[#00E8C3]" size={36} /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-[#FF9A00]" size={36} /> },
    { name: "Video Editing", icon: <MdMovieEdit  className="text-[#06B6D4]" size={36} /> },
    { 
      name: "Digital Media", 
      icon: <FaBroadcastTower  className="text-orange-500" size={36} /> },
    { name: "Photography", icon: <HiOutlinePhotograph className="text-purple-500" size={36} /> },
  ]

  const technologies = [
    { name: "Canva", icon: <SiCanva  className="text-[#00C4CC]" size={24} /> },
    { name: "Youtube", icon: <FaYoutube className="text-[#FF0000]" size={24} /> },
    { name: "Instagram", icon: <FaInstagram className="text-[#E4405F]" size={24} /> },
    { name: "Tiktok", icon: <FaTiktok className="text-[#010101]" size={24} /> },
    { name: "Facebook", icon: <FaFacebook className="text-[#1877F2]" size={24} /> },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Video Editor & Cameraman at Al-Furat News
          Skilled in filming news reports and editing videos to deliver high-quality, engaging content. Experienced in visual storytelling, with strong attention to detail and a focus on professional media production
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Core Skills with icons */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="font-medium text-center">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Other technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
