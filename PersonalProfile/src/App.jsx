import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  const userInfo = {
    name: "Jamie Amor Pucay",
    bio: "Hi, I'm Jamie Amor Pucay, an IT student from University of Baguio. This is a website created for a Personal Profile Project for my subject in Introduction to Applications Development. Thank you for browsing!",
    profilePicture: "https://placeholder.pics/svg/150x150"
  };

  const projectList = [
    {
      title: "Colorpicker",
      description: "A website where you can change the background with a push of a button!"
    },
    {
      title: "Counter",
      description: "A website where you can play with numbers by pushing different buttons!"
    }
  ];

  const contactInfo = {
    email: "20239228@es.ubaguio.edu",
    socialLinks: [
      { platform: "GitHub", url: "https://github.com" },
      { platform: "Twitter", url: "https://twitter.com" }
    ]
  };

  return (
    <>
      <Header name={userInfo.name} />
      <main>
        <About name={userInfo.name} bio={userInfo.bio} profilePicture={userInfo.profilePicture} />
        <Projects projects={projectList} />
        <Contact email={contactInfo.email} socialLinks={contactInfo.socialLinks} />
      </main>
      <Footer />
    </>
  );
}
