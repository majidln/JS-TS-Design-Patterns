class StackCalculator {
    constructor() {
        this.stack = []
    }
    putValue(value) {
        this.stack.push(value)
    }
    getValue() {
        return this.stack.pop()
    }
    peekValue() {
        return this.stack[this.stack.length - 1]
    }
    clear() {
        this.stack = []
    }
    divide() {
        const divisor = this.getValue()
        const dividend = this.getValue()
        const result = dividend / divisor
        this.putValue(result)
        return result
    }
    multiply() {
        const multiplicand = this.getValue()
        const multiplier = this.getValue()
        const result = multiplier * multiplicand
        this.putValue(result)
        return result
    }
}

// this implementation is not secure of divide by zero and will return Infinity as a result so we need to use a proxy to handle this
const safeCalculatorProxy = {
    get: (target, propperty) => {
        if (property === 'divide') {
            return () => {
                const divisor = target.peekValue()
                if (divisor === 0) {
                    throw new Error('Divison by 0')
                }
                return target.divide()
            }
        }
        return target[property]
    }
}

const calculator = new StackCalculator()
const safeCalculator = new Proxy(calculator, safeCalculatorProxy)