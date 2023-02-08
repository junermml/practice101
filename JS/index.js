var total_pricePeso = function(){

    var total_pricemb = document.getElementById("magic").value *100;
    var total_pricesmt = document.getElementById("metal").value *20;

    var total_pricePeso = total_pricemb+total_pricesmt;
    window.alert("Total Price: ₱" +total_pricePeso);
}