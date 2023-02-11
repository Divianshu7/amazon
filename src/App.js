import React, { useEffect, useRef } from "react";
import './App.css';
import Home from "./Home"
import Header from "./Header"
import Checkout from "./Checkout"
import Orders from "./orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const promise = loadStripe("pk_test_51MQjISSGH3tlMGsp5hEJDHhd04BUcUFGTCgDrCE9Gyv8HHAaQ9g0qRjNryONWoASaRptSiSCI2zcbLLKIs64ZstU003RXlvbv9")
  // const [state, dispatch] = useStateValue();
  const ref = useRef(false)
  useEffect(() => {
    if (ref.current) return
    ref.current = true
  }, [])
  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <Routes>
          <Route exact path="/orders" element={<><Header /><Orders /></>}></Route>
          <Route exact path="/payment" element={
            <>
              <Header /><Elements stripe={promise}><Payment /></Elements></>}></Route>
          <Route exact path="/login" element={<><Login /></>} >

          </Route>
          <Route exact path="/checkout" element={<><Header />
            <Checkout /></>}>

          </Route>
          <Route exact path="/" element={<><Header /><Home /></>}>

          </Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
