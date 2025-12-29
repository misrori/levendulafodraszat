import hairdressing1 from '@/assets/hairdressing-1.jpg';
import hairdressing2 from '@/assets/hairdressing-2.jpg';
import hairdressing3 from '@/assets/hairdressing-3.jpg';
import headMassage1 from '@/assets/head-massage-1.jpg';
import headMassage2 from '@/assets/head-massage-2.jpg';
import headMassage3 from '@/assets/head-massage-3.jpg';
import footMassage1 from '@/assets/foot-massage-1.jpg';
import footMassage2 from '@/assets/foot-massage-2.jpg';
import footMassage3 from '@/assets/foot-massage-3.jpg';
import hairExtensions1 from '@/assets/hair-extensions-1.jpg';
import hairExtensions2 from '@/assets/hair-extensions-2.jpg';
import hairExtensions3 from '@/assets/hair-extensions-3.jpg';
import mensServices1 from '@/assets/mens-services-1.jpg';
import mensServices2 from '@/assets/mens-services-2.jpg';
import mensServices3 from '@/assets/mens-services-3.jpg';
import balayage1 from '@/assets/balayage-1.jpg';
import eventHair1 from '@/assets/event-hair-1.jpg';
import hairColoring1 from '@/assets/hair-coloring-1.jpg';

