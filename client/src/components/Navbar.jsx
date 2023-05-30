import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

function Navbar() {
  return (
<>
<div style={{position:'fixed'}}>
<div className={style.header}>
    <h2>We believe we helps people<br/>for happier lives</h2>
    <img src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp" alt="" />
    <div style={{display:'flex'}}>
    <p style={{marginTop:'30px'}}>+880 123 12 658 439 </p>
    <i style={{marginLeft:'20px',marginTop:'15px',height:'50px',width:'50px',backgroundColor:'red',fontSize:'20px',paddingTop:'10px',paddingLeft:'15px'}} class="fa-solid fa-phone"></i>
    </div>


</div>
<ul className={style.navbar}>
    <li>
        <Link style={{textDecoration:'none',color:'red'}} to='/'>HOME</Link>
    </li>
    <li>ABOUT</li>
    <li>IMMIGRATION</li>
    <li>COURCE</li>
    <li>COUNTRY</li>
    <li>BLOG</li>
    <li>CONTACT</li>
    <li>ELEMENTS</li>

</ul>
</div>

</>
  )
}

export default Navbar