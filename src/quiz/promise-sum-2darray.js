function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                const rowSums = []; // Array to store sum of each row
                for (let i = 0; i < arr.length; i++) {
                    let rowSum = 0;
                    for (let j = 0; j < arr[i].length; j++) {
                        rowSum += arr[i][j];
                    }
                    rowSums.push(rowSum); // Push the sum of each row into rowSums array
                }
                console.log('resolving ... ');
                resolve(rowSums); // Resolve with array containing sum of each row
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

// Function to create a promise for each row sum calculation
function rowSumPromise(row) {
    return sum2DArray([row]);
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rowSumPromises = array2D.map(row => rowSumPromise(row));

Promise.all(rowSumPromises)
    .then(rowSums => {
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log(`sum = ${sum}`);
    })
    .catch(error => {
        console.error(error);
    });
