"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Film, Search, Home, Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Film className="w-8 h-8 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              MovieWeb
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className={`
                                flex items-center gap-2 px-4 py-2 rounded-lg
                                transition-all duration-300 font-medium
                                ${
                                  isActive("/") &&
                                  !pathname.includes("/search") &&
                                  !pathname.includes("/movie")
                                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30 shadow-lg shadow-purple-500/20"
                                    : "text-gray-300 hover:text-white hover:bg-white/5"
                                }
                            `}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <Link
              href="/search"
              className={`
                                flex items-center gap-2 px-4 py-2 rounded-lg
                                transition-all duration-300 font-medium
                                ${
                                  isActive("/search")
                                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30 shadow-lg shadow-purple-500/20"
                                    : "text-gray-300 hover:text-white hover:bg-white/5"
                                }
                            `}
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient line at bottom */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    </nav>
  );
}
