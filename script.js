const button = document.querySelector('button');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');

var imageIndex = 0;
var images = ["./images/pic01.jpg", "./images/pic02.jpg", 
              "./images/pic03.jpg", "./images/pic04.jpg",
              "./images/pic05.jpg", "./images/pic06.jpg", 
              "./images/pic07.jpg", "./images/pic08.jpg"];

function imageChange() {
    var secondImage = image2;
    secondImage.src = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
}
function imageChange2() {
     var firstImage = image1;
     firstImage.src = images[imageIndex];
     imageIndex = (imageIndex + 1) % images.length;
}
button.addEventListener('click', imageChange);
button.addEventListener('click', imageChange2);

