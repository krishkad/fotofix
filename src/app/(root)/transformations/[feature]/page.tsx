import React from 'react'
import { transformationTypes } from '@/constants'

const TransformationsPage = ({ params }: { params: { feature: string } }) => {



    return (
        <div className='wrapper'>
            <div>
                <h1 className="text-2xl font-bold">{params.feature}</h1>
                <span className='text-sm font-semibold text-grey-400'></span>
            </div>

        </div>
    )
}

export default TransformationsPage