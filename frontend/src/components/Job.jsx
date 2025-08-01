import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate=useNavigate();
    // const jobId="abcdefghi";
    const daysAgoFunction=(mongodbTime)=>{
const createdAt=new Date(mongodbTime);
const currentTime=new Date();
const timeDifference=currentTime - createdAt;
return Math.floor(timeDifference/(1000*24*60*60))
    }
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt)===0 ? "Today" :`${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className='rounded-full ' size="icon"> <Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button>
                    <Avatar>
                        <AvatarImage src="https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-14561.jpg" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-md text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>

            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant="ghost">
                   {job?.position}
                </Badge>
                <Badge className='text-[#F83002] font-bold' variant="ghost">
                   {job?.jobType}
                </Badge>
                <Badge className='text-[#7209B7] font-bold' variant="ghost">
                    {job?.salary}LPA
                </Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=>navigate(`/description/${job?._id}`)} variant="outline" className='cursor-pointer'>Details</Button>
                <Button className='bg-[#7209b7]'>Save for Later</Button>
            </div>
        </div>
    )
}

export default Job