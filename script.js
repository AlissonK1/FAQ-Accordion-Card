const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');

function showAnswer(title){
    console.log('Entrou');
    for(let i = 1; i <=5 ; i++){
        if(title.includes(String(i))){
            let answer = document.getElementById('r' + i);
            answer.classList.toggle('active');
        }
    }
}

t1.addEventListener('click', () => {showAnswer('t1')});
t2.addEventListener('click', () => {showAnswer('t2')});
t3.addEventListener('click', () => {showAnswer('t3')});
t4.addEventListener('click', () => {showAnswer('t4')});
t5.addEventListener('click', () => {showAnswer('t5')});