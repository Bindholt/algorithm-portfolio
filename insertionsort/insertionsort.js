export function insertionSortShift(arr) {
    for(let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j--];
        }
        arr[j + 1] = key;
    }
    
    return arr;
}

export function insertionSortSwap(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[--j];
        arr[j] = temp;
        }
    }

    return arr;
}