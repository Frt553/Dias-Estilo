import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Clara",
    location: "Aldeota, Fortaleza",
    text: "A Dias Estilo é minha loja favorita! O atendimento é impecável e sempre encontro peças lindas que combinam com meu estilo. Super recomendo!",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    location: "Meireles, Fortaleza",
    text: "Roupas de qualidade e um atendimento personalizado que faz toda a diferença. Me sinto especial toda vez que vou à loja. Peças exclusivas!",
    rating: 5,
  },
  {
    name: "Juliana Santos",
    location: "Papicu, Fortaleza",
    text: "Descobri a Dias Estilo pelo Instagram e me apaixonei. As peças são elegantes e confortáveis, perfeitas para o trabalho e eventos.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Depoimentos
          </p>
          <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
            O Que Nossas Clientes Dizem
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A satisfação das nossas clientes é nossa maior recompensa. 
            Veja o que elas falam sobre a experiência na Dias Estilo.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.name}
              className="bg-background rounded-lg p-8 border border-border"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-accent text-accent" 
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
