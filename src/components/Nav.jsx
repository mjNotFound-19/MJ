export default function Nav(){
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-xl tracking-tight">
          <span>MJ</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#experience" className="hover:text-primary transition">Experience</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}