export interface SubService {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  image?: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  images: string[];
  subServices: SubService[];
  icon: string;
  category: 'women' | 'men' | 'wellness';
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'fodraszat',
    name: 'Fodrászat',
    shortDescription: 'Professzionális hajvágás, festés és styling a legújabb trendek szerint.',
    fullDescription: 'Szalonunkban a legmodernebb technikákat és prémium minőségű termékeket használjuk, hogy hajad mindig tökéletes legyen. Tapasztalt fodrászaink személyre szabott tanácsadással segítenek megtalálni a hozzád legjobban illő frizurát.',
    location: 'Főszalon - I. emelet',
    icon: 'scissors',
    category: 'women',
    images: [hairdressing1, hairdressing2, hairdressing3],
    subServices: [
      {
        id: '1-1',
        name: 'Klasszikus női hajvágás',
        description: 'Időtlen elegancia, precíz vágással és formázással.',
        price: '8 500 Ft',
        duration: '45 perc',
        image: hairdressing3,
      },
      {
        id: '1-2',
        name: 'Modern női hajvágás',
        description: 'Trendkövető frizurák, egyedi stílussal.',
        price: '12 000 Ft',
        duration: '60 perc',
        image: hairdressing2,
      },
      {
        id: '1-3',
        name: 'Hajfestés',
        description: 'Teljes hajfestés prémium festékekkel, természetes hatással.',
        price: '18 000 Ft-tól',
        duration: '90-120 perc',
        image: hairColoring1,
      },
      {
        id: '1-4',
        name: 'Balayage',
        description: 'Napcsókolta hatás, természetes színátmenetekkel.',
        price: '35 000 Ft-tól',
        duration: '180 perc',
        image: balayage1,
      },
      {
        id: '1-5',
        name: 'Alkalmi frizura',
        description: 'Esküvőre, bálra vagy különleges alkalmakra.',
        price: '15 000 Ft-tól',
        duration: '60-90 perc',
        image: eventHair1,
      },
    ],
  },
  {
    id: '2',
    slug: 'fejmasszazs',
    name: 'Fejmasszázs',
    shortDescription: 'Relaxáló fejmasszázs a stressz oldására és a jobb közérzet érdekében.',
    fullDescription: 'A fejmasszázs nemcsak kellemes élmény, hanem számos egészségügyi előnnyel is jár. Csökkenti a stresszt, enyhíti a fejfájást, javítja a vérkeringést és elősegíti a hajnövekedést. Tapasztalt masszőreink gondoskodnak a teljes ellazulásról.',
    location: 'Wellness szárny - II. emelet',
    icon: 'hand',
    category: 'wellness',
    images: [headMassage1, headMassage2, headMassage3],
    subServices: [
      {
        id: '2-1',
        name: 'Relaxációs fejmasszázs',
        description: 'Feszültségoldó masszázs a fejbőr és nyak területén.',
        price: '6 500 Ft',
        duration: '30 perc',
        image: headMassage1,
      },
      {
        id: '2-2',
        name: 'Aromaterápiás fejmasszázs',
        description: 'Illóolajokkal kombinált masszázs a teljes ellazulásért.',
        price: '9 000 Ft',
        duration: '45 perc',
        image: headMassage2,
      },
      {
        id: '2-3',
        name: 'Indiai fejmasszázs',
        description: 'Ősi ayurvédikus technikákkal végzett kezelés.',
        price: '11 000 Ft',
        duration: '60 perc',
        image: headMassage3,
      },
    ],
  },
  {
    id: '3',
    slug: 'talpreflexologia',
    name: 'Talpmasszázs',
    shortDescription: 'Talpmasszázs és reflexológia az egész test harmonizálásáért.',
    fullDescription: 'A talpmasszázs és reflexológia ősi gyógymód, amely a talpon található reflexpontok stimulálásával az egész szervezet működését harmonizálja. Segít a méregtelenítésben, javítja a vérkeringést és támogatja a természetes gyógyulási folyamatokat.',
    location: 'Wellness szárny - II. emelet',
    icon: 'footprints',
    category: 'wellness',
    images: [footMassage1, footMassage2, footMassage3],
    subServices: [
      {
        id: '3-1',
        name: 'Klasszikus talpmasszázs',
        description: 'Relaxáló talpmasszázs a lábak felfrissítéséért.',
        price: '7 500 Ft',
        duration: '30 perc',
        image: footMassage1,
      },
      {
        id: '3-2',
        name: 'Reflexológiai kezelés',
        description: 'Célzott reflexpont stimuláció az egész test harmonizálásáért.',
        price: '12 000 Ft',
        duration: '60 perc',
        image: footMassage2,
      },
      {
        id: '3-3',
        name: 'Premium lábápolás + masszázs',
        description: 'Teljes körű lábápolás relaxáló masszázzsal.',
        price: '16 000 Ft',
        duration: '75 perc',
        image: footMassage3,
      },
    ],
  },
  {
    id: '4',
    slug: 'hajhosszabbitas',
    name: 'Hajhosszabbítás',
    shortDescription: 'Professzionális hajhosszabbítás természetes hatással.',
    fullDescription: 'Álmod a hosszú, dús haj? Szalonunkban a legmodernebb hajhosszabbítási technikákat kínáljuk, 100% valódi emberi hajjal. Konzultáció során segítünk kiválasztani a számodra legmegfelelőbb megoldást.',
    location: 'Főszalon - I. emelet',
    icon: 'sparkles',
    category: 'women',
    images: [hairExtensions1, hairExtensions2, hairExtensions3],
    subServices: [
      {
        id: '4-1',
        name: 'Keratin hajhosszabbítás',
        description: 'Tartós, természetes hatású hajhosszabbítás keratinnal.',
        price: '120 000 Ft-tól',
        duration: '3-4 óra',
        image: hairExtensions1,
      },
      {
        id: '4-2',
        name: 'Mikrogyűrűs hajhosszabbítás',
        description: 'Kíméletes módszer, könnyen eltávolítható.',
        price: '95 000 Ft-tól',
        duration: '2-3 óra',
        image: hairExtensions2,
      },
      {
        id: '4-3',
        name: 'Clip-in póthaj',
        description: 'Alkalmi használatra, gyorsan felhelyezhető.',
        price: '45 000 Ft-tól',
        duration: '30 perc',
        image: hairExtensions3,
      },
      {
        id: '4-4',
        name: 'Hajhosszabbítás karbantartás',
        description: 'Meglévő hajhosszabbítás ápolása, igazítása.',
        price: '25 000 Ft-tól',
        duration: '60-90 perc',
        image: hairExtensions1,
      },
    ],
  },
  {
    id: '5',
    slug: 'ferfi-szolgaltatasok',
    name: 'Férfi szolgáltatások',
    shortDescription: 'Professzionális férfi hajvágás és szakállápolás.',
    fullDescription: 'Férfi vendégeink számára külön szekciót alakítottunk ki, ahol a modern férfi stílushoz passzoló szolgáltatásokat kínálunk. Hajvágás, szakállformázás és ápolás egy helyen.',
    location: 'Barbershop - Földszint',
    icon: 'user',
    category: 'men',
    images: [mensServices1, mensServices2, mensServices3],
    subServices: [
      {
        id: '5-1',
        name: 'Férfi hajvágás',
        description: 'Klasszikus vagy modern férfi frizura.',
        price: '5 500 Ft',
        duration: '30 perc',
        image: mensServices1,
      },
      {
        id: '5-2',
        name: 'Szakállformázás',
        description: 'Precíz szakálligazítás és formázás.',
        price: '4 000 Ft',
        duration: '20 perc',
        image: mensServices3,
      },
      {
        id: '5-3',
        name: 'Hajvágás + szakállformázás',
        description: 'Komplett férfi ápolás kedvezményes áron.',
        price: '8 500 Ft',
        duration: '45 perc',
        image: mensServices2,
      },
      {
        id: '5-4',
        name: 'Premium férfi kezelés',
        description: 'Hajvágás, szakáll és arckezelés egyben.',
        price: '14 000 Ft',
        duration: '75 perc',
        image: mensServices1,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const testimonials = [
  {
    id: '1',
    name: 'Kovács Anna',
    rating: 5,
    text: 'Fantasztikus élmény volt! A fodrászom pontosan megértette, mit szeretnék, és a végeredmény felülmúlta minden várakozásomat.',
  },
  {
    id: '2',
    name: 'Nagy Péter',
    rating: 5,
    text: 'Végre találtam egy helyet, ahol a férfi vendégekre is ugyanolyan figyelmet fordítanak. A szakállformázás tökéletes lett!',
  },
  {
    id: '3',
    name: 'Szabó Eszter',
    rating: 5,
    text: 'A fejmasszázs után úgy éreztem magam, mintha újjászülettem volna. Rendszeres vendég leszek!',
  },
  {
    id: '4',
    name: 'Tóth Mária',
    rating: 5,
    text: 'A hajhosszabbításom csodálatos lett, teljesen természetes hatású. Mindenkinek ajánlom!',
  },
  {
    id: '5',
    name: 'Kiss Gábor',
    rating: 4,
    text: 'Kellemes környezet, kedves kiszolgálás. A talpmasszázs igazán felfrissítő volt.',
  },
  {
    id: '6',
    name: 'Horváth Zsófia',
    rating: 5,
    text: 'A balayage technikájuk egyszerűen lenyűgöző! Már a harmadik alkalommal jövök, és mindig elégedetten távozom.',
  },
];
