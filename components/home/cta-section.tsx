import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance">
            Visite Nossa Loja na Aldeota
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Venha conhecer a Dias Estilo pessoalmente. Nossa equipe está pronta para 
            oferecer um atendimento exclusivo e ajudar você a encontrar as peças perfeitas 
            para o seu estilo.
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
              <a href="tel:+558599851969">
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
          </div>

          {/* Store hours */}
          <div className="mt-12 inline-flex items-center gap-6 text-sm text-primary-foreground/70">
            <span>Seg - Sex: 9h às 18h</span>
            <span className="w-1 h-1 bg-primary-foreground/50 rounded-full" />
            <span>Sábado: 9h às 13h</span>
          </div>
        </div>
      </div>
    </section>
  )
}
