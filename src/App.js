
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { PhotoDatabase } from './components/PhotoDatabase';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Header />
    <Card array={PhotoDatabase}/>
    <Footer />
    </>
      

  );
}

export default App;
