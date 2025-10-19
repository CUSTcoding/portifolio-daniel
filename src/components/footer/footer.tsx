import React from "react";

export default function Footer() {
  const Year: number = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left px-4">
      {/* Copyright */}
      <p className="text-sm sm:text-base text-gray-400">
        &copy; {Year} Todos os direitos reservados.
      </p>

      {/* Desenvolvedor */}
      <p className="text-sm sm:text-base text-gray-400">
        Desenvolvido por{" "}
        <a
          href="https://cust-coding-solutions.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 font-semibold transition-colors duration-200"
        >
          Cust Coding Solutions
        </a>
      </p>
    </footer>
  );
}
