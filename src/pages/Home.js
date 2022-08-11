import React, {useState} from 'react'
import Slider from '../components/Slider';

const Home = (props) => {
  const url = 'https://www.wp-course.site/wp-json/youthink/post';
  const [data, setData] = useState ({
      subscribe:" "
  })
     function submit(e){
        axios.post(url,{
        subscribe:data.subscribe
    })
         .then(res=>{
         console.log(res.data)
    })
}

     function handle(e){
       const newdata={...data}
       newdata[e.target.id]=e.target.value
       setData(newdata)
       console.log(newdata)
}
  return (
      <div>
      <Slider/>
         <div className="container my-5">
            <div className="row">
              <div className="col">
                 <h1>Blog subscribing website</h1>
                    <p>Subscribe down for more blogs...</p>
             <form className="">
                    <div className="row g-3 align-items-center">
                        <div className="col-9">
                            <div className="input-group">
                                <input onChange={(e)=> handle(e)} id='subscribe' value={data.subscribe} type="text" className="form-control" 
                                    placeholder="Subscribe here please !"/>
                            </div>
                        </div>
                      <div className="col-3">
                  <button onClick={(e)=>submit(e)  }  type="submit" className="btn btn-primary w-100" >Subscibe</button>
                </div>
              </div>
             </form>
          </div>
        </div>
    </div>
</div>
)
}

export default Home