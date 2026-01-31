import { useState } from "react";
import { motion } from "motion/react";
import { BiMailSend, BiPhone, BiSend } from "react-icons/bi";
import { PiNeedle } from "react-icons/pi";
import { MdSendTimeExtension } from "react-icons/md";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { Icon: BiMailSend, label: "Email", value: "alex@example.com" },
    { Icon: BiPhone, label: "Phone", value: "+1 (555) 123-4567" },
    { Icon: PiNeedle, label: "Location", value: "San Francisco, CA" },
  ];

  return (
    <div
      id="contacts"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Let&apos;s Work{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Together
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life
          </p>
        </motion.div>

        <div className="w-full max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 mb-2">Name</label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-2">Message</label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow flex items-center justify-center gap-2"
              >
                <BiSend className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center text-slate-500"
        >
          <p>
            <span className="text-[20px] text-center">&copy;</span> 2025 Jeffarson Amenya
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
