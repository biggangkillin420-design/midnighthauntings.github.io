import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group overflow-hidden rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 bg-card"
    >
      <div className="relative aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-bebas text-2xl text-foreground mb-2 tracking-wide">{title}</h3>
        <p className="font-inter text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}