import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Sun, PartyPopper, Heart, Sparkles, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Looks Femininos Elegantes | Dicas de Estilo e Combinações - Dias Estilo",
  description: "Inspire-se com looks femininos elegantes para trabalho, eventos e dia a dia. Dicas de estilo, combinações de roupas e tendências de moda feminina em Fortaleza.",
  keywords: "looks femininos elegantes, dicas de estilo feminino, combinações de roupas, looks para trabalho, looks para eventos, moda feminina, como se vestir bem",
  openGraph: {
    title: "Looks Femininos Elegantes | Dias Estilo",
    description: "Inspire-se com looks elegantes para todas as ocasiões. Dicas de estilo e combinações de moda feminina.",
    type: "website",
  },
}

const lookCategories = [
  {
    id: "trabalho",
    icon: Briefcase,
    title: "Looks para Trabalho",
    subtitle: "Elegância Corporativa",
    description: "Peças que transmitem profissionalismo sem abrir mão do estilo. Looks perfeitos para o ambiente de trabalho.",
    image: "/images/collection-elegant.jpg",
    tips: [
      "Opte por cores neutras como preto, marinho, bege e branco",
      "Blazers estruturados são curinga para qualquer ocasião",
      "Invista em calças de alfaiataria de boa qualidade",
      "Camisas e blusas sociais versáteis são essenciais",
      "Vestidos midi são elegantes e confortáveis",
      "Acessórios discretos completam o visual",
    ],
    pieces: ["Blazer estruturado", "Calça de alfaiataria", "Camisa social", "Vestido midi", "Saia lápis", "Blusa de seda"],
  },
  {
    id: "casual",
    icon: Sun,
    title: "Looks Casuais",
    subtitle: "Conforto com Estilo",
    description: "Peças versáteis para o dia a dia que combinam conforto e elegância. Perfeitas para passeios e momentos de lazer.",
    image: "/images/trends-2026.jpg",
    tips: [
      "Tecidos leves como linho e algodão são ideais",
      "Aposte em cores vibrantes e estampas",
      "Vestidos fluidos são práticos e femininos",
      "Combine blusas básicas com acessórios especiais",
      "Saias midi são versáteis e elegantes",
      "Tênis brancos combinam com tudo",
    ],
    pieces: ["Vestido fluido", "Blusa de linho", "Saia midi", "Calça jeans", "Shorts elegante", "Camiseta básica premium"],
  },
  {
    id: "eventos",
    icon: PartyPopper,
    title: "Looks para Eventos",
    subtitle: "Sofisticação Especial",
    description: "Peças especiais para ocasiões memoráveis. Looks sofisticados que garantem presença e elegância em qualquer evento.",
    image: "/images/hero-fashion.jpg",
    tips: [
      "Escolha tecidos nobres como seda e cetim",
      "Detalhes como brilho e bordados são bem-vindos",
      "Cores como vermelho, verde e azul são impactantes",
      "Vestidos longos são ideais para eventos formais",
      "Acessórios statement fazem diferença",
      "Saltos altos alongam a silhueta",
    ],
    pieces: ["Vestido de festa", "Conjunto elegante", "Macacão sofisticado", "Saia com brilho", "Blusa de cetim", "Body estruturado"],
  },
  {
    id: "verao",
    icon: Heart,
    title: "Looks de Verão",
    subtitle: "Frescor e Leveza",
    description: "Peças leves e frescas perfeitas para o clima quente de Fortaleza. Conforto e estilo para os dias ensolarados.",
    image: "/images/store-interior.jpg",
    tips: [
      "Priorize tecidos naturais e respiráveis",
      "Cores claras refletem o calor",
      "Vestidos são práticos e femininos",
      "Estampas florais e tropicais são tendência",
      "Peças fluidas garantem ventilação",
      "Sandálias confortáveis completam o look",
    ],
    pieces: ["Vestido fluido", "Short de linho", "Blusa cropped", "Saia longa", "Macacão leve", "Regata elegante"],
  },
]

