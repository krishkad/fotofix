import React from 'react'

const TransformationHeader = ({ transformation }: { transformation: { title: string, subTitle: string } }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{transformation.title}</h1>
            <span className='text-sm font-semibold text-zinc-400'>{transformation.subTitle}</span>
        </div>
    )
}

export default TransformationHeader