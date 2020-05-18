import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as itemActions from './action/action'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      show: false
    }
  }

  onchangeItem = (e) => {
    this.setState({
      todo: e.target.value,
    })
  }

  addItem = () => {
    if (this.state.todo === "") {
      alert("alanı doldur");
    }
    else {
      this.props.onAddProduct({
        todo: this.state.todo,
        id: Math.random(),
        show: this.state.show
      });
      this.setState({
        todo: "",
        show: false
      })
    }
  }

  editItem = (item) => {
    this.setState({
      todo: item.todo,
      id: item.id,
      show: true
    })
  }

  updateItem = () => {
    this.props.onUpdateProduct(this.state)
    this.setState({
      show: false,
      todo: ""
    })
  }

  deleteItem = (item) => {
    this.props.onDeleteProduct(item);
    this.setState({
      todo: "",
      show: false
    })
  }

  render() {
    return (
      <div className="container">
        <div className="mt-3 mb-3">
          <h5>Title</h5>
          <input className="form-control w-25" value={this.state.todo} onChange={this.onchangeItem} type="text" />
          <div className="mt-3">
            {this.state.show ?
              <button className="btn btn-success" onClick={this.updateItem}>Update</button>
              : <button className="btn btn-primary" onClick={this.addItem}>Add Item</button>
            }
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(item => {
              return (
                <tr key={item.id}>
                  <td>
                    {item.todo}
                  </td>
                  <td className="text-center">
                    <button className="btn btn-danger mr-2" onClick={() => this.deleteItem(item)}>Delete</button>
                    <button className="btn btn-info" onClick={() => this.editItem(item)}>Edit</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state
  }
}

const mapDispatchToProps = {
  onAddProduct: itemActions.addAction,
  onDeleteProduct: itemActions.deleteAction,
  onUpdateProduct: itemActions.updateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)