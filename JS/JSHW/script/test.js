

main = () => {

    table1 = document.getElementById("tb1");
    let temp = "";
    for (let i = 0; i < 5; i++) {
        temp += "<tr>"
        for (let j = 0; j < 7; j++) {
            temp += "<td>1</td>"
        }
        temp += "</tr>"
    }
    table1.innerHTML += temp

}

document.addEventListener('DOMContentLoaded', main);