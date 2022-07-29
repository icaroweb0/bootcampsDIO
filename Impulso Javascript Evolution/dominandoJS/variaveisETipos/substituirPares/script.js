function substituiPares(array){
    if (array == ""){ 
        return console.log(-1)
    }
    console.log(array)
    for (i = 0 ; i < array.length ; i++){
        if (array[i]%2 == 0 && array[i] != 0) {
            array[i] = 0
        }
    }
    console.log(array)
}
substituiPares([1, 2, 4, 0, 9, 10])
substituiPares([])