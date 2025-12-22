import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-foreground">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-padding max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="headline-large text-primary-foreground mb-6">
            Ready to experience
            <br />
            the future?
          </h2>
          <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Get started with Nova Phone today. Free delivery. 
            Free returns. Trade in your old device for credit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl">
              Buy Nova Phone
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              Compare models
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}