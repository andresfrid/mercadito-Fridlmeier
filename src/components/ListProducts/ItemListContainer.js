import Card from '../Card/Card.js';
const ItemListContainer = () => {

    return(
        <div className="container-cards">
            <Card title={'Remera'} talle={'XL'} price={'200'}/>
            <Card title={'Pantalon'} talle={'L'} price={'300'}/>
            <Card title={'Buzo'} talle={'XXL'} price={'500'}/>
            <Card title={'Jean'} talle={'s'} price={'250'}/>
            <Card title={'musculosa'} talle={'XL'} price={'150'}/>
        </div>
    )
}
export default ItemListContainer;