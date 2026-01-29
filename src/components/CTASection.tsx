import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-foreground">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-[180px] animate-blob"
          style={{ background: 'linear-gradient(135deg, hsl(220 90% 56% / 0.2), hsl(260 85% 60% / 0.1))' }}
        />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] animate-blob-delayed"
          style={{ background: 'linear-gradient(135deg, hsl(180 70% 50% / 0.15), hsl(220 90% 56% / 0.1))' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] animate-glow-pulse"
          style={{ background: 'radial-gradient(circle, hsl(220 90% 60% / 0.15), transparent)' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} 
      />

      <div className="section-padding max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white/80 text-sm font-medium">Limited Time Offer</span>
          </motion.div>

          <h2 className="headline-large text-primary-foreground mb-6">
            Ready to experience
            <br />
            <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
              the future?
            </span>
          </h2>
          <p className="body-large text-primary-foreground/60 max-w-2xl mx-auto mb-12">
            Get started with Nova Phone today. Free delivery. 
            Free returns. Trade in your old device for credit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="xl"
              className="bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary text-white rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-500 group"
            >
              Buy Nova Phone
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 rounded-full border border-white/20"
            >
              Compare models
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-16 text-white/40 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Free Shipping
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              2-Year Warranty
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              30-Day Returns
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              24/7 Support
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
