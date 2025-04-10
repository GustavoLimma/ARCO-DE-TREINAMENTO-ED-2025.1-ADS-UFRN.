class Calculadora{

    calcular(op, a, b){
        op.lower();
        if (op === "soma"){
            return a+b;
        } else if(op === "subtracao"){
            return a-b;
        } else{
            return "err"
        }
    }
}