import { FC } from 'react'
import { Item as TItem } from '../../types/item'
import cls from './Item.module.css'

type ItemProps = TItem

export const Item: FC<ItemProps> = ({ product }) => {
    return (
        <div className={cls.Item}>
            <p className={cls.Item__name}>{product.name}</p>
            <p className={cls.Item__description}>{product.description}</p>
            <div className={cls.Item__info}>
                <p className={cls.Item__price}>{product.price / 100} р</p>
                {product.weight && <p>{product.weight}{product.unitType}</p>}
            </div>
            
        </div>
    )
}