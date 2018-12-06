import React, { Component } from 'react'

export default class AboutPage extends Component {
    onCLick = () => {
        const { history } = this.props
        //shistory.goBack()
        history.go(-1)
    }
    render() {
        return (
            <div>
                <h2>About</h2>
                <button onClick ={this.onClick}>go back</button>
            </div>
        )
    }
}
