import { useState } from "react";
import ProduktStruktur from "./ProduktStruktur";

export default function KöpSida({ totalSum ,totalCost, totalPhones, totalProducts, updateLogInStatus, stateName}) {

    const Phone1 = {
        Name: 'Samsung Galaxy S22 Svart',
        price: 9690,
        url: 'https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-540.jpg',
        PhoneID: 1
    }

    const Phone2 = {
        Name: 'Samsung Galaxy S22 Grön ',
        price: 9690,
        url: 'https://www.elgiganten.se/image/dv_web_D180001002926618/414928/samsung-galaxy-s22-5g-smartphone-8128gb-green--pdp_zoom-3000--pdp_main-540.jpg',
        PhoneID: 2
    }

    const Phone3 = {
        Name: 'Samsung Galaxy S22 Vit',
        price: 9690,
        url: 'https://www.elgiganten.se/image/dv_web_D180001002929961/414921/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-white--pdp_zoom-3000--pdp_main-540.jpg',
        PhoneID: 3,
    }

    const Phone4 = {
        Name: 'Samsung Galaxy S22 Rosa/Guld',
        price: 9690,
        url: 'https://www.elgiganten.se/image/dv_web_D180001002929246/414954/samsung-galaxy-s22-5g-smartphone-8256gb-pink-gold--pdp_zoom-3000--pdp_main-540.jpg',
        PhoneID: 4
    }

    const Phone5 = {
        Name: 'Samsung Galaxy S22 Ultra Vit',
        price: 9690,
        url: 'https://www.komplett.se/img/p/800/1206503.jpg',
        PhoneID: 5
    }

    //UseState
    const [Sum, setSum] = useState(0);
    const [Cost, setCost] = useState(0);    
    const [Ph1, setPhone1] = useState(0);
    const [Ph2, setPhone2] = useState(0);
    const [Ph3, setPhone3] = useState(0);
    const [Ph4, setPhone4] = useState(0);
    const [Ph5, setPhone5] = useState(0);


    //Adderar 1 till Sum och mottar den nuvarande produkt priset och beräknar till Sum
    function totalSum(Cost, PhoneID) {
        setSum(Sum + 1)
        setCost((Sum + 1) * Cost)

        if (PhoneID == 1) {
            setPhone1(Ph1 + 1);
        }
        else if (PhoneID == 2) {
            setPhone2(Ph2 + 1); 
        }
        else if (PhoneID == 3) {
            setPhone3(Ph3 + 1); 
        }
        else if (PhoneID == 4) {
            setPhone4(Ph4 + 1); 
        }
        else  {
            setPhone5(Ph5 + 1); 
        }

    }

    //Subtraherar 1 till Sum och mottar den nuvarande produkt priset och beräknar till Sum
    function removeFromSum(Cost, PhoneID) {
        setSum(Sum - 1);
        setCost((Sum - 1) * Cost)

        if (PhoneID == 1) {
            setPhone1(Ph1 - 1);
        }
        else if (PhoneID == 2) {
            setPhone2(Ph2 - 1);
        }
        else if (PhoneID == 3) {
            setPhone3(Ph3 - 1);
        }
        else if (PhoneID == 4) {
            setPhone4(Ph4 - 1);
        }
        else  {
            setPhone5(Ph5 - 1);
        }
    }
    console.log('Ph1:' + Ph1);
    console.log('Ph2:' + Ph2);
    console.log('Ph3:' + Ph3);
    console.log('Ph4:' + Ph4);
    console.log('Ph5:' + Ph5);



    //En funktion som leder till Hemsidan
    function clickToHomePage(event) {
        event.preventDefault();
        updateLogInStatus('HemSida');
    }

    //En funktion som leder till Kundvagn och skickar den slutberäknande produkt antalet till Kundvagn.jsx
    function ToCart() {
        totalProducts(Sum);
        totalCost(Cost);
        totalPhones(Ph1, Ph2, Ph3, Ph4, Ph5);
        updateLogInStatus('Kundvagn');
    }


    console.log(Cost);
    // console.log(Sum);

    return (
        <>
        <h1>Hej {stateName}</h1>
        <p>Kundvagn (antal av produkter): {Sum}</p>
        <button onClick={ToCart}>Fortsätt till kundvagnen</button>
        <button onClick={clickToHomePage}>Logga ut</button>
        <ProduktStruktur productInfo={Phone1} totalSum={totalSum} removeFromSum={removeFromSum}/>
        <ProduktStruktur productInfo={Phone2} totalSum={totalSum} removeFromSum={removeFromSum}/>
        <ProduktStruktur productInfo={Phone3} totalSum={totalSum} removeFromSum={removeFromSum}/>
        <ProduktStruktur productInfo={Phone4} totalSum={totalSum} removeFromSum={removeFromSum}/>
        <ProduktStruktur productInfo={Phone5} totalSum={totalSum} removeFromSum={removeFromSum}/>
        </>
    )
}