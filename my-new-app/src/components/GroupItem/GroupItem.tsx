import { FC, memo, useState } from 'react'
import { FormattedGroup } from '../../utils/normilizeData'
import { GroupsList } from '../GroupsList/GroupsList'
import cls from './GroupItem.module.css'
import { NavLink } from "react-router-dom"
import arrow from "../../assets/arrow.png"

type GroupItemProps = FormattedGroup

export const GroupItem: FC<GroupItemProps> = memo(({ name, groups, id }) => {
    const [isChidlrenOpened, setChildrenOpened] = useState(false)
    const chidlrenGroups = groups.length > 0
    const clickHandler = () => setChildrenOpened(prev => !prev)
    return (
        <li className={cls.GroupItem}>
            <div className={cls.GroupItem__Name}>
                <NavLink to={`group/${id}`} className={(props) => [props.isActive && cls.active, cls.link].join(" ")}>{name}</NavLink> 
                {/* Возможно тут имелось, чтобы если у категории есть подкатегории, то в ней не может быть товаров. Если это так, то тут можно было бы просто сделать вместо ссылки span */}
                {chidlrenGroups && <button className={cls.GroupItem__button} onClick={clickHandler}>
                    <img className={[isChidlrenOpened ? cls.GroupItem__active : "", cls.GroupItem__image].join(" ")} src={arrow} alt='arrow' />
                    </button>}
            </div>
            {isChidlrenOpened && chidlrenGroups && <GroupsList groups={groups} isChildren />}
        </li>
    )
})