import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
    return (
        <div className="w-full flex justify-center">
            <UserProfile />
        </div>
    )
}

export default ProfilePage