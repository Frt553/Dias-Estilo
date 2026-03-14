import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog de Moda Feminina | Dicas, Tendências e Estilo - Dias Estilo",
  description: "Blog de moda feminina com dicas de estilo, tendências, looks elegantes e inspirações. Aprenda a se vestir bem com as dicas da Dias Estilo em Fortaleza.",
  keywords: "blog moda feminina, dicas de moda, tendências moda feminina 2026, como se vestir bem, looks femininos, estilo feminino, moda Fortaleza",
  openGraph: {
    title: "Blog de Moda Feminina | Dias Estilo",
    description: "Dicas de moda, tendências e inspirações de looks femininos elegantes.",
    type: "website",
  },
}

const featuredArticle = {
  slug: "tendencias-moda-feminina-2026",
  title: "Tendências de Moda Feminina 2026: O Que Usar Nesta Temporada",
  excerpt: "Descubra as principais tendências de moda feminina para 2026. De cores a tecidos, saiba o que vai dominar o guarda-roupa das mulheres modernas.",
  image: "/images/trends-2026.jpg",
  category: "Tendências",
  date: "10 Mar 2026",
  readTime: "8 min de leitura",
}

const articles = [
  {
    slug: "como-montar-looks-elegantes",
    title: "Como Montar Looks Elegantes para Qualquer Ocasião",
    excerpt: "Aprenda técnicas simples para criar looks sofisticados e elegantes para o trabalho, eventos e dia a dia.",
    image: "/images/collection-elegant.jpg",
    category: "Dicas de Estilo",
    date: "08 Mar 2026",
    readTime: "6 min de leitura",
  },
  {
    slug: "looks-trabalho-mulher-moderna",
    title: "Looks para Trabalho: Como se Vestir Bem no Ambiente Corporativo",
    excerpt: "Dicas de looks profissionais que transmitem elegância e competência sem abrir mão do conforto.",
    image: "/images/hero-fashion.jpg",
    category: "Moda Trabalho",
    date: "05 Mar 2026",
    readTime: "7 min de leitura",
  },
  {
    slug: "cores-em-alta-moda-feminina",
    title: "Cores que Estão em Alta na Moda Feminina em 2026",
    excerpt: "Conheça as cores tendência da temporada e aprenda a incorporá-las no seu guarda-roupa.",
    image: "/images/store-interior.jpg",
    category: "Tendências",
    date: "01 Mar 2026",
    readTime: "5 min de leitura",
  },
  {
    slug: "looks-eventos-especiais",
    title: "Looks Femininos para Eventos: Brilhe em Qualquer Ocasião",
    excerpt: "Dicas de looks sofisticados para casamentos, formaturas, festas e outros eventos especiais.",
    image: "/images/collection-elegant.jpg",
    category: "Eventos",
    date: "25 Fev 2026",
    readTime: "6 min de leitura",
  },
  {
    slug: "moda-feminina-verao-fortaleza",
    title: "Moda Feminina para o Verão de Fortaleza: Frescor e Estilo",
    excerpt: "Peças leves e elegantes perfeitas para o clima quente do Ceará. Conforto sem abrir mão do estilo.",
    image: "/images/trends-2026.jpg",
    category: "Moda Verão",
    date: "20 Fev 2026",
    readTime: "5 min de leitura",
  },
  {
    slug: "pecas-essenciais-guarda-roupa",
    title: "10 Peças Essenciais no Guarda-Roupa Feminino",
    excerpt: "Descubra as peças básicas que toda mulher deve ter para criar looks versáteis e elegantes.",
    image: "/images/hero-fashion.jpg",
    category: "Dicas de Estilo",
    date: "15 Fev 2026",
    readTime: "8 min de leitura",
  },
]

const categories = [
  { name: "Todas", count: 24 },
  { name: "Tendências", count: 8 },
  { name: "Dicas de Estilo", count: 6 },
  { name: "Moda Trabalho", count: 4 },
  { name: "Eventos", count: 3 },
  { name: "Moda Verão", count: 3 },
]

