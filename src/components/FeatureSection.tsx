import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Battery, Camera, Fingerprint, Wifi, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "A18 Nova Chip",
    description: "The fastest chip ever in a smartphone. Unmatched performance for everything you do.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Camera,
    title: "Pro Camera System",
    description: "48MP main camera with advanced computational photography and cinematic mode.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Battery,
    title: "All-Day Battery",
    description: "Up to 29 hours of video playback. The longest battery life ever.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Fingerprint,
    title: "Advanced Security",
    description: "Face ID and end-to-end encryption keep your data private and secure.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Wifi,
    title: "5G Ultra Wideband",
    description: "Superfast downloads and streaming. Low latency for real-time applications.",
    gradient: "from-indigo-500 to-violet-400",
  },
  {
    icon: Zap,
    title: "MagSafe Charging",
    description: "Perfectly aligned wireless charging. Up to 50% charge in 30 minutes.",
    gradient: "from-rose-500 to-red-400",
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
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[150px] animate-blob" 
          style={{ background: 'linear-gradient(135deg, hsl(220 90% 56% / 0.1), hsl(260 85% 60% / 0.05))' }} 
        />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px] animate-blob-delayed"
          style={{ background: 'linear-gradient(135deg, hsl(180 70% 50% / 0.08), hsl(220 90% 56% / 0.05))' }}
        />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Features
          </span>
          <h2 className="headline-medium mb-6">
            Why <span className="text-gradient">Nova Phone</span>?
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Every detail has been meticulously crafted to deliver 
            an experience that's simply magical.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="group relative p-8 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card hover:border-border transition-all duration-500 hover:shadow-large"
            >
              {/* Gradient orb on hover */}
              <div className={`absolute top-6 left-6 w-24 h-24 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
              <p className="body-regular text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
