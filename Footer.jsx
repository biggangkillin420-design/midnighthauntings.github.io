import { Ghost } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Ghost className="w-4 h-4 text-primary" />
              <span className="font-bebas tracking-widest text-foreground text-lg">HAUNTEDMIDNIGHTSTORE</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Step beyond the veil. Exclusive paranormal investigations, haunted content, and artifacts from the other side.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest text-primary mb-4">NAVIGATE</h4>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/vault', 'The Vault'], ['/merch', 'Merch'], ['/membership', 'Membership']].map(([to, label]) => (
                <Link key={to} to={to} className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-xs tracking-widest text-primary mb-4">MEMBERSHIP TIERS</h4>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-yellow-400">GOLD — $12/mo</span>
              <span className="font-mono text-xs text-purple-400">SILVER — $10/mo</span>
              <span className="font-mono text-xs text-amber-600">BRONZE — $4/mo or $40/yr</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground tracking-widest">© 2026 HAUNTEDMIDNIGHTSTORE. ALL RIGHTS RESERVED.</p>
          <p className="font-mono text-xs text-muted-foreground/50">midnighthauntings.com</p>
        </div>
      </div>
    </footer>
  );
}