import React from 'react'
import style from './footer.module.css'

function Footer() {
  return (
   <>
   <div style={{display:'flex',justifyContent:'space-around',marginTop:'60px'}}>
    <div>
        <h5 style={{fontSize:'20px'}}>Copyright ©2023 All rights reserved | This template is made with 	&#x2764; by<span style={{color:'#f6214b'}}>Colorlib</span></h5>

    </div>
    <div className={style.footer} style={{fontSize:'20px'}}>
    <i class="fa-brands fa-facebook-f"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-solid fa-globe"></i>
    <i class="fa-brands fa-behance"></i>
        
    </div>


   </div>
   
   
   </>
  )
}

export default Footer