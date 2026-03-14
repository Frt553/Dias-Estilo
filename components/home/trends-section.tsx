import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const trends = [
  {
    title: "Tons Neutros e Terrosos",
    description: "Cores como bege, marrom e terracota dominam a temporada, trazendo elegância e versatilidade.",
    image: "/images/trends-2026.jpg",
  },
  {
    title: "Tecidos Fluidos",
    description: "Peças leves e confortáveis que garantem movimento e sofisticação para o dia a dia.",
    image: "/images/collection-elegant.jpg",
  },
  {
    title: "Minimalismo Chique",
    description: "Menos é mais: peças atemporais com cortes impecáveis que nunca saem de moda.",
    image: "/images/hero-fashion.jpg",
  },
]

export function TrendsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="trends-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Tendências 2026
          </p>
          <h2 id="trends-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
            Tendências de Moda Feminina
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Fique por dentro das principais tendências de moda feminina e encontre 
            peças exclusivas na nossa loja em Fortaleza.
          </p>
        </div>

        {/* Trends grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <article 
              key={trend.title}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={trend.image}
                  alt={trend.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/70">
                    Tendência {index + 1}
                  </span>
                  <h3 className="mt-2 text-xl font-serif font-medium">
                    {trend.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                    {trend.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link 
            href="/moda-feminina-fortaleza"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Ver todas as tendências
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
