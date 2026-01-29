import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor?: "light" | "dark";
  price?: string;
}

export function ProductCard({
  title,
  subtitle,
  description,
  image,
  bgColor = "light",
  price,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative overflow-hidden rounded-4xl min-h-[600px] flex flex-col items-center justify-between p-12 transition-all duration-500 ${
        bgColor === "dark"
          ? "bg-gradient-to-b from-foreground via-foreground/95 to-foreground/90 text-primary-foreground"
          : "bg-gradient-to-b from-secondary via-secondary/80 to-background"
      }`}
    >
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
        bgColor === "dark" 
          ? "bg-gradient-to-t from-accent/10 via-transparent to-transparent"
          : "bg-gradient-to-t from-accent/5 via-transparent to-transparent"
      }`} />
      
      {/* Animated orb */}
      <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl transition-all duration-700 group-hover:scale-110 group-hover:-bottom-10 ${
        bgColor === "dark" ? "bg-accent/10" : "bg-accent/5"
      }`} />

      {/* Text content */}
      <div className="relative text-center z-10">
        <motion.span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
            bgColor === "dark" 
              ? "bg-accent/20 text-accent" 
              : "bg-accent/10 text-accent"
          }`}
        >
          {subtitle}
        </motion.span>
        <h3
          className={`headline-medium mb-4 ${
            bgColor === "dark" ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h3>
        <p
          className={`body-regular max-w-md mx-auto ${
            bgColor === "dark"
              ? "text-primary-foreground/70"
              : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
        {price && (
          <p
            className={`mt-4 text-lg font-medium ${
              bgColor === "dark"
                ? "text-primary-foreground/80"
                : "text-foreground"
            }`}
          >
            {price}
          </p>
        )}
        <div className="flex gap-6 justify-center mt-8">
          <a
            href="#"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link ${
              bgColor === "dark" ? "text-accent hover:text-accent/80" : "text-accent hover:text-accent/80"
            }`}
          >
            Learn more
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
          <a
            href="#"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group/link ${
              bgColor === "dark" ? "text-accent hover:text-accent/80" : "text-accent hover:text-accent/80"
            }`}
          >
            Buy
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Product image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-md mt-8 transition-transform duration-700 group-hover:scale-105"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
