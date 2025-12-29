import { Layout } from '@/components/layout/Layout';
import { Heart, Award, Leaf, Users } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';

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
            alt="Levendula Szépségszalon"
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
              A Levendula Szépségszalon 2010 óta szolgálja vendégeit Budapesten. 
              Célunk, hogy minden látogatás különleges élmény legyen.
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
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A Levendula Szépségszalont 2010-ben alapítottuk azzal a céllal, hogy egy olyan helyet 
                hozzunk létre, ahol a szépség és a nyugalom találkozik. Nevünket a levendula virágról 
                kaptuk, amely a nyugalmat, eleganciát és természetes szépséget szimbolizálja.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Az elmúlt több mint egy évtized alatt folyamatosan fejlődtünk és bővítettük 
                szolgáltatásainkat. Ma már a fodrászattól a wellness kezelésekig mindent megtalálnak 
                nálunk vendégeink, miközben megőriztük azt a családias, személyes légkört, ami 
                megkülönböztet minket.
              </p>
              <p className="text-lg leading-relaxed">
                Csapatunk tagjai folyamatos képzéseken vesznek részt, hogy mindig a legújabb 
                technikákat és trendeket kínálhassuk. Büszkék vagyunk arra, hogy vendégeink 
                bizalmát és elégedettségét élvezhetjük.
              </p>
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
            Tapasztalt, lelkes szakemberek csapata várja Önt. Mindannyian elkötelezettek 
            a minőség és a vendégelégedettség iránt.
          </p>
          <div className="bg-beige rounded-2xl p-12">
            <p className="font-display text-2xl text-foreground italic">
              "Számunkra minden vendég különleges. Célunk, hogy mindenki elégedetten, 
              felfrissülve távozzon szalonunkból."
            </p>
            <p className="text-primary font-semibold mt-4">
              – A Levendula Csapata
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
