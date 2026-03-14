import Link from "next/link"
import { Phone, MapPin, Instagram, Clock, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Início", href: "/" },
    { name: "Moda Feminina em Fortaleza", href: "/moda-feminina-fortaleza" },
    { name: "Nossa Loja na Aldeota", href: "/loja-aldeota" },
    { name: "Looks Femininos Elegantes", href: "/looks-femininos-elegantes" },
    { name: "Blog de Moda", href: "/blog" },
  ],
  categories: [
    { name: "Blusas e Camisas", href: "/blog/blusas-camisas-femininas" },
    { name: "Vestidos", href: "/blog/vestidos-elegantes" },
    { name: "Saias e Calças", href: "/blog/saias-calcas-femininas" },
    { name: "Looks para Trabalho", href: "/blog/looks-trabalho" },
    { name: "Looks para Eventos", href: "/blog/looks-eventos" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="Dias Estilo">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full text-primary-foreground"
                  aria-hidden="true"
                >
                  <polygon 
                    points="50,0 55,45 100,50 55,55 50,100 45,55 0,50 45,45" 
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-tight">
                  Dias Estilo
                </span>
                <span className="text-xs text-primary-foreground/70 tracking-widest uppercase">
                  Moda Feminina
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Loja de moda feminina em Fortaleza com atendimento personalizado. 
              Roupas elegantes, modernas e confortáveis para os seus melhores dias.
            </p>
            <div className="mt-6">
              <a 
                href="https://instagram.com/dias.estilo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span>@dias.estilo</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Navegação
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Categorias
            </h3>
            <ul className="space-y-3">
              {navigation.categories.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Rua+Torres+Câmara,+176+-+Aldeota,+Fortaleza+-+CE,+60150060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    Rua Torres Câmara, 176<br />
                    Aldeota, Fortaleza - CE<br />
                    CEP: 60150-060
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+558599851969"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>(85) 9 9815 1969</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@diasestilo.com.br"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>contato@diasestilo.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Seg - Sex: 9h às 18h<br />
                  Sábado: 9h às 13h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Dias Estilo. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/70">
              Moda feminina em Fortaleza - Loja de roupas femininas na Aldeota
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
