import React, {Component} from 'react';
import Record from './record'
import * as RecordsAPI from '../utils/RecordsAPI'
import RecordForm from './recordform'


class Records extends Component {
  constructor () {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      records: [
        
      ]
    }
  }

  componentDidMount() {
    RecordsAPI.getAll().then(
      response => {this.setState({
        records: response.data,
        isLoaded: true
      })
    }).catch(error => {
      this.setState({
        error: error.message,
        isLoaded: true
      })
    })
  }

  addRecord() {
     
  }

  render() {
    const { error, isLoaded, records } = this.state
    let recordsComponent;

    if (error) {
      recordsComponent = <div>Error: {error}</div>
    } else if (!isLoaded) {
      recordsComponent =  <div>Loading...</div>
    } else {
      recordsComponent =  (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, i) =><Record key = {record.id} {...record}/>)}
          </tbody>        
        </table>
      )
    }
    return (
      <div>
        <h2>Recoreds</h2>
        <RecordForm handleNewRecord={this.addRecord.bind(this)}/>
        {recordsComponent}
      </div>
    )
  }
}

  export default Records;