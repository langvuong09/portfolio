import { ImageWithFallback } from './components/ImageWithFallback';
import { Github, Linkedin, Facebook, Mail, Phone, ExternalLink } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHdvcmtzcGFjZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3NzgwNzk0OTV8MA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Programming workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="mb-4 text-5xl md:text-7xl font-bold text-white">
            Hi, I'm <span className="text-blue-500">Cuong</span> 👋
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-gray-300">
            Software Engineering Student | Web Developer
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/langvuong09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              View Projects
            </a>
            <a
              href="assets/CV.pdf"
              className="flex items-center gap-2 px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760435992373-b3e20f308bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Nzc5MDU4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Software development"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="text-gray-300 space-y-4 text-lg">
              <p>
                I'm a Software Engineering student at SaiGon University with a strong passion for backend development and building scalable systems.
              </p>
              <p>
                I enjoy solving problems through code and constantly exploring new technologies.
                Currently focusing on web development and backend programming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-white">
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="mb-3 text-xl font-bold text-blue-400">Languages</h3>
              <p className="text-gray-300">Java, C#, JavaScript, Python, C++</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-xl hover:border-purple-500 transition-colors">
              <h3 className="mb-3 text-xl font-bold text-purple-400">Backend</h3>
              <p className="text-gray-300">Spring Boot, .NET, Express.js, Django</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-500/30 rounded-xl hover:border-green-500 transition-colors">
              <h3 className="mb-3 text-xl font-bold text-green-400">Database</h3>
              <p className="text-gray-300">MySQL, PostgreSQL, NoSQL</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-600/20 to-orange-800/20 border border-orange-500/30 rounded-xl hover:border-orange-500 transition-colors">
              <h3 className="mb-3 text-xl font-bold text-orange-400">Tools & Technologies</h3>
              <p className="text-gray-300">Postman, GitHub, Visual Studio Code, Visual studio, Pycharm, IntelliJ, Eraser, Canva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-white">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-700 hover:border-blue-500">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="/assets/travel.jpg"
                  alt="Smart Travel Support Web"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">Smart Travel Support Web</h3>
                <p className="mb-4 text-gray-400">
                  A full-stack travel-assistance web application that helps users manage locations, bookings, and receive AI-based recommendations.
                </p>
                <p className="mb-4 text-gray-400">
                  Tech Stack: Java, Spring Boot, Maven, MySQL, React, JavaScript, FastAPI (Python), REST, HTML/CSS, Git.
                </p>
                <a
                  href="https://github.com/langvuong09/TravelSupportWeb.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-700 hover:border-blue-500">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="/assets/clock.jpg"
                  alt="Watch Store Web"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">Watch Store Web</h3>
                <p className="mb-4 text-gray-400">
                  Developed a web-based Watch Store Management System to optimize operations for small to medium-sized retail watch stores
                </p>
                <p className="mb-4 text-gray-400">
                  Tech Stack: C#, ASP.NET MVC, Entity Framework, MySQL, HTML5, CSS3, Bootstrap, jQuery.
                </p>
                <a
                  href="https://github.com/langvuong09/WatchStore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-700 hover:border-blue-500">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src="/assets/chat.png"
                  alt="Realtime Chat"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">Realtime Chat</h3>
                <p className="mb-4 text-gray-400">
                  A web-based real-time chat application that allows users to communicate instantly, manage friends, conversations, and share files.
                </p>
                <p className="mb-4 text-gray-400">
                  Tech Stack: Node.js, Express.js, Socket.io, React, TypeScript, MySQL, JWT, Cloudinary, Git.
                </p>
                <a
                  href="https://github.com/thankhanh/Express-realtime-chat.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-12 text-4xl md:text-5xl font-bold text-white">
            Contact
          </h2>
          <div className="mb-8 space-y-4">
            <div className="flex items-center justify-center gap-3 text-gray-300 text-lg">
              <Mail className="w-6 h-6 text-blue-400" />
              <a href="mailto:cuongcaotien9a@gmail.com" className="hover:text-blue-400 transition-colors">
                cuongcaotien9a@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300 text-lg">
              <Phone className="w-6 h-6 text-blue-400" />
              <a href="tel:0962385165" className="hover:text-blue-400 transition-colors">
                0962385165
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/langvuong09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-gray-900 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © 2026 Cuong Cao Tien | Portfolio
        </p>
      </footer>
    </div>
  );
}
