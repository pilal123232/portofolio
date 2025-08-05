"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Archaeological Sites",
      description:
        "Uncover the mysteries of ancient civilizations through ruins, relics, and timeless landscapes.",
      image: "assets/images/Archaeological.jpg",
      tags: ["Photography", "Outdoors"],
      GalleryUrl: "https://gitlab.com/ezeddin_alassaad/ptway"
    },
    {
      title: "Nature",
      description:
        "Explore stunning landscapes and the serene beauty of the natural world.",
      image: "assets/images/Nature.jpg",
      tags: ["Photography", "Outdoors"],
      GalleryUrl: "https://gitlab.com/ezeddin_alassaad/ptway",
    },
    {
      title: "Industrial Cities",
      description:
        "Discover the architectural grit and innovation of the world’s industrial hubs.",
      image: "assets/images/IndustrialCities.jpg",
      tags: ["Urban", "Architecture"],
      GalleryUrl: "https://gitlab.com/ezeddin_alassaad/thats_app_2",
    },
    {
      title: "Kitchen",
      description:
        " Dive into delicious recipes, modern design, and culinary inspiration.",
      image: "assets/images/Kitchen.jpg",
      tags: ["Food", "Design"],
      GalleryUrl: "https://github.com/Ezeddin-Alassaad/BookStoreApi",
    },
    {
      title: "Crafts & Arts",
      description:
        "Celebrate handmade creations, DIY projects, and artistic expression.",
      image: "assets/images/Crafts&Arts.jpg",
      tags: ["DIY", "Art"],
      GalleryUrl: "https://gitlab.com/ezeddin_alassaad/restaurant-ezo",
    },
    {
      title: "My Work Photos",
      description:
        "A curated collection of my best professional photographs across genres",
      image: "assets/images/MyWorkPhotos.jpg",
      tags: ["Portfolio", "Photography"],
      GalleryUrl: "https://gitlab.com/ezeddin_alassaad/restaurant-ezo",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Dive into some of my latest projects, each highlighting unique skills and cutting-edge technologies I've mastered.💡
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.GalleryUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Explore Gallery
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="pt-12 text-center">
          © {new Date().getFullYear()} Euphrates News Agency. All images &amp; rights reserved.
        </div>
      </div>
    </section>
  )
}

