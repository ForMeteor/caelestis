import moment from 'moment'
let decimalTwo = (value:any) => { // 两位小数
// var value = value.toString();
  var result = Number(value).toFixed(2)
  return result
}
let formdate = (value:any) => {
  value = parseInt(value)
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
}
export default {
  formdate,
  decimalTwo
}
