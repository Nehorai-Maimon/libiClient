const students = [{
    firstName: "מיכל", lastName: "שגיא", id: "123456789", gender: "זכר", date: "15/10/1993", address: { city: "עפרה", address: "המטע 2" }, hmo: "כללית", sensitivity: { sensitivity: "כן", more: "צליאק" }, phone: "0525000000", email: "michaldinner@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", contactEmail: "noa@gmail.com", relative: "אמא", comment: "איש קשר עיקרי. שותפה מאוד", apotropus: true }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא", comment: "לא מעורב", apotropus: false }],
    service: ['אוטיזם', 'שיקום'],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    textA: "בלה בלה בלה", textB: "בלה בלה בלה", textC: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }],
    arrServices: ['כללי', 'דיור', 'מעון', 'תעסוקה'], general: { files: [{ name: "ויתור סודיות", file: "michal.pdf", date: "" }, { name: "צילום ת.ז הורה/ילד", file: "blabla.pdf", date: "12/03/2024" }], filesOp: [{ name: 'מיכל', file: 'Excel.png' }, { name: 'אישור צילום חניך', file: 'hello.png' }] },
    employment: { files: [{ name: "ויתור סודיות", file: "michal.pdf", date: "" }, { name: "תעודת נכה", file: "blabla.pdf", date: "12/03/2024" }], filesOp: [{ name: 'בלה בלה', file: 'Excel.png' }] }, daycare: { files: [{ name: "ריפוי בעיסוק", file: "michal.pdf", date: "" }, { name: "קלינאית תקשורת", file: "micha2.pdf", date: "" }], filesOp: [] }
},
{
    firstName: "רוחמה", lastName: "כהן", id: "123456789", gender: "נקבה", date: "15/10/2001", address: { city: "אחר", address: "התאנה 8", other: "מעלה עובש" }, phone: "0525000000", email: "michalsagi.design@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    service: ['אוטיזם', 'מיכל'],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    textA: "בלה בלה בלה", textB: "בלה בלה בלה", textC: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }],
    arrServices: ['כללי', 'מעון'], general: { files: [{ name: "ויתור סודיות", file: "michal.pdf", date: "" }, { name: "צילום ת.ז הורה/ילד", file: "blabla.pdf", date: "12/03/2024" }] }, daycare: { files: [{ name: "ריפוי בעיסוק", file: "michal.pdf", date: "" }], filesOp: [] }
},
{
    firstName: "מיכל", lastName: "שגיא", id: "123456789", gender: "זכר", date: "15/10/1999", phone: "0525000000", email: "zivushsagi@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    textA: "בלה בלה בלה", textB: "בלה בלה בלה", textC: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }]
},
{
    firstName: "מיכל", lastName: "שגיא", id: "123456789", gender: "נקבה", date: "15/10/1993", phone: "0525000000", email: "michal@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    textA: "בלה בלה בלה", textB: "בלה בלה בלה", textC: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }]
},
{
    firstName: "מיכל", lastName: "שגיא", id: "123456789", gender: "נקבה", date: "15/10/1993", phone: "0525000000", email: "michal@gmail.com",
    contact: [{ contactFirstName: "a", contactLastName: "1", contactPhone: "0505000000", relative: "אמא" }, { contactFirstName: "b", contactLastName: "2", contactPhone: "0505222222", relative: "אבא" }],
    file: [{ fileName: "אישור צילום", date: "23/04/2028" }, { fileName: "אבחון פסיכולוגי", date: "30/07/2030" }],
    textA: "בלה בלה בלה", textB: "בלה בלה בלה", textC: "בלה בלה בלה",
    medication: [{ name: "a", time: "12:00" }, { name: "b", time: "14:30" }, { name: "c", time: "13:15" }]
}
]

export default students