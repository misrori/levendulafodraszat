import hairdressing1 from '@/assets/hairdressing-1.jpg';
import hairdressing2 from '@/assets/hairdressing-2.jpg';
import hairdressing3 from '@/assets/hairdressing-3.jpg';
import headMassageReal from '@/assets/head-massage-real.jpg';
import headMassage1 from '@/assets/head-massage-1.jpg';
import headMassage2 from '@/assets/head-massage-2.jpg';
import footMassage1 from '@/assets/foot-massage-1.jpg';
import footMassage2 from '@/assets/foot-massage-2.jpg';
import footMassage3 from '@/assets/foot-massage-3.jpg';
import hairExtensionsReal from '@/assets/hair-extensions-real.jpg';
import hairExtensions1 from '@/assets/hair-extensions-1.jpg';
import hairExtensions2 from '@/assets/hair-extensions-2.jpg';
import mensCurly from '@/assets/mens-curly.jpg';
import mensBlonde from '@/assets/mens-blonde.jpg';
import mensServices1 from '@/assets/mens-services-1.jpg';
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

export interface HairdressingSubCategory {
  id: string;
  name: string;
  subServices: SubService[];
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
  hairdressingCategories?: HairdressingSubCategory[];
  icon: string;
  category: 'women' | 'men' | 'wellness';
}

// Hairdressing sub-categories for pricing page
export const hairdressingCategories: HairdressingSubCategory[] = [
  {
    id: 'hajvagas',
    name: 'Női hajvágás',
    subServices: [
      {
        id: '1-1',
        name: 'Rövid hajvágás',
        description: 'Rövid női hajvágás precíz formázással.',
        price: '6 500 Ft',
        image: hairdressing3,
      },
      {
        id: '1-2',
        name: 'Félhosszú hajvágás',
        description: 'Félhosszú haj vágása és formázása.',
        price: '7 000 Ft',
        image: hairdressing2,
      },
      {
        id: '1-3',
        name: 'Hosszú hajvágás',
        description: 'Hosszú haj vágása és formázása.',
        price: '7 500 Ft',
        image: hairdressing1,
      },
      {
        id: '1-4',
        name: 'Extrahosszú hajvágás',
        description: 'Extrahosszú haj vágása és formázása.',
        price: '8 000 Ft',
        image: hairdressing1,
      },
    ],
  },
  {
    id: 'hajszaritas',
    name: 'Női hajszárítás',
    subServices: [
      {
        id: '1-5',
        name: 'Rövid hajszárítás',
        description: 'Rövid haj professzionális szárítása és formázása.',
        price: '5 000 Ft',
        image: hairdressing3,
      },
      {
        id: '1-6',
        name: 'Félhosszú hajszárítás',
        description: 'Félhosszú haj szárítása és formázása.',
        price: '5 500 Ft',
        image: hairdressing2,
      },
      {
        id: '1-7',
        name: 'Hosszú/Extrahosszú hajszárítás',
        description: 'Hosszú és extrahosszú haj szárítása.',
        price: '6 000 Ft',
        image: hairdressing1,
      },
    ],
  },
  {
    id: 'hajfestes',
    name: 'Női hajfestés',
    subServices: [
      {
        id: '1-8',
        name: 'Rövid hajfestés',
        description: 'Rövid haj festése prémium festékkel.',
        price: '9 500 Ft',
        image: hairColoring1,
      },
      {
        id: '1-9',
        name: 'Félhosszú hajfestés',
        description: 'Félhosszú haj festése prémium festékkel.',
        price: '11 500 Ft',
        image: hairColoring1,
      },
      {
        id: '1-10',
        name: 'Hosszú hajfestés',
        description: 'Hosszú haj festése prémium festékkel.',
        price: '12 500 Ft',
        image: hairColoring1,
      },
      {
        id: '1-11',
        name: 'Extrahosszú hajfestés',
        description: 'Extrahosszú haj festése prémium festékkel.',
        price: '16 500 Ft',
        image: hairColoring1,
      },
    ],
  },
  {
    id: 'hajapolas',
    name: 'Női hajápolás',
    subServices: [
      {
        id: '1-12',
        name: 'Dauerolás rövid hajra',
        description: 'Tartós hullámok rövid hajra.',
        price: '8 000 Ft',
        image: balayage1,
      },
      {
        id: '1-13',
        name: 'Dauerolás félhosszú hajra',
        description: 'Tartós hullámok félhosszú hajra.',
        price: '9 000 Ft',
        image: balayage1,
      },
      {
        id: '1-14',
        name: 'Kontykészítés',
        description: 'Alkalmi konty esküvőre, bálra vagy különleges alkalmakra.',
        price: '9 500 Ft-tól',
        image: eventHair1,
      },
    ],
  },
];

// Flatten all hairdressing sub-services for service detail page
const allHairdressingSubServices: SubService[] = hairdressingCategories.flatMap(cat => cat.subServices);

