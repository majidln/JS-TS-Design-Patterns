class Matrix {
    constructor(matrix) {
        this.data = matrix;
    }

    get(row, col) {
        if (row >= this.data.length || col >= this.data[row].length) {
            throw new RangeError('Row or column out of bounds');
        }
        return this.data[row][col];
    }

    set(row, col, value) {
        if (row >= this.data.length || col >= this.data[row].length) {
            throw new RangeError('Row or column out of bounds');
        }
        this.data[row][col] = value;
    }

    [Symbol.iterator]() {
        let nextRow = 0
        let nextCol = 0
        return {
            next: () => {
                if (nextRow >= this.data.length) {
                    return { done: true }
                }
                const currVal = this.data[nextRow][nextCol]
                if (nextCol === this.data[nextRow].length - 1) {
                    nextRow++
                    nextCol = 0
                } else {
                    nextCol++
                }
                return { value: currVal }
            }
        }
    }
}

const matrix2x2 = new Matrix([[1, 2], [3, 4]])

const iterator = matrix2x2[Symbol.iterator]()
let iterResult = iterator.next()
while (!iterResult.done) {
    console.log(iterResult.value)
    iterResult = iterator.next()
}

for (const value of matrix2x2) {
    console.log(value)
}

const flattenedMatrix = [...matrix2x2]
console.log(flattenedMatrix)

const [oneOne, oneTwo, twoOne, twoTwo] = matrix2x2
console.log(oneOne, oneTwo, twoOne, twoTwo)
