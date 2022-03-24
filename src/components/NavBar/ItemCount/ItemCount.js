import React,{useState} from 'react';

const ItemCount = ({stock}) => {
    const [count, setCount]=useState(1)
    const onAdd = () => {
        if(count < stock)
        setCount(count + 1)
    }
    const onRem = () => {
        if(count > 0)
        setCount(count - 1)
    }
    
    return (
        <>
        <button onClick={onRem}>-</button>
        <p>{count}</p>
        <button onClick={onAdd}>+</button>
        </>
    )
}
export default ItemCount;