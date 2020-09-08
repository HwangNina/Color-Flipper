const colorBtn = document.getElementById('color-show__btn');
const colorHex = document.getElementById('color-show__code');
const colorTarget = document.querySelector('body');

const colorArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const randomColor = () => {
    let randomNum
    let hexIdxArr = [];
    for(let i = 0 ; i <= 5 ; i++){
        randomNum = Math.floor(Math.random()*colorArray.length);
        hexIdxArr.push(colorArray[randomNum]);
    }

    let hexCode = hexIdxArr.join('')
    
    return hexIdx = `#${hexCode}`;
}

colorBtn.addEventListener('click', () => {
    randomColor()
    colorHex.textContent = hexIdx;
    colorBtn.style.backgroundColor = hexIdx;
    colorTarget.style.backgroundColor = hexIdx;
})