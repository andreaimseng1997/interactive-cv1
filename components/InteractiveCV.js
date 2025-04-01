import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import "../styles/globals.css";


const sections = [
  {
    title: "👤 Who Am I?",
    content: `Hi! I'm Andrea Matteo Imseng, 27 years old, currently living in Thun but originally from the beautiful Lötschental in the Valais Alps. I'm a passionate musician, playing Euphonium for over 16 years in various bands. I also love nature — skiing in winter and hiking in the mountains the rest of the year.`
  },
  {
    title: "🎓 Education",
    content: `• Bachelor in Business Administration – Berner Fachhochschule (2020–2023)
• Matura in Economics and Services – BFO Brig (2017–2018)
• Mediamatiker EFZ – Verkehrsbetriebe AG, LLB, Leukerbad Therme (2013–2017)`
  },
  {
    title: "💼 Work Experience",
    content: `• Intern in Communication & Marketing – Insel Gruppe (2023–2024)
• Mediamatics Intern – Swiss-Ski (2019–2020)
• Temp Employee – Groupe Mutuel (2018–2019)`
  },
  {
    title: "🛠️ Skills",
    content: `• Software: Adobe CC (Photoshop, Illustrator, InDesign, PremierePro, XD, etc.), MS Office
• Languages: German (native), English, French
• Extra: Social commitment as a board member of Alpenrose Kippel`
  },
  {
    title: "📞 Contact",
    content: `Email: andrea.imseng@hotmail.ch
Location: Hauptstrasse 59, 3917 Kippel
Instagram: @andreamatteo1997
LinkedIn: /in/andrea-matteo-imseng-a4944887/`
  }
];

export default function InteractiveCV() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" && index < sections.length - 1) {
        setIndex(index + 1);
      } else if (e.key === "ArrowLeft" && index > 0) {
        setIndex(index - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-sky-100 to-indigo-200">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="rounded-2xl shadow-xl p-6">
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">{sections[index].title}</h2>
            <p className="whitespace-pre-line text-base">{sections[index].content}</p>
          </CardContent>
        </Card>
        <div className="flex justify-between mt-6">
          <Button onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0}>← Back</Button>
          <Button onClick={() => setIndex(Math.min(sections.length - 1, index + 1))} disabled={index === sections.length - 1}>Next →</Button>
        </div>
      </motion.div>
    </div>
  );
}