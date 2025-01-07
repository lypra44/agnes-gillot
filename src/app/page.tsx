import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionIntro } from "@/components/Intro";
import { Faq } from "@/components/Faq";
import { SectionPourquoi } from "@/components/SectionPourquoi";
import Techniques from "@/components/Techniques";
import Citation from "@/components/Citation";
import { Massage } from "@/components/Massage";
import Contact from "@/components/Contact";

export default async function Home() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center">
        <Hero />

        <SectionIntro />

        <SectionPourquoi />

        <Citation />

        <Techniques />

        <Massage />

        <Contact />

        <Faq />
        
      </Container>
    </>
  );
}
