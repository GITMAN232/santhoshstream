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
          className="text-3xl md:text-5xl font-bold text-white mb-8"
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
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-[#2a2a2a] rounded-lg hover:bg-[#E50914] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(229,9,20,0.6)]"
            >
              <method.icon className="w-12 h-12 mx-auto mb-3 text-white" />
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
          className="bg-[#2a2a2a] rounded-lg p-8 md:p-12 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <MessageSquare className="w-10 h-10 text-[#E50914]" />
            <p className="text-xl md:text-2xl text-white font-semibold">
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

            <Button
              type="submit"
              className="w-full h-14 bg-[#E50914] hover:bg-[#ff0a16] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] transition-all"
            >
              <Send className="mr-2" />
              SEND MESSAGE
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}