import { FC, useContext, useMemo } from 'react'
import { groupContext } from '../../contexts/GroupContext'
import cls from './Group.module.css'
import { useParams, useNavigate } from "react-router-dom"
import { findGroup } from '../../utils/normilizeData'
import { ItemsList } from '../../components/ItemsList/ItemsList'

const Group: FC = () => {
    const [groups] = useContext(groupContext)
    const id = useParams()
    const group = useMemo(() => findGroup(groups, Number(id.id)), [id])

    const navigate = useNavigate()

    if(!group){
        return <div>Такой группы не существует <button onClick={() => navigate(-1)}>Вернуться назад</button></div>
    }
    return (
        <div className={cls.Group}>
            <h1 className={cls.Group__title}>{group.name}</h1>
            <ItemsList items={group.items}/>
        </div>
    )
}

export default Group