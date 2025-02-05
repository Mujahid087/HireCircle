import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'


const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='items-center flex justify-between'>
                <p className='text-sm text-gray-500 '>2 days ago</p>
                <Button variant="outline" className='rounded-full' size="icon"><Bookmark /></Button>

            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button>
                    <Avatar>
                        <AvatarImage src="data:image/jpeg;base64,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" />
                    </Avatar>
                </Button>
                <div>
                    <h1>Company Name</h1>
                    <p>India</p>
                </div>


            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, repellat! Sit beatae optio voluptas dolores dolorem voluptate, eaque mollitia voluptatem!</p>

            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209B7] font-bold'} variant="ghost">24 LPA</Badge>

            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant='outline'>Details</Button>
                <Button className='bg-[#7209B7]'>save for later</Button>
            </div>

        </div>
    )
}

export default Job
