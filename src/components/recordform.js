import React, {Component} from 'react';
import * as RecordAPI from '../utils/RecordsAPI' 

export default class RecordForm extends Component {
  constructor () {
    super()
    this.state = {
      date: "",
      title: "",
      amount: ""
    }
  }

  valid() {
    return this.state.date && this.state.title && this.state.amount
  }

  handleChange(event) {
    let name, obj;
    name = event.target.name
    this.setState((
      obj = {},
      obj[name] = event.target.value,
      obj
    ))
  }

  handleSubmit(e) {
    e.preventDefault();
    let state = this.state;
    const data = {
      date: state.date,
      title: state.title,
      amount: Number.parseInt(state.amount, 0)
    }
    RecordAPI.create(data).then(
      response => this.props.handleNewRecord
    ).catch(err => {
      console.log('error: ', err.message)
    })
  }

  render() {
    return ( 
     <form className="form-inline mb-2" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group col-md-3">
          <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Date" name="date" value={this.state.date}/>
        </div>
        <div className="form-group col-md-3">
          <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Title" name="title" value={this.state.title}/>
        </div>
        <div className="form-group col-md-3">
          <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Amount" name="amount" value={this.state.amount}/>
        </div>
        <button className="btn btn-primary col-md-3"  disabled={!this.valid()}>Create Record</button>
     </form>
    )
  }
}

