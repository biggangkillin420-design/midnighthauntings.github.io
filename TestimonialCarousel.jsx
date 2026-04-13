import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  { name: 'Amanda V', text: 'The personal connection is my #1 favorite thing. The community is like family and the exclusive content is incredible.' },
  { name: 'Sara C', text: "I love every bit of exclusive content. It's so worth it — supporting this community is the best decision I made." },
  { name: 'Kayla R', text: "I've met some of my best friends here. The community is truly one of a kind and always something to look forward to." },
  { name: 'Jason T', text: 'The exclusive investigations are unlike anything I\'ve seen. Every upload gives me chills in the best way.' },
  { name: 'Kelly M', text: 'I love being able to connect with people who share the same interests. The weekly challenges are absolutely insane.' },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="min-h-[160px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="text-center px-8 w-full"
          >
            <p className="font-inter text-muted-foreground text-base sm:text-lg leading-relaxed italic mb-4">
              "{TESTIMONIALS[current].text}"
            </p>
            <p className="font-mono text-xs text-primary tracking-widest uppercase">— {TESTIMONIALS[current].name}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button onClick={() => setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          className="p-2 text-muted-foreground hover:text-primary transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30 w-2'}`} />
          ))}
        </div>
        <button onClick={() => setCurrent((current + 1) % TESTIMONIALS.length)}
          className="p-2 text-muted-foreground hover:text-primary transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}