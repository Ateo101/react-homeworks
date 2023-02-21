import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    const wrongSortValue = sort !== up && sort !== down && sort !== ''

    return sort === ''
        ? down
        : sort === down
            ? up
            : wrongSortValue
                ? down
                : ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    /*const up = '0' + value
    const down = '1' + value*/
    const up = value
    const down = value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            //id={id + '-sort-' + value}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                //id={id + '-icon-' + sort}
                id={id + '-sort-' + value}
                src={icon}
            />

            {/*{icon} а это убрать*/}
        </span>
    )
}

export default SuperSort
