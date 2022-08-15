class Nine {
    constructor(rol = 9, col = 9) {
        this.rol = rol
        this.col = col

    }

    createNine = (a) => {
        let result = document.getElementById(a)
        let s = ""
        for (let i = 1; i <= this.rol; i++) {
            s += "<tr>"
            for (let j = 1; j <= this.col; j++) {
                s += "<td>"
                s += `${j} x ${i} = ${i * j} `
                s += "</td>"
            }
            s += "</tr>"
        }
        result.innerHTML += s;
    }
}