const styleTips = [
  {
    title: "Conheça seu Corpo",
    description: "Entender as proporções do seu corpo ajuda a escolher peças que valorizem seus pontos fortes e criem harmonia visual.",
  },
  {
    title: "Invista em Básicos de Qualidade",
    description: "Peças básicas bem feitas são a base de um guarda-roupa versátil. Invista em qualidade ao invés de quantidade.",
  },
  {
    title: "Acessórios Fazem a Diferença",
    description: "Um look simples pode ser transformado com os acessórios certos. Bolsas, bijuterias e lenços são aliados do estilo.",
  },
  {
    title: "Cores que Combinam com Você",
    description: "Descubra quais cores favorecem seu tom de pele e cabelo. Isso fará toda diferença na hora de montar looks.",
  },
  {
    title: "Menos é Mais",
    description: "O minimalismo nunca sai de moda. Peças atemporais e bem cortadas são mais elegantes que tendências passageiras.",
  },
  {
    title: "Conforto é Fundamental",
    description: "Você só se sente verdadeiramente elegante quando está confortável. Escolha peças que permitam movimento e bem-estar.",
  },
]

const essentialPieces = [
  "Blazer preto ou marinho",
  "Camisa branca clássica",
  "Calça de alfaiataria preta",
  "Vestido preto básico",
  "Jeans de corte reto",
  "Blusa de seda neutra",
  "Saia midi versátil",
  "Cardigan de qualidade",
  "Trench coat atemporal",
  "Camiseta branca premium",
]

export default function LooksElegantesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Inspiração de Estilo
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-tight text-balance">
                Looks Femininos Elegantes
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Encontre inspiração para montar looks perfeitos para cada ocasião. 
                Na Dias Estilo, ajudamos você a descobrir combinações que expressam 
                sua personalidade e valorizam sua beleza natural.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                De looks para o trabalho a peças para eventos especiais, explore 
                nossas dicas de estilo e descubra como criar composições elegantes 
                e modernas.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                    Agendar Consultoria de Estilo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Look Categories */}
        {lookCategories.map((category, index) => (
          <section 
            key={category.id}
            className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
            aria-labelledby={`${category.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-medium tracking-widest uppercase text-accent">
                      {category.subtitle}
                    </p>
                  </div>
                  <h2 id={`${category.id}-heading`} className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                    {category.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>

                  {/* Tips */}
                  <div className="mt-8">
                    <h3 className="font-medium text-foreground mb-4">Dicas de Estilo:</h3>
                    <ul className="space-y-3">
                      {category.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pieces */}
                  <div className="mt-8">
                    <h3 className="font-medium text-foreground mb-4">Peças Essenciais:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.pieces.map((piece) => (
                        <span 
                          key={piece}
                          className="px-3 py-1.5 bg-secondary text-sm text-foreground rounded-full"
                        >
                          {piece}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`relative aspect-[4/5] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Style Tips Section */}
        <section className="py-20 lg:py-28 bg-secondary" aria-labelledby="tips-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Guia de Estilo
              </p>
              <h2 id="tips-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                Dicas para se Vestir Bem
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Aprenda os segredos de um guarda-roupa elegante e funcional com nossas 
                dicas de estilo para mulheres modernas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {styleTips.map((tip, index) => (
                <article key={tip.title} className="bg-card rounded-lg p-6 border border-border">
                  <span className="text-4xl font-serif font-bold text-accent/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{tip.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Pieces Section */}
        <section className="py-20 lg:py-28 bg-card" aria-labelledby="essentials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Guarda-Roupa Inteligente
                </p>
                <h2 id="essentials-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                  Peças Essenciais no Guarda-Roupa Feminino
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Um guarda-roupa funcional começa com peças básicas de qualidade que 
                  podem ser combinadas de diversas formas. Invista nestes itens essenciais 
                  e crie looks variados para qualquer ocasião.
                </p>

                <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                  {essentialPieces.map((piece) => (
                    <li key={piece} className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                      <span className="text-foreground">{piece}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/moda-feminina-fortaleza">
                      Ver Nossas Peças
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/trends-2026.jpg"
                  alt="Peças essenciais de moda feminina"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-balance">
              Precisa de Ajuda com seu Estilo?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Nossa equipe oferece consultoria de estilo personalizada para ajudar você 
              a descobrir as peças que mais combinam com sua personalidade e rotina. 
              Venha nos visitar na Aldeota!
            </p>
            <div className="mt-10">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
              >
                <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                  Agendar Consultoria pelo WhatsApp
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
