"use client";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
];

function Header() {
  return (
    <header className="w-full px-4 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mx-auto">
        <div className="text-2xl font-bold mb-2 sm:mb-0">lydia son</div>
        <nav className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4 text-base sm:text-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1 hover:text-blue-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
