import React, { Suspense } from 'react';
import { Switch, Route} from 'react-router-dom';


import Home from './home/Home';
import NotFound from './not_found/NotFound';

// import ProductDetails from './product_page/ProductDetails';
// import RegForm from './registration/RegistrationForm';
// import ProductList from './product_page/ProductList';
// import PartnerDetails from './partner_page/PartnerDetails';
// import AboutUs from './about_page/AboutUs';


// const PartnerList = lazy (() =>
//     new Promise((resolve, reject) =>
//     setTimeout(() => resolve(import("./partner_page/PartnerList")), 100)
// ));

function Main() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            {/* <Route 
                path='/products-and-services/:slug' 
                render={(props) => <ProductDetails {...props} isAuthed={true} />}
            />  */}
            <Route path='' component={NotFound} />
        </Switch>
    </Suspense>
  )
}

export default Main;
