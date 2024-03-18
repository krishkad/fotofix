import React from 'react'
import { transformationTypes } from '@/constants'

const TransformationsPage = ({ params: { feature } }: SearchParamProps) => {

    const transformation = transformationTypes[feature];

    return (
        <div className='wrapper'>
            <div>
                <h1 className="text-2xl font-bold">{transformation.title}</h1>
                <span className='text-sm font-semibold text-zinc-400'>{transformation.subTitle}</span>
            </div>

        </div>
    )
}

export default TransformationsPage