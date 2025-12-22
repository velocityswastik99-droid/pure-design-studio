import { motion } from "framer-motion";

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
      className={`relative overflow-hidden rounded-3xl min-h-[600px] flex flex-col items-center justify-between p-12 ${
        bgColor === "dark"
          ? "bg-gradient-to-b from-foreground to-foreground/90 text-primary-foreground"
          : "bg-gradient-to-b from-secondary to-background"
      }`}
    >
      {/* Text content */}
      <div className="text-center z-10">
        <p
          className={`text-sm font-medium mb-2 ${
            bgColor === "dark" ? "text-accent" : "text-accent"
          }`}
        >
          {subtitle}
        </p>
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
            className={`mt-4 text-sm ${
              bgColor === "dark"
                ? "text-primary-foreground/60"
                : "text-muted-foreground"
            }`}
          >
            {price}
          </p>
        )}
        <div className="flex gap-4 justify-center mt-6">
          <a
            href="#"
            className={`link-arrow text-sm ${
              bgColor === "dark" ? "text-accent" : ""
            }`}
          >
            Learn more
          </a>
          <a
            href="#"
            className={`link-arrow text-sm ${
              bgColor === "dark" ? "text-accent" : ""
            }`}
          >
            Buy
          </a>
        </div>
      </div>

      {/* Product image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-md mt-8"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}