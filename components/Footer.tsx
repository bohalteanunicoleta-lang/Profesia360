import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-primary text-2xl font-bold">◉</span>
              <span className="text-white font-bold text-lg">Profesia 360</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Platformă inovatoare de orientare profesională cu experiențe VR,
              dedicată elevilor, studenților și persoanelor în reconversie.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pagini</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Acasă</Link></li>
              <li><Link href="/gaseste-ti-directia" className="hover:text-primary transition-colors">Găsește-ți direcția</Link></li>
              <li><Link href="/ghid-cariera" className="hover:text-primary transition-colors">Ghid carieră</Link></li>
              <li><Link href="/experienta-vr" className="hover:text-primary transition-colors">Experiență VR</Link></li>
              <li><Link href="/cum-functioneaza" className="hover:text-primary transition-colors">Cum funcționează</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-primary text-base">✆</span>
                <a href="tel:0765778821" className="hover:text-primary transition-colors">
                  0765 778 821
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary text-base">✉</span>
                <a href="mailto:contact.profesia360@gmail.com" className="hover:text-primary transition-colors break-all">
                  contact.profesia360@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © 2025 Profesia 360. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
