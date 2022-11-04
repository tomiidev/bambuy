import Contact from "../components/Contact";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import { Features } from "../components/Features";
import { Services } from "../components/Services";


export default function Home() {
  return ( 
      <Layout>
        <Hero />
        <Services />
        <Features />
        <Pricing />
        <Contact />
      </Layout>
  )
}
