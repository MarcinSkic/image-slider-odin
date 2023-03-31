const frame = document.querySelector(".slider-frame");
const buttonsContainer = document.querySelector(".slider-buttons");
//TODO: Take it from frame width
const width = 200;
let imageIndex = 0;
const imagesCount = frame.children.length;

const getRight = function getRight(event) {
    const newIndex = imageIndex + 1 >= imagesCount ? 0 : imageIndex + 1;
    console.log({ imageIndex, newIndex });
    setIndex(newIndex);
    event?.preventDefault();
};

const getLeft = function getLeft(event) {
    const newIndex = imageIndex - 1 < 0 ? imagesCount - 1 : imageIndex - 1;
    setIndex(newIndex);
    event.preventDefault();
};

const onDirectButton = function onDirectButton(event) {
    setIndex(Number(event.currentTarget.dataset.index));
    event.preventDefault();
};

//This function in the future should be single access point to any operation on slider, buttons just increment/decrement index through this
const setIndex = function setIndex(value) {
    const bigJump =
        Math.abs(value - imageIndex) > 1 &&
        Math.abs(value - imageIndex) != imagesCount - 1;
    imageIndex = value;

    [...frame.children].forEach((child, index) => {
        let difference = imageIndex - index;
        if (Math.abs(difference) > Math.floor(imagesCount / 2)) {
            difference =
                difference < 0
                    ? imagesCount + difference
                    : -imagesCount + difference;
        }

        if (Math.abs(difference) === Math.floor(imagesCount / 2) || bigJump) {
            child.classList.add("not-animated");
        } else {
            child.classList.remove("not-animated");
        }

        const targetWidth = difference * width;
        child.style.right = `${targetWidth}px`;
        child.dataset.difference = `${difference}`;
    });

    [...buttonsContainer.children].forEach((child) => {
        if (Number(child.dataset.index) === imageIndex) {
            child.classList.add("selected");
        } else {
            child.classList.remove("selected");
        }
    });

    console.log(`currentIndex: ${imageIndex}`);
};

const generateButtons = function generateButtons() {
    [...frame.children].forEach((child, index) => {
        const btn = document.createElement("button");
        btn.dataset.index = `${index}`;
        btn.addEventListener("click", onDirectButton);
        buttonsContainer.append(btn);
    });
};
const doAutoSlide = function doAutoSlide() {
    setTimeout(() => {
        getRight(null);
        doAutoSlide();
    }, 5000);
};

const getRightBtn = document.querySelector(".get-right");
const getLeftBtn = document.querySelector(".get-left");
getRightBtn.addEventListener("click", getRight);
getLeftBtn.addEventListener("click", getLeft);
generateButtons();
setIndex(0);
doAutoSlide();
