import { lazy, Suspense, useContext, useMemo } from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import { groupContext } from "../contexts/GroupContext"

import { GroupsList } from '../components/GroupsList/GroupsList'

const Main = lazy(() => import("../pages/Main"))
const Group = lazy(() => import("../pages/Group"))

export const Router = () => {
    const [groups] = useContext(groupContext)
    
    return (
        <HashRouter>
            <Suspense fallback={<div>loading...</div>}>
                <GroupsList groups={groups}/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/group/:id" element={<Group />} />
                </Routes>
            </Suspense>
        </HashRouter>
    )
}