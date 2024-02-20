function funcao() {
    console.log("funcionou")
}

export async function getResponseModule() {
    const response = await fetch("/Db.json");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const resAsJson = await response.json();

    return resAsJson
}

