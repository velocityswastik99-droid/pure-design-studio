import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Battery, Camera, Fingerprint, Wifi, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "A18 Nova Chip",
    description: "The fastest chip ever in a smartphone. Unmatched performance for everything you do.",
  },
  {
    icon: Camera,
    title: "Pro Camera System",
    description: "48MP main camera with advanced computational photography and cinematic mode.",
  },
  {
    icon: Battery,
    title: "All-Day Battery",
    description: "Up to 29 hours of video playback. The longest battery life ever.",
  },
  {
    icon: Fingerprint,
    title: "Advanced Security",
    description: "Face ID and end-to-end encryption keep your data private and secure.",
  },
  {
    icon: Wifi,
    title: "5G Ultra Wideband",
    description: "Superfast downloads and streaming. Low latency for real-time applications.",
  },
  {
    icon: Zap,
    title: "MagSafe Charging",
    description: "Perfectly aligned wireless charging. Up to 50% charge in 30 minutes.",
  },
];

export function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-background"
    >
      {/* Background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </motion.div>

      <div className="section-padding max-w-[1200px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="headline-medium mb-6">
            Why Nova Phone?
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Every detail has been meticulously crafted to deliver 
            an experience that's simply magical.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="headline-small text-lg mb-3">{feature.title}</h3>
              <p className="body-regular text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}