import { FC, memo } from 'react'
import { FormattedGroup } from '../../utils/normilizeData'
import { GroupItem } from '../GroupItem/GroupItem'
import cls from './GroupsList.module.css'
import { NavLink } from "react-router-dom"

type GroupsListProps = {
    groups: FormattedGroup[],
    isChildren?: boolean
}

export const GroupsList: FC<GroupsListProps> = memo(({ groups, isChildren }) => {
    return (
        <nav className={[cls.GroupsList__nav, isChildren && cls.children].join(" ")}>
            {!isChildren && <p className={cls.Groups__title}>Категории</p>}
            <ul className={[cls.GroupsList, isChildren && cls.children].join(" ")}>
                {groups.map(el => <GroupItem {...el} key={el.id}/>)}
                {!isChildren && <li className={cls.GroupsList__link}><NavLink to="/" >На главную</NavLink></li>}
            </ul>
        </nav>
    )
})