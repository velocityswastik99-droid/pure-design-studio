import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  "Shop and Learn": [
    "Store",
    "Nova Phone",
    "Nova Book",
    "Nova Watch",
    "Nova Buds",
    "Accessories",
  ],
  "Nova Store": [
    "Find a Store",
    "Order Status",
    "Trade In",
    "Financing",
    "Education",
  ],
  "For Business": [
    "Nova for Business",
    "Shop for Business",
    "Enterprise",
    "Government",
  ],
  Account: [
    "Manage Your Nova ID",
    "Nova Store Account",
    "iCloud.com",
  ],
  "Nova Values": [
    "Accessibility",
    "Environment",
    "Privacy",
    "Supplier Responsibility",
  ],
  About: [
    "Newsroom",
    "Leadership",
    "Career Opportunities",
    "Investors",
    "Ethics & Compliance",
    "Events",
  ],
};

const socialLinks = ["Twitter", "Instagram", "LinkedIn", "YouTube"];

export function Footer() {
  return (
    <footer className="relative bg-secondary/50 border-t border-border overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
      
      <div className="section-padding max-w-[1200px] mx-auto py-20 relative z-10">
        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-12 mb-12 border-b border-border"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay in the loop</h3>
              <p className="text-muted-foreground">Get the latest updates on products and offers.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 rounded-full bg-background border border-border focus:border-accent focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-10 mb-10 border-b border-border"
        >
          <p className="text-xs text-muted-foreground leading-relaxed">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.
            <br />
            2. Available in select countries and regions. Terms and conditions apply.
            <br />
            3. Wireless service plan required for cellular service.
          </p>
        </motion.div>

        {/* Footer links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 mb-12 border-b border-border">
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.05, duration: 0.5 }}
            >
              <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent via-accent-secondary to-accent-tertiary flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">Nova</span>
            </a>
            <p className="text-xs text-muted-foreground">
              © 2024 Nova Inc. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
            
            {/* Legal links */}
            <div className="flex flex-wrap gap-4 border-l border-border pl-6">
              {["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
