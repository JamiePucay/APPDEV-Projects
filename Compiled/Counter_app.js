let count = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
const getRandomNum = (min, max) => Math.floor(Math.random()*(max - min + 1)) + min

btns.forEach((btn) => {
    //console.logf(btn)
    btn.addEventListener('click', (e) => {
        //console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--;
        }//decrease by 1
        else if (styles.contains('increase')){
            count++;
        }//increase by 1
        else if (styles.contains('plusfive')){
            count += 5;
        }
        else if (styles.contains('minusfive')){
            count -= 5;
        }
        else if (styles.contains('random')){
            count = getRandomNum(-500, 500)
        }
        else {
            count = 0;
        }
        

        if (count> 0){
            value.style.color = "green"
        }
        if (count < 0){
            value.style.color = "red"
        }
        if (count == 0){
            value.style.color = "black"
        }

        value.textContent = count
       })
})