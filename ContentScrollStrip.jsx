import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const THUMBNAILS = [
  'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80',
  'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&q=80',
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=80',
  'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80',
  'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&q=80',
  'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80',
];

export default function ContentScrollStrip() {
  const images = [...THUMBNAILS, ...THUMBNAILS];

  return (
    <section className="py-16 sm:py-24 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-2">Welcome to the vault</p>
        <h2 className="font-bebas text-3xl sm:text-5xl text-foreground">
          Investigations We Don't Share Anywhere Else
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-4 py-2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          {images.map((src, i) => (
            <div key={i} className="relative w-44 h-60 flex-shrink-0 rounded-lg overflow-hidden group">
              <img src={src} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <Link to="/membership"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded font-mono text-xs tracking-widest uppercase hover:bg-primary/80 transition-all min-h-[44px]">
          Join To Unlock
        </Link>
      </div>
    </section>
  );
}