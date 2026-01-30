import Link from "next/link";
import { Film, Github, Twitter, Mail, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
      {/* Gradient line at top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="relative">
                <Film className="w-8 h-8 text-purple-500" />
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                MovieWeb
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Discover and explore thousands of movies with detailed
              information, ratings, and reviews. Powered by TMDB API.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <div className="absolute inset-0 rounded-lg bg-purple-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <div className="absolute inset-0 rounded-lg bg-purple-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />
              </a>
              <a
                href="mailto:contact@movieweb.com"
                className="group relative p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <div className="absolute inset-0 rounded-lg bg-purple-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Search
                </Link>
              </li>
              <li>
                <a
                  href="https://www.themoviedb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  TMDB
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-2 flex flex-col items-center md:items-start">
              <li>
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a
                  href="https://www.themoviedb.org/documentation/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  TMDB API
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-xs text-center sm:text-left">
              © {currentYear} MovieWeb. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
              <span>using Next.js & TMDB API</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
    </footer>
  );
}
