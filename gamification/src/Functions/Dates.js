export function dateToString(date){
    let day = date.getDate() < 10 ? "0"+String(date.getDate()) : String(date.getDate());
    let month = date.getMonth() +1 < 10 ?  "0"+String(date.getMonth()+1) : String(date.getMonth()+1);
    let year = String(date.getFullYear());
    return day+"-"+month+"-"+year;
  }