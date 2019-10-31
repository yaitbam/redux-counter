import React, { Component } from 'react'
import { connect  } from 'react-redux'

class Counter extends Component {

    // state= {
    //     counter: 0
    // }

    // increament = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    // decreament = () => {
    //     this.setState({
    //         counter: this.state.counter - 1
    //     })
    // }

    render() {
        return (
            <div>
                Counter: { this.props.counter }
                <br/>
                <button onClick={ this.props.increament }>+</button>
                <button  onClick={ this.props.decreament}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increament: () => dispatch({type: 'INCREAMENT'}),
        decreament: () => dispatch({type: 'DECREAMENT'})
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Counter)