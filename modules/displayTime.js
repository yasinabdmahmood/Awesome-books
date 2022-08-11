import {DateTime} from "./luxon.js"
const displayTime=()=>{
    let now = DateTime.now();
    now=now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)
    document.getElementById('date').innerHTML = now;
  }

export default displayTime;