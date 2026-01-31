import { Layout } from '@/components/layout/Layout';
import { MapPin, Phone, Clock, Facebook } from 'lucide-react';

export default function Kapcsolat() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-lavender-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Kapcsolat
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Várjuk hívását! Keressen minket telefonon vagy közösségi médiában.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Elérhetőségeink
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Címünk</h3>
                    <p className="text-muted-foreground">
                      Bajcsy-Zsilinszky út 10.<br />
                      2030 Érd
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Telefon</h3>
                    <a
                      href="tel:+36203146091"
                      className="text-primary hover:text-primary/80 transition-colors text-xl font-medium"
                    >
                      +36 20 314 6091
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hívjon minket időpontfoglaláshoz!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:col-span-2">
                  <div className="w-14 h-14 rounded-2xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Nyitvatartás</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">Hétfő - Péntek: 8:00 - 17:00</p>
                      <p>Szombat - Vasárnap: Zárva</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-10 text-center">
                <a
                  href="tel:+36203146091"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  Hívjon most: +36 20 314 6091
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 p-8 bg-lavender-light rounded-2xl">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
                Kövessen minket!
              </h3>
              <div className="flex justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100009016916537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-background rounded-xl hover:bg-card transition-colors"
                >
                  <Facebook className="w-6 h-6 text-primary" />
                  <span className="font-medium">Specht Krisztina</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-card h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Érd,+Bajcsy-Zsilinszky+út+10&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Design Szépségszalon Térkép"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}