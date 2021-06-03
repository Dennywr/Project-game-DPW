let randomNumber = Math.floor(Math.random() * (300 - 100) + 100).toString();
console.log(randomNumber)
let score = 100;
const check = () => {
  let name = document.querySelector('#nama').value;
  let number = document.querySelector('#angka').value;
  let check = document.querySelector('#check');
  let result = document.querySelector('#result');
  let answer = document.querySelector('.answer');
  let card = document.querySelector('.card');

  if(number == randomNumber) {
    result.innerHTML= `Selamat ${name} !!! setelah sekian lama, akhirnya kamu berhasil menyelesaikan game ini. Score Anda : ${score}`;
    answer.innerHTML = `${randomNumber[0]} - ${randomNumber[1]} - ${randomNumber[2]}`;
    result.style.backgroundColor = 'rgb(0, 128, 0)';
    card.style.boxShadow =  '1px 2px 8px rgba(0, 128, 0, 0.65)';
    result.style.color = 'white';
    check.disabled = 'true';
  } else if(number < randomNumber) {
    score -= 5;
    result.innerHTML = `Maaf, tebakan anda salah. Tebakan anda terlalu rendah. Score Anda : ${score}`;
    result.style.backgroundColor = 'rgba(210, 0, 0, 0.8)';
    card.style.boxShadow =  '1px 2px 8px rgba(200, 0, 0, 0.65)';
    result.style.color = 'white';
  } else {
    score -= 5;
    result.innerHTML= `Maaf, tebakan anda salah. Tebakan anda terlalu tinggi. Score Anda : ${score}`;
    result.style.backgroundColor = 'rgba(210, 0, 0, 0.8)';
    card.style.boxShadow =  '1px 2px 8px rgba(200, 0, 0, 0.65)';
    result.style.color = 'white';
  } 
  if(score == 0) {
    answer.innerHTML = `${randomNumber[0]} - ${randomNumber[1]} - ${randomNumber[2]}`;
    result.innerHTML = `Game Over. Score Anda : ${score}`;
    check.disabled = 'true';
  } else if(score == 85 && number != randomNumber) {
    let clue = Math.floor(Math.random() * 2 + 1);
    if(clue == 0) {
    answer.innerHTML = `${randomNumber[clue]} - * - *`;
    } else if (clue == 1) {
      answer.innerHTML = `* - ${randomNumber[clue]} - *`;
    } else {
      answer.innerHTML = `* - * - ${randomNumber[clue]}`;
    }
    alert("Anda sudah 3 kali salah dalam menebak angka. Kami akan membantu anda dengan cara memberikan clue, agar anda lebih mudah dalam menebak angka.");
  }
}


// GSAP
gsap.from(".card", {duration: 2, y: '-100%', opacity: 0, ease: 'power3.out'});
gsap.from(".game-title", {duration: 2, y: '-100%', opacity: 0, ease: 'bounce', delay: 0.1});
// Akhir GSAP