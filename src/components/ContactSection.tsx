import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon! 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    { icon: Github, label: "GitHub", link: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com" },
    { icon: Mail, label: "Email", link: "mailto:santhosh@example.com" },
    { icon: Instagram, label: "Instagram", link: "https://instagram.com" },
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8 px-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          More Like This
        </motion.h2>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.08,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.95 }}
              className="p-8 bg-[#2a2a2a] rounded-lg hover:bg-[#E50914] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.7)] relative overflow-hidden group"
            >
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: [0, 15, -15, 0],
                  transition: { duration: 0.6 }
                }}
              >
                <method.icon className="w-12 h-12 mx-auto mb-3 text-white" />
              </motion.div>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              />
              <p className="text-center font-semibold text-white text-sm">
                {method.label.toUpperCase()}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#2a2a2a] via-[#252525] to-[#1f1f1f] rounded-xl p-8 md:p-12 shadow-2xl border border-[#3a3a3a] hover:border-[#E50914]/30 transition-all duration-500"
        >
          <div className="flex items-center gap-4 mb-10">
            <motion.div
              animate={{ 
                rotate: [0, -5, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MessageSquare className="w-12 h-12 text-[#E50914]" />
            </motion.div>
            <p className="text-xl md:text-2xl text-white font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Got a project in mind? Let's make it happen!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[#141414] border-[#3a3a3a] text-white font-semibold text-lg h-14 focus:border-[#E50914] focus:ring-[#E50914] transition-all"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-[#141414] border-[#3a3a3a] text-white font-semibold text-lg h-14 focus:border-[#E50914] focus:ring-[#E50914] transition-all"
              />
            </div>

            <div>
              <Textarea
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="bg-[#141414] border-[#3a3a3a] text-white font-semibold text-lg focus:border-[#E50914] focus:ring-[#E50914] transition-all resize-none"
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full h-16 bg-gradient-to-r from-[#E50914] to-[#ff0a16] hover:from-[#ff0a16] hover:to-[#E50914] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.8)] transition-all duration-300"
              >
                <Send className="mr-3 w-5 h-5" />
                SEND MESSAGE
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}