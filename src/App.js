import React, { useState } from 'react'
import "./App.css"
import {FaStar} from "react-icons/fa";


const colors={
  orange:"#FFBA5A",
  grey:"#a9a9a9"
}

const styles={
  container:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  textarea:{
    border:"1px solid black",
    borderRadius: 5,
    width:300,
    margin:"20px 0",
    minHeight:100,
    padding:10
  },
  button:{
  
    border:"1px solid black",
    borderRadius: 5,
    width:200,
    padding:10
  }
  
}
const App = () => {
  const stars= Array(5).fill(0);
  const [value, setValue]=useState(0);
  const [hoverValue, setHoverValue]=useState(undefined)
  const [review, setReview]=useState('')

  const handleClick = value =>{
    setValue(value)
  }
  const handleMouseOver= value=>{
    setHoverValue(value)
  }
  const handleMouseLeave=()=>{
    setHoverValue(undefined);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Review Submitted");
    setValue('');
    setReview('');
  }
  return (
    <form onSubmit={handleSubmit}>
    <div style={styles.container}>
      <h2>Review rating in react</h2>
      <div style={styles.stars}>
        {stars.map((_, index)=>{
          return(
            <FaStar
            key={index}
            size={24}
            style={{
              marginRight:10,
              cursor:"pointer"

            }}
            color={(hoverValue || value)>index ? colors.orange : colors.grey}
            onClick={()=> handleClick(index+1)}
            onMouseOver={()=> handleMouseOver(index+1)}
            onMouseLeave={handleMouseLeave}
            value={value}
            />
          )
        })}
      </div>
      <textarea onChange={e=> setReview(e.target.value)} style={styles.textarea} placeholder='Description' required value={review}></textarea>
      <button  style={styles.button}>Submit</button>
      <button  style={styles.button}>Reset</button>
    </div>
    <div>
    </div>
      </form>
  )
};


export default App
