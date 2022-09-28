import Papa from "papaparse";
import daysCalendar from "./CalendarData.csv";

export const priceMin = 600;

// Days of week
export const daysOfWeekDict = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    0: "Domingo",
}

// Months
export const monthsDict = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre",
};

// Number of days each month
export const daysOfEachMonth = {
    1: 31,
    2: new Date().getFullYear % 4 == 0 ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

/****************************
     Recover the calendar days 
    *****************************/

export async function uploadDaysData(){
    const daysPromise = new Promise((resolve) => {
        Papa.parse(daysCalendar, {
            header: true,
            skipEmptyLines: true,
            download: true,
            complete: async function (results) {
                const daysPromise = new Promise((resolve) => resolve(changeDaysToDict(results.data)));
                daysPromise.then(daysInObjectGenerated => {
                    resolve(daysInObjectGenerated)
                })
            }
        })
    }
    
    );
    await daysPromise;
    return daysPromise;
}

async function changeDaysToDict(df) {
    const finalDf = new Promise((resolve) => {
        const dfToReturn = {};
        df.forEach((row) => {
            dfToReturn[row['dia'].toString()] = row
        })
        return resolve(dfToReturn)
    });
    await finalDf;
    return finalDf
}