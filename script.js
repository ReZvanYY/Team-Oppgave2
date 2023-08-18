function movePicToInventory(){
    document.getElementById('').innerHTML = '';
    blankAll();
}

function ShowHideBag(){
    document.getElementById('ShowHideBag').classList.toggle('OpenClose1');    
}

let items = [`<img src = "Terje2.png"/>`, `item2`, `item3`];
function move(x){
    document.getElementById('MoveIn').remove();
    document.getElementByI('square4').innerHTML += items[x-1];
}