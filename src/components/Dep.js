import React, {Component} from 'react'
var XLSX = require('xlsx')
var workbook = XLSX.readFile('kkk.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

class Dep extends Component{
  render() {
    return(
      <div>{xlData}</div>
    )
  }
}



export default Dep
