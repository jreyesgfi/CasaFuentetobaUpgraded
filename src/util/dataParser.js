export const dateToString = (date=new Date(), format="dd/mm/yyyy")=>{
    var day = date.getDate().toString();
    day = fillWithZero(day,2);
    var month = (date.getMonth()+1).toString();
    month = fillWithZero(month,2);
    const year = date.getFullYear().toString();

    let newstr = format.replace(/dd/i, day);
    newstr = newstr.replace(/mm/i, month);
    newstr = newstr.replace(/yyyy/i, year);

    return newstr;
}

export const changeDateFormat=(stringDate="", initialFormat="mm/dd/yyyy", desireFormat="dd/mm/yyyy")=>{
    const dateArray = stringDate.split("/");
    const day = dateArray[1];
    const month = dateArray[0];
    const year = dateArray[2];

    let newstr = desireFormat.replace(/dd/i, day);
    newstr = newstr.replace(/mm/i, month);
    newstr = newstr.replace(/yyyy/i, year);

    return newstr;
}

export function fillWithZero(numberInString,digits=2){
    if (numberInString.length <digits){
        numberInString = '0'+numberInString;
        fillWithZero(numberInString,digits);
    }
    return numberInString;
}