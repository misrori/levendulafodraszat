import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop',
    alt: 'Kert design 1',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    alt: 'Kert design 2',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop',
    alt: 'Növények 1',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop',
    alt: 'Kert design 3',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=400&h=400&fit=crop',
    alt: 'Növények 2',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400&h=400&fit=crop',
    alt: 'Kert terasz',
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
