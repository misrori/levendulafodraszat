import { Layout } from '@/components/layout/Layout';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function Szolgaltatasok() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-lavender-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Szolgáltatásaink
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fedezze fel teljes szolgáltatás kínálatunkat. A fodrászattól a wellness kezelésekig, 
            mindent megtalál nálunk.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
