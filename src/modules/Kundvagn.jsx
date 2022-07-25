export default function Kundvagn({totalCost, totalPhone1, totalPhone2, totalPhone3, totalPhone4, totalPhone5, total, stateName, updateLogInStatus}) {

    //En funktion som leder till hemsidan
    function clickToHomePage(event) {
        event.preventDefault();
        updateLogInStatus('HemSida');
    }

    //En funktion till köp och leder till hemsidan
    function buy(event) {
        event.preventDefault();
        updateLogInStatus('Hemsida');
        alert('Du har köpt' + total + 'produkter med summan av:' + totalCost + 'Kr')
        //En fråga om alerten. VIll att total och totalCost ska ha mellanslag i menningen. Dvs att det inte ska stå Du har köpt0produkter med summan av:0Kr utan Du har köpt 0 produkter med summan av: 0Kr
    }

    //En funktion som visar produkt1(Phone1) i kundvagnen
    function Phone1() {
        if (totalPhone1 > 0) {
            return (
                <>
                    <img src='https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-540.jpg'></img>
                    <p>Antal: {totalPhone1}</p>
                </>
            )
        }
    }
    //En funktion som visar produkt2(Phone2) i kundvagnen
    function Phone2() {
        if (totalPhone2 > 0) {
            return (
                <>
                    <img src='https://www.elgiganten.se/image/dv_web_D180001002926618/414928/samsung-galaxy-s22-5g-smartphone-8128gb-green--pdp_zoom-3000--pdp_main-540.jpg'></img>
                    <p>Antal: {totalPhone2}</p>
                </>
            )
        }
    }
    //En funktion som visar produkt3(Phone3) i kundvagnen
    function Phone3() {
        if (totalPhone3 > 0) {
            return (
                <>
                    <img src='https://www.elgiganten.se/image/dv_web_D180001002929961/414921/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-white--pdp_zoom-3000--pdp_main-540.jpg'></img>
                    <p>Antal: {totalPhone3}</p>
                </>
            )
        }
    }
    //En funktion som visar produkt4(Phone4) i kundvagnen
    function Phone4() {
        if (totalPhone4 > 0) {
            return (
                <>
                    <img src='https://www.elgiganten.se/image/dv_web_D180001002929246/414954/samsung-galaxy-s22-5g-smartphone-8256gb-pink-gold--pdp_zoom-3000--pdp_main-540.jpg'></img>
                    <p>Antal: {totalPhone4}</p>
                </>
            )
        }
    }
    //En funktion som visar produkt5(Phone5) i kundvagnen
    function Phone5() {
        if (totalPhone1 > 0) {
            return (
                <>
                    <img src='https://www.komplett.se/img/p/800/1206503.jpg'></img>
                    <p>Antal: {totalPhone5}</p>
                </>
            )
        }
    }

    return (
        <>
            <h1>Tack för köpet {stateName}</h1>
            <h1>Antal produkter: {total}</h1>
            <h1>Totala priset: {totalCost}kr</h1>
            {Phone1()}
            {Phone2()}
            {Phone3()}
            {Phone4()}
            {Phone5()}
            <button onClick={buy}>Genomför köpet</button>
            <button onClick={clickToHomePage}>Logga Ut</button>
        </>   
    )
}
