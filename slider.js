const frame = document.querySelector(".slider-frame");
let imageIndex = 0;
//TODO: Take it from frame width
let width = 200;

const getRight = function getRight(event) {
    let newIndex = (imageIndex += 1);

    [...frame.children].forEach((child, index) => {
        if (newIndex - 1 === index) {
            child.classList.add("left");
            child.classList.remove("shown");
        }

        if (newIndex === index) {
            child.classList.add("shown");
            child.classList.remove("right");
        }
    });

    imageIndex = newIndex;
};

//This function in the future should be single access point to any operation on slider, buttons just increment/decrement index through this
const setIndex = function setIndex(value) {
    if (value < imageIndex) {
        //getLeft
    }
    if (value > imageIndex) {
        //getRight
    }

    imageIndex = value;
};

const getRightBtn = document.querySelector(".get-right");
getRightBtn.addEventListener("click", getRight);
