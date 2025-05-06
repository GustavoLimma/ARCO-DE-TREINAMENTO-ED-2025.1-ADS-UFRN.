class BubbleSort{

    ordenar(elemento){
        
        let limit = elemento.length - 1

        for(let i=0; i<limit; i++){
            for(let j=i+1; j<limit; j++){
                if(elemento[i] > elemento[i+1]){
                    let aux = elemento[i+1]
                    elemento[i+1] = elemento[i] 
                    elemento[i] = aux
                }
            }
        }
        return elemento
    }
}