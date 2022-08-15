
//when you assign a func to a variable and ts recon its return type as never
// that means this x func is broken (like in while loop)
let x = function neverEnd() {
    let num = 2;
    while (1 == 1) {
    }
}