const articleSuggestions = [
  {
    title: "Tendências de Moda Feminina 2026",
    keywords: ["tendências moda 2026", "moda feminina tendências", "o que usar em 2026"],
  },
  {
    title: "Como Montar Looks Elegantes",
    keywords: ["looks elegantes", "como se vestir bem", "dicas de estilo"],
  },
  {
    title: "Como se Vestir Bem no Trabalho",
    keywords: ["roupa trabalho feminina", "look executivo", "moda corporativa"],
  },
  {
    title: "Cores que Estão em Alta na Moda Feminina",
    keywords: ["cores tendência", "paleta de cores moda", "cores da estação"],
  },
  {
    title: "Looks Femininos para Eventos",
    keywords: ["roupa para casamento", "look para festa", "vestido de evento"],
  },
  {
    title: "Moda Feminina para Verão",
    keywords: ["moda verão", "roupas leves", "looks frescos"],
  },
  {
    title: "Moda Feminina para Inverno",
    keywords: ["moda inverno", "casacos femininos", "looks de frio"],
  },
  {
    title: "Como Escolher Roupas que Valorizam o Corpo",
    keywords: ["valorizar o corpo", "tipo de corpo", "roupas que favorecem"],
  },
  {
    title: "Dicas de Estilo para Mulheres Modernas",
    keywords: ["estilo moderno", "mulher contemporânea", "moda atemporal"],
  },
  {
    title: "Peças Essenciais no Guarda-Roupa Feminino",
    keywords: ["básicos guarda-roupa", "peças curinga", "essenciais de moda"],
  },
  {
    title: "Como Combinar Cores nas Roupas",
    keywords: ["combinação de cores", "harmonia de cores", "color blocking"],
  },
  {
    title: "Acessórios que Transformam o Look",
    keywords: ["acessórios femininos", "bijuterias", "bolsas tendência"],
  },
  {
    title: "Moda Plus Size Elegante",
    keywords: ["moda plus size", "looks plus size", "roupas grandes elegantes"],
  },
  {
    title: "Como Criar um Guarda-Roupa Cápsula",
    keywords: ["guarda-roupa cápsula", "minimalismo moda", "menos é mais"],
  },
  {
    title: "Tecidos Ideais para o Clima de Fortaleza",
    keywords: ["tecidos leves", "roupas para calor", "moda tropical"],
  },
  {
    title: "Looks para Reuniões de Trabalho",
    keywords: ["roupa reunião", "look profissional", "vestimenta corporativa"],
  },
  {
    title: "Moda Feminina: Do Escritório ao Happy Hour",
    keywords: ["transição de looks", "versatilidade", "day to night"],
  },
  {
    title: "Como se Vestir para Entrevista de Emprego",
    keywords: ["roupa entrevista", "primeira impressão", "look seleção"],
  },
  {
    title: "Estampas Tendência da Temporada",
    keywords: ["estampas moda", "prints tendência", "padrões em alta"],
  },
  {
    title: "Sapatos que Toda Mulher Deve Ter",
    keywords: ["sapatos essenciais", "calçados femininos", "sapatos versáteis"],
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Blog de Moda
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-tight text-balance">
                Blog de Moda Feminina
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Dicas de estilo, tendências e inspirações para mulheres que buscam 
                elegância e sofisticação no dia a dia.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 lg:py-20 bg-card" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="featured-heading" className="sr-only">Artigo em Destaque</h2>
            <Link href={`/blog/${featuredArticle.slug}`} className="group block">
              <article className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    Destaque
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-accent">{featuredArticle.category}</span>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-tight group-hover:text-accent transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 lg:py-20 bg-background" aria-labelledby="articles-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main content */}
              <div className="lg:w-2/3">
                <h2 id="articles-heading" className="font-serif text-2xl font-semibold text-foreground mb-8">
                  Últimos Artigos
                </h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {articles.map((article) => (
                    <Link key={article.slug} href={`/blog/${article.slug}`} className="group block">
                      <article>
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <span className="text-xs font-medium text-accent">{article.category}</span>
                        <h3 className="mt-1 font-serif text-lg font-semibold text-foreground leading-tight group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{article.date}</span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                          <span>{article.readTime}</span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:w-1/3">
                <div className="sticky top-24 space-y-8">
                  {/* Categories */}
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Categorias</h3>
                    <ul className="space-y-3">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link 
                            href={`/blog?categoria=${category.name.toLowerCase()}`}
                            className="flex items-center justify-between text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            <span>{category.name}</span>
                            <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                              {category.count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="bg-primary rounded-lg p-6 text-primary-foreground">
                    <h3 className="font-semibold mb-2">Precisa de ajuda com seu estilo?</h3>
                    <p className="text-sm text-primary-foreground/80 mb-4">
                      Visite nossa loja na Aldeota e receba consultoria personalizada.
                    </p>
                    <Link 
                      href="/loja-aldeota"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      Conhecer a loja
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Article Suggestions (SEO) */}
        <section className="py-16 lg:py-20 bg-secondary" aria-labelledby="suggestions-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 id="suggestions-heading" className="font-serif text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
                Mais Temas de Moda Feminina
              </h2>
              <p className="mt-4 text-muted-foreground">
                Explore nossos artigos sobre tendências, dicas de estilo e inspirações de looks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {articleSuggestions.map((article) => (
                <div key={article.title} className="bg-card rounded-lg p-4 border border-border">
                  <h3 className="font-medium text-foreground text-sm mb-2">{article.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {article.keywords.slice(0, 2).map((keyword) => (
                      <span key={keyword} className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
