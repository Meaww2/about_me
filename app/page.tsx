import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80 dark:border-slate-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Rachata Thananchai</div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Meaww2" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/rachata-thananchai" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Button className="hidden md:flex bg-teal-600 hover:bg-teal-700 text-white">Download CV</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-teal-600 dark:text-teal-400">Rachata</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300">
                Computer Science Student & Web Developer
              </p>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                A passionate third-year Computer Science student at Chiang Mai University with experience in web
                development, seeking an internship opportunity from April 2025 to October 2025.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline">
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-4xl font-bold">
                RT
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-slate-900">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Chiang Mai University</h3>
                    <p className="text-slate-600 dark:text-slate-400">B.S. Computer Science</p>
                    <p className="text-slate-600 dark:text-slate-400">Expected Graduation: May 2026</p>
                    <p className="font-medium">GPAX: 3.63 / 4.00</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Relevant Coursework:</h4>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-400">
                      <li>Data Structures and Analysis</li>
                      <li>Algorithm Design and Analysis</li>
                      <li>Database Systems</li>
                      <li>Software Engineering</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Objective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">
                    My name is Rachata Thananchai, a third-year student from the Computer Science program at Chiang Mai
                    University. I would like to apply for an internship position as a Web Developer from April 2025 to
                    October 2025 (a total duration of 6 months).
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      <span>Mueang District, Chiang Mai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      <span>(+66) 95 647 9312</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      <span>LinkedIn: Rachata Thananchai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      <span>github.com/Meaww2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1">Python</Badge>
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1">C++</Badge>
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1">Java</Badge>
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1">JavaScript</Badge>
                  <Badge className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1">Go</Badge>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">React.js</Badge>
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">Next.js</Badge>
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">Flask</Badge>
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">Docker</Badge>
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">MongoDB</Badge>
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">Git</Badge>
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">GitHub</Badge>
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">Postman</Badge>
                  <Badge className="bg-slate-700 hover:bg-slate-800 text-white px-3 py-1">PostgreSQL</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white dark:bg-slate-900">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Teaching Assistant</CardTitle>
                      <CardDescription>Department of Computer Science</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">Dec 2022 - Present</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Chiang Mai</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                    <li>In class Fundamentals of Programming and Programming for Data Science</li>
                    <li>
                      Used Python skills to debug code, explain, and help resolve any errors for the students in the
                      class.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Team Member</CardTitle>
                      <CardDescription>Centara Grand at Central Plaza Ladprao Bangkok</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">Sep 2023</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Bangkok</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                    <li>
                      Qualified for the final stage of the top 10 teams in the Thailand Cyber Top Talent 2023
                      competition.
                    </li>
                    <li>Skills applied: Programming, and Cryptography.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Class President</CardTitle>
                      <CardDescription>Department of Computer Science</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">Nov 2023 - Present</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Chiang Mai</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                    <li>
                      Plan activities for the Computer Science Department, such as seminar activities, workshop for
                      upskilling, and Christmas Day celebrations.
                    </li>
                    <li>Skills applied: Organization, Collaboration, Communication, and Solving immediate problems</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Banana Choco</h3>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Banana Choco</CardTitle>
                    <Badge>Nov 2023 - Mar 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    A system for managing English vocabulary flashcards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Flask</Badge>
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Cat Vacuum</h3>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Cat Vacuum</CardTitle>
                    <Badge>Sep 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">A puzzle game, developed as a mini-project.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React.js</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Assignment Grading System</h3>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Assignment Grading System</CardTitle>
                    <Badge>Jul 2024 - Dec 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    A system for managing assignments between teachers and students. Contributed to planning tasks for
                    each sprint and was responsible for Back-End Development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Flask</Badge>
                    <Badge variant="outline">SQLAlchemy</Badge>
                    <Badge variant="outline">Postman</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Awards</h2>
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Academic Excellence Certificate</CardTitle>
                  <Badge>Jun 2023 - Present</Badge>
                </div>
                <CardDescription>Chiang Mai University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Awarded for outstanding academic performance and maintaining a high GPA.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Feel free to contact me for any opportunities or questions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    <span>(+66) 95 647 9312</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    <span>rachata.thananchai@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    <span>Mueang District, Chiang Mai, Thailand</span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Link href="https://github.com/Meaww2" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/in/rachata-thananchai" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:border-slate-700"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:border-slate-700"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:border-slate-700"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:border-slate-700"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t dark:border-slate-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Rachata Thananchai. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/Meaww2" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/rachata-thananchai" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
