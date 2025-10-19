import React from "react";
import Image from "next/image";
import DanielStory from "./danielAboit";

type CardType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const cardsData: CardType[] = [
  {
    id: 1,
    title: "Inclusão e Igualdade",
    description: `Uma universidade verdadeiramente grande é aquela que acolhe todas as vozes as fortes, as tímidas, as esquecidas e as silenciadas.
A inclusão das pessoas com deficiência e a valorização das mulheres não são apenas políticas; são compromissos com a dignidade humana.
Quando abrimos espaço para todos, descobrimos que a diversidade não é diferença é força.`,
    image: "/assets/img/IMG-20241118-WA0019-scaled.jpg"
  },
  {
    id: 2,
    title: "Juventude e Liderança",
    description: `A juventude é a energia que move o presente. Ser jovem é ter o poder de questionar, propor e transformar.
Liderar os estudantes é canalizar essa energia para construir pontes de diálogo, e não muros de distância.
A minha liderança é participativa, aberta e centrada no valor da escuta porque ninguém lidera sozinho.`,
    image: "/assets/img/UEM-CAMPOS.jpg"
  },
  {
    id: 3,
    title: "Visão para o Futuro da AEU",
    description: `Sonho com uma AEU que seja mais do que um órgão que seja um lar.
Um espaço onde o estudante se sinta respeitado, ouvido e valorizado.
Onde a tecnologia facilite a comunicação, a solidariedade supere a burocracia e a ação substitua o silêncio.
Uma AEU que una o país através da voz de cada estudante.`,
    image: "/assets/img/logotipo.jpg"
  }
];

function Card({ card, index }: { card: CardType; index: number }) {
  const isEven = index % 2 === 1; // cards pares alternam layout

  return (
    <div
      className={`w-full flex flex-col lg:flex-row gap-6 p-4 lg:p-6 rounded-2xl bg-[#222] 
                  ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >

      <div className="w-full lg:w-[22.3125rem] rounded-lg overflow-hidden">
        <Image
          alt={card.title}
          src={card.image}
          width={357}
          height={238}
          sizes="(max-width: 1024px) 100vw, 22.3125rem"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full flex flex-col lg:p-8 gap-8 lg:gap-4">
        <h2 className="text-[1.5rem] lg:text-2xl font-bold font-poppins capitalize text-white">
          {card.title}
        </h2>
        <p className="text-base font-poppins leading-8 text-black-2 text-justify">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="w-screen py-12 min-h-screen flex items-center justify-center flex-col bg-gray-500/80">
      <div className="flex flex-col gap-6 px-4">
        {cardsData.map((card, index) => (
          <Card key={card.id} card={card} index={index} />
        ))}
      </div>
      <br/>
      <DanielStory/>
    </section>
  );
}
