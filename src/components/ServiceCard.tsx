import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Hand, Footprints, Sparkles, User } from 'lucide-react';
import { Service } from '@/data/services';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const iconMap = {
  scissors: Scissors,
  hand: Hand,
  footprints: Footprints,
  sparkles: Sparkles,
  user: User,
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Scissors;

  return (
    <Link
      to={`/szolgaltatas/${service.slug}`}
      className={cn(
        'group relative block overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-500 card-hover',
        'animate-fade-in-up'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        {service.images.length > 0 ? (
          <img
            src={service.images[0]}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-lavender-light to-beige flex items-center justify-center">
            <Icon className="w-16 h-16 text-primary/40" />
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </div>
          {service.category === 'men' && (
            <span className="text-xs font-medium bg-primary-foreground/20 backdrop-blur-sm px-2 py-1 rounded-full">
              Férfi
            </span>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-sm text-primary-foreground/80 line-clamp-2 mb-4">
          {service.shortDescription}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
          <span>Részletek</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
