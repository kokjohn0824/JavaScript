
//wrapper
interface NumberWithLogs {
    result: number
    logs: string[]
}


//wrap function 
// also known as return, pure, unit
function wrapNumberWithlogs(num: number): NumberWithLogs {
    return { result: num, logs: [] }
}

// Run function
//bind, flatMap
function runWtihLogs(input: NumberWithLogs, transform: (_: number) => NumberWithLogs): NumberWithLogs {
    const newNumverwithlogs = transform(input.result)

    return {
        result: newNumverwithlogs.result,
        logs: input.logs.concat(newNumverwithlogs.logs)
    }
}


function square(x: number): NumberWithLogs {

    return {
        result: x * x,
        logs: [`Squared ${x} to get ${x * x}`]
    }
}
function addOne(x: number): NumberWithLogs {
    return {
        result: x + 1,
        logs: [`Added ${x} to get ${x + 1}`]
    }
}

let log_a = runWtihLogs(wrapNumberWithlogs(3), addOne);
let log_b = runWtihLogs(log_a, square);
console.log(log_b.logs)