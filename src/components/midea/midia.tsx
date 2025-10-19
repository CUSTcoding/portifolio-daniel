import React from "react";
import { Facebook, Linkedin, Instagram, Mail, Phone, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/seuPerfil",
    icon: <Facebook size={32} />,
    color: "hover:bg-blue-600",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/seuPerfil",
    icon: <Linkedin size={32} />,
    color: "hover:bg-blue-400",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/seuPerfil",
    icon: <Instagram size={32} />,
    color: "hover:bg-pink-500",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: <MessageCircle size={32} />,
    color: "hover:bg-green-500",
  },
  {
    name: "Email",
    href: "mailto:seuemail@exemplo.com",
    icon: <Mail size={32} />,
    color: "hover:bg-yellow-400",
  },
  {
    name: "Telefone",
    href: "tel:+258XXXXXXXXX",
    icon: <Phone size={32} />,
    color: "hover:bg-green-300",
  },
];

export default function SocialCards() {
  return (
    <section id="media" className="w-screen media flex justify-center py-12  text-white px-4 lg:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center p-4 rounded-xl border border-gray-700 transition-transform duration-300 transform hover:scale-105 ${link.color}`}
          >
            {link.icon}
            <span className="mt-2 text-sm sm:text-base">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
