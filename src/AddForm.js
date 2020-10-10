import React, { Component } from 'react'
import data from './DummyData';
import Add from './Add';

export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: -1,
      list: this.returnData()
    }
  }
  returnData() {
    if (localStorage.getItem('transactions') == null)
      localStorage.setItem('transactions', JSON.stringify(data))
    return JSON.parse(localStorage.getItem('transactions'))
  }
  handleEdit = (index) => {
    this.setState({
      currentIndex: index
    })
  }
  onAddOrEdit = (dat) => {
    var list = this.returnData()
    if (this.state.currentIndex == -1)
      list.push(dat)
    else
      list[this.state.currentIndex] = dat
    localStorage.setItem('custmer', JSON.stringify(list))
    this.setState({ list })

    this.setState({ list, currentIndex: -1 })
  }
  render() {

    return (
      <div>
        <Add onAddOrEdit={this.onAddOrEdit}
          currentIndex={this.state.currentIndex}
          list={this.state.list}
        >
        </Add>
        <ul>
          {
            this.state.list.map((costmer, index) => (
              <li key={index}>
                {costmer.customer_name}
                {costmer.customer_email}
                {costmer.product}
                {costmer.quantity}
                <button onClick={() => this.handleEdit(index)}>Edit</button>
              </li>
            ))
          }
        </ul>

      </div>
    )
  }
}
