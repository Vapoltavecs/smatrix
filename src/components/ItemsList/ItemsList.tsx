import { FC } from 'react'
import { Item as TItem } from '../../types/item'
import { Item } from '../Item/Item'
import cls from './ItemsList.module.css'

type ItemsListProps = {
    items: TItem[]
}

export const ItemsList: FC<ItemsListProps> = ({ items }) => {

    return <div className={cls.ItemsList}>{items.length > 0 ? items.map(item => <Item key={item.id} {...item} />) : <div>В этой категории нет товаров</div>}</div>
}