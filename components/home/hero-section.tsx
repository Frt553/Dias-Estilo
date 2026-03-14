import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center" aria-label="Destaque da coleção">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-fashion.jpg"
          alt="Loja Dias Estilo - Moda feminina elegante em Fortaleza"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Nova Coleção 2026
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
            Moda Feminina em Fortaleza para os Seus Melhores Dias
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Descubra peças elegantes, modernas e confortáveis na Dias Estilo. 
            Atendimento personalizado e coleções exclusivas para mulheres que 
            valorizam estilo e qualidade.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
            >
              <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                Visite Nossa Loja
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="text-base px-8 border-foreground/20 hover:bg-foreground/5"
            >
              <Link href="/looks-femininos-elegantes">
                Ver Looks Elegantes
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Atendimento Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Peças Selecionadas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Aldeota, Fortaleza</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
