import { ItemType } from "./types.tsx";

export default function checkHighestTrader(item: ItemType) {
  let allTraderPrices = item.sellFor;
  let filteredHighestPrice = {
    price: 0,
    priceRUB: 0,
    fleaPriceRUB: 0,
    source: "",
    sourceImg: "",
    stringPrice: "", 
    stringPriceRUB: "",
    stringPriceFlea: ""
  };
  for (let i = 0; i < allTraderPrices.length; i++) {
    if (allTraderPrices[i].source != "fleaMarket") {
      if (allTraderPrices[i].priceRUB > filteredHighestPrice.priceRUB) {
        filteredHighestPrice.price = allTraderPrices[i].price;
        filteredHighestPrice.priceRUB = allTraderPrices[i].priceRUB;
        filteredHighestPrice.source = allTraderPrices[i].source;
      }
    }
    if (allTraderPrices[i].source === "fleaMarket") {
      filteredHighestPrice.fleaPriceRUB = allTraderPrices[i].priceRUB;
    }
  }
  if (filteredHighestPrice.source === "prapor") {
    filteredHighestPrice.source = "Prapor";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/54cb50c76803fa8b248b4571.webp";
  }
  if (filteredHighestPrice.source === "therapist") {
    filteredHighestPrice.source = "Therapist";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/54cb57776803fa99248b456e.webp";
  }
  if (filteredHighestPrice.source === "fence") {
    filteredHighestPrice.source = "Fence";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/579dc571d53a0658a154fbec.webp";
  }
  if (filteredHighestPrice.source === "skier") {
    filteredHighestPrice.source = "Skier";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/58330581ace78e27b8b10cee.webp";
  }
  if (filteredHighestPrice.source === "peacekeeper") {
    filteredHighestPrice.source = "Peacekeeper";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/5935c25fb3acc3127c3d8cd9.webp";
  }
  if (filteredHighestPrice.source === "mechanic") {
    filteredHighestPrice.source = "Mechanic";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/5a7c2eca46aef81a7ca2145d.webp";
  }
  if (filteredHighestPrice.source === "ragman") {
    filteredHighestPrice.source = "Ragman";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/5ac3b934156ae10c4430e83c.webp";
  }
  if (filteredHighestPrice.source === "jaeger") {
    filteredHighestPrice.source = "Jaeger";
    filteredHighestPrice.sourceImg =
      "https://assets.tarkov.dev/5c0647fdd443bc2504c2d371.webp";
  }

  filteredHighestPrice.stringPrice = filteredHighestPrice.price.toString();
  filteredHighestPrice.stringPriceRUB =
    filteredHighestPrice.priceRUB.toString();
  filteredHighestPrice.stringPriceFlea =
    filteredHighestPrice.fleaPriceRUB.toString();

  if (filteredHighestPrice.stringPriceRUB.length > 3) {
    let newString: Array<string> = [];
    let strLength: number = filteredHighestPrice.stringPriceRUB.length;
    let counter: number  = filteredHighestPrice.stringPriceRUB.length;
    let subCount = 0;
    for (let i = strLength - 1; i > -1; i--) {
      newString.unshift(filteredHighestPrice.stringPriceRUB[i]);
      counter--;
      subCount++;
      if (subCount === 3) {
        newString.unshift(" ");
        subCount = 0;
      }
    }
    let combinedNewString: string = newString.join("");
    filteredHighestPrice.stringPriceRUB = combinedNewString;
  }
  if (filteredHighestPrice.stringPrice.length > 3) {
    let newString: Array<string> = [];
    let strLength: number = filteredHighestPrice.stringPrice.length;
    let counter: number  = filteredHighestPrice.stringPrice.length;
    let subCount = 0;
    for (let i = strLength - 1; i > -1; i--) {
      newString.unshift(filteredHighestPrice.stringPrice[i]);
      counter--;
      subCount++;
      if (subCount === 3) {
        newString.unshift(" ");
        subCount = 0;
      }
    }
    let combinedNewString: string = newString.join("");
    filteredHighestPrice.stringPrice = combinedNewString;
  }
  if (filteredHighestPrice.stringPriceFlea.length > 3) {
    let newString: Array<string> = [];
    let strLength: number = filteredHighestPrice.stringPriceFlea.length;
    let counter: number  = filteredHighestPrice.stringPriceFlea.length;
    let subCount = 0;
    for (let i = strLength - 1; i > -1; i--) {
      newString.unshift(filteredHighestPrice.stringPriceFlea[i]);
      counter--;
      subCount++;
      if (subCount === 3) {
        newString.unshift(" ");
        subCount = 0;
      }
    }
    let combinedNewString: string = newString.join("");
    filteredHighestPrice.stringPriceFlea = combinedNewString;
  }

  return filteredHighestPrice;
}
