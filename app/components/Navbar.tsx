export default function Navbar() {
  return (
    <nav className="fixed top-4 right-4 z-50">
      <div className="flex space-x-4">
        <a
          href="/"
          className="text-white hover:text-gray-300 transition-colors font-bold"
        >
          Home
        </a>
        <a
          href="/theory"
          className="text-white hover:text-gray-300 transition-colors font-bold"
        >
          Theory
        </a>
        <a
          href="/about"
          className="text-white hover:text-gray-300 transition-colors font-bold"
        >
          About
        </a>
        <a
          href="https://github.com/PranavU-Coder/cat_breedz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors font-bold"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
