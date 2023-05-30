import React, { useEffect, useState } from 'react'
import style from './about.module.css'



function About() {

    const [cards,setCards]=useState([])
    useEffect(()=>{
        fetch('http://localhost:6060/api/card')
        .then(res=>res.json())
        .then(info=>
            setCards(info)
            )
    },[])
   
    const [value,setValue]=useState('')
    const handleChange=(e)=>{
        setValue(e.target.value)
    }


  return (
    <>
    <h1 style={{marginLeft:'40%',marginTop:'100px'}}>Requirements to be Immigrants</h1>
    <p style={{marginLeft:'40%',marginTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
    <p style={{marginLeft:'50%'}}>ut labore et dolore magna aliqua.</p>

    <input onChange={handleChange} style={{marginLeft:'40%',marginTop:'40px',width:'200px',height:'40px'}} type="text" />

    <div style={{marginTop:'80px',display:'flex',gap:'30px',justifyContent:'center'}} className={style.div}>
        {cards &&cards.filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))
        .map((card)=>(
            <div style={{width:'300px',height:'400px',border:'1px solid ',}}>
            <img style={{width:'297px'}}  src={card.imageUrl} alt="" />
            <button className={style.card} style={{height:'40px',marginLeft:'60px',marginTop:'10px',width:'100px',backgroundColor:'black',color:'white'}}>{card.button}</button>
            <h2 style={{marginTop:'10px',marginLeft:'10px'}}>{card.name}</h2>
            <p style={{marginTop:'10px',marginLeft:'10px'}}>{card.title}<br/>sit amet, consectetur.</p>


        </div>
        ))}

        {/* <div style={{width:'300px',height:'400px',border:'1px solid ',}}>
           <img style={{width:'297px'}}  src={cards.imageUrl} alt="" />
            <button  style={{height:'40px',marginLeft:'60px',marginTop:'10px',width:'100px',backgroundColor:'black',color:'white'}}>Canada</button>
            <h2 style={{marginTop:'10px',marginLeft:'10px'}}>Addiction When Gambling<br/>Becomes A Problem</h2>
            <p style={{marginTop:'10px',marginLeft:'10px'}}>inappropriate behavior ipsum dolor<br/>sit amet, consectetur.</p>


        </div>

        <div style={{width:'300px',height:'400px',border:'1px solid ',}}>
       <img style={{width:'297px'}}  src={cards.imageUrl} alt="" />
            <button  style={{height:'40px',marginLeft:'60px',marginTop:'10px',width:'100px',backgroundColor:'black',color:'white'}}>Germany</button>
            <h2 style={{marginTop:'10px',marginLeft:'10px'}}>Addiction When Gambling<br/>Becomes A Problem</h2>
            <p style={{marginTop:'10px',marginLeft:'10px'}}>inappropriate behavior ipsum dolor<br/>sit amet, consectetur.</p>


        </div>


        
        <div style={{width:'300px',height:'400px',border:'1px solid ',}}>
            <img style={{width:'297px'}}  src={cards.imageUrl} alt="" />
            <button  style={{height:'40px',marginLeft:'60px',marginTop:'10px',width:'100px',backgroundColor:'black',color:'white'}}>Australia</button>
            <h2 style={{marginTop:'10px',marginLeft:'10px'}}>Addiction When Gambling<br/>Becomes A Problem</h2>
            <p style={{marginTop:'10px',marginLeft:'10px'}}>inappropriate behavior ipsum dolor<br/>sit amet, consectetur.</p>


        </div> */}

    </div>
    
    
    
    </>
    
  )
}

export default About