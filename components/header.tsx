"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Início", href: "/" },
  { name: "Moda Feminina", href: "/moda-feminina-fortaleza" },
  { name: "Nossa Loja", href: "/loja-aldeota" },
  { name: "Looks Elegantes", href: "/looks-femininos-elegantes" },
  { name: "Blog", href: "/blog" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+558599851969" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>(85) 9 9815 1969</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Aldeota, Fortaleza - CE</span>
            </span>
          </div>
          <a 
            href="https://instagram.com/dias.estilo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Instagram className="h-4 w-4" />
            <span>@dias.estilo</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Dias Estilo - Página Inicial">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full text-primary"
                aria-hidden="true"
              >
                <polygon 
                  points="50,0 55,45 100,50 55,55 50,100 45,55 0,50 45,45" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Dias Estilo
              </span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                Moda Feminina
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                Visite Nossa Loja
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-border">
            <div className="flex flex-col gap-4 pt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                    Visite Nossa Loja
                  </a>
                </Button>
              </div>
              <div className="flex flex-col gap-2 pt-4 text-sm text-muted-foreground">
                <a href="tel:+558599851969" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(85) 9 9815 1969</span>
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Aldeota, Fortaleza - CE</span>
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
