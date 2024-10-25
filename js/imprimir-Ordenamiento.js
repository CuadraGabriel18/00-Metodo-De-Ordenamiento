
const ingresarElementos = () => {
    let n = parseInt(document.getElementsByName("txtCantidad")[0].value);
    let a = [];
    for (let c = 0; c < n; c++) {
        arreglo = parseInt(prompt(`Ingrese elemento: ${c + 1}`));
            a.push(arreglo);
    }
    Ordenamiento (a, n);
}

const Ordenamiento = (a, n) => {
    let Lis = "Lista:\n";
    for (let c = 0; c < n; c++) {
        Lis += `a[${c}] = ${a[c]}\n`;
    }
    for(let i=0; i < n; i++){
        for(let j=i+1; j < n; j++){
            if(a[i] > a[j]){
                aux = a[i]
                a[i] = a[j]
                a[j] = aux
            }
        }
    }
    let Lista = "Lista Original:\n";
    for (c = 0; c < n; c++) {
        Lista += `a[${c}] = ${a[c]}\n`;
    }
    alert(`${Lis} ${Lista}`);
}


