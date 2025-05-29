"use client"
import { AuthUser } from '@supabase/supabase-js'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import EmojiPicker from '../global/emoji-picker';

interface DashboardSetupProps{
    user:AuthUser;
    subscription?: {} | null
}

const DashboardSetup:React.FC<DashboardSetupProps> = ({
    user, subscription
}) => {

    const [selectedEmoji, setSelectedEmoji] = useState("")
    return (
        <Card className='w-[800px] h-screen sm:h-auto'>
            <CardHeader>
                <CardTitle>
                    Create A Workspace
                </CardTitle>

                <CardDescription className='text-green-200 '>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis deserunt modi magni quae mollitia temporibus ratione vel libero. Quam, enim?
                </CardDescription>

                <CardContent>
                    <form onSubmit={() => {}}>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='text-5xl'>
                                    <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>{selectedEmoji}</EmojiPicker>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </CardHeader>
        </Card>
    )
}

export default DashboardSetup