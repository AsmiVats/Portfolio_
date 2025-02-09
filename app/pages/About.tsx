import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import profile from "@/app/asserts/profile.jpg"

export default function AboutUs() {
  const technologies = [
    {
      name: "Figma",
      description: "Design Tool",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-purple-50",
    },
    {
      name: "TypeScript",
      description: "JavaScript but better",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-blue-50",
    },
    {
      name: "React",
      description: "JavaScript Library",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-cyan-50",
    },
    {
      name: "NextJS",
      description: "React Framework",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-gray-100",
    },
    {
      name: "Tailwind",
      description: "CSS framework",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-blue-50",
    },
    {
      name: "Git",
      description: "Version control",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-red-50",
    },
    {
      name: "NodeJS",
      description: "Backend tool",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-green-50",
    },
    {
      name: "NPM",
      description: "Package manager",
      icon: "/placeholder.svg?height=40&width=40",
      color: "bg-red-50",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12 ">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="flex gap-8 items-start">
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-gray-700">
              I'm a web developer and software engineer dedicated to crafting innovative, high-performance digital
              solutions. With a strong foundation in design and development, I blend creativity with technical expertise
              to build seamless, user-friendly experiences. My approach is driven by shared values, open communication,
              and a deep respect for the end user—because great software starts with understanding the people who use
              it.
            </p>
          </div>

        </div>
      </section>

      <section className="mb-16 space-y-4">
        <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer ">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">OS Code Solutions (August 2024 - January 2025)</h2>
              <p className="text-sm text-gray-500">FULL-STACK DEVELOPER</p>
            </div>
            <ArrowUpRight className="text-gray-400" />
          </div>
        </Card>

        <Card className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">VIT Bhopal University</h2>
              <p className="text-sm text-gray-500">B.TECH IN COMPUTER SCIENCE</p>
              <p className="text-sm text-gray-500">GPA - 9.2</p>
            </div>
            <ArrowUpRight className="text-gray-400" />
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Current technologies</h2>
        <p className="text-gray-600 mb-8">
          I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These
          are some of my main technologies:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`p-2 rounded-lg ${tech.color}`}>
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

