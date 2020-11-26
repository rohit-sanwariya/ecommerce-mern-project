import './App.css';
import {Container} from 'react-bootstrap';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Screens/Home";
import './style/bootstrap.min.css';
const App=() =>{
  return (
    <div className="App">
     <Header/>
     <main className='py-3'>
       <Container>
      <Home/>
       </Container>
      
     </main>
     <Footer/>
    </div>
  );
}

export default App;
