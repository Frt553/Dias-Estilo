import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles, Heart, Shirt, Sun, Briefcase, PartyPopper } from "lucide-react"

export const metadata: Metadata = {
  title: "Moda Feminina em Fortaleza | Tendências e Looks Elegantes - Dias Estilo",
  description: "Descubra as últimas tendências de moda feminina em Fortaleza. Looks elegantes para trabalho, eventos e dia a dia. Visite a Dias Estilo na Aldeota e renove seu guarda-roupa.",
  keywords: "moda feminina Fortaleza, tendências moda feminina, looks elegantes, roupas femininas Fortaleza, moda Ceará, vestidos elegantes, blusas femininas",
  openGraph: {
    title: "Moda Feminina em Fortaleza | Dias Estilo",
    description: "As últimas tendências de moda feminina em Fortaleza. Looks para trabalho, eventos e dia a dia.",
    type: "website",
  },
}

const trends = [
  {
    icon: Sparkles,
    title: "Tons Neutros e Terrosos",
    description: "Cores como bege, caramelo, marrom e terracota continuam em alta, trazendo sofisticação e versatilidade para qualquer ocasião. Essas tonalidades são perfeitas para o clima de Fortaleza.",
  },
  {
    icon: Sun,
    title: "Tecidos Leves e Fluidos",
    description: "O linho, viscose e algodão são escolhas ideais para o clima tropical. Peças com movimento e caimento natural garantem conforto e elegância no dia a dia.",
  },
  {
    icon: Heart,
    title: "Minimalismo Atemporal",
    description: "O menos é mais nunca esteve tão em alta. Peças clean com cortes impecáveis e detalhes sutis são a base de um guarda-roupa versátil e elegante.",
  },
  {
    icon: Shirt,
    title: "Estampas Botânicas",
    description: "Prints florais e folhagens tropicais trazem frescor e feminilidade às composições. Perfeitos para looks casuais e sofisticados.",
  },
]

const categories = [
  {
    title: "Moda para Trabalho",
    description: "Peças elegantes e confortáveis para o ambiente corporativo. Blazers, calças de alfaiataria, blusas sociais e vestidos midi que transmitem profissionalismo sem perder o estilo.",
    icon: Briefcase,
    items: ["Blazers estruturados", "Calças de alfaiataria", "Camisas e blusas sociais", "Vestidos midi", "Conjuntos elegantes"],
  },
  {
    title: "Moda para Eventos",
    description: "Looks sofisticados para ocasiões especiais. Vestidos de festa, conjuntos elegantes e peças com detalhes únicos para você brilhar em qualquer evento.",
    icon: PartyPopper,
    items: ["Vestidos de festa", "Conjuntos para eventos", "Peças com brilho", "Looks para casamentos", "Roupas para formaturas"],
  },
  {
    title: "Moda Casual",
    description: "Conforto e estilo para o dia a dia. Peças versáteis que podem ser combinadas de diversas formas, perfeitas para passeios, encontros e momentos de lazer.",
    icon: Sun,
    items: ["Vestidos casuais", "Blusas e camisetas", "Saias e shorts", "Calças confortáveis", "Looks para passeio"],
  },
]

const benefits = [
  "Peças selecionadas com curadoria especial",
  "Atendimento personalizado e consultoria de estilo",
  "Qualidade premium em tecidos e acabamentos",
  "Variedade de tamanhos e modelagens",
  "Localização privilegiada na Aldeota",
  "Ambiente confortável e acolhedor",
]

export default function ModaFemininaFortalezaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Moda Feminina no Ceará
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-tight text-balance">
                  Moda Feminina em Fortaleza
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Descubra as últimas tendências de moda feminina em Fortaleza na Dias Estilo. 
                  Nossa loja na Aldeota oferece uma seleção exclusiva de roupas elegantes, 
                  modernas e confortáveis para mulheres que valorizam estilo e qualidade.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  De looks para o trabalho a peças para eventos especiais, temos tudo o que 
                  você precisa para renovar seu guarda-roupa com as tendências da estação.
                </p>
                <div className="mt-8">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                      Visite Nossa Loja
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/collection-elegant.jpg"
                  alt="Moda feminina em Fortaleza - Dias Estilo"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trends Section */}
        <section className="py-20 lg:py-28 bg-card" aria-labelledby="trends-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Temporada 2026
              </p>
              <h2 id="trends-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                Tendências de Moda Feminina
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Conheça as principais tendências de moda feminina para 2026 e encontre 
                peças exclusivas na Dias Estilo em Fortaleza.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {trends.map((trend) => (
                <article key={trend.title} className="bg-background rounded-lg p-6 border border-border">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <trend.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{trend.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{trend.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 lg:py-28 bg-background" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Para Cada Ocasião
              </p>
              <h2 id="categories-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                Looks Femininos para Todas as Ocasiões
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Na Dias Estilo, você encontra roupas femininas para cada momento da sua vida, 
                do escritório aos eventos mais especiais.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <article key={category.title} className="bg-card rounded-lg p-8 border border-border">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <category.icon className="w-7 h-7 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28 bg-secondary" aria-labelledby="benefits-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/store-interior.jpg"
                  alt="Interior da loja Dias Estilo em Fortaleza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Por que escolher a Dias Estilo
                </p>
                <h2 id="benefits-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                  Benefícios de Comprar em Loja Especializada
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Comprar em uma loja especializada em moda feminina faz toda a diferença. 
                  Na Dias Estilo, você encontra atendimento personalizado, peças de qualidade 
                  e uma experiência de compra única.
                </p>

                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/loja-aldeota">
                      Conheça Nossa Loja
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-balance">
              Descubra a Moda Feminina em Fortaleza
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Venha conhecer a Dias Estilo e encontre as peças perfeitas para renovar 
              seu guarda-roupa. Estamos na Aldeota, esperando por você!
            </p>
            <div className="mt-10">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
              >
                <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                  Agendar Visita pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
