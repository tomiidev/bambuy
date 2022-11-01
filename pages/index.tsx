import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import { Screenshots } from "../components/Screenshots";
import { Services } from "../components/Services";


export default function Home() {
  return ( 
      <Layout>
        <Hero />
        <Services />
        {/* <Screenshots /> */}
      </Layout>
  )
}
