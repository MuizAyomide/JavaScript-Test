const button = document.querySelector('button');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');

var imageIndex = 0;
var images = ["pic01.jpg", "pic02.jpg", 
              "pic03.jpg", "pic04.jpg",
              "pic05.jpg", "pic06.jpg", 
              "pic07.jpg", "pic08.jpg"];

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

