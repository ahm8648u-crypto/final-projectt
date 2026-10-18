import { Skeleton } from "@mui/material"

export default function ProductSkelton({count=8}:{count ?:number}) {
    const array=Array(count).fill(0)
  return (
    array.map((_,index)=>(
<div className="
      ">
        <div className='  w-80  mt-15   '>
            {/* <Skeleton variant="rectangular" width={'100%'} height={250} /> */}

              <Skeleton variant="rectangular" animation={"wave"} width={150} height={200} />

                <div className='ml-5 mt-4 '><Skeleton animation={"wave"} variant="rectangular" width={100} height={20} />
</div>
             <div className='ml-9 mt-4'><Skeleton animation={"wave"} variant="rectangular" width={70} height={20} />
</div>
  
                <div className='flex  gap-14 mt-2 '>
                    <div
                    className=' p-2  '>
                        <Skeleton animation={"wave"} variant="rectangular" width={30} height={30} />
</div>
                    <div
                    className='p-2 '><Skeleton animation={"wave"} variant="rectangular" width={30} height={30} />
</div>
        
                </div>
            </div>
        

    </div>
    ))
    
  )
}
