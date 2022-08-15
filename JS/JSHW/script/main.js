

main = () => {

    let cnie = new Nine(9, 9);
    let cf = new CheckForm();
    let st = new Stars();

    cnie.createNine("Nine");
    cf.addblur('name1', cf.checkName)
    cf.addblur('password1', cf.checkPassword)
    cf.addblur('date1', cf.checkDate)
    st.createStars("starbox")

    let clickTimer;


    document.getElementById('ddd').addEventListener('click', (e) => {
        if (e.detail === 1) {

            clickTimer = setTimeout(() => { console.log('clicked!'); console.log(e) }, 200)
        }

    })
    document.getElementById('ddd').addEventListener('dblclick', (e) => {
        clearTimeout(clickTimer);
        console.log('double clicked!')
        console.log(e);

    })

}

//to load html ealier than js
init = () => {
    main();

}
try {
    document.addEventListener('DOMContentLoaded', init)
}
catch { }


