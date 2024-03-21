import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationHeader from '@/components/layout/TransformationHeader';
import TransformationForm from '@/components/layout/TransformationForm';

const TransformationsPage = async ({ params: { feature } }: SearchParamProps) => {

    const transformation = transformationTypes[feature];

    return (
        <div className='wrapper'>
            <TransformationHeader transformation={transformation} />
            <TransformationForm feature={feature} />
        </div>
    )
}

export default TransformationsPage