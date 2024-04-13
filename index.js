// let block = document.querySelectorAll('.block')
// console.log(block)


// for(let i = 0; i < block.length; i++) {
    // block[i].addEventListener('mouseenter', function(){
    // console.log('qwerty', i);
    // block[i].classList.add('--active');
    // setTimeout(() => {
        // block[i].classList.remove('--active');
    // }, 1000);
// })
//  }



let color = document.getElementById('color');
console.log(color.value)

let wrapper = document.querySelector('.bigbox');
let isDraw = false;
wrapper.addEventListener('mousedown', () => {
    isDraw = true;
})

wrapper.addEventListener('mouseup', () => {
    isDraw = false;
})

const Blocksize = 20;
let s = (wrapper.offsetWidth * wrapper.offsetHeight) / Math.pow(Blocksize, 2);
console.log();

for (let i = 0; i < s; i++) {
    wrapper.insertAdjacentHTML('afterbegin', '<div class="block"></div>');
}

let blocksList = document.querySelectorAll('.block');
console.log(blocksList)

blocksList.forEach(block => {
    block.addEventListener('mouseenter', () => {
        block.style.backgroundColor = color.value;
    })
})

console.dir(wrapper);