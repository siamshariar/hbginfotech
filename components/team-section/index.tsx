"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "David Chen",
    role: "CEO & Lead Architect",
    bio: "15+ years of experience in software architecture and team leadership",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Technical Director",
    bio: "Expert in cloud architecture and enterprise solutions",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Zhang",
    role: "Lead Frontend Developer",
    bio: "Specialist in modern frontend frameworks and UI/UX",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Backend Developer",
    bio: "Expert in scalable backend systems and databases",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-gradient-to-b from-[#1a1f35] to-[#2a2a4a] border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-[#00ffff] to-white bg-clip-text text-transparent"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            Our team of experts is passionate about creating innovative solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px 200px 0px", amount: 0.1 }}
              className="group relative"
            >
              <div className="relative h-80 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-[#00ffff]/20 to-[#4b3b82]/40 border border-white/10 flex items-center justify-center">
                <span className="text-6xl font-bold text-[#00ffff]/60">
                  {member.name.split(" ").map((n) => n.charAt(0)).join("")}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-center space-x-4">
                      <a href={member.social.linkedin} className="text-white hover:text-[#00ffff] transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.github} className="text-white hover:text-[#00ffff] transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-[#00ffff] transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#00ffff] mb-3">{member.role}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
