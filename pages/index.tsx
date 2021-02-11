import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="Y2M4OTNhNGMtMWFmMS00OTY0LWFmYTctMjlkYTJjMDUxODlmNjM3NDg1OTkwMTU5NTY3MDUy" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/aquarium.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>The Beauty of</h3>
          <h2>Fresh Water Fish</h2>
          <p>An <strong>exclusive collection of fresh water fish</strong> available for everyone.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "nextjs_angelfish", name: "Blue Metallic Angel Fish", price: 25.00, image: "../static/angelfish.png", description: "Angels are a beautiful, mystical addition to any aquatic habitat. This particular freshwater angelfish is quite rare, and because of its shiny, almost metallic scales, it is often referred to as “Platinum” or “Platinum Blue”. A beautiful enhancement to any tank, these stunning angels reflect light off their scales and flowing fins, making them look extremely magnificent."} as IProduct,
      {id: "nextjs_watermelonpleco", name: "L330 Watermelon Pleco", price: 350.00, image: "../static/pleco.png",description: "One of the most beautifully marked of all Royal Plecos, the L330 “Watermelon” Pleco is found throughout the soft, acidic waters of the middle and upper Orinoco and its tributaries in Colombia and Venezuela. Like all Panaque species, it is a specialized wood eater and requires driftwood in its diet, they should also be offered a variety of other foods."} as IProduct,
      {id: "nextjs_arowana", name: "Jardini Arowana", price: 750.00, image: "../static/arowana.png", description: " If you’re looking for a large, unusual addition to your tank, you might want to consider the mysterious Jardini Arowana. In this guide, we provide an overview of what to expect if you take on one of these unusual giants. First of all, let’s find out more about this stunning fish."} as IProduct,
      {id: "nextjs_bass", name: "Peacock Bass", price: 350.00, image: "../static/bass.png", description: " The Peacock Bass Cichlid is a semi-aggressive fish that features a very popular stately body stature. It’s beautiful coloration consists of velvety copper and silver, and it features a variety of other unique features throughout its body. As a mature adult, a nuchal hump forms on males. The Peacock Bass will readily accept pellet foods, worms, or small feeder fish."} as IProduct,
      {id: "nextjs_catfish", name: "Red Tailed Catfish", price: 150.00, image: "../static/catfish.png", description: " The South American Red-Tail Catfish is a gorgeous fish to own. It will make a marvelous pet that requires a bit more care and commitment that an average fish owner may be used to. This fish has the ability to grow about an inch per week when they are young, and can sometimes grow to be about 24” at a year old. The Red-tail Catfish not at all picky about foods that will often eat out of their owner’s hands. Good quality pellet foods and bloodworms will offer these fish a fine life."} as IProduct,
    ]
  }
}

export default Index