import React from "react"

class App extends React.Component
{
    constructor() {
        super()
        
        this.state = {
            isLoggedIn : false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange ()
    {
        this.setState (prevState => {
            return { isLoggedIn : !prevState.isLoggedIn}
        })
    }
    
    render() {
        
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged In" :"Logged Out"
        return(
                <div>
                    <button onClick={this.handleChange}> {buttonText} </button>
                    <h2>{displayText}</h2>
                </div>
        )
    }
}

export default App