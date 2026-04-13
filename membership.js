// Tier hierarchy: gold > silver > bronze
const TIER_RANK = { gold: 3, silver: 2, bronze: 1 };

export const TIERS = {
  gold: {
    name: 'Gold',
    subtitle: 'The Inner Circle',
    price: 12,
    billing: 'month',
    color: 'from-yellow-500 to-amber-600',
    borderColor: 'border-yellow-500/50',
    bgGlow: 'shadow-yellow-500/20',
    features: [
      'Full access to The Vault',
      'All exclusive investigations',
      'Behind the scenes content',
      'Weekly paranormal challenges',
      'Live monthly Q&A sessions',
      'Early access to merch drops',
      'Priority community features',
    ],
  },
  silver: {
    name: 'Silver',
    subtitle: 'The Observer',
    price: 10,
    billing: 'month',
    color: 'from-slate-300 to-slate-500',
    borderColor: 'border-slate-400/50',
    bgGlow: 'shadow-slate-400/20',
    features: [
      'Access to main content feed',
      'Exclusive investigations',
      'Behind the scenes content',
      'Weekly challenges',
      'Community access',
    ],
  },
  bronze: {
    name: 'Bronze',
    subtitle: 'The Initiate',
    price: 4,
    billing: 'month / year',
    color: 'from-orange-700 to-orange-900',
    borderColor: 'border-orange-700/50',
    bgGlow: 'shadow-orange-700/20',
    features: [
      'Limited content access',
      'Select investigations',
      'Community access',
      'Monthly highlights',
    ],
  },
};

export function canAccessContent(userTier, contentMinTier) {
  if (!userTier) return false;
  return (TIER_RANK[userTier] || 0) >= (TIER_RANK[contentMinTier] || 0);
}

export function getTierRank(tier) {
  return TIER_RANK[tier] || 0;
}