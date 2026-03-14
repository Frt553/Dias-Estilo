import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react"

// This would typically come from a CMS or database
const articles: Record<string, {
  title: string
  metaDescription: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  content: {
    type: "h2" | "h3" | "p" | "list"
    content: string | string[]
  }[]
  keywords: string[]
}> = {
  "tendencias-moda-feminina-2026": {
    title: "Tendências de Moda Feminina 2026: O Que Usar Nesta Temporada",
    metaDescription: "Descubra as principais tendências de moda feminina para 2026. Cores, tecidos, silhuetas e estilos que vão dominar a temporada.",
    excerpt: "Descubra as principais tendências de moda feminina para 2026. De cores a tecidos, saiba o que vai dominar o guarda-roupa das mulheres modernas.",
    image: "/images/trends-2026.jpg",
    category: "Tendências",
    date: "10 Mar 2026",
    readTime: "8 min de leitura",
    keywords: ["tendências moda 2026", "moda feminina 2026", "o que usar 2026", "cores tendência", "tecidos moda"],
    content: [
      { type: "p", content: "O mundo da moda feminina em 2026 traz uma combinação fascinante de elegância atemporal e inovação sustentável. As principais tendências desta temporada refletem uma mudança significativa em direção ao conforto sem sacrificar o estilo, com peças versáteis que transitam facilmente do dia para a noite." },
      { type: "h2", content: "Cores Tendência para 2026" },
      { type: "p", content: "As cores desta temporada celebram a natureza e a sofisticação. Tons terrosos como terracota, caramelo e bege continuam em alta, trazendo calor e versatilidade para qualquer guarda-roupa. Para quem busca algo mais vibrante, o verde-oliva e o azul-petróleo são apostas certeiras." },
      { type: "h3", content: "Paleta de Cores Principais" },
      { type: "list", content: ["Terracota e tons terrosos", "Bege e caramelo", "Verde-oliva e verde-musgo", "Azul-petróleo", "Branco off-white", "Rosa antigo"] },
      { type: "h2", content: "Tecidos em Destaque" },
      { type: "p", content: "A sustentabilidade continua influenciando as escolhas de tecidos. Materiais naturais como linho, algodão orgânico e seda reciclada ganham ainda mais espaço. Para o clima de Fortaleza, tecidos leves e respiráveis são essenciais para manter o conforto durante todo o dia." },
      { type: "h3", content: "Tecidos Mais Usados" },
      { type: "list", content: ["Linho premium", "Algodão orgânico", "Viscose sustentável", "Seda reciclada", "Tencel"] },
      { type: "h2", content: "Silhuetas e Modelagens" },
      { type: "p", content: "As silhuetas de 2026 celebram a feminilidade com cortes fluidos e estruturados. Vestidos midi com cintura marcada, calças de alfaiataria amplas e blusas com detalhes românticos são peças-chave desta temporada." },
      { type: "h3", content: "Peças-Chave da Temporada" },
      { type: "list", content: ["Vestidos midi fluidos", "Calças de alfaiataria amplas", "Blazers oversized", "Blusas com mangas bufantes", "Saias com fendas elegantes", "Conjuntos coordenados"] },
      { type: "h2", content: "Tendências para o Clima de Fortaleza" },
      { type: "p", content: "Para as mulheres de Fortaleza, as tendências ganham uma adaptação especial. O clima quente pede tecidos leves e cores claras que refletem o calor. Vestidos fluidos, blusas de linho e saias midi são escolhas perfeitas para manter o estilo sem perder o conforto." },
      { type: "p", content: "Na Dias Estilo, selecionamos cuidadosamente peças que seguem essas tendências e são perfeitas para o clima do Ceará. Visite nossa loja na Aldeota e descubra como incorporar essas tendências ao seu guarda-roupa." },
    ],
  },
  "como-montar-looks-elegantes": {
    title: "Como Montar Looks Elegantes para Qualquer Ocasião",
    metaDescription: "Aprenda técnicas simples para criar looks sofisticados e elegantes. Dicas práticas para montar composições perfeitas para trabalho, eventos e dia a dia.",
    excerpt: "Aprenda técnicas simples para criar looks sofisticados e elegantes para o trabalho, eventos e dia a dia.",
    image: "/images/collection-elegant.jpg",
    category: "Dicas de Estilo",
    date: "08 Mar 2026",
    readTime: "6 min de leitura",
    keywords: ["looks elegantes", "como se vestir bem", "dicas de estilo", "montar looks", "moda feminina"],
    content: [
      { type: "p", content: "Montar looks elegantes não precisa ser complicado. Com algumas técnicas simples e peças básicas de qualidade, você pode criar composições sofisticadas para qualquer ocasião. O segredo está em entender proporções, combinar cores harmoniosamente e investir em peças atemporais." },
      { type: "h2", content: "A Base de um Look Elegante" },
      { type: "p", content: "Todo look elegante começa com peças básicas bem escolhidas. Invista em itens de qualidade que sirvam como base para diversas composições. Uma boa calça de alfaiataria, camisas bem cortadas e vestidos versáteis são essenciais." },
      { type: "h3", content: "Peças Fundamentais" },
      { type: "list", content: ["Calça de alfaiataria preta ou marinho", "Camisa branca clássica", "Vestido preto básico", "Blazer bem estruturado", "Saia midi neutra"] },
      { type: "h2", content: "Combinação de Cores" },
      { type: "p", content: "A harmonia de cores é fundamental para um look elegante. Cores neutras como preto, branco, bege e marinho são a base segura. Para adicionar interesse, inclua uma cor de destaque ou um acessório statement." },
      { type: "h2", content: "Proporções e Silhueta" },
      { type: "p", content: "Entender as proporções do seu corpo ajuda a escolher peças que valorizem sua silhueta. Se usar uma peça mais ampla em cima, equilibre com algo mais ajustado embaixo, e vice-versa." },
      { type: "h2", content: "Acessórios que Fazem a Diferença" },
      { type: "p", content: "Os acessórios são os detalhes que transformam um look simples em algo especial. Bolsas de qualidade, bijuterias discretas e sapatos bem escolhidos completam a composição com elegância." },
      { type: "p", content: "Na Dias Estilo, oferecemos consultoria de estilo personalizada para ajudar você a montar looks perfeitos. Visite nossa loja na Aldeota e descubra peças que vão transformar seu guarda-roupa." },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  
  if (!article) {
    return {
      title: "Artigo não encontrado | Dias Estilo",
    }
  }

  return {
    title: `${article.title} | Dias Estilo`,
    description: article.metaDescription,
    keywords: article.keywords.join(", "),
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      images: [article.image],
    },
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return (
      <>
        <Header />
        <main className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Artigo não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Button asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Article Header */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>

            <span className="text-sm font-medium text-accent">{article.category}</span>
            
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" aria-hidden="true" />
                {article.readTime}
              </span>
              <button className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Share2 className="w-4 h-4" aria-hidden="true" />
                Compartilhar
              </button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] -mt-4 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 lg:py-16 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {article.content.map((block, index) => {
                switch (block.type) {
                  case "h2":
                    return (
                      <h2 key={index} className="font-serif text-2xl font-semibold text-foreground mt-10 mb-4">
                        {block.content as string}
                      </h2>
                    )
                  case "h3":
                    return (
                      <h3 key={index} className="font-serif text-xl font-semibold text-foreground mt-8 mb-3">
                        {block.content as string}
                      </h3>
                    )
                  case "p":
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                        {block.content as string}
                      </p>
                    )
                  case "list":
                    return (
                      <ul key={index} className="space-y-2 mb-6 ml-6">
                        {(block.content as string[]).map((item, i) => (
                          <li key={i} className="text-muted-foreground list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  default:
                    return null
                }
              })}
            </div>

            {/* Keywords/Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-foreground mb-3">Palavras-chave:</h3>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((keyword) => (
                  <span 
                    key={keyword}
                    className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-primary rounded-lg p-8 text-primary-foreground text-center">
              <h3 className="font-serif text-xl font-semibold mb-3">
                Gostou das dicas?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Visite a Dias Estilo na Aldeota e encontre peças exclusivas para montar looks incríveis.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                  Fale Conosco pelo WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}
