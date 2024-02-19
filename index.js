const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
let min = 80;
let max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(answer);

button.addEventListener('click', play);

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        play();
    }
})

function play() {
    const userNumber = document.querySelector('#guess').value
    if (userNumber < 80 || userNumber > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Write a number from 80 to 100!'
        })
    }
    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can write only numbers!'
        })
    }
    else {
        if (userNumber < answer) {
            Swal.fire('Write a bigger number',
                'Computer wins!')
        }
        else if (userNumber > answer) {
            Swal.fire('Write a smaller number',
                'Computer wins!')
        }
        else {
            Swal.fire({
                title: 'You win!',
                text: 'Congraduations!',
                imageUrl: './Assets/win.jpg',
                imageWidth: 500,
                imageHeight: 300,
                imageAlt: 'Custom image',
            })
        }
    }
}

gsap.to('.lets', {
    text: `Let's play!`,
    duration: 2,
    delay: 1
})

gsap.from('.write', { y: 400, opacity: 0, duration: 2, delay: 1.5 })
gsap.from('input', { y: 400, opacity: 0, duration: 2, delay: 2 })
gsap.from('button', { y: 400, opacity: 0, duration: 2, delay: 2.5})