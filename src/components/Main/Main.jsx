import React from "react";
import { Route, Routes } from 'react-router-dom'


import Home from "./SearhContainer";
import New from "./New";



// import NotFound from "./NotFound";
// import ProductDetail from "./ProductDetail";


const Main = () => {
  return <main>

  {/*<TravelList />*/}
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      
      {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      {/* <Route path='/*' element={<NotFound />} /> */}
  </Routes>

  </main>;
};

export default Main;