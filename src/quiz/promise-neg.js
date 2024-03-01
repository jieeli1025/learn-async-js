const array2D = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];

function hasNegative(row) {
    return new Promise((resolve, reject) => {
        const hasNeg = row.some(num => num < 0);
        if (hasNeg) {
            resolve(row);
        } else {
            reject();
        }
    });
}

const rowCheckPromises = array2D.map(row => hasNegative(row));

Promise.all(rowCheckPromises.map(p => p.catch(() => undefined)))
    .then(results => {
        results.forEach((row, index) => {
            if (row !== undefined) {
                console.log(`Row ${index + 1} contains at least one negative number: ${row}`);
            }
        });
    })
    .catch(error => {
        console.error(error);
    });
