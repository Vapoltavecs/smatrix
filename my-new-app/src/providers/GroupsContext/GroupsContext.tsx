import { FC, ReactNode, useState } from 'react'
import { groupContext } from '../../contexts/GroupContext'
import { normilizeData } from "../../utils/normilizeData"
const data = require("../../assets/dicrtionary.json")

type Props = {
    children: ReactNode
}

export const GroupsProvider: FC<Props> = ({children}) => {
    const [groups, setGroups] = useState(normilizeData(data))

    return <groupContext.Provider value={groups}>{children}</groupContext.Provider>
}