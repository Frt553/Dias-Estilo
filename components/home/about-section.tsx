import Image from "next/image"
import { Heart, Sparkles, Users, Award } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada cliente é única. Oferecemos consultoria de estilo para encontrar as peças perfeitas para você.",
  },
  {
    icon: Sparkles,
    title: "Peças Exclusivas",
    description: "Selecionamos cuidadosamente cada peça, garantindo qualidade e originalidade em nossa coleção.",
  },
  {
    icon: Users,
    title: "Para Todas as Mulheres",
    description: "Roupas elegantes para mulheres de 25 a 55 anos que buscam conforto sem abrir mão do estilo.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Trabalhamos com marcas e tecidos de alta qualidade para garantir durabilidade e conforto.",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-card" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/images/store-interior.jpg"
                alt="Interior da loja Dias Estilo na Aldeota, Fortaleza"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Sobre a Dias Estilo
            </p>
            <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
              Sua Loja de Roupas Femininas em Fortaleza
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A Dias Estilo é mais que uma loja de moda feminina. Somos um espaço dedicado 
              a mulheres que buscam peças elegantes e confortáveis para todos os momentos da vida.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Localizada no coração da Aldeota, em Fortaleza, nossa loja oferece uma curadoria 
              especial de roupas femininas com atendimento personalizado. Acreditamos que cada 
              mulher merece se sentir especial e confiante com o que veste.
            </p>

            {/* Features grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
