import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroPhone from "@/assets/hero-phone.png";

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
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-secondary to-background"
    >
      <div className="section-padding max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-4">
              Crafted with Precision
            </p>
            <h2 className="headline-medium mb-6">
              Design that makes
              <br />
              a difference.
            </h2>
            <p className="body-large mb-8">
              Every curve, every edge, every pixel has been thoughtfully designed 
              to create a device that feels like an extension of yourself.
            </p>
            <ul className="space-y-4">
              {[
                "Ceramic Shield front",
                "Surgical-grade stainless steel",
                "Precision-milled aerospace aluminum",
                "IP68 water resistance",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="body-regular text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Parallax image */}
          <motion.div
            style={{ y, rotate, scale }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl" />
              <img
                src={heroPhone}
                alt="Nova Phone Design"
                className="relative w-full h-auto max-w-md mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}