let timer = 30
const value = document.querySelector('#value')
const startBtn = document.querySelector('.start')

startBtn.addEventListener('click', () => {
    const countdown = setInterval(() => {
        if (timer > 0) {
            timer--
            value.textContent = timer
        } else {
            print(countdown)
        }
    }, 1000)
});