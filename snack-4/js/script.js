// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const array1 = [1, 2, 3, 4, 5];
console.log(array1);

const array2 = ["a", "b", "c", "d", "e"];
console.log(array2);



if(array1.length !== array2.length) {
    alert("merging is impossible");
} else {
    const newArray = [];
    array1.forEach((element,index) => {
        newArray.push(element, array2[index]);
    })
    console.log(newArray);
}