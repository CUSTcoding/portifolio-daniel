import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroPage from "@/components/heropage/heropage";
import SocialCards from "@/components/midea/midia";

export default function Home() {
  return (
   <main className="flex flex-col items-center justify-center w-screen min-h-screen">
      <Header/>
      <HeroPage/>
      <About/>
      <SocialCards/>
      <Footer/>
   </main>
  );
}
