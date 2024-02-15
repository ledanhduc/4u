
let slideInterval = setInterval(nextSlide, 6000);

function nextSlide() {
    let lists = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(lists[0]);
}

document.getElementById('next').onclick = function() {
    nextSlide();
    clearInterval(slideInterval);
};

document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(lists[lists.length-1]);
    clearInterval(slideInterval);
};

