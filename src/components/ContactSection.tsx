import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
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

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          LET'S CONNECT 📬
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#0080FF] to-[#FF0080] border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_#000000]"
        >
          <div className="flex items-center gap-4 mb-8">
            <MessageSquare className="w-12 h-12 text-white" />
            <p className="text-xl md:text-2xl text-white font-bold">
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
                className="border-4 border-black bg-white text-black font-bold text-lg h-14 shadow-[4px_4px_0px_#000000] focus:shadow-[6px_6px_0px_#000000] transition-all"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-4 border-black bg-white text-black font-bold text-lg h-14 shadow-[4px_4px_0px_#000000] focus:shadow-[6px_6px_0px_#000000] transition-all"
              />
            </div>

            <div>
              <Textarea
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="border-4 border-black bg-white text-black font-bold text-lg shadow-[4px_4px_0px_#000000] focus:shadow-[6px_6px_0px_#000000] transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-16 bg-[#00FF80] hover:bg-[#00FF80] text-black font-bold text-xl border-4 border-black shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] transition-all"
            >
              <Send className="mr-2" />
              SEND MESSAGE
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-[#B3B3B3] text-lg mb-4">Or reach me directly at:</p>
          <a
            href="mailto:santhosh@example.com"
            className="inline-flex items-center gap-2 text-2xl font-bold text-[#00FF80] hover:text-[#E50914] transition-colors"
          >
            <Mail />
            santhosh@example.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
