import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Ghost } from 'lucide-react';

export default function Navbar({ membership }) {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/vault', label: 'THE VAULT' },
    { to: '/merch', label: 'MERCH' },
    { to: '/membership', label: 'MEMBERSHIP' },
  ];

  const tierColor =
    membership?.tier === 'gold'   ? 'border-yellow-400/60 text-yellow-300 bg-yellow-400/10' :
    membership?.tier === 'silver' ? 'border-purple-400/60 text-purple-300 bg-purple-400/10' :
    membership?.tier === 'bronze' ? 'border-amber-700/60 text-amber-500 bg-amber-900/10' : '';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Ghost className="w-5 h-5 text-primary" />
          <span className="font-bebas text-lg tracking-widest text-foreground">HAUNTEDMIDNIGHTSTORE</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-mono text-xs tracking-widest transition-colors hover:text-primary ${
                loc.pathname === l.to ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
          {membership ? (
            <Link to="/account" className={`font-mono text-xs px-3 py-1 rounded border uppercase tracking-widest ${tierColor}`}>
              {membership.tier} MEMBER
            </Link>
          ) : (
            <Link
              to="/membership"
              className="font-mono text-xs px-4 py-2 bg-primary text-primary-foreground tracking-widest rounded hover:bg-primary/80 transition-colors min-h-[44px] flex items-center"
            >
              INITIATE
            </Link>
          )}
        </div>

        <button className="md:hidden text-foreground p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className="font-mono text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
          {membership ? (
            <Link to="/account" onClick={() => setOpen(false)} className={`font-mono text-sm tracking-widest ${tierColor} px-3 py-2 rounded border w-fit`}>
              {membership.tier?.toUpperCase()} MEMBER
            </Link>
          ) : (
            <Link to="/membership" onClick={() => setOpen(false)}
              className="font-mono text-sm text-center px-4 py-3 bg-primary text-primary-foreground tracking-widest rounded">
              INITIATE MEMBERSHIP
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}