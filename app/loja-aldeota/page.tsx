import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Instagram, Users, Sparkles, ShieldCheck, Heart, MessageCircle, Navigation } from "lucide-react"

export const metadata: Metadata = {
  title: "Loja de Roupas Femininas na Aldeota | Dias Estilo - Fortaleza",
  description: "Visite a Dias Estilo na Aldeota, Fortaleza. Loja de moda feminina com atendimento personalizado, peças exclusivas e ambiente acolhedor. Rua Torres Câmara, 176.",
  keywords: "loja roupas femininas Aldeota, moda feminina Aldeota, loja feminina Fortaleza, roupas femininas Fortaleza, Aldeota moda, loja moda Ceará",
  openGraph: {
    title: "Loja de Roupas Femininas na Aldeota | Dias Estilo",
    description: "Visite nossa loja na Aldeota, Fortaleza. Atendimento personalizado e peças exclusivas de moda feminina.",
    type: "website",
  },
}

const advantages = [
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Nossa equipe oferece consultoria de estilo individual, ajudando você a encontrar as peças que mais combinam com sua personalidade e ocasião.",
  },
  {
    icon: Sparkles,
    title: "Experimentar Antes de Comprar",
    description: "Prove as peças, sinta os tecidos e veja como ficam em você. A experiência presencial garante a escolha perfeita.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    description: "Veja de perto a qualidade dos tecidos, acabamentos e costuras. Não há surpresas quando você compra presencialmente.",
  },
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description: "Nossa loja foi pensada para proporcionar uma experiência de compra agradável e relaxante, sem pressa.",
  },
]

const aboutAldeota = [
  "Bairro tradicional e valorizado de Fortaleza",
  "Fácil acesso por diversas vias principais",
  "Estacionamento disponível na região",
  "Próximo a restaurantes e cafés",
  "Segurança e tranquilidade para suas compras",
  "Ambiente arborizado e agradável",
]

export default function LojaAldeotaPage() {
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
                  Nossa Loja
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-tight text-balance">
                  Loja de Roupas Femininas na Aldeota
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Bem-vinda à Dias Estilo, sua loja de moda feminina na Aldeota, Fortaleza. 
                  Oferecemos um espaço acolhedor com atendimento personalizado para você 
                  encontrar as peças perfeitas.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Localizada em um dos bairros mais tradicionais de Fortaleza, nossa loja 
                  é o destino ideal para mulheres que buscam elegância, qualidade e um 
                  atendimento diferenciado.
                </p>

                {/* Quick contact */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span>Rua Torres Câmara, 176 - Aldeota, Fortaleza - CE</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <a href="tel:+558599851969" className="hover:text-accent transition-colors">
                      (85) 9 9815 1969
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-accent shrink-0" />
                    <span>Seg-Sex: 9h-18h | Sáb: 9h-13h</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-foreground/20">
                    <a 
                      href="https://maps.google.com/?q=Rua+Torres+Câmara,+176+-+Aldeota,+Fortaleza+-+CE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="mr-2 h-5 w-5" />
                      Como Chegar
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/store-interior.jpg"
                  alt="Interior da loja Dias Estilo na Aldeota, Fortaleza"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 lg:py-28 bg-card" aria-labelledby="advantages-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Experiência Única
              </p>
              <h2 id="advantages-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                Vantagens de Comprar Presencialmente
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Descubra por que visitar nossa loja na Aldeota faz toda a diferença 
                na hora de escolher suas roupas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage) => (
                <article key={advantage.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <advantage.icon className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Aldeota Section */}
        <section className="py-20 lg:py-28 bg-background" aria-labelledby="aldeota-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                  Localização Privilegiada
                </p>
                <h2 id="aldeota-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                  Moda Feminina na Aldeota, Fortaleza
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  A Aldeota é um dos bairros mais tradicionais e valorizados de Fortaleza, 
                  conhecido por sua infraestrutura completa e localização central. Nossa 
                  loja está estrategicamente posicionada para oferecer fácil acesso a todas 
                  as nossas clientes.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Além de encontrar moda feminina de qualidade, você pode aproveitar para 
                  conhecer os diversos restaurantes, cafés e serviços disponíveis na região, 
                  transformando sua visita em um momento especial.
                </p>

                <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                  {aboutAldeota.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3339619282385!2d-38.51389892499776!3d-3.7363199961289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74859e46e6b8f%3A0x3f6c8e8b1f0e8b1f!2sRua%20Torres%20C%C3%A2mara%2C%20176%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060150-060!5e0!3m2!1spt-BR!2sbr!4v1679000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Dias Estilo no Google Maps"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="py-20 lg:py-28 bg-secondary" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Entre em Contato
              </p>
              <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
                Informações de Contato
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Estamos à disposição para atender você. Entre em contato por telefone, 
                WhatsApp ou venha nos visitar pessoalmente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                <p className="text-sm text-muted-foreground">
                  Rua Torres Câmara, 176<br />
                  Aldeota, Fortaleza - CE<br />
                  CEP: 60150-060
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Telefone / WhatsApp</h3>
                <p className="text-sm text-muted-foreground">
                  <a href="tel:+558599851969" className="hover:text-accent transition-colors">
                    (85) 9 9815 1969
                  </a>
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Horário</h3>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 13h<br />
                  Domingo: Fechado
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-7 h-7 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground">
                  <a 
                    href="https://instagram.com/dias.estilo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    @dias.estilo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-balance">
              Venha nos Visitar na Aldeota
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Nossa equipe está pronta para receber você com o melhor atendimento. 
              Venha conhecer nossa coleção de moda feminina e encontrar as peças 
              perfeitas para o seu estilo.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
              >
                <a href="https://wa.me/5585998151969" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale pelo WhatsApp
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a 
                  href="https://maps.google.com/?q=Rua+Torres+Câmara,+176+-+Aldeota,+Fortaleza+-+CE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Ver no Mapa
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
