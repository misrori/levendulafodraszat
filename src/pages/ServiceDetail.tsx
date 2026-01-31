import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Check, Phone, Instagram, Facebook } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ImageSlider } from '@/components/ImageSlider';
import { getServiceBySlug } from '@/data/services';
import { cn } from '@/lib/utils';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Szolgáltatás nem található
            </h1>
            <Button asChild>
              <Link to="/szolgaltatasok">Vissza a szolgáltatásokhoz</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const images = service.images;
  const isMenService = service.category === 'men';

  return (
    <Layout>
      {/* Hero Section with Slider */}
      <section className="pt-20">
        <div className="relative">
          <ImageSlider
            images={images}
            aspectRatio="wide"
            className="w-full"
            showNavigation={images.length > 1}
            showDots={images.length > 1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto">
              <Link
                to="/szolgaltatasok"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Vissza
              </Link>
              <h1 className={cn(
                "font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4",
                isMenService && "text-primary-foreground"
              )}>
                {service.name}
              </h1>
              <div className="flex flex-wrap gap-4 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{service.location}</span>
                </div>
                {isMenService && (
                  <span className="bg-primary-foreground/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Férfi szekció
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              A szolgáltatásról
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-services with images */}
      {!service.hidePriceList && (
        <section className="section-padding bg-lavender-light">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
              Részletes árlista
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {service.subServices.map((subService, index) => (
                <div
                  key={subService.id}
                  className={cn(
                    "bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up",
                    isMenService && "border-l-4 border-primary"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {subService.image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={subService.image}
                        alt={subService.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {subService.name}
                      </h3>
                      <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                        {subService.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {subService.description}
                    </p>
                    {subService.duration && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{subService.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits (for services with benefits list) */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                A kezelés előnyei
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Érdekli ez a szolgáltatás?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Keressen minket telefonon vagy kövessen minket a közösségi médiában a legfrissebb ajánlatainkért!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="tel:+36301234567" className="gap-2">
                <Phone className="w-5 h-5" />
                +36 30 123 4567
              </a>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a
                href="https://facebook.com"
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
