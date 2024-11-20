import Header from './Header';
import Footer from './Footer';
import Form from './Form';

function App() {
  return (
    <>
      <Header />
      <div className="main-content"> {/* Wrap content with main-content class */}
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default App;

