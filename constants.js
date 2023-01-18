// constatit on muuttumattomia ja täältä niitä voidaan käyttää mistäpäin tahansa sovellusta

// containers.result = result div elementti
const containers = {
  result: document.getElementById("results"),
  compare: document.getElementById("compare"),
};

const errorMessage = "Jotain meni pieleen, yritä uudestaan 😞";

// objekti, johon on tallennettu tulostettavat tekstit
const textNodes = {
  wallet: `Lompakossa on enemmän rahaa, kuin lipun hinta`,
  price: "Lippu maksaa enemmän, kuin lompakossa on rahaa",
  equal: "Lompakon rahamäärä ja lipun hinta ovat yhtä suuret",
};
