import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center">
                <span className="text-primary-foreground font-display text-lg font-bold">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold">Design</span>
                <span className="text-xs text-primary-foreground/60 -mt-1">Szépségszalon</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Prémium szépségszolgáltatások modern, kényelmes környezetben. Specht Krisztina és csapata várja Önt Érden.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Gyors linkek</h4>
            <ul className="space-y-3">
              {[
                { name: 'Szolgáltatások', href: '/szolgaltatasok' },
                { name: 'Árak', href: '/arak' },
                { name: 'Rólunk', href: '/rolunk' },
                { name: 'Kapcsolat', href: '/kapcsolat' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-lavender transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Szolgáltatások</h4>
            <ul className="space-y-3">
              {[
                { name: 'Fodrászat', href: '/szolgaltatas/fodraszat' },
                { name: 'Fejmasszázs', href: '/szolgaltatas/fejmasszazs' },
                { name: 'Talpmasszázs', href: '/szolgaltatas/talpreflexologia' },
                { name: 'Hajhosszabbítás', href: '/szolgaltatas/hajhosszabbitas' },
                { name: 'Férfi szolgáltatások', href: '/szolgaltatas/ferfi-szolgaltatasok' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-lavender transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Elérhetőségek</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lavender flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Bajcsy-Zsilinszky út 10.<br />
                  2030 Érd
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lavender flex-shrink-0" />
                <a href="tel:+36203146091" className="text-primary-foreground/70 hover:text-lavender transition-colors text-sm">
                  +36 20 314 6091
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-lavender flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70 text-sm">
                  <p>Hétfő - Péntek: 8:00 - 17:00</p>
                  <p>Szombat - Vasárnap: Zárva</p>
                </div>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/inplace_garden/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-lavender transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100009016916537"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-lavender transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Design Szépségszalon. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
