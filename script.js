let black = true;
let white = false;
let rainbow = false;
const displayResolution = 16;

// const customSize = document.querySelector('#size');
// customSize.addEventListener('click', (e) => {
//   displayResolution = prompt('Enter a value between 1 - 100');
//   while (container.div) {
//     container.removeChild(container.div);
//   }
//   renderCanvas();
//   renderPixels();
// });

const getRandomColour = () => {
  const getRanNum = () => {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${getRanNum()}, ${getRanNum()}, ${getRanNum()})`;
};

const container = document.getElementById('container');
container.style.gridTemplateColumns = `repeat(${displayResolution}, 1fr)`;
for (let i = 0; i < displayResolution * displayResolution; i += 1) {
  const pixel = document.createElement('div');
  pixel.setAttribute('id', 'pixel');
  container.appendChild(pixel);
}

const selectColour = (id) => {
  black = false, white = false, rainbow = false;
  id === 'black' ? black = true :
  id === 'white' ? white = true :
  rainbow = true;
};

const buttonArray = document.querySelectorAll('#white, #black, #rainbow');
buttonArray.forEach((button) => {
  button.addEventListener('click', (e) => {
    selectColour(button.id);
    console.log(button.id);
  });
});

const pixelArray = document.querySelectorAll('#pixel');


pixelArray.forEach((pixel) => {
  pixel.addEventListener('mouseover', (e) => {
    if (rainbow) {
      pixel.style.backgroundColor = `${getRandomColour()}`;
    } else if (black) {
      pixel.style.backgroundColor = 'black';
    } else if (white) {
      pixel.style.backgroundColor = 'white';
    }
  });
});


const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', (e) => {
  window.location.reload();
});
