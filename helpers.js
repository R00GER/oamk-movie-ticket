/*
voitaisiin kirjoittaa esimerkiksi

const getInputValues = () => {
    const object = {
        wallet: document.getElementById("wallet").value,
        price: document.getElementById("price").value,
    }

    return object;
}
*/

const getInputValues = () => ({
  wallet: document.getElementById("wallet").value,
  price: document.getElementById("price").value,
});

/* funktion sisään tulee inputValues objekti, joka sisältää propertyt wallet ja price

sisääntulevasta objektista desctructoidaan funktion parametreissa objecktin propertyt,
jolloin ei tarvitse kirjoittaa inputValues.wallet, vaan suoraan wallet
https://www.educative.io/answers/what-is-object-destructuring-in-javascript
*/
const getTextNodeKeyByValues = ({ wallet, price }) => {
  if (wallet === price) return "equal";

  return +wallet > +price ? "wallet" : "price";
};

// luodaan DOM -elementti halutulla id:llä
// paskasti nimetty, koska tällä voi luoda minkä tahansa elementin, ei pelkästään heading elementtejä
// importance pitäisi olla nimetty vaikka elementType (esim. div)
const createHeadingElement = (importance, id) => {
  const element = document.createElement(importance);
  element.id = id;

  return element;
};

const clearPreviousValue = (id) => {
  // tarkistetaan, löytyykö DOM:sta olemassa oleva elementti
  const existingHeadingElement = document.getElementById(id);

  // jos löytyy, se poistetaan
  // muussa tapauksessa jokaisella klikillä luotaisiin uusi elementti
  // Lompakossa on rahaa 11 ja elokuvalippu maksaa 10
  // Lompakossa on rahaa 100 ja elokuvalippu maksaa 10
  // .....

  /*
  voitaisiin kirjoittaa

  if (existingHeadingElement) {
    existingHeadingElement.remove();
  }
  */
  existingHeadingElement && existingHeadingElement.remove();
};
