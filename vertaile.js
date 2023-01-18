/*
arrow function
https://javascript.info/arrow-functions-basics

const - keyword
checkWallet - muuttuja, johon funktio asetetaan
() => - funktio
{} - funktion runko
*/
const checkWallet = () => {
  /*
   kutsutaan funktiota, joka tarvittaessa poistaa edellisen elementin.
   funktiota kutsutaan helpers.js tiedostosta
  */
  clearPreviousValue("result-header-element");

  // kutsutaan funktiota, joka palauttaa objektin, jossa inputteihin syötetyt arvot
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
  const inputValues = getInputValues();

  // DRY principle - funktio asiat, jotka toistuvat
  // https://dzone.com/articles/software-design-principles-dry-and-kiss#:~:text=The%20DRY%20Principle%3A%20Don't,unambiguous%20representation%20within%20a%20system.%22
  const resultHeadingElement = createHeadingElement(
    "h3",
    "result-header-element"
  );

  // constants.js tiedosto
  containers.result.appendChild(resultHeadingElement);

  /*
  https://developer.mozilla.org/en-US/docs/Glossary/Truthy
  https://developer.mozilla.org/en-US/docs/Glossary/Falsy

  voitaisiin kirjoittaa

  let hasValues;

  if (inputValues.wallet === true && inputValues.price === true) {
    hasValues = true;
  } else {
    hasValues = false;
  }

  arvoja vertaillaan aina kolmella on merkillä, joka vertaa myös tyyppejä
  https://developer.mozilla.org/en-US/docs/Glossary/Primitive
  */
  const hasValues = inputValues.wallet && inputValues.price;

  /* 
  template literal on modernimpi tapa yhdistää merkkejä ja muuttujia kuin plus merkillä

  ternary operator 
  ehto ? suoritetaan, jos ehto on tosi : suoritetaan, jos ehto on epätosi

  errorMessage luetaan constants tiedostosta
  */
  const text = hasValues
    ? `Lompakossa on rahaa ${inputValues.wallet} ja elokuvalippu maksaa ${inputValues.price}`
    : errorMessage;

  resultHeadingElement.textContent = text;
};

const comparePriceToWallet = () => {
  clearPreviousValue("compare-header-element");

  const inputValues = getInputValues();
  const compareHeadingElement = createHeadingElement(
    "h3",
    "compare-header-element"
  );

  // muista logittaa
  console.log("wallet:", inputValues.wallet, "price:", inputValues.price);

  // jos jompi kumpi inputeista on tyhjä, näytetään error message
  // huomaa return, joka jälkeen tulevaa koodia ei suoriteta, jos ehto täyttyy
  if (!inputValues.price || !inputValues.wallet) {
    const textNode = document.createTextNode(errorMessage);
    compareHeadingElement.appendChild(textNode);
    return containers.compare.appendChild(compareHeadingElement);
  }

  // objekti, johon on tallennettu tulostettavat tekstit
  const textNodes = {
    wallet: `Lompakossa on enemmän rahaa, kuin lipun hinta`,
    price: "Lippu maksaa enemmän, kuin lompakossa on rahaa",
    equal: "Lompakon rahamäärä ja lipun hinta ovat yhtä suuret",
  };

  // getTextNodeKeyByValues palauttaa keyn (wallet, price, equal)
  const textNode = getTextNodeKeyByValues(inputValues);
  containers.compare.appendChild(compareHeadingElement);

  // objektin arvoihin pääsee käsiksi myös dynaamisesti käyttäen bracket notationia
  // vrt objectName.key - objectName[key]
  // kun getTextNodeKeyByValues palauttaa jonkun kolmesta keystä, keyllä voidaan
  // hakea textNodes objektista vastaava arvo -> esimerkiksi textNodes[wallet] -> Lompakossa on enemmän...
  compareHeadingElement.textContent = textNodes[textNode];
};
