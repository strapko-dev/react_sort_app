export function ProductRow(props) {

    const itemsSport = props.itemsSport
    const itemsElec = props.itemsElec
    let cName 

    const itemsTableSport = itemsSport.map(item => {
        if (item.stocked === false) {
            cName = 'isnt_stock'
        } else if (item.stocked === true) {
            cName = 'is_stock'
        }
        return (
            <tr key={item.id} className={cName}>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        )
    })
    const itemsTableElec = itemsElec.map(item => {
        if (item.stocked === false) {
            cName = 'isnt_stock'
        } else if (item.stocked === true) {
            cName = 'is_stock'
        }
        return (
            <tr key={item.id} className={cName}>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        )
    })

    return (
        <>
            <tr className="head">
                <td>Sporting</td>
                <td>Goods</td>
            </tr>
            {itemsTableSport}

            <tr className="head">
                <td>Electronics</td>
            </tr>
            {itemsTableElec}
        </>
    )
}