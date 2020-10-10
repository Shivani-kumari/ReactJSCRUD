import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {

            ...this.returnStateObject()
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }
    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                id: "",
                customer_name: "",
                customer_email: "",
                product: "",
                quantity: ""
            }
        else
            return this.props.list[this.props.currentIndex]
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)

    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <input name="id" placeholder="id" onChange={this.handleInputChange} value={this.state.id} /><br />
                    < input name="customer_name" placeholder="customer_name" onChange={this.handleInputChange} value={this.state.customer_name} /><br />
                    < input name="customer_email" placeholder="customer_email" onChange={this.handleInputChange} value={this.state.customer_email} /><br />
                    < input name="product" placeholder="product" onChange={this.handleInputChange} value={this.state.product} /><br />
                    < input name="quantity" placeholder="quantity" onChange={this.handleInputChange} value={this.state.quantity} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
