import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"
export default function App(){
  return(
    <>
    <Header />
    <Body name="Jamie" food="pizza" isHealthy = {false} age={20} />
    <Body />
    <Footer />
    </>
  )
}