//import axios from '../public/http'
import moment from 'moment'
let decimalTwo = (value:string) => { 
  // var value = value.toString();
  var result = Number(value).toFixed(2)
  return result
}
let formdate = (value:string) => {
  //value = parseInt(value)
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
}
let formSimpledate = (value:string) => {
 // value = parseInt(value)
  return moment(value).format('YYYY-MM-DD')
}
export {
  decimalTwo,
  formdate,
  formSimpledate
}
