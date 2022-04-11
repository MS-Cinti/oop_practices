//itt nem a kulcsok számítanak, hanem a sorrend(indexek)

const arr = ['dog', 'cat', 'fish', function() {
    console.log('Animals')
}, 'bird'];

const firstItem = arr[0];
const secondItem = arr[1];

//...elseX itt a többi elemet írja ki
//ha berakunk egy vesszőt, akkor egyel arrébb megy
//const [firstItemX,, secondItemX, ...elseX] = arr;
const [firstItemX, secondItemX, ...elseX] = arr;
//console.log(firstItemX === firstItemX)
//console.log(elseX) 
//Utolsó elem:
//console.log(arr[arr.length-1]);

//anonym function meghívása, 4.elemként:
const [,,, ourFun] = arr;
ourFun();