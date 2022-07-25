import ReactDOM from "react-dom/client";
import { useState } from "react";
import HemSida from "./modules/HemSida.jsx"
import KöpSida from "./modules/KöpSida.jsx";
import Kundvagn from "./modules/Kundvagn.jsx";


function WebShop() {
    //UseState och setter för användaren
    const [stateName, setStateName] = useState('');
    function updateUserInfo(userName) {
        setStateName(userName);
        console.log(userName);
    }

    //UseState för användaren att logga in värde och en metod som sätter en value
    const [LoggedIn, setStateLoggedIn] = useState("HemSida");
    function updateLogInStatus(status) {
        setStateLoggedIn(status)
    }

    //UseState och setter för antal produkter
    const [total, setTotal] = useState(0);
    function totalProducts(total) {
        setTotal(total);
    }

     //UseState för att få totala priset from KöpSida och skickar vidare till ShoppingCart
    const [totalCost, setTotalCost] = useState(0);
    function totalCost1(total) {
        setTotalCost(total);
       }

       const [totalPhone1, setTotalPhone1] = useState(0);
       const [totalPhone2, setTotalPhone2] = useState(0);
       const [totalPhone3, setTotalPhone3] = useState(0);
       const [totalPhone4, setTotalPhone4] = useState(0);
       const [totalPhone5, setTotalPhone5] = useState(0);

    function totalPhones(totalPhone1, totalPhone2, totalPhone3, totalPhone4, totalPhone5) {
        setTotalPhone1(totalPhone1);
        setTotalPhone2(totalPhone2);
        setTotalPhone3(totalPhone3);
        setTotalPhone4(totalPhone4);
        setTotalPhone5(totalPhone5);
    }


    return (
        //Detta retunerar renders olika komponenter beroende på vad LoggedIn värdet är
        <>
        
        {LoggedIn == 'KöpSida' && <KöpSida updateLogInStatus={updateLogInStatus} stateName={stateName} totalProducts={totalProducts} totalCost={totalCost1} totalPhones={totalPhones}/>}
        {LoggedIn == 'HemSida' &&  <HemSida updateLogInStatus={updateLogInStatus} updateUserInfo={updateUserInfo}/>}
        {LoggedIn == 'Kundvagn' && <Kundvagn updateLogInStatus={updateLogInStatus} stateName={stateName} total={total} totalCost={totalCost} totalPhone1={totalPhone1} totalPhone2={totalPhone2} totalPhone3={totalPhone3} totalPhone4={totalPhone4} totalPhone5={totalPhone5}/>}

        </>
    )
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<WebShop />);