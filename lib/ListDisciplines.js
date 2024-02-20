import { getResponseModule } from "./requests/endpointRequests.js";

getResponseModule().then(data => {
    listAllDisciplines(data);
}).catch(error => {
    console.error(error);
})

function listAllDisciplines(resAsJson){
    let tBody = document.getElementById("table-body-disciplines")
    resAsJson.materias.forEach(element => {
        let newTR = document.createElement("tr")
        tBody.appendChild(newTR)
        newTR.innerHTML =
            `<td>${element.Nucleo}</td>
            <td>${element.Nome}</td>
            <td>${element.Carga_Horaria}h</td>
            <td><a href="/public/editarDocumento.html#${element.id}"><button type="button" class="btn btn-outline-info">Gerar</button></a></td>`

    });
}


