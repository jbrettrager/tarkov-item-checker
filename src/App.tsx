import React, { useState, useEffect } from "react";
import "./App.css";
import Item from "./Item.tsx";
import {ItemType, ItemDb} from "./types"
export default function App() {
  const [itemData, setItemData] = useState<ItemDb>([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    async function createDb(): Promise<void> {
      try {
        const response = await fetch("https://api.tarkov.dev/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: `{
              items {
                id
                name
                shortName
                wikiLink
                gridImageLink
                sellFor {
                    price
                    priceRUB
                    source
                }
                properties {
                    __typename
                    }
              }
          }`,
          }),
        });
        const result = await response.json();
        setItemData(result.data.items);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    createDb();
  }, []);
  function searchFunction(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }
  return (
    <div>
      {itemData ? (
        <div>
          <div className="page-title">Tarkov Quick Sell Price Reference</div>
          <hr></hr>
          <div className="title-search-title">Search By Name:</div>
          <input
            type="text"
            placeholder="検索"
            onChange={searchFunction}
            value={searchText}
            className="item-search"
          ></input>
          {searchText ? (
            itemData.filter((item) => {
              return item.shortName.toLowerCase().includes(searchText);
            }).length === 0 ? (
              <div>
                <h2>No Matching Items Found.</h2>
              </div>
            ) : itemData.filter((item) => {
                return item.shortName.toLowerCase().includes(searchText);
              }).length > 100 ? (
              <div>
                <h2>Too many results, please add more to your query.</h2>
                <div>
                  {
                    itemData.filter((item) => {
                      return item.shortName.toLowerCase().includes(searchText) || item.name.toLowerCase().includes(searchText);
                    }).length
                  }{" "}
                  Items Found
                </div>
              </div>
            ) : (
              <div>
                <table className="item-table">
                  <tr className="table-title">
                    <th className="title">Icon</th>
                    <th>Name</th>
                    <th>Trader</th>
                    <th>Flea</th>
                    <th>Wiki</th>
                  </tr>
                  {itemData
                    .filter((item) => {
                      return item.shortName.toLowerCase().includes(searchText);
                    })
                    .map((item) => (
                      <Item item={item} />
                    ))}
                </table>
                <div>
                  {
                    itemData.filter((item) => {
                      return item.shortName.toLowerCase().includes(searchText);
                    }).length
                  }{" "}
                  Items Found
                </div>
              </div>
            )
          ) : (
            <h2>Please enter text into the search box to display items.</h2>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
