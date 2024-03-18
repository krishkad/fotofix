import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const HomeBtn = () => {

    return (
        <div className="flex itesm-center gap-5">
            <Link href={`/transformations/restore`}>
                <Button>Use For Free</Button>
            </Link>
            <Link href={'/credits'}>
                <Button variant={'secondary'}>View Plans</Button>
            </Link>
        </div>
    )
}

export default HomeBtn