function varat (a, b) {
    let div = document.getElementById("results");
    div.innerHTML = "<h3>Lompakossa on rahaa " + a + " ja elokuvalippu maksaa " + b + "</h3>";
    }
    function lippu (a, b) {
        let lippu;
        if (+a > +b) {
            lippu = "<h3>" +a+ " on suurempi luku</h3>";
        } else if(+a < +b) {
            lippu = "<h3>" +b+ " on suurempiluku</h3>";
        } else {
            lippu = "<h3>" +a+ " ja " +b+ " ovat yhtä suuria lukuja.</h3>";
        }
        document.getElementById("vertaile").innerHTML = vertaile;
    }
    
   