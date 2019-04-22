let favContainer = document.getElementById('favouritesWindow')

document.getElementById('Btn1').addEventListener("click", showItem1)

document.getElementById('Btn2').addEventListener("click", showItem2)

document.getElementById('Btn3').addEventListener("click", showItem3)

document.getElementById('Btn4').addEventListener("click", showItem4)

document.getElementById('Btn5').addEventListener("click", showItem5)

document.getElementById('Btn6').addEventListener("click", showItem6)

document.getElementById('Btn7').addEventListener("click", showItem7)

document.getElementById('Btn8').addEventListener("click", showItem8)



function showItem1() {

    favContainer.scrollTo({
        left: 0,
        behavior: 'smooth'
    })
}
function showItem2() {

    favContainer.scrollTo({
        left: 320,
        behavior: 'smooth'
    })
}
function showItem3() {

    favContainer.scrollTo({
        left: 640,
        behavior: 'smooth'
    })
}
function showItem4() {

    favContainer.scrollTo({
        left: 960,
        behavior: 'smooth'
    })
}
function showItem5() {

    favContainer.scrollTo({
        left: 1280,
        behavior: 'smooth'
    })
}
function showItem6() {

    favContainer.scrollTo({
        left: 1600,
        behavior: 'smooth'
    })
}
function showItem7() {

    favContainer.scrollTo({
        left: 1920,
        behavior: 'smooth'
    })
}
function showItem8() {

    favContainer.scrollTo({
        left: 2240,
        behavior: 'smooth'
    })
}
