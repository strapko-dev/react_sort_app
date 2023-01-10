import React from "react";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {filterText: '', isStockOnly: false}
        this.filterTextChange = this.filterTextChange.bind(this)
    }

    filterTextChange(e) {
        const event = e.target
        if(event.type === 'text') {
            this.setState({filterText: event.value})
        } else if (event.type === 'checkbox') {
            this.setState({isStockOnly: event.checked})
        }
    }

    render() {
        return (
            <div>
                <SearchBar 
                    text={this.state.filterText} 
                    instock={this.state.isStockOnly} 
                    filterTextChange={this.filterTextChange} 
                />
                <ProductTable 
                    items={this.props.items} 
                    text={this.state.filterText} 
                    instock={this.state.isStockOnly} 
                    filterTextChange={this.filterTextChange} 
                />
            </div>
        )
    }
}