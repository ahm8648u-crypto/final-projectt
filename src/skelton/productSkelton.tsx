import { Skeleton } from "@mui/material"

export default function ProductSkelton({count=8}:{count ?:number}) {
    const array=Array(count).fill(0)
  return (
    array.map((_,index)=>(
<div className="
      ">
        <div className='  w-80  mt-15   '>
            {/* <Skeleton variant="rectangular" width={'100%'} height={250} /> */}

              <Skeleton variant="rectangular" animation={"wave"} width={300} height={300} />

                <div className='ml-20 mt-4'><Skeleton animation={"wave"} variant="rectangular" width={150} height={20} />
</div>
             <div className='ml-27 mt-4'><Skeleton animation={"wave"} variant="rectangular" width={100} height={20} />
</div>
  
                <div className='flex justify-between gap-12 mt-2 '>
                    <div
                    className=' p-2  '>
                        <Skeleton animation={"wave"} variant="rectangular" width={40} height={40} />
</div>
                    <div
                    className='p-2 ml-35'><Skeleton animation={"wave"} variant="rectangular" width={40} height={40} />
</div>
        
                </div>
            </div>
        

    </div>
    ))
    
  )
}
