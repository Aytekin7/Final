import React from 'react'
import style from './blog.module.css'


function Blog() {
  return (
    <>
    <h1 style={{marginLeft:'35%',marginTop:'200px'}}>Our Unique Features that can impress you</h1>
    <p style={{marginLeft:'40%'}}>Who are in extremely love with eco friendly system.</p>
    <div style={{display:'flex',gap:'20px',justifyContent:'center',marginTop:'200px'}}>
        <div style={{width:'300px',height:'150px',border:'1px solid'}}>
            <h2 className={style.blog} style={{marginLeft:'10px',marginTop:'20px'}}><i class="fa-solid fa-person"></i>Expert Technicians</h2>
            <p style={{marginLeft:'10px',marginTop:'10px'}}>Usage of the Internet is becoming more<br/>common due to rapid advancement of<br/>technology and power.</p>

        </div>
        <div style={{width:'300px',height:'150px',border:'1px solid'}}>
            <h2  className={style.blog} style={{marginLeft:'10px',marginTop:'20px'}}><i class="fa-solid fa-person"></i>Professional Service</h2>
            <p style={{marginLeft:'10px',marginTop:'10px'}}>Usage of the Internet is becoming more<br/>common due to rapid advancement of<br/>technology and power.</p>

           </div>

         <div style={{width:'300px',height:'150px',border:'1px solid'}}>
            <h2  className={style.blog}  style={{marginLeft:'10px',marginTop:'20px'}}><i class="fa-solid fa-person"></i>Great Support</h2>
            <p style={{marginLeft:'10px',marginTop:'10px'}}>Usage of the Internet is becoming more<br/>common due to rapid advancement of<br/>technology and power.</p>

         </div>

       </div>



     <div style={{display:'flex',justifyContent:'center',gap:'20px',marginTop:'20px'}}>
     <div style={{width:'300px',height:'150px',border:'1px solid'}}>
        <h2  className={style.blog}  style={{marginLeft:'10px',marginTop:'20px'}}><i class="fa-solid fa-person"></i>Technical Skills</h2>
        <p style={{marginLeft:'10px',marginTop:'10px'}}>Usage of the Internet is becoming more<br/>common due to rapid advancement of<br/>technology and power.</p>

      </div>
     <div style={{width:'300px',height:'150px',border:'1px solid'}}>
        <h2  className={style.blog}  style={{marginLeft:'10px',marginTop:'20px'}}><i class="fa-solid fa-person"></i>Highly Recomended</h2>
        <p style={{marginLeft:'10px',marginTop:'10px'}}>Usage of the Internet is becoming more<br/>common due to rapid advancement of<br/>technology and power.</p>
    </div>
 
     <div style={{width:'300px',height:'150px',border:'1px solid'}}>
        <h2  className={style.blog} style={{marginLeft:'10px',marginTop:'20px'}}><i class="fa-solid fa-person"></i>Positive Reviews</h2>
        <p style={{marginLeft:'10px',marginTop:'10px'}}>Usage of the Internet is becoming more<br/>common due to rapid advancement of<br/>technology and power.</p>
        </div>

     </div>


    
    </>
    
  )
}

export default Blog