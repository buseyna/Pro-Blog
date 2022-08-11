import React from 'react'
import Fetch from "../components/Fetch"

const Sidebar = () => {
    const { data, error, loading} = Fetch('https://www.wp-course.site/wp-json/wp/v2/comments')
    console.log(data)
  return (
    <div>
         {error && <div>Could not fetch data of that resource</div>}
        {loading && <div className='text-center fs-4 text-muted'>Loading...</div>}
        {data && ( 
                data.map((post) => (
         <div className="col-4 w-100">
        <div className="odd:bg-gray-50 flex gap-3 items-center font-semibold text-gray-800 p-3 hover:bg-gray-100 rounded-md hover:cursor-pointer">
            <div className="flex flex-col">
                <div>
                   {post.author_name}
                </div>
                <div className="text-gray-400 text-sm font-normal">
                    {post.content.rendered}
                </div>
            </div>
        </div>
        </div>
           ))
           )}

    </div>
  )
}

export default Sidebar