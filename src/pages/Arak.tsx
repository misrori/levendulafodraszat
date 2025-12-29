import { Layout } from '@/components/layout/Layout';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

export default function Arak() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-lavender-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Árlistánk
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Átlátható árazás, prémium minőség. Minden szolgáltatásunk árai tartalmazzák a konzultációt is.
          </p>
        </div>
      </section>

      {/* Price Tables */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, serviceIndex) => (
              <div
                key={service.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${serviceIndex * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {service.name}
                  </h2>
                  {service.category === 'men' && (
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Férfi
                    </span>
                  )}
                  {service.category === 'wellness' && (
                    <span className="bg-sage/30 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Wellness
                    </span>
                  )}
                </div>

                <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-lavender-light">
                          <th className="text-left px-6 py-4 font-display font-semibold text-foreground">
                            Szolgáltatás
                          </th>
                          <th className="text-left px-6 py-4 font-display font-semibold text-foreground hidden md:table-cell">
                            Leírás
                          </th>
                          <th className="text-center px-6 py-4 font-display font-semibold text-foreground">
                            Időtartam
                          </th>
                          <th className="text-right px-6 py-4 font-display font-semibold text-foreground">
                            Ár
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.subServices.map((subService, index) => (
                          <tr
                            key={subService.id}
                            className={cn(
                              "border-b border-border last:border-0 hover:bg-lavender-light/50 transition-colors",
                              index % 2 === 0 ? "bg-background" : "bg-muted/30"
                            )}
                          >
                            <td className="px-6 py-4">
                              <span className="font-medium text-foreground">
                                {subService.name}
                              </span>
                              <p className="text-sm text-muted-foreground md:hidden mt-1">
                                {subService.description}
                              </p>
                            </td>
                            <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                              {subService.description}
                            </td>
                            <td className="px-6 py-4 text-center text-muted-foreground">
                              {subService.duration || '-'}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="font-bold text-primary text-lg">
                                {subService.price}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 bg-beige rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Megjegyzés
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Az árak tájékoztató jellegűek és a kezelés összetettségétől függően változhatnak. 
              Prémium termékek használata esetén felár kerülhet felszámításra. 
              Kérjük, érdeklődjön az aktuális árakról telefonon vagy személyesen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
