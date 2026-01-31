import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Award, Leaf, Clock, Phone, Facebook } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { services } from '@/data/services';
import heroImage from '@/assets/hero-salon.jpg';

const features = [
  {
    icon: Heart,
    title: 'Személyre szabott kezelések',
    description: 'Minden vendégünk egyedi, ezért a kezeléseket is személyre szabjuk.',
  },
  {
    icon: Award,
    title: 'Tapasztalt szakemberek',
    description: 'Csapatunk tagjai több éves szakmai tapasztalattal rendelkeznek.',
  },
  {
    icon: Leaf,
    title: 'Prémium termékek',
    description: 'Kizárólag minőségi, természetes összetevőjű termékeket használunk.',
  },
  {
    icon: Clock,
    title: 'Rugalmas időpontok',
    description: 'Hétfőtől péntekig 8:00-17:00 között várjuk.',
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Design Szépségszalon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-sm font-medium tracking-wider uppercase mb-6 text-lavender-light animate-fade-in">
              Design Szépségszalon
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up leading-tight">
              Szépség törődés
              <br />
              <span className="text-lavender-light">jó hangulatban</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
              Modern stílus mindenki számára, legyen szó női, férfi, vagy gyermek hajvágásról. 
              Jó hangulat kellemes környezetben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Button asChild size="xl" variant="hero">
                <Link to="/szolgaltatasok">
                  Szolgáltatásaink
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="heroOutline">
                <a href="tel:+36203146091">
                  <Phone className="w-5 h-5 mr-2" />
                  Hívjon minket
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Szolgáltatásaink
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Fedezze fel kínálatunkat
            </h2>
            <p className="text-muted-foreground text-lg">
              Modern stílus mindenki számára, legyen szó női, férfi, vagy gyermek hajvágásról.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Highlighted Services */}
          <div className="mt-20 space-y-16">
            {/* Men's Section */}
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-primary font-medium text-sm tracking-wider uppercase">
                  Férfi részére
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-6 text-foreground">
                  Unod a hajad? Ugyanaz minden nap?
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Mi lenne ha változtatnál rajta? Lehet akár dauerolt vagy melír!
                  Az igazi változás textúra és nagy kontraszt.
                </p>
                <p className="text-xl font-semibold text-primary mb-4">
                  Ez nem filter. Ez stílus! Igazi GLOW UP!
                </p>
                <div className="inline-flex items-center gap-3 bg-lavender-light rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Férfi hajvágás géppel: 4 500 Ft • Klasszikus: 5 000 Ft</span>
                </div>
              </div>
            </div>

            {/* Hair Extensions */}
            <div className="bg-beige rounded-3xl p-8 md:p-12 shadow-card">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-primary font-medium text-sm tracking-wider uppercase">
                  Hajhosszabbítás
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-6 text-foreground">
                  A haj amire mindig vágytál
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Hosszú ami önbizalmat ad, és természetes hatást nyújt. 
                  Évek helyett órák alatt. Próbáld ki a hosszú hajat!
                </p>
                <p className="text-xl font-semibold text-primary mb-4">
                  Készen állsz a változásra? Várlak a szalonban.
                </p>
                <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">2-3 óra • 35 000 Ft</span>
                </div>
              </div>
            </div>

            {/* Head Massage */}
            <div className="bg-lavender-light rounded-3xl p-8 md:p-12 shadow-card">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-primary font-medium text-sm tracking-wider uppercase">
                  Fejmasszázs
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-6 text-foreground">
                  Relaxáló kezelés a kikapcsolódásért
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Egy kellemes relaxáló kezelés, amely serkenti a fejbőr vérkeringését, 
                  hozzájárul a haj egészségéhez, és segít oldani a stresszt. 
                  Rendszeres alkalmazása frissítő hatású és támogatja a haj természetes növekedését.
                </p>
                <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">25 perc • 9 500 Ft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/szolgaltatasok">
                Összes szolgáltatás
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-lavender-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Miért válasszon minket?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Az Ön szépsége a mi szenvedélyünk
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-lavender/20 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Vendégeink mondták
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Vélemények és értékelések
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-lavender-dark" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Kövessen minket a Facebookon!
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Legyen naprakész legújabb munkáinkról, akcióinkról és inspiráló tartalmaikról!
          </p>
          <div className="flex justify-center">
            <Button asChild size="xl" variant="heroOutline">
              <a 
                href="https://www.facebook.com/profile.php?id=100009016916537" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
