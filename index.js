function onChangeBg() {
    const container = document.querySelector('.container-first');
    const color1 = document.querySelector('.container-first input[type="color"]');
    container.style.backgroundColor = color1.value;
    mixColors();
}

function changee() {
    const containerr = document.querySelector('.container-second');
    const color2 = document.querySelector('.container-second input[type="color"]');
    containerr.style.backgroundColor = color2.value;
    mixColors();
}

function mixColors() {
    const color1 = document.querySelector('.container-first input[type="color"]').value;
    const color2 = document.querySelector('.container-second input[type="color"]').value;
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const mixedColor = {
        r: Math.round((rgb1.r + rgb2.r) / 2),
        g: Math.round((rgb1.g + rgb2.g) / 2),
        b: Math.round((rgb1.b + rgb2.b) / 2)
    };

    const result = document.querySelector('.result');
    const resultText = document.querySelector('.resultText');
    result.style.backgroundColor = `rgb(${mixedColor.r}, ${mixedColor.g}, ${mixedColor.b})`;
    resultText.textContent = `RGB: (${mixedColor.r}, ${mixedColor.g}, ${mixedColor.b})`;  
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

