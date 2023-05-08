//Male items
const maleTee = 10;
const maleTeeType2 = 5;
const maleJeans = 12;
const maleBlueJeans = 10;
const sneakers = 15;
//Female items
const femaleJacket = 15;
const femaleTee = 7;
const femaleSkirt = 10;
const femaleBlueJeans = 10;
const femaleSneakers = 15;

let totalSale = 0;

function welcome() {
  let categoryOption = "";
  while (categoryOption !== "3") {
    categoryOption = prompt(
      "¡Bienvenido a nuestra tienda en línea!, Por favor elije la categoria la cual desees comprar: \n 1. Ropa para hombre \n 2. Ropa para mujer  \n 3. Salir"
    );
    switch (categoryOption) {
      case "1":
        maleItems();
        break;
      case "2":
        femaleItems();
        break;
      case "3":
        alert("¡Gracias por visitarnos!");
        break;
      default:
        alert("La opción elegida no es valida, por favor intente nuevamente.");
        break;
    }
  }
}

function maleItems() {
  const itemToBuy = prompt(
    "Por favor elija el producto que desea comprar:\n 1. Camiseta manga larga $10 \n 2. Camiseta manga corta $5 \n 3. pantalones negros $12 \n 4. pantalones azules  $10 \n 5. Zapatillas $15"
  );
  if (
    itemToBuy == "1" ||
    itemToBuy == "2" ||
    itemToBuy == "3" ||
    itemToBuy == "4" ||
    itemToBuy == "5"
  ) {
    const cuantity = prompt(
      "Por favor elija la cantidad de productos que desea comprar"
    );
    buyItemsMale(itemToBuy, cuantity);
  } else {
    alert("El producto que desea no existe, por favor intente nuevamente");
  }
}

function femaleItems() {
  const itemToBuy = prompt(
    "Por favor elija el producto que desea comprar:\n 1. Chaqueta $15 \n 2. Camiseta manga corta $7 \n 3. falda gris $10 \n 4. pantalones azules  $10 \n 5. Zapatillas $15"
  );
  if (
    itemToBuy == "1" ||
    itemToBuy == "2" ||
    itemToBuy == "3" ||
    itemToBuy == "4" ||
    itemToBuy == "5"
  ) {
    const cuantity = prompt(
      "Por favor elija la cantidad de productos que desea comprar"
    );
    buyItemsFemale(itemToBuy, cuantity);
  } else {
    alert("El producto que desea no existe, por favor intente nuevamente");
  }
}

function buyItemsMale(itemToBuy, cuantity) {
  switch (itemToBuy) {
    case "1":
      totalSale = maleTee * Number(cuantity);
      break;
    case "2":
      totalSale = maleTeeType2 * Number(cuantity);
      break;
    case "3":
      totalSale = maleJeans * Number(cuantity);
      break;
    case "4":
      totalSale = maleBlueJeans * Number(cuantity);
      break;
    case "5":
      totalSale = sneakers * Number(cuantity);
      break;

    default:
      break;
  }
  printTotal(totalSale);
}

function buyItemsFemale(itemToBuy, cuantity) {
  switch (itemToBuy) {
    case "1":
      totalSale = femaleJacket * Number(cuantity);
      break;
    case "2":
      totalSale = femaleTee * Number(cuantity);
      break;
    case "3":
      totalSale = femaleSkirt * Number(cuantity);
      break;
    case "4":
      totalSale = femaleBlueJeans * Number(cuantity);
      break;
    case "5":
      totalSale = femaleSneakers * Number(cuantity);
      break;

    default:
      break;
  }
  printTotal(totalSale);
}

function printTotal(totalSale) {
  console.log(totalSale);
  alert(
    "el total de su compra es $" +
      totalSale +
      ". Gracias por comprar con nosotros. \n"
  );
}

welcome();
