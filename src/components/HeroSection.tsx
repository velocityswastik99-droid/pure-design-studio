import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-background pt-12"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-blob"
          style={{ background: 'linear-gradient(135deg, hsl(220 90% 56% / 0.15), hsl(260 85% 60% / 0.1))' }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] animate-blob-delayed"
          style={{ background: 'linear-gradient(135deg, hsl(260 85% 60% / 0.1), hsl(180 70% 50% / 0.1))' }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-[80px] animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, hsl(220 90% 56% / 0.2), transparent)' }}
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center section-padding max-w-5xl mx-auto"
      >
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-medium text-sm tracking-wide">
            Introducing Nova Phone
          </span>
        </motion.div>

        {/* Main headline with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="headline-large mb-6"
        >
          <span className="text-gradient-subtle">The future of</span>
          <br />
          <span className="text-gradient">mobile technology</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="body-large max-w-2xl mx-auto mb-10"
        >
          Crafted with precision. Designed for the extraordinary.
          Experience innovation that transcends expectations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="lg" className="group relative overflow-hidden">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>
          <Button variant="heroOutline" size="lg" className="backdrop-blur-sm">
            Buy Now
          </Button>
        </motion.div>

        {/* Price with shimmer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 inline-flex items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">From</span>
          <span className="text-2xl font-semibold text-foreground">$999</span>
          <span className="text-sm text-muted-foreground">or $41.62/mo.</span>
        </motion.div>
      </motion.div>

      {/* Hero Image with enhanced effects */}
      <motion.div
        style={{ y }}
        className="relative z-10 w-full max-w-4xl mx-auto mt-8 px-6"
      >
        {/* Glow effect behind phone */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[80%] bg-gradient-to-t from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl animate-glow-pulse" />
        </div>
        
        <motion.img
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          src={heroPhone}
          alt="Nova Phone"
          className="relative w-full h-auto object-contain drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.2))' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-accent/30 flex justify-center pt-2 bg-background/50 backdrop-blur-sm"
        >
          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-accent" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
