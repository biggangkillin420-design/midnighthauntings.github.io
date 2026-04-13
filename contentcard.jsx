import { Lock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const TIER_RANK = { bronze: 1, silver: 2, gold: 3 };

export default function ContentCard({ content, userTier, index = 0 }) {
  const userRank  = TIER_RANK[userTier] || 0;
  const required  = TIER_RANK[content.min_tier] || 1;
  const hasAccess = userRank >= required;

  const CardWrapper = hasAccess ? Link : 'div';
  const wrapperProps = hasAccess ? { to: `/content/${content.id}` } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group relative overflow-hidden rounded-lg border transition-all duration-300 block ${
        hasAccess
          ? 'border-white/10 hover:border-primary/50 cursor-pointer'
          : 'border-white/5 cursor-not-allowed'
      }`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        {content.thumbnail ? (
          <img
            src={content.thumbnail}
            alt={hasAccess ? content.title : 'Restricted Content'}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hasAccess ? 'group-hover:scale-105' : 'blur-md brightness-50 grayscale scale-110'
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <span className="font-mono text-xs text-muted-foreground">No Preview</span>
          </div>
        )}

        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />

        {/* Lock overlay */}
        {!hasAccess && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/70 backdrop-blur-sm">
            <Lock className="w-7 h-7 text-destructive mb-2" />
            <p className="font-mono text-[10px] text-destructive tracking-widest uppercase">Restricted</p>
            <p className="font-mono text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{content.min_tier}+ only</p>
            <Link to="/membership" onClick={e => e.stopPropagation()}
              className="mt-3 px-3 py-1.5 bg-primary/20 border border-primary/40 text-primary font-mono text-[10px] tracking-widest rounded hover:bg-primary/30 transition-colors">
              UPGRADE
            </Link>
          </div>
        )}

        {/* Play button on hover */}
        {hasAccess && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40">
            <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/60 flex items-center justify-center">
              <Play className="w-5 h-5 text-primary fill-primary" />
            </div>
          </div>
        )}

        {/* Tier badge */}
        {content.min_tier !== 'bronze' && (
          <div className={`absolute top-3 right-3 px-2 py-0.5 font-mono text-[10px] tracking-widest rounded border ${
            content.min_tier === 'gold'
              ? 'bg-yellow-400/20 text-yellow-300 border-yellow-400/40'
              : 'bg-primary/20 text-primary border-primary/40'
          }`}>
            {content.min_tier.toUpperCase()}+
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 bg-card">
        <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1">
          {content.category?.replace('_', ' ')}
        </p>
        <h3 className={`font-bebas text-lg tracking-wide leading-tight ${hasAccess ? 'text-foreground' : 'text-muted-foreground/30'}`}>
          {hasAccess ? content.title : '██████████████'}
        </h3>
        {hasAccess && content.duration && (
          <p className="font-mono text-[10px] text-muted-foreground mt-1">{content.duration}</p>
        )}
      </div>
    </CardWrapper>
  );
}