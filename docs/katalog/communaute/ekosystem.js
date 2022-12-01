function ParamInfoExtraction() {   
    Papa.parse(window.location.pathname + "../../../param.csv", { 
        download: true,
        delimiter: ";",
        skipEmptyLines: true,
        complete: results => {
            IndexConstruction(results.data);
        }
    });
}

function IndexConstruction(param) {

    const data = param.slice(2);
    
    document.getElementById('EditBtn').setAttribute("href", data[0][0] + 'etc/ekosystem/home.md')

}

ParamInfoExtraction();