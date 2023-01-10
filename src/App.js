import React from "react";
import { FilterableProductTable } from "./components/FilterableProductTable";
import { items } from "./data/items";

export default class App extends React.Component {
  render() {
    return (
      <>
        <FilterableProductTable items={items}/>
      </>
    );
  }
}