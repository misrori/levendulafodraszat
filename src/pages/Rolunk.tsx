import { Layout } from '@/components/layout/Layout';
import { Heart, Award, Leaf, Users } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';
import aboutImage from '@/assets/about-us-1.jpg';

const values = [
  {
    icon: Heart,
    title: 'Szenvedély',
    description: 'A szépség iránti szenvedélyünk minden munkánkban tükröződik.',
  },
  {
    icon: Award,
    title: 'Szakértelem',
    description: 'Folyamatos képzéssel tartjuk magunkat naprakészen.',
  },
  {
    icon: Leaf,
    title: 'Természetesség',
    description: 'Prémium, természetes összetevőjű termékeket használunk.',
  },
  {
    icon: Users,
    title: 'Személyre szabottság',
    description: 'Minden vendégünket egyénileg kezeljük.',
  },
];

export default function Rolunk() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Design Szépségszalon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Rólunk
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              A Design Szépségszalon Érden várja vendégeit modern, megújult környezetben.
              Specht Krisztina és csapata gondoskodik szépségéről.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Történetünk
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={aboutImage} 
                  alt="Design Szépségszalon belső tér" 
                  className="rounded-2xl shadow-card w-full h-auto"
                />
              </div>
              <div className="prose prose-lg text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Szalonunk teljesen megújult, hogy még magasabb színvonalon fogadhassunk!
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Modern, tágas és kényelmes környezetben várunk, ahol minden részlet a Te kényelmedet szolgálja.
                </p>
                <p className="text-lg leading-relaxed">
                  A megújult enteriőr, a friss stílus és a harmonikus atmoszféra mostantól még különlegesebbé teszi a nálunk töltött időt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-lavender-light">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Értékeink
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-lavender/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Csapatunk
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Specht Krisztina és tapasztalt csapata várja Önt. Mindannyian elkötelezettek 
            a minőség és a vendégelégedettség iránt.
          </p>
          <div className="bg-beige rounded-2xl p-12">
            <p className="font-display text-2xl text-foreground italic">
              "Számunkra minden vendég különleges. Célunk, hogy mindenki elégedetten, 
              felfrissülve távozzon szalonunkból."
            </p>
            <p className="text-primary font-semibold mt-4">
              – Specht Krisztina, Design Szépségszalon
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
