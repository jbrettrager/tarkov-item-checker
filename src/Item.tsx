import React from "react";
import checkHighestTrader from "./checkHighestTrader.ts";
import {ItemType, ItemDb} from "./types"

export default function Item(props: any) {
  const prices = checkHighestTrader(props.item);
  return (
    <tr>
      <td>
        <img src={props.item.gridImageLink}></img>
      </td>
      <td>
        <div className="short-name">{props.item.shortName}</div>
        <div className="long-name">{props.item.name}</div>
      </td>
      <td>
        <div>{prices.source}</div>
        <img className="trader-img" src={prices.sourceImg}></img>
        <div className="price">
          {prices.source == "Peacekeeper" ? (
            <div>
              <div>${prices.stringPrice}</div>
              <div>{prices.stringPriceRUB} ₽</div>
            </div>
          ) : (
            <div>{prices.stringPriceRUB} ₽</div>
          )}{" "}
        </div>
      </td>
      <td className="price">
        {prices.fleaPriceRUB ? (
          <div>{prices.stringPriceFlea} ₽</div>
        ) : (
          <div className="flea-banned">CANNOT BE SOLD ON FLEA</div>
        )}
      </td>
      <td>
        <a href={props.item.wikiLink}>Wiki Page</a>
      </td>
    </tr>
  );
}