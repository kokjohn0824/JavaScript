


closePic = "Images/star.gif"
onPic = "Images/chngstar.gif"
pre = (child) => child.previousSibling
next = (child) => child.nextSibling

shine = (e) => {

    let child = e.target
    firstChild = child.parentNode.firstChild
    while (pre(child) != null) {
        child.src = onPic
        child = pre(child)
    }
}


dark = (e) => {
    for (let i of e.target.parentNode.childNodes) {
        i.src = closePic
    }

}
hold = (e) => {
    for (let i of e.target.parentNode.childNodes) {
        i.removeEventListener("mouseenter", shine)
        i.removeEventListener("mouseout", dark)
    }


}
reset = (e) => {
    for (let i of e.target.parentNode.childNodes) {
        i.addEventListener("mouseenter", shine)
        i.addEventListener("mouseout", dark)

    }


}




main = () => {
    let starbox = document.getElementById("starbox")
    stars = starbox.childNodes
    for (i in stars) {
        let star = stars[i];
        if (star.nodeType == 1) {
            star.src = closePic;
            star.addEventListener("mouseenter", shine)
            star.addEventListener("mouseout", dark)
            star.addEventListener("click", hold)
            star.addEventListener("dblclick", reset)

        }

    }
}



init = () => {
    main();
}
try {
    document.addEventListener('DOMContentLoaded', init)
}
catch { }