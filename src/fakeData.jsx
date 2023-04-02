const students = [{
    firstName: "מיכל", lastName: "שגיא", id: "1", gender: "זכר", date: "15/10/1993", address: { city: "עפרה", address: "המטע 2", other: "" }, hmo: "כללית", sensitivity: { sensitivity: "כן", more: "צליאק" }, phone: "0525000000", email: "michaldinner@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", contactEmail: "noa@gmail.com", relative: "אמא", comment: "איש קשר עיקרי. שותפה מאוד", apotropus: true }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא", comment: "לא מעורב", apotropus: false }],
    service: ['אוטיזם', 'שיקום'], diagnosis: "תסמונת דאון", days: [{ year: "2022", days: 20 }, { year: "2023", days: 20 }],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    aboutStudent: "בלה בלה בלה", aboutfamily: "בלה בלה בלה", generalGoals: "בלה בלה בלה", goalsToYear: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }],
    arrServices: ['כללי', 'דיור', 'מעון', 'תעסוקה'], general: { files: [{ name: "ויתור סודיות", file: "michal.pdf", date: "" }, { name: "צילום ת.ז הורה/ילד", file: "blabla.pdf", date: "12/03/2024" }], filesOp: [{ name: 'מיכל', file: 'Excel.png' }, { name: 'אישור צילום חניך', file: 'hello.png' }] },
    employment: { files: [{ name: "ויתור סודיות", file: "michal.pdf", date: "" }, { name: "תעודת נכה", file: "blabla.pdf", date: "12/03/2024" }], filesOp: [{ name: 'בלה בלה', file: 'Excel.png' }] }, daycare: { files: [{ name: "ריפוי בעיסוק", file: "michal.pdf", date: "" }, { name: "קלינאית תקשורת", file: "micha2.pdf", date: "" }], filesOp: [] }
},
{
    firstName: "רוחמה", lastName: "כהן", id: "2", gender: "נקבה", date: "15/10/2001", address: { city: "אחר", address: "התאנה 8", other: "מעלה עובש" }, sensitivity: { sensitivity: "לא" }, phone: "0525000000", email: "michalsagi.design@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    service: ['אוטיזם', 'מיכל'],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    aboutStudent: "בלה בלה בלה", aboutfamily: "בלה בלה בלה", generalGoals: "בלה בלה בלה", goalsToYear: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }],
    arrServices: ['כללי', 'מעון'], general: { files: [{ name: "ויתור סודיות", file: "michal.pdf", date: "" }, { name: "צילום ת.ז הורה/ילד", file: "blabla.pdf", date: "12/03/2024" }] }, daycare: { files: [{ name: "ריפוי בעיסוק", file: "michal.pdf", date: "" }], filesOp: [] }
},
{
    firstName: "מיכל", lastName: "שגיא", id: "3", gender: "זכר", date: "15/10/1999", phone: "0525000000", email: "zivushsagi@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    aboutStudent: "בלה בלה בלה", aboutfamily: "בלה בלה בלה", generalGoals: "בלה בלה בלה", goalsToYear: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }]
},
{
    firstName: "מיכל", lastName: "שגיא", id: "4", gender: "נקבה", date: "15/10/1993", phone: "0525000000", email: "michal@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    aboutStudent: "בלה בלה בלה", aboutfamily: "בלה בלה בלה", generalGoals: "בלה בלה בלה", goalsToYear: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }]
},
{
    firstName: "מיכל", lastName: "שגיא", id: "5", gender: "נקבה", date: "15/10/1993", phone: "0525000000", email: "michal@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    aboutStudent: "בלה בלה בלה", aboutfamily: "בלה בלה בלה", generalGoals: "בלה בלה בלה", goalsToYear: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }]
}
]

const projects = [{
    id: 1,
    days: 2,
    fromDate: "2022-11-25",
    name: "שבת תולדות",
    type: "שבת",
    untilDate: "2022-11-26",
    status: "סגור",
    studentsInvited: ["1", "3", "5"],
    studentsPart: ["1", "3", "5"],
    studentsPaid: ["1", "3"]
}, {
    id: 2,
    days: 4,
    fromDate: "2023-06-04",
    name: "קייטנת קיץ",
    type: "קייטנה",
    untilDate: "2023-06-07",
    status: "פתוח",
    studentsInvited: ["1", "2", "4"],
    studentsPart: ["1", "2", "4"],
    studentsPaid: ["1", "2"]



}]

