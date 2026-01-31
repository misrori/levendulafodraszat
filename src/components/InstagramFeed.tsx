import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hairdressing1 from '@/assets/hairdressing-1.jpg';
import hairdressing2 from '@/assets/hairdressing-2.jpg';
import mensCurly from '@/assets/mens-curly.jpg';
import mensBlonde from '@/assets/mens-blonde.jpg';
import hairExtensionsReal from '@/assets/hair-extensions-real.jpg';
import headMassageReal from '@/assets/head-massage-real.jpg';

const instagramPosts = [
  {
    id: 1,
    imageUrl: hairdressing1,
    alt: 'Fodrászat',
  },
  {
    id: 2,
    imageUrl: mensCurly,
    alt: 'Férfi hajvágás',
  },
  {
    id: 3,
    imageUrl: hairExtensionsReal,
    alt: 'Hajhosszabbítás',
  },
  {
    id: 4,
    imageUrl: hairdressing2,
    alt: 'Női frizura',
  },
  {
    id: 5,
    imageUrl: mensBlonde,
    alt: 'Férfi stílus',
  },
  {
    id: 6,
    imageUrl: headMassageReal,
    alt: 'Fejmasszázs',
  },
];

export function InstagramFeed() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Kövessen minket
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Instagram
          </h2>
          <p className="text-muted-foreground text-lg">
            Kövesse Instagram oldalunkat a legfrissebb munkáinkért és inspirációkért!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/inplace_garden/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.imageUrl}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <a
              href="https://www.instagram.com/inplace_garden/"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Instagram className="w-5 h-5" />
              @inplace_garden
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
