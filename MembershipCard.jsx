import { Check, Crown, Eye, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const TIER_CONFIG = {
  gold: {
    icon: Crown,
    label: 'GOLD',
    subtitle: 'The Inner Circle',
    price: '$12',
    period: '/mo',
    iconClass: 'text-yellow-400',
    iconBg: 'bg-yellow-400/20',
    border: 'border-yellow-400/50',
    badge: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/40',
    btn: 'bg-yellow-400 text-background hover:bg-yellow-300',
    perks: [
      'Full Vault Access',
      'All Exclusive Investigations',
      'Behind the Scenes Content',
      'Weekly Challenges',
      'Live Monthly Events',
      'Early Merch Access',
      'Inner Circle Community',
    ],
  },
  silver: {
    icon: Eye,
    label: 'SILVER',
    subtitle: 'The Observer',
    price: '$10',
    period: '/mo',
    iconClass: 'text-purple-400',
    iconBg: 'bg-purple-400/20',
    border: 'border-purple-400/50',
    badge: 'bg-purple-400/20 text-purple-300 border-purple-400/40',
    btn: 'bg-primary text-primary-foreground hover:bg-primary/80',
    perks: [
      'Full Content Feed',
      'Exclusive Investigations',
      'Behind the Scenes Content',
      'Weekly Challenges',
      'Community Access',
    ],
    locked: ['Live Monthly Events (Gold)', 'Early Merch Access (Gold)'],
  },
  bronze: {
    icon: Zap,
    label: 'BRONZE',
    subtitle: 'The Initiate',
    price: '$4',
    period: '/mo',
    altPeriod: 'or $40/yr',
    iconClass: 'text-amber-500',
    iconBg: 'bg-amber-900/30',
    border: 'border-amber-700/40',
    badge: 'bg-amber-900/20 text-amber-500 border-amber-700/40',
    btn: 'bg-amber-700 text-foreground hover:bg-amber-600',
    perks: [
      'Limited Content Access',
      'Select Investigations',
      'Community Access',
    ],
    locked: ['Exclusive Content (Silver+)', 'Behind the Scenes (Silver+)', 'Live Events (Gold)'],
  },
};

export default function MembershipCard({ tier, isActive, onSelect, delay = 0 }) {
  const t = TIER_CONFIG[tier];
  const Icon = t.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`relative flex flex-col rounded-xl border p-7 transition-all duration-300 bg-card ${t.border} ${
        isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
      } ${tier === 'gold' ? 'md:scale-105 md:z-10' : ''}`}
    >
      {tier === 'gold' && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-background font-mono text-xs tracking-widest rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${t.iconBg}`}>
        <Icon className={`w-5 h-5 ${t.iconClass}`} />
      </div>

      <span className={`font-mono text-xs tracking-widest px-2 py-0.5 rounded border w-fit mb-3 ${t.badge}`}>{t.label}</span>
      <h2 className="font-bebas text-3xl text-foreground tracking-wider mb-1">{t.subtitle}</h2>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-bebas text-5xl text-foreground">{t.price}</span>
        <span className="font-mono text-sm text-muted-foreground">{t.period}</span>
      </div>
      {t.altPeriod && (
        <p className="font-mono text-xs text-muted-foreground mb-5">{t.altPeriod}</p>
      )}
      <div className="mb-7" />

      <div className="flex-1 space-y-2.5 mb-7">
        {t.perks.map(p => (
          <div key={p} className="flex items-center gap-2.5">
            <Check className={`w-4 h-4 flex-shrink-0 ${t.iconClass}`} />
            <span className="font-inter text-sm text-muted-foreground">{p}</span>
          </div>
        ))}
        {t.locked?.map(p => (
          <div key={p} className="flex items-center gap-2.5 opacity-35">
            <div className="w-4 h-4 flex-shrink-0 rounded-sm border border-muted-foreground/30" />
            <span className="font-inter text-sm text-muted-foreground line-through">{p}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => onSelect?.(tier)}
        disabled={isActive}
        className={`w-full min-h-[48px] font-mono text-xs tracking-widest rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
          isActive
            ? 'bg-muted text-muted-foreground cursor-default border border-border'
            : t.btn
        }`}
      >
        {isActive ? 'CURRENT PLAN' : `JOIN ${t.label}`}
      </button>
    </motion.div>
  );
}