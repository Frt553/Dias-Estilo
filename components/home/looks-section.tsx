import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const looks = [
  {
    category: "Trabalho",
    title: "Look Executivo",
    description: "Elegância e profissionalismo para o ambiente corporativo",
    image: "/images/collection-elegant.jpg",
  },
  {
    category: "Casual",
    title: "Look do Dia a Dia",
    description: "Conforto e estilo para momentos descontraídos",
    image: "/images/trends-2026.jpg",
  },
  {
    category: "Eventos",
    title: "Look Sofisticado",
    description: "Peças especiais para ocasiões memoráveis",
    image: "/images/hero-fashion.jpg",
  },
  {
    category: "Verão",
    title: "Look Praiano",
    description: "Leveza e frescor para os dias quentes de Fortaleza",
    image: "/images/store-interior.jpg",
  },
]

export function LooksSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary" aria-labelledby="looks-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Inspiração
            </p>
            <h2 id="looks-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
              Looks Femininos Elegantes
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Encontre inspiração para montar looks perfeitos para cada ocasião. 
              Na Dias Estilo, ajudamos você a criar combinações que expressam sua personalidade.
            </p>
          </div>
          <Button 
            asChild 
            variant="outline" 
            className="w-fit border-foreground/20 hover:bg-foreground/5"
          >
            <Link href="/looks-femininos-elegantes">
              Ver Todos os Looks
            </Link>
          </Button>
        </div>

        {/* Looks grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {looks.map((look) => (
            <article 
              key={look.title}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden"
            >
              <Image
                src={look.image}
                alt={`${look.title} - ${look.description}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-medium tracking-widest uppercase text-accent">
                  {look.category}
                </span>
                <h3 className="mt-1 text-lg font-serif font-medium text-primary-foreground">
                  {look.title}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  {look.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
