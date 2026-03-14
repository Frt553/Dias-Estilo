import { MapPin, Phone, Clock, Instagram } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Nossa Localização
            </p>
            <h2 id="location-heading" className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight text-balance">
              Loja de Moda Feminina na Aldeota, Fortaleza
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Estamos localizados na Aldeota, um dos bairros mais tradicionais de Fortaleza. 
              Nossa loja oferece um ambiente acolhedor e confortável para você conhecer 
              nossa coleção de moda feminina.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Endereço</h3>
                  <p className="mt-1 text-muted-foreground">
                    Rua Torres Câmara, 176<br />
                    Aldeota, Fortaleza - CE<br />
                    CEP: 60150-060
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Telefone / WhatsApp</h3>
                  <p className="mt-1 text-muted-foreground">
                    <a href="tel:+558599851969" className="hover:text-accent transition-colors">
                      (85) 9 9815 1969
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Horário de Funcionamento</h3>
                  <p className="mt-1 text-muted-foreground">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Instagram</h3>
                  <p className="mt-1 text-muted-foreground">
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
              aria-label="Mapa mostrando a localização da loja Dias Estilo na Aldeota, Fortaleza"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
