import React from "react";
import EyesOnMe from "./EyesOnMe";

function handelChange(event){
    console.log ("Entering password..." )
}

function Keypad (){

    return (
        <div>
          <input type="password" onChange={handelChange} />
          <EyesOnMe/>
        </div>
      );
    }
  
export default Keypad;