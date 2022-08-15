class Stars {



    pre = (child) => child.previousSibling
    next = (child) => child.nextSibling
    closePic = "../img/star.gif"
    onPic = "../img/chngstar.gif"
    //end of lazy

    //create stars
    shine = (e) => {

        let child = e.target
        while (this.pre(child) != null) {
            child.src = this.onPic
            child = this.pre(child)
        }
    }


    dark = (e) => {
        for (let i of e.target.parentNode.childNodes) {
            i.src = this.closePic
        }

    }
    hold = (e) => {
        for (let i of e.target.parentNode.childNodes) {
            i.removeEventListener("mouseenter", this.shine)
            i.removeEventListener("mouseout", this.dark)
        }


    }
    reset = (e) => {
        for (let i of e.target.parentNode.childNodes) {
            i.addEventListener("mouseenter", this.shine)
            i.addEventListener("mouseout", this.dark)
        }
    }

    createStars = (eleid) => {

        let starbox = document.getElementById(eleid)
        let stars = starbox.childNodes
        for (let i in stars) {
            let star = stars[i];
            if (star.nodeType == 1) {
                star.src = this.closePic;
                star.addEventListener("mouseenter", this.shine)
                star.addEventListener("mouseout", this.dark)
                star.addEventListener("click", this.hold)
                star.addEventListener("dblclick", this.reset)
            }
        }
    }

}







