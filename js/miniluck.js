const buttonElement = document.createElement('button');
buttonElement.id = 'buttonElement';
buttonElement.name = 'buttonElement';
buttonElement.innerText = 'Miniluck';

buttonElement.style.position = 'absolute';
buttonElement.style.bottom = '20px';
buttonElement.style.right = '20px';
buttonElement.style.pointerEvents = `stroke`;
buttonElement.onclick = function() {
    alert("Welcome Miniluck!");
};

const divElement = document.createElement('div');
divElement.id = 'divElementX';
divElement.name = 'divElementX';
divElement.style.width = '150px';
divElement.style.height = '150px';
divElement.style.position = 'fixed';
divElement.style.bottom = '20px';
divElement.style.left = `${window.innerWidth - 95}px`;
divElement.style.transform = 'translateX(-50%)';
divElement.style.background = 'red';

divElement.appendChild(buttonElement);
document.body.appendChild(divElement);

window.onresize = function() {
    divElement.style.left = `${window.innerWidth - 95}px`;
};
