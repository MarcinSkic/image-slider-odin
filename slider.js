const frame = document.querySelector(".slider-frame");
//TODO: Take it from frame width
const width = 200;
let imageIndex = 0;

[...frame.children].forEach((child, index) => {
    child.classList.remove("shown", "right", "left");
});

const getRight = function getRight(event) {
    setIndex(imageIndex + 1);
    event.preventDefault();
};

const getLeft = function getLeft(event) {
    setIndex(imageIndex - 1);
    event.preventDefault();
};

//This function in the future should be single access point to any operation on slider, buttons just increment/decrement index through this
const setIndex = function setIndex(value) {
    imageIndex = value;

    [...frame.children].forEach((child, index) => {
        targetWidth = (imageIndex - index) * width;
        child.style.right = `${targetWidth}px`;
    });

    console.log(`currentIndex: ${imageIndex}`);
};

const getRightBtn = document.querySelector(".get-right");
const getLeftBtn = document.querySelector(".get-left");
getRightBtn.addEventListener("click", getRight);
getLeftBtn.addEventListener("click", getLeft);
setIndex(0);
