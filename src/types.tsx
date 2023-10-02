export type ItemType = {
    id: string;
    name: string;
    shortName: string;
    wikiLink: string;
    gridImageLink: string;
    sellFor: [
      {
        price: number;
        priceRUB: number;
        source: string;
        stringPriceRUB: string;
        stringPrice: string;
        stringPriceFlea: string;
        sourceImg: string;
      }
    ];
    properties: {
      __typename: string;
    };
  };
  export type ItemDb = ItemType[];