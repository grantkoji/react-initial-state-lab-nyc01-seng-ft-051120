// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
           secondsLeft: props.initialCount
        }
    }

     

    render () {
        let message = 'You entered a negative time'
        if (this.state.secondsLeft === 0) {
            message = 'Boom!' 
        } else if (this.state.secondsLeft > 0) {
            message = `${this.state.secondsLeft} seconds left before I go boom!` 
        }
        return (
            <div>{message}</div>
          )
    }
}

export default Bomb