import { getResponseModule } from "./requests/endpointRequests.js";

const url = window.location.href
const idDiscipline = url.charAt((url.indexOf("#")) + 1)
const SendButton = document.getElementById("send_button")
SendButton.addEventListener("click", generatePDF)
console.log(idDiscipline)

var ArrayToPDF = []

getResponseModule().then(data => {
    GetDiscipline(data);
}).catch(error => {
    console.error(error);
})


function GetDiscipline(resAsJson) {
    let tBody = document.getElementById("table-body-editDocument")
    let newTR = document.createElement("tr")
    tBody.appendChild(newTR)

    resAsJson.materias.forEach(element => {
        if (idDiscipline == element.id) {
            ArrayToPDF.push("Nucleo: " + element.Nucleo)
            ArrayToPDF.push("Matéria: " + element.Nome)
            ArrayToPDF.push("Carga Horaria: " + element.Carga_Horaria)
            ArrayToPDF.push("Emenda: " + element.Emenda)
            newTR.innerHTML =
            `<td>${element.Nucleo}</td>
            <td>${element.Nome}</td>
            <td>${element.Carga_Horaria}h</td>`
        }
    });
}

function generatePDF() {
    let Name = document.getElementById('Name-professor').value
    let Matricula = document.getElementById('Matricula-professor').value

    ArrayToPDF.push("Nome do professor: " + Name)
    ArrayToPDF.push("Matricula do professor: " + Matricula)

    var pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a5',
        putOnlyUsedFonts: true
    });
    pdf.text(ArrayToPDF, 20, 20);
    pdf.save('Demopdf.pdf');
}




