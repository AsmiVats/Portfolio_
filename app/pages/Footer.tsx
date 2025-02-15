import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#4C6EE2] text-white border border-t-white">
      <div className="container mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <h3 className="text-[16px] font-light mb-4"
            style={{
              fontFamily: "'IvyPresto', serif",
              fontStyle: "italic",
            }}>
              Asmi Vats</h3>
            <div className="space-y-1">
              <p className="text-lg">
                The power of <span className="italic">design.</span>
              </p>
              <p className="text-lg">
                The beauty of <span className="italic">ideas.</span>
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 ">
            <h3 className="text-sm font-light mb-4 ">Drop me a line</h3>
            <Link href="mailto:asmivats15@gmail.com" className="text-lg hover:underline underline-offset-4">
              asmivats15@gmail.com
            </Link>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-light mb-4">Link</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="hover:underline underline-offset-4">
                Portfolio
              </Link>
              <Link href="#services" className="hover:underline underline-offset-4">
                Services
              </Link>
              <Link href="#about" className="hover:underline underline-offset-4">
                About
              </Link>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-light mb-4">Social Media</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="https://www.instagram.com/vatsasmi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 flex gap-1"
              >
                <Instagram/>Instagram
              </Link>
              <Link
                href="https://github.com/AsmiVats"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 flex gap-1"
              >
              <Github/>  Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/asmivats/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 flex gap-1"
              >
                <Linkedin/>LinkedIn
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center text-sm">
          <p>© 2025 by Asmi Vats ✦</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/cookie-policy" className="hover:underline underline-offset-4">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

