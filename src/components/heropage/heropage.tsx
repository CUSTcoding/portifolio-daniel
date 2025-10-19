
export default function HeroPage(){
    return(
        <section className="w-screen h-screen flex items-center justify-center flex-col">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center mb-4">
    Daniel Samuel Chamboco
  </h1>
  <p className="text-lg text-gray-600 mb-8 w-[calc(80%)] text-justify">
    “Ser estudante da UEM é um privilégio, mas também uma responsabilidade. Cada passo dado dentro da universidade representa o sonho de milhares de jovens que acreditam que a educação pode mudar o destino de um país. É por isso que escolhi servir porque acredito que o futuro começa quando alguém tem a coragem de lutar por todos.
  </p>
  <button className="bg-blue-600 duration-500 hover:text-xl text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
    Saiba mais
  </button>
        </section>
    );
}