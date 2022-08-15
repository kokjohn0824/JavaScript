class CheckForm {



    isValidName = (string) => {
        return new RegExp('^[\u4e00-\u9fa5]{2,}$').test(string);
    }
    isValidPassword = (string) => {
        return this.hasAlphabet(string) && this.hasNumber(string) && this.hasSign(string) && string.length >= 6;
    }

    hasAlphabet = (string) => {
        return new RegExp('[a-zA-Z]+').test(string);
    }

    hasNumber = (string) => {
        return new RegExp('[0-9]+').test(string);
    }

    hasSign = (string) => {
        return new RegExp('[!@#$%^&*]+').test(string);
    }


    checkName = () => {
        if (!this.isValidName(this.getid("name1").value)) {
            this.getid("outputForname1").innerHTML = "wrong!";
        }
        else {
            this.getid("outputForname1").innerHTML = "right!";
        }

    }

    checkPassword = () => {
        if (!this.isValidPassword(this.getid("password1").value)) {
            this.getid("outputForpassword1").innerHTML = "wrong!";
        }
        else {
            this.getid("outputForpassword1").innerHTML = "right!";
        }
    }

    checkDate = () => {
        let inputdate = this.getid("date1").value
        let date = new Date(inputdate);
        if (date.toDateString()[8] != inputdate[8]) {
            this.getid("outputFordate1").innerHTML = "invalid!";
        }
        else {
            this.getid("outputFordate1").innerHTML = "correct";
        }
    }
    getid = (a) => document.getElementById(a)
    addblur = (a, b) => this.getid(a).addEventListener('blur', b)

}



