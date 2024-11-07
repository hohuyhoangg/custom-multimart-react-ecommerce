import {lazy, Suspense, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
function App() {

  useEffect(() => {
    console.log('[Katalon] Append Traffic Agent script');
    const katalonTrafficAgent = document.createElement('script');
    katalonTrafficAgent.async = true;
    katalonTrafficAgent.defer = true;
    katalonTrafficAgent.src = 'http://127.0.0.1:3000/debug/traffic-agent.min.js';
    katalonTrafficAgent.id = 'katalonTrafficAgent'
    document.head.appendChild(katalonTrafficAgent);

    document.getElementById('katalonTrafficAgent').addEventListener('load', () => {
      window.startTrafficAgent("KA-596-17")
    });
  },[]);

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
