import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a CMS or database
const projects = {
  "luxury-resort-booking": {
    title: "Luxury Resort Booking",
    description:
      "A premium hotel booking platform with virtual tours and real-time availability. Built with Next.js and featuring high-performance search and filtering.",
    challenge:
      "The client needed a high-end booking platform that could handle complex availability calculations while providing an immersive experience for luxury travelers.",
    solution:
      "We developed a custom booking engine with real-time availability updates and integrated virtual tours. The platform includes advanced filtering options and a seamless booking process.",
    features: [
      "Real-time availability checking",
      "Virtual tour integration",
      "Advanced search and filtering",
      "Secure payment processing",
      "Admin dashboard for property management",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "WebGL", "Stripe"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  // Add more projects here
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-8 md:px-6">
        <Link href="/portfolio">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter">{project.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
            </div>
            <div className="space-y-4">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-lg"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.slice(1).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} ${index + 2}`}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">The Challenge</h2>
              <p className="mt-2 text-muted-foreground">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Our Solution</h2>
              <p className="mt-2 text-muted-foreground">{project.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="mt-2 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Technologies Used</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
