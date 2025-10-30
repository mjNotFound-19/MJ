export default function Footer(){
  return (
    <footer className="border-top border-gray-800 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} Manas Jha. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind.</p>
      </div>
    </footer>
  )
}