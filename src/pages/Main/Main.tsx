import { FC, useContext, useMemo } from 'react'
import { ItemsList } from '../../components/ItemsList/ItemsList'
import { groupContext } from '../../contexts/GroupContext'
import cls from "./Main.module.css"

const Main:FC = () => {
    const [_, items] = useContext(groupContext)
    return (
        <div className={cls.Main}>
            <h1 className={cls.Main__title}>Товары без группы</h1>
            <ItemsList items={items}/>
        </div>
    )
}

export default Main