import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const milestones = [
  { year: "1972–1981", title: "NAFA concept by Daimler", icon: "📐", image: "/images/nafa.jpg" },
  { year: "1982–1991", title: "Swatchmobile concept (Hayek)", icon: "⌚", image: "/images/swatchmobile.jpg" },
  { year: "1993–1994", title: "Daimler + Swatch form MCC; 'smart' brand coined", icon: "🏷️", image: "/images/mcc.jpg" },
  { year: "1995–1997", title: "Prototype to Frankfurt debut (1997)", icon: "🚗", image: "/images/frankfurt-debut.jpg" },
  { year: "1997–1998", title: "Smartville factory opens; Fortwo launched", icon: "🏭", image: "/images/smartville.jpg" },
  { year: "1998–2004", title: "Fortwo Cabrio, Crossblade, Roadster, Forfour introduced", icon: "🚘", image: "/images/fortwo-cabrio.jpg" },
  { year: "2003–2006", title: "Heavy losses; MCC liquidated", icon: "📉", image: "/images/losses.jpg" },
  { year: "2007–2009", title: "Fortwo Electric pilot, then EV mass production", icon: "🔌", image: "/images/fortwo-electric.jpg" },
  { year: "2018", title: "smart EQ EV branding begins", icon: "⚡", image: "/images/smart-eq.jpg" },
  { year: "2019", title: "Geely-Daimler JV formed", icon: "🤝", image: "/images/joint-venture.jpg" },
  { year: "2021", title: "Concept #1 revealed", icon: "🔍", image: "/images/concept1.jpg" },
  { year: "2022", title: "Production of Smart #1 starts", icon: "🚙", image: "/images/smart1.jpg" },
  { year: "2023", title: "Smart #3 launched", icon: "🚙", image: "/images/smart3.jpg" },
  { year: "2024", title: "Concept #5 unveiled", icon: "✨", image: "/images/concept5.jpg" },
];

export default function SmartTimeline() {
  return (
    <div className="p-6 max-w-4xl mx-auto font-sans bg-white text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">Smart Heritage Timeline</h1>
      <div className="space-y-6">
        {milestones.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-2xl shrink-0">{item.icon}</div>
            <Card className="w-full shadow-md rounded-2xl">
              <CardContent className="p-4">
                <div className="text-sm text-gray-500 font-light uppercase tracking-wider">{item.year}</div>
                <div className="text-lg font-semibold mb-2">{item.title}</div>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={600} 
                  height={340} 
                  className="rounded-xl object-cover w-full h-auto"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
