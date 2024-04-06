let block = document.querySelectorAll('.block')
console.log(block)


for(let i = 0; i < block.length; i++) {
    block[i].addEventListener('mouseenter', function(){
    console.log('qwerty', i);
    block[i].classList.add('--active');
    setTimeout(() => {
        block[i].classList.remove('--active');
    }, 1000);
})
}