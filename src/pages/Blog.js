import React, {useState, useEffect, useRef} from 'react'
import Posts from "../components/Posts"
import Sidebar from "../components/Sidebar"
import Footer from '../components/Footer'
import Fetch from '../components/Fetch'

const Blog = (props) => {

  const [ page, setPage ] = useState(2);
  const [ url, setUrl ] = useState(`https://www.wp-course.site/wp-json/youthink/posts?page=1`)
  const { data, error, loading} = Fetch(url)
  const clickhandler = () => {
      setPage(page+1)
      setUrl(`https://www.wp-course.site/wp-json/youthink/posts?page=${page}`)
  }

  return (
 <div>
        {error && <div>Could not fetch data of that resource</div>}
        {loading && <div className='text-center fs-4 text-muted'>Loading...</div>}
        <h1 style={{backgroundColor:"lightgrey" ,padding:'20px',  height:"100px"}}>Check our latest posts</h1>

        {data && ( 
        data["data"].map((post) => (
                    
        <div className="container my-5" key={post.slug}>
        <div className="row">
        <div className="col-9">
               
    <div className="card mb-3">
  <img src={post.thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.excerpt}</p>
    <p className="card-text"><small className="text-muted">Views: {post.views} date: {post.date} . {post.slug}  </small></p>

  </div>
  </div>
     </div>
            
    <div className="col-3">
    <h2>Latest comments</h2>

      <Sidebar/>
    
       

</div>
 </div>
 </div>
 
                ))
            )}
<div style={{display:'flex',justifyContent:'center'}}>
{ data && !(data['meta']['current_page']===4) &&<button style={{padding: "12px",
  display: "inline-block" ,marginBottom:'20px'}} onClick={()=>clickhandler()} type="button" className="btn btn-primary">Read more</button>}
</div>
 </div>   )
}

export default Blog