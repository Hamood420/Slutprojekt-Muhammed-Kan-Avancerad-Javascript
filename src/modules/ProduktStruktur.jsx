export default function ProductStructure({ productInfo, totalSum, removeFromSum }) {
    
    const { Name, price, url, PhoneID } = productInfo

    //Lägger till (+1) antal produkt till kundvagnen och skickar den nuvarande produkt 
    function addToCart() {
        totalSum(price, PhoneID)
    }
    //Tar bort (-1) antal produkt från kundvagnen och redigerar priset i kundvagnen
    function removeFromCart() {
        removeFromSum(price, PhoneID);
    }

    return (
        <>
            <h2>{Name}</h2>
            <h2>{price}Kr</h2>
            <img src={url}></img>
            <button onClick={addToCart}>+</button>
            <button onClick={removeFromCart}>-</button>
        </>
    )
}