export const services: Service[] = [
  {
    id: '1',
    slug: 'fodraszat',
    name: 'Fodrászat',
    shortDescription: 'Professzionális női hajvágás, festés és szárítás a legújabb trendek szerint.',
    fullDescription: 'Szalonunkban a legmodernebb technikákat és prémium minőségű termékeket használjuk, hogy hajad mindig tökéletes legyen. Tapasztalt fodrászaink személyre szabott tanácsadással segítenek megtalálni a hozzád legjobban illő frizurát.',
    location: 'Design Szépségszalon - Érd',
    icon: 'scissors',
    category: 'women',
    images: [hairdressing1, hairdressing2, hairdressing3],
    subServices: allHairdressingSubServices,
    hairdressingCategories: hairdressingCategories,
  },
  {
    id: '2',
    slug: 'fejmasszazs',
    name: 'Fejmasszázs',
    shortDescription: 'Relaxáló fejmasszázs a stressz oldására és a jobb közérzet érdekében.',
    fullDescription: 'Egy kellemes relaxáló kezelés, amely serkenti a fejbőr vérkeringését, hozzájárul a haj egészségéhez, és segít oldani a stresszt. Rendszeres alkalmazása frissítő hatású és támogatja a haj természetes növekedését.',
    location: 'Design Szépségszalon - Érd',
    icon: 'hand',
    category: 'wellness',
    images: [headMassageReal, headMassage1, headMassage2],
    subServices: [
      {
        id: '2-1',
        name: 'Fejmasszázs',
        description: 'Relaxáló fejmasszázs a stressz oldására, a fejbőr vérkeringésének serkentésére.',
        price: '9 500 Ft',
        duration: '25 perc',
        image: headMassageReal,
      },
    ],
  },
  {
    id: '3',
    slug: 'talpreflexologia',
    name: 'Talpmasszázs',
    shortDescription: 'Talpmasszázs az egész test harmonizálásáért.',
    fullDescription: 'A talpmasszázs ősi gyógymód, amely a talpon található reflexpontok stimulálásával az egész szervezet működését harmonizálja. Segít a méregtelenítésben, javítja a vérkeringést és támogatja a természetes gyógyulási folyamatokat.',
    location: 'Design Szépségszalon - Érd',
    icon: 'footprints',
    category: 'wellness',
    images: [footMassage1, footMassage2, footMassage3],
    subServices: [
      {
        id: '3-1',
        name: 'Talpmasszázs',
        description: 'Relaxáló talpmasszázs a lábak felfrissítéséért és az egész test harmonizálásáért.',
        price: '9 500 Ft',
        duration: '25 perc',
        image: footMassage1,
      },
    ],
  },
  {
    id: '4',
    slug: 'hajhosszabbitas',
    name: 'Hajhosszabbítás',
    shortDescription: 'Professzionális hőillesztéses hajhosszabbítás természetes hatással.',
    fullDescription: 'A haj amire mindig vágytál. Hosszú ami önbizalmat ad, és természetes hatást nyújt. Évek helyett órák alatt. Próbáld ki a hosszú hajat! Készen állsz a változásra? Várlak a szalonban.',
    location: 'Design Szépségszalon - Érd',
    icon: 'sparkles',
    category: 'women',
    images: [hairExtensionsReal, hairExtensions1, hairExtensions2],
    subServices: [
      {
        id: '4-1',
        name: 'Hőillesztéses hajhosszabbítás',
        description: 'Tartós, természetes hatású hajhosszabbítás hőillesztéssel.',
        price: '35 000 Ft',
        duration: '2-3 óra',
        image: hairExtensionsReal,
      },
      {
        id: '4-2',
        name: 'Hajhosszabbítás leszedés',
        description: 'Meglévő hajhosszabbítás szakszerű eltávolítása.',
        price: '15 000 Ft',
        duration: '60 perc',
        image: hairExtensions1,
      },
    ],
  },
  {
    id: '5',
    slug: 'ferfi-szolgaltatasok',
    name: 'Férfi szolgáltatások',
    shortDescription: 'Professzionális férfi hajvágás géppel vagy klasszikus módszerrel.',
    fullDescription: 'Unod a hajad? Ugyanaz minden nap? Mi lenne ha változtatnál rajta? Lehet akár dauerolt vagy melír! Az igazi változás textúra és nagy kontraszt. Ez nem filter. Ez stílus! Igazi GLOW UP!',
    location: 'Design Szépségszalon - Érd',
    icon: 'user',
    category: 'men',
    images: [mensCurly, mensBlonde, mensServices1],
    subServices: [
      {
        id: '5-1',
        name: 'Férfi hajvágás géppel',
        description: 'Gépi hajvágás precíz vonalakkal.',
        price: '4 500 Ft',
        duration: '20 perc',
        image: mensBlonde,
      },
      {
        id: '5-2',
        name: 'Férfi hajvágás klasszikus',
        description: 'Klasszikus férfi frizura ollóval és géppel.',
        price: '5 000 Ft',
        duration: '30 perc',
        image: mensCurly,
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
    text: 'Végre találtam egy helyet, ahol a férfi vendégekre is ugyanolyan figyelmet fordítanak. A hajvágás tökéletes lett!',
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
    text: 'A megújult szalon gyönyörű! Modern, kényelmes és a légkör is fantasztikus. Imádom!',
  },
];
