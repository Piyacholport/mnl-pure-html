//Calscreen
// 5:4 600 * 480  9:16  540 * 960
let defaultWidth = 1280;  // 600 1200 1280
let defaultHeight = 1024; // 480 960 1024
let ratioWidth = 5;
let ratioHeight = 4;
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
let scaleX = calScaleX();
let scaleY = calScaleY();
let x = calX();
let y = calY();


function actualWidth() {
	let actualWidth = innerWidth < (innerHeight * ratioWidth) / ratioHeight;
	return actualWidth ? innerWidth : (innerHeight * ratioWidth) / ratioHeight;
}

function actualHeight() {
	let actualHeight = (innerWidth * ratioHeight) / ratioWidth > innerHeight;
	return actualHeight ? innerHeight : (innerWidth * ratioHeight) / ratioWidth;
}

function calScaleX() {
	let resultScaleX = actualWidth() / defaultWidth;
	return resultScaleX;
}

function calScaleY() {
	let resultScaleY = actualHeight() / defaultHeight;
	return resultScaleY;
}

function calX() {
	let x = innerWidth / 2 - actualWidth() / 2;
	return x;
}

function calY() {
	let y = innerHeight / 2 - actualHeight() / 2;
	return y;
}


let isIframeVisible = false;

//div  
//buttonElement  
const buttonElement = document.createElement(`button`);
buttonElement.id = `buttonElement`;
buttonElement.name = `buttonElement`;
buttonElement.innerText = `MNL`;
buttonElement.style.backgroundColor = 'gold';
buttonElement.style.padding = '10px';
buttonElement.style.width = '60px';
buttonElement.style.height = '60px';
buttonElement.style.borderRadius = '50%'
buttonElement.style.position = `absolute`;
buttonElement.style.bottom = `20px`;
buttonElement.style.right = `20px`;
buttonElement.style.pointerEvents = `stroke`;


// สร้าง div แรก (divFirst)
const divFirst = document.createElement('div');
divFirst.id = 'divFirst';

divFirst.style.height = defaultHeight;
divFirst.style.width = '320px';
divFirst.style.height = '256px';
divFirst.style.position = 'absolute';
divFirst.style.backgroundColor = 'transparent';
divFirst.style.left = '50%';
divFirst.style.top = '50%';
divFirst.style.transform = 'translate(-50%, -50%)';
divFirst.style.pointerEvents = `stroke`;
divFirst.style.display === 'none'

const iframeElement = document.createElement('iframe');
iframeElement.src = 'http://192.168.1.43:8080/?name=dt&lang=th';
iframeElement.style.width = '100%';
iframeElement.style.height = '100%';


const divSecond = document.createElement('div');
divSecond.id = 'divSecond';
divSecond.style.width = '320px';
divSecond.style.height = '256px';
divSecond.style.position = 'absolute';
divSecond.style.backgroundColor = 'transparent';
divSecond.style.left = '50%';
divSecond.style.top = '50%';
divSecond.style.transform = 'translate(-50%, -50%)';
divSecond.style.zIndex = '1';
divSecond.style.pointerEvents = `none`;


const divElement = document.createElement(`div`);
divElement.id = `divElementX`;
divElement.name = `divElementX`;
divElement.style.width = `${window.innerWidth}px`;
divElement.style.height = `${window.innerHeight}px`;
divElement.style.position = `fixed`;
divElement.style.top = `0`;
divElement.style.left = `0`;
divElement.style.background = ``;
divElement.style.zIndex = '999999999999';
divElement.style.pointerEvents = 'none';

divElement.appendChild(divFirst);
divElement.appendChild(divSecond);
divElement.appendChild(buttonElement);
document.body.appendChild(divElement);


// buttonElement.onclick = function () {
// 	if (isIframeVisible) {
// 		divFirst.removeChild(iframeElement);
// 		isIframeVisible = false;
// 	} else {
// 		divFirst.appendChild(iframeElement);
// 		isIframeVisible = true;
// 	}
// };


// สร้างปุ่ม button วงกลมสีขาว 5 อัน
for (let i = 1; i <= 5; i++) {
	const circleButton = document.createElement('button');
	circleButton.id = `circleButton${i}`;
	circleButton.innerText = i;
	circleButton.style.backgroundColor = 'white';
	circleButton.style.padding = '10px';
	circleButton.style.width = '60px';
	circleButton.style.height = '60px';
	circleButton.style.borderRadius = '50%';
	circleButton.style.position = 'absolute';
	circleButton.style.bottom = `${15 + i * 60}px`;
	circleButton.style.right = '15px';
	circleButton.style.pointerEvents = 'stroke';

	circleButton.onclick = function () {
		if (isIframeVisible) {
			divFirst.removeChild(iframeElement);
			isIframeVisible = false;
		} else {
			divFirst.appendChild(iframeElement);
			isIframeVisible = true;
		}
	};

	buttonElement.appendChild(circleButton);
	circleButton.style.display = 'none'; // กำหนดให้ปิดอยู่เริ่มต้น
}

// กด buttonElement เพื่อเปิดและปิดปุ่มวงกลม 5 อัน
buttonElement.onclick = function () {
	const circleButtons = buttonElement.getElementsByTagName('button');

	for (let i = 0; i < 5; i++) {
		if (circleButtons[i].style.display === 'none') {
			circleButtons[i].style.display = 'block'; // เปิดปุ่มวงกลม
		} else {
			circleButtons[i].style.display = 'none'; // ปิดปุ่มวงกลม
		}
	}
};



window.onresize = function () {
	divElement.style.width = `${window.innerWidth}px`;
	divElement.style.height = `${window.innerHeight}px`;
};
console.log(
	"newWidth", window.innerWidth, "\n",
	"newHeight", window.innerHeight, "\n",
	"defaultWidth", defaultWidth, "\n",
	"defaultHeight", defaultHeight, "\n",
	"ratioWidth", ratioWidth, "\n",
	"ratioHeight", ratioHeight, "\n",
	"innerWidth", innerWidth, "\n",
	"innerHeight", innerHeight, "\n",
	"scaleX", scaleX, "\n",
	"scaleY", scaleY, "\n",
	"x", x, "\n",
	"y", y, "\n"

);

