import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';

export default function Kapcsolat() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-lavender-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Kapcsolat
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Várjuk megkeresését! Keressen minket telefonon, e-mailben vagy közösségi médiában.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Elérhetőségeink
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Címünk</h3>
                    <p className="text-muted-foreground">
                      1052 Budapest, Váci utca 15.<br />
                      (Bejárat az udvarból)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <a
                      href="tel:+36301234567"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      +36 30 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <a
                      href="mailto:info@levendula.hu"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      info@levendula.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Nyitvatartás</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Hétfő - Péntek: 9:00 - 19:00</p>
                      <p>Szombat: 9:00 - 14:00</p>
                      <p>Vasárnap: Zárva</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 p-6 bg-lavender-light rounded-2xl">
                <h3 className="font-semibold text-foreground mb-4">Kövessen minket!</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/inplace_garden/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-background rounded-xl hover:bg-card transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">@inplace_garden</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-background rounded-xl hover:bg-card transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-beige rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p>Térkép</p>
                  <p className="text-sm">1052 Budapest, Váci utca 15.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Üzenet küldése
              </h2>

              {isSubmitted ? (
                <div className="bg-sage-light rounded-2xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    Köszönjük!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Üzenetét megkaptuk, hamarosan felvesszük Önnel a kapcsolatot.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Új üzenet küldése
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Név *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Az Ön neve"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+36 30 123 4567"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="pelda@email.hu"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Szolgáltatás
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full h-12 rounded-lg border border-input bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Válasszon szolgáltatást</option>
                      <option value="fodraszat">Fodrászat</option>
                      <option value="fejmasszazs">Fejmasszázs</option>
                      <option value="talpreflexologia">Talpmasszázs</option>
                      <option value="hajhosszabbitas">Hajhosszabbítás</option>
                      <option value="ferfi">Férfi szolgáltatások</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Üzenet
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Kívánt időpont, egyéb megjegyzés..."
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Küldés...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Üzenet küldése
                      </span>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    A * jelölt mezők kitöltése kötelező.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
