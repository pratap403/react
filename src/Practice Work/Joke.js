import React from "react"

function Joke (props) {
    return(
    
<div> 
        
    {/*<h3 style = {{display: props.question ? "block" : "none"}}> Questions: {props.question}</h3>
    <h5 style = {{color: props.question ? "black" : "#888888"}}> Answer: {props.punchLine}</h5> 
    
    or another way of doing was given below */}
        
        <h3 style = {{display: !props.question && "none"}}> Questions: {props.question}</h3>
        <h5 style = {{color: !props.question && "#888888"}}> Answer: {props.punchLine}</h5>

        <hr/>
</div>

    )
}
export default Joke