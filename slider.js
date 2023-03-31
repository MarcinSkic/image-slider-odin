const frame = document.querySelector(".slider-frame");
//TODO: Take it from frame width
const width = 200;
let imageIndex = 0;
const imagesCount = frame.children.length;

const getRight = function getRight(event) {
    const newIndex = imageIndex + 1 >= imagesCount ? 0 : imageIndex + 1;
    setIndex(newIndex);
    event.preventDefault();
};

const getLeft = function getLeft(event) {
    const newIndex = imageIndex - 1 < 0 ? imagesCount - 1 : imageIndex - 1;
    setIndex(newIndex);
    event.preventDefault();
};

//This function in the future should be single access point to any operation on slider, buttons just increment/decrement index through this
const setIndex = function setIndex(value) {
    imageIndex = value;

    [...frame.children].forEach((child, index) => {
        let difference = imageIndex - index;
        difference =
            Math.abs(difference) > imagesCount / 2 ? -difference : difference;
        const targetWidth = difference * width;
        child.style.right = `${targetWidth}px`;
        child.dataset.difference = `${difference}`;
    });

    console.log(`currentIndex: ${imageIndex}`);
};

const getRightBtn = document.querySelector(".get-right");
const getLeftBtn = document.querySelector(".get-left");
getRightBtn.addEventListener("click", getRight);
getLeftBtn.addEventListener("click", getLeft);
setIndex(0);
