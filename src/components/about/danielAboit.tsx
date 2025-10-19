import React from "react";
import { Eye, Zap, Book } from "lucide-react"; // Ícones representando Visão, Motivação e Trajetória

export default function DanielStoryIcons() {
     const data = [
        { label: "Nome", value: "Daniel Samuel Chamboco" },
        { label: "Idade", value: "23 anos" },
        { label: "Naturalidade", value: "Sofala" },
        { label: "Residência", value: "Manica" },
        { label: "Curso", value: "Ciência Política – 3º Ano, Universidade Eduardo Mondlane (UEM)" },
    ];

  return (
    <section className="w-screen bg-gray-900 text-white py-20 px-6 lg:px-32 flex flex-col gap-16">

      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Daniel Samuel Chamboco</h1>
        <p className="text-lg lg:text-2xl leading-relaxed text-gray-300">
          Visão, Motivação e Trajetória de um estudante comprometido com a mudança na UEM
        </p>
      </div>


      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-1/6 flex justify-center lg:justify-start">
          <Eye size={64} className="text-blue-400" />
        </div>
        <div className="w-full lg:w-5/6 flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Visão</h2>
          <p className="text-lg lg:text-xl leading-relaxed whitespace-pre-line text-justify">
            Ser uma liderança estudantil inovadora, inclusiva e transparente, capaz de transformar a experiência académica e social dos estudantes da UEM.
            Promover princípios democráticos como a participação ativa, a representação efetiva e o desenvolvimento integral dos estudantes, tornando a AEU uma referência de excelência, cidadania ativa e empoderamento juvenil.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-start gap-8">
        <div className="w-full lg:w-1/6 flex justify-center lg:justify-end">
          <Zap size={64} className="text-yellow-400" />
        </div>
        <div className="w-full lg:w-5/6 flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Motivação</h2>
          <p className="text-lg lg:text-xl leading-relaxed whitespace-pre-line text-justify">
            A minha candidatura à Presidência da AEU nasce da convicção de que a voz dos estudantes precisa ser representada com força, integridade e respeito.
            Acredito que a AEU deve ser mais do que uma instituição deve ser um espaço de acolhimento, diálogo e ação, onde cada estudante se reconheça e se sinta protegido.
            Coloco a minha experiência associativa e compromisso social ao serviço da nossa comunidade académica, garantindo que cada estudante encontre na AEU uma verdadeira casa.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-1/6 flex justify-center lg:justify-start">
          <Book size={64} className="text-green-400" />
        </div>
        <div className="w-full lg:w-5/6 flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold">Trajetória</h2>
          <p className="text-lg lg:text-xl leading-relaxed whitespace-pre-line text-justify">
            Sou Daniel Samuel Chamboco, estudante de Ciência Política na UEM. Durante quase quatro anos vivendo nas residências estudantis, vivenciei de perto os desafios que os estudantes enfrentam: cortes de refeições, multas injustas e dificuldade de acesso a serviços básicos.
            Minha experiência como líder estudantil e no ASSIPH reforça meu compromisso com responsabilidade, transparência e ação social.
            Hoje, quero aplicar todo conhecimento adquirido para construir uma AEU inovadora, inclusiva e participativa.
          </p>
        </div>
      </div>

         <div className="w-full max-w-3xl overflow-x-auto m-auto bottom-0">
        <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden table-auto">
          <thead className="bg-gray-800">
            <tr>
              <th className="text-left px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg lg:text-xl font-semibold border-b border-gray-700">
                Informação
              </th>
              <th className="text-left px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg lg:text-xl font-semibold border-b border-gray-700">
                Detalhes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {data.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}
              >
                <td className="px-4 py-2 sm:px-6 sm:py-3 font-medium">{item.label}</td>
                <td className="px-4 py-2 sm:px-6 sm:py-3 break-words">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
    
  );
}
