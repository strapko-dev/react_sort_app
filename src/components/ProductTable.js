import { ProductCategoryRow } from "./ProductCategoryRow";

export function ProductTable(props) {

    const items = props.items
    const text = props.text
    const instock = props.instock
    let filtred
    let checked

    if(text) {
        filtred = items.filter(item => item.name === text)
        checked = filtred
    } else if (instock === true) {
        checked = items.filter(item => item.stocked === instock)
    } else {
        checked = items
    }

    return (
        <div>
            <ProductCategoryRow filter={checked} />
        </div>
        )
}