import React from "react"


const handleFocus = () => {
    console.log('Good!');
  }

  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  }

   function EyesOnMe() {
    return (
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    );
  }


export default EyesOnMe;
// Code EyesOnMe Component Here

// function focus (){
//     console.log ("Good!")
// }

// function blur (){
//     console.log ("Hey! Eyes on me!")

// }

// function handelEvent (event){
//     if(event = true)
//         console.log ("good!")
//     else{
//         console.log("Eyes on me!")
//     }
        
// }


// function EyesOnMe(){
//     return (
//         <div >
//             <button onClick={focus} onMouseLeave={blur}>Eyes on me</button>
//         </div>
//     )
// }