const daycare = [{
    student: 1,
    // לשאול את מיכל
    general: [{
        fixed: [
            { files: [{ fileName: "שאלון תזונתי", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] },
            { filesOp: [{ fileName: "שאלון תזונתי", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }]
    },
    {
        years: [[{ year: 2022, class: "תינוקות", tsa: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" } }],
        [{ year: 2023, class: "בוגרים", tsa: { date: "19/10/2023", author: "מיכל", content: "bla bla bla" } }]]
    }],

    speech: [{ fixed: [{ filesOp: [{ fileName: "אבחון קלינאית תקשורת", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "קלינאית תקשורת" }, start: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2022", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "קלינאית תקשורת" }, start: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2023", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] }]]

    }],

    occupation: [{ fixed: [{ filesOp: [{ fileName: "אבחון מרפאה בעיסוק ", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "ריפוי בעיסוק" }, start: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2022", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "ריפוי בעיסוק" }, start: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2023", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] }]]

    }],

    physiotherapy: [{ fixed: [{ filesOp: [{ fileName: "אבחון פיזיוטרפיסט ", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "פיזיוטרפיה" }, start: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2022", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "פיזיוטרפיה" }, start: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2023", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] }]]

    }],

    dietician: [{ fixed: [{ filesOp: [{ fileName: "שאלון תזונתי", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "דיאטנית" }, filesOp: [{ fileName: "תפריט", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "דיאטנית" }, filesOp: [{ fileName: "תפריט", file: "bla bla" }] }]]

    }],

    teacher: [{ fixed: [{ filesOp: [] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "גננת" }, filesOp: [{ fileName: "בלה", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "גננת" }, filesOp: [{ fileName: "בלה", file: "bla bla" }] }]]

    }],

    medical: [{ fixed: [{ filesOp: [{ fileName: "שאלון רפואי", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "רפואי" }, filesOp: [{ fileName: "בלה", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "רפואי" }, filesOp: [{ fileName: "בלה", file: "bla bla" }] }]]

    }],

    social: [{ fixed: [{ files: [{ fileName: " אינטייק סוציאלי", file: "bla bla" }] }, { filesOp: [{ fileName: "שאלון משפחתי", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {

        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "עו''ס" }, weekly_summary: [{ date: "12/12/2022", author: "מיכל", content: "עו''ס" }, { date: "19/12/2022", author: "מיכל", content: "bla bla bla" }], goals: { date: "12/12/2022", author: "מיכל", content: "עו''ס מטרות" } },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "עו''ס" }, weekly_summary: [{ date: "12/12/2023", author: "מיכל", content: "עו''ס" }, { date: "19/12/2023", author: "מיכל", content: "bla bla bla" }], goals: { date: "12/12/2023", author: "מיכל", content: "עו''ס מטרות" } }]]
    }]
},
{
    student: 2,
    general: [{ fixed: [{ files: [{ fileName: "שאלון תזונתי", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }, { filesOp: [{ fileName: "שאלון תזונתי", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, class: "תינוקות", tsa: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" } }],
        [{ year: 2023, class: "בוגרים", tsa: { date: "19/10/2023", author: "מיכל", content: "bla bla bla" } }]]
    }],

    speech: [{ fixed: [{ filesOp: [{ fileName: "אבחון קלינאית תקשורת", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "קלינאית תקשורת" }, start: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2022", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "קלינאית תקשורת" }, start: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2023", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] }]]

    }],

    occupation: [{ fixed: [{ filesOp: [{ fileName: "אבחון מרפאה בעיסוק ", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "ריפוי בעיסוק" }, start: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2022", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "ריפוי בעיסוק" }, start: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2023", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] }]]

    }],

    physiotherapy: [{ fixed: [{ filesOp: [{ fileName: "אבחון פיזיוטרפיסט ", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "פיזיוטרפיה" }, start: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2022", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2022", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "פיזיוטרפיה" }, start: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, middle: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, end: { date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, weekly_summary: [{ date: "12/12/2023", author: "מיכל", content: "bla bla bla" }, { date: "19/12/2023", author: "מיכל", content: "bla bla bla" }], files: [{ fileName: "טבלת GAS", file: "bla bla" }, { fileName: "טופס קידוד", file: "bla bla" }] }]]

    }],

    dietician: [{ fixed: [{ filesOp: [{ fileName: "שאלון תזונתי", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "דיאטנית" }, filesOp: [{ fileName: "תפריט", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "דיאטנית" }, filesOp: [{ fileName: "תפריט", file: "bla bla" }] }]]

    }],

    teacher: [{ fixed: [{ filesOp: [] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "גננת" }, filesOp: [{ fileName: "בלה", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "גננת" }, filesOp: [{ fileName: "בלה", file: "bla bla" }] }]]

    }],

    medical: [{ fixed: [{ filesOp: [{ fileName: "שאלון רפואי", file: "bla bla" }] }] },
    {
        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "רפואי" }, filesOp: [{ fileName: "בלה", file: "bla bla" }] },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "רפואי" }, filesOp: [{ fileName: "בלה", file: "bla bla" }] }]]

    }],

    social: [{ fixed: [{ files: [{ fileName: " אינטייק סוציאלי", file: "bla bla" }] }, { filesOp: [{ fileName: "שאלון משפחתי", file: "bla bla" }, { fileName: "ועדת השמה", file: "bla bla" }] }] },
    {

        years: [[{ year: 2022, tsa: { date: "12/12/2022", author: "מיכל", content: "עו''ס" }, weekly_summary: [{ date: "12/12/2022", author: "מיכל", content: "עו''ס" }, { date: "19/12/2022", author: "מיכל", content: "bla bla bla" }], goals: { date: "12/12/2022", author: "מיכל", content: "עו''ס מטרות" } },
        { year: 2023, tsa: { date: "12/12/2023", author: "מיכל", content: "עו''ס" }, weekly_summary: [{ date: "12/12/2023", author: "מיכל", content: "עו''ס" }, { date: "19/12/2023", author: "מיכל", content: "bla bla bla" }], goals: { date: "12/12/2023", author: "מיכל", content: "עו''ס מטרות" } }]]
    }]
}
]
export { students, projects, daycare };