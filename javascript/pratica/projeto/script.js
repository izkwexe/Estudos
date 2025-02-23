function Status(receita, gastos) {
    if (receita > gastos) {
        return 1;// caso ele for rico 
    } 
    else if (receita < gastos) {
        return 0; // caso ele for pobre
    }
    else if (receita == gastos){
        return 2;
    }
    else {
        return 'erro';
    }
}

function result(Status) {
    if (Status == 1)
        return 'Rico';
    else if (Status == 0){
        return 'Pobre';
    }
    else if (Status == 2) {
        return 'Neutro';
    }
}

const status = Status(1, 0);
const resultado = result(status);
console.log(resultado);


