import { ProductRow } from "./ProductRow";

export function ProductCategoryRow(props) {
    const items = props.filter
    const itemsSport = items.filter(item => item.category === "Sporting Goods")
    const itemsElec = items.filter(item => item.category === "Electronics")
    return (
        <table>
            <thead>
                <tr className="head">
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                <ProductRow itemsSport={itemsSport} itemsElec={itemsElec} />
            </tbody>
        </table>
    )
}