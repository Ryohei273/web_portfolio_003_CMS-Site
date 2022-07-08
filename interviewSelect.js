function interview1Display() {
    const targetInterview1 = document.getElementById('interview1')
    const targetInterview2 = document.getElementById('interview2')
    const targetInterview3 = document.getElementById('interview3')
    const targetDot1 = document.getElementById('interviewDod1')
    const targetDot2 = document.getElementById('interviewDod2')
    const targetDot3 = document.getElementById('interviewDod3')
    targetInterview1.style.opacity = 1;
    targetInterview2.style.opacity = 0;
    targetInterview3.style.opacity = 0;
    targetInterview1.style.pointerEvents = 'auto';
    targetInterview2.style.pointerEvents = 'none';
    targetInterview3.style.pointerEvents = 'none';
    targetDot1.classList.add('c-button4_active')
    targetDot1.classList.remove('c-button4')
    targetDot2.classList.add('c-button4')
    targetDot2.classList.remove('c-button4_active')
    targetDot3.classList.add('c-button4')
    targetDot3.classList.remove('c-button4_active')
}

function interview2Display() {
    const targetInterview1 = document.getElementById('interview1')
    const targetInterview2 = document.getElementById('interview2')
    const targetInterview3 = document.getElementById('interview3')
    const targetDot1 = document.getElementById('interviewDod1')
    const targetDot2 = document.getElementById('interviewDod2')
    const targetDot3 = document.getElementById('interviewDod3')
    targetInterview1.style.opacity = 0;
    targetInterview2.style.opacity = 1;
    targetInterview3.style.opacity = 0;
    targetInterview1.style.pointerEvents = 'none';
    targetInterview2.style.pointerEvents = 'auto';
    targetInterview3.style.pointerEvents = 'none';
    targetDot1.classList.add('c-button4')
    targetDot1.classList.remove('c-button4_active')
    targetDot2.classList.add('c-button4_active')
    targetDot2.classList.remove('c-button4')
    targetDot3.classList.add('c-button4')
    targetDot3.classList.remove('c-button4_active')
}

function interview3Display() {
    const targetInterview1 = document.getElementById('interview1')
    const targetInterview2 = document.getElementById('interview2')
    const targetInterview3 = document.getElementById('interview3')
    const targetDot1 = document.getElementById('interviewDod1')
    const targetDot2 = document.getElementById('interviewDod2')
    const targetDot3 = document.getElementById('interviewDod3')
    targetInterview1.style.opacity = 0;
    targetInterview2.style.opacity = 0;
    targetInterview3.style.opacity = 1;
    targetInterview1.style.pointerEvents = 'none';
    targetInterview2.style.pointerEvents = 'none';
    targetInterview3.style.pointerEvents = 'auto';
    targetDot1.classList.add('c-button4')
    targetDot1.classList.remove('c-button4_active')
    targetDot2.classList.add('c-button4')
    targetDot2.classList.remove('c-button4_active')
    targetDot3.classList.add('c-button4_active')
    targetDot3.classList.remove('c-button4')
}
