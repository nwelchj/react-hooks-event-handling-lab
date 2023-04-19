// Code Keypad Component Here

function handelChange(event){
    console.log (event.target.value )
}

function Keypad (){

    return (
        <div>
            <input type="username"/>
            <input type="password" onChange={handelChange} />
        </div>
    )
}

export default Keypad;