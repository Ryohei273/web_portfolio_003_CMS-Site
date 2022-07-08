function image1Display() {
    const targetImage1 = document.getElementById('blockImage1')
    const targetImage2 = document.getElementById('blockImage2')
    const targetImage3 = document.getElementById('blockImage3')
    const targetButton1 = document.getElementById('selection2button1')
    const targetButton2 = document.getElementById('selection2button2')
    const targetButton3 = document.getElementById('selection2button3')
    targetImage1.style.opacity = 1;
    targetImage2.style.opacity = 0;
    targetImage3.style.opacity = 0;
    targetButton1.classList.add('c-button2__pressed')
    targetButton2.classList.remove('c-button2__pressed')
    targetButton3.classList.remove('c-button2__pressed')
    targetButton1.classList.remove('c-button2')
    targetButton2.classList.add('c-button2')
    targetButton3.classList.add('c-button2')
}

function image2Display() {
    const targetImage1 = document.getElementById('blockImage1')
    const targetImage2 = document.getElementById('blockImage2')
    const targetImage3 = document.getElementById('blockImage3')
    const targetButton1 = document.getElementById('selection2button1')
    const targetButton2 = document.getElementById('selection2button2')
    const targetButton3 = document.getElementById('selection2button3')
    targetImage1.style.opacity = 0;
    targetImage2.style.opacity = 1;
    targetImage3.style.opacity = 0;
    targetButton1.classList.remove('c-button2__pressed')
    targetButton2.classList.add('c-button2__pressed')
    targetButton3.classList.remove('c-button2__pressed')
    targetButton1.classList.add('c-button2')
    targetButton2.classList.remove('c-button2')
    targetButton3.classList.add('c-button2')
}

function image3Display() {
    const targetImage1 = document.getElementById('blockImage1')
    const targetImage2 = document.getElementById('blockImage2')
    const targetImage3 = document.getElementById('blockImage3')
    const targetButton1 = document.getElementById('selection2button1')
    const targetButton2 = document.getElementById('selection2button2')
    const targetButton3 = document.getElementById('selection2button3')
    targetImage1.style.opacity = 0;
    targetImage2.style.opacity = 0;
    targetImage3.style.opacity = 1;
    targetButton1.classList.remove('c-button2__pressed')
    targetButton2.classList.remove('c-button2__pressed')
    targetButton3.classList.add('c-button2__pressed')
    targetButton1.classList.add('c-button2')
    targetButton2.classList.add('c-button2')
    targetButton3.classList.remove('c-button2')
}