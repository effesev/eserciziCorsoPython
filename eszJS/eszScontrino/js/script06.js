
let btnAggiungi = document.getElementById("btnAggiungi")
let listaSpesa = document.getElementById("listaSpesa")
let listaProd = [] //lista dei prodotti
let listaPrezzi = [] //lista dei prezzi



function aggiungiALista(){
    //prendo valori input da html e metto su js
    let nameProd = document.getElementById("nameProd").value;
    let prezzoProd = document.getElementById("prezzoProd").value;

    //mostro nella console gli array che vengono aggiornati
    listaPrezzi.push(prezzoProd);
    listaProd.push(nameProd) ;
    console.log(listaProd + " - " + listaPrezzi + "€");
    
    //mostro in html la lista che viene aggiornata
    listaSpesa.innerHTML += nameProd + " - " + prezzoProd + "€ <br>" ;
}

btnAggiungi.addEventListener("click", aggiungiALista);



function calcolaTotale(){
    // trasformo array in numeri
    let listaPrezziNum = []
    let sommaPrezzi=0;
    
    for (let i = 0; i < listaPrezzi.length; i++) {
        listaPrezziNum.push(Number(listaPrezzi[i]));
    }

    // somma elementi array
    for (let i = 0; i < listaPrezziNum.length; i++) {
        sommaPrezzi += listaPrezziNum[i];
    }
    
    //prezzo totale mostrato su html
    grandTotal.innerHTML = sommaPrezzi + "€"

    //mostro in html il numero di articoli aggiunti
    numTotArticoli.innerHTML = listaProd.length
}

btnTotale.addEventListener("click", calcolaTotale)

