import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"
import About from "./About"
export default function App(){
  const userInfo = {
    name: "Jamie Amor Pucay",
    bio: "Hi, I'm Jamie Amor Pucay, an IT student from University of Baguio. This is a website created for a Personal Profile Project for my subject in Introduction to Applications Development. Thank you for browsing!",
  }

  return(
    <>
    <Header name={userInfo.name}/>
    <main>
        <About name={userInfo.name} bio={userInfo.bio}  />
    </main>
    <Body title="Colorpicker" description="A website where you can change the background with a push of a button!" completed = {true}/>
    <Body title="Counter" description="A website where you can play with numbers by pushing different buttons!" completed = {true}/>
    <Body title="Timer" description="A website where a timer starts by pushing the button!" completed = {true}/>
    <Body />
    <Footer />
    </>
  )
}