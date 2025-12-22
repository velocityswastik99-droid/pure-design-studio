import { motion } from "framer-motion";

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

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="section-padding max-w-[1200px] mx-auto py-16">
        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-8 mb-8 border-b border-border"
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-8 mb-8 border-b border-border">
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.05, duration: 0.5 }}
            >
              <h4 className="text-xs font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            Copyright © 2024 Nova Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
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
    </footer>
  );
}