export function SearchBar(props) {
    return (
        <div>
            <input type='text' placeholder="Search..." value={props.text} onChange={props.filterTextChange} />
            <br/>
            <input type='checkbox' id="search" checked={props.instock} onChange={props.filterTextChange} />
            <label htmlFor="search">Only show products in stock</label>
        </div>
    )
}