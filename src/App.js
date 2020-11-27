import "./App.css";
import { BrowserRouter as Router,Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Screens/Home";
import ProductScreen from "./Screens/ProductScreen";
import "./style/bootstrap.min.css";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={ProductScreen}  />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
