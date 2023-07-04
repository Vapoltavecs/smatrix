import { Item } from './../types/item';
import { TGroup } from './../types/group';

export type FormattedGroup = {
    groups: FormattedGroup[],
    items: Item[]
} & TGroup

export type NormilizedData = [FormattedGroup[], Item[]]

export const normilizeGroups = (groups: TGroup[]): FormattedGroup[] => {
    const arr: FormattedGroup[] = [...groups.filter(group => !group.idParent).map(group => ({ ...group, groups: [], items: [] }))] // По дефолту добавляю все родительские группы
    groups.filter(group => group.idParent).forEach(group => {
        const parentGroup = findGroup(arr, group.idParent)
        parentGroup.groups.push({ ...group, groups: [], items: [] })
    })
    return arr
}

export const normilizeItems = (items: Item[], groups: FormattedGroup[]):NormilizedData  => {
    items.filter(item => item.idGroup).forEach(item => {
        const group = findGroup(groups, item.idGroup)
        group.items.push(item)
    })
    return [groups, items.filter(item => !item.idGroup)]

}

export const normilizeData = (data: {groups: TGroup[], items: Item[]}):NormilizedData => {
    return normilizeItems(data.items, normilizeGroups(data.groups))
}   

export function findGroup(groups: FormattedGroup[], groupId: number): FormattedGroup { // Рекурсивная функция для поиска группы.
    const group = groups.find(group => group.id === groupId)
    if (!group) {
        return groups.map(group => findGroup(group.groups, groupId)).filter(Boolean)[0]
    }
    return group
}