let array = [7,9,1,6,2,10,8,4,3,20,34]

function partition (array, i, j){
    //Step 1. Choose a pivot value
    let pivot = array[Math.floor((i+j)/2)]
    //Step 2. Scan the values in the array from the laft and from the right. Break the loop when i = j. Step 2. part 1 -->Initialized the values when calling the partition function
    while (i <= j){
        //Step 2 part 2 --> starting with i, iterate over values to the left of the pivot. Stop when we encounter anything that is not less than the pivot(includes stopping at the pivot itself should we encounter it)
        while (array[i] < pivot){
            //this while loop will stop if array[i] is not less than or equal to pivot. if it is less than pivot, it moves to the next index of the array
            i++
        }
        while (array[j] > pivot){
            //this while loop will stop if array[j] is not greater than or equal to pivot. if it is greater than pivot, it moves to the previous index of the array
            j--
        }
        if (i <= j){
            //Step 3. Swap the values at i and j. If i and j are both stopped it means i is pointing at someething too small. Therefore swap the values and then repeat step 2. 
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++
            j--
        }
    }
    return i
}

//now write the quicksort function
function quickSort(arr, i=0, j=arr.length-1){
    const index = partition(arr, i, j)
    //call on partition and set the index of i to index
    if (i < index-1){
        //if i is less than idex-1, then it will call on the quicksort function
        quickSort(arr, i, index-1)
    }
    if (index < j){
        //if index is less than j, it will call on the quicksort function
        quickSort(arr, index, j)
    }

    return arr;
}
var randomarray = []
for (var i =0; i < 50; i++){
    randomarray.push(Math.floor(Math.random() * (50-0)+0))
}
console.log(randomarray)
console.log(quickSort(randomarray))

