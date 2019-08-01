import React from "react"


class App extends React.Component
{
    constructor ()
    {
        super()
        
        this.state =  {
            
            isLoading : false,
            character :  {}
        }
    }
    
    componentDidMount ()
    {
        this.setState({isLoading : true})
        fetch("https://swapi.co/api/people/30/")
            .then(response => response.json())
            .then(data =>{
                            this.setState({
                                character : data,
                                isLoading : false
                                
                            })
            
                            } 
                 )
    }
    
    
    render ()
    {
        const text = this.state.isLoading ? "Loading..." : this.state.character.name
        
        return (
                <div>
                <h2>{text}</h2>
                </div>
        
        )
    }
    
}





export default App