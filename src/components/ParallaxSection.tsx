import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const features = [
  "Ceramic Shield front",
  "Surgical-grade stainless steel",
  "Precision-milled aerospace aluminum",
  "IP68 water resistance",
];

export function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 0.95]);

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, hsl(220 90% 56% / 0.15), transparent)' }}
      />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl animate-blob"
        style={{ background: 'radial-gradient(circle, hsl(260 85% 60% / 0.1), transparent)' }}
      />

      <div className="section-padding max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Crafted with Precision
            </span>
            <h2 className="headline-medium mb-6">
              Design that makes
              <br />
              <span className="text-gradient">a difference.</span>
            </h2>
            <p className="body-large mb-10">
              Every curve, every edge, every pixel has been thoughtfully designed 
              to create a device that feels like an extension of yourself.
            </p>
            <ul className="space-y-5">
              {features.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </span>
                  <span className="text-lg text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Parallax image */}
          <motion.div
            style={{ y, rotate, scale }}
            className="relative"
          >
            {/* Multiple glow layers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-t from-accent/20 via-accent-secondary/10 to-transparent rounded-full blur-3xl animate-glow-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-b from-accent/10 to-transparent rounded-full blur-2xl" />
            </div>
            
            <motion.img
              src={heroPhone}
              alt="Nova Phone Design"
              className="relative w-full h-auto max-w-md mx-auto drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.25))' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
