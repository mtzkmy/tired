



function displayImage() {
    const Tea = document.getElementById("tea");
    const music = document.getElementById("cat");
    const doll = document.getElementById('bear');

    const btnOne = document.getElementById('btn-one');
    const btnTwo = document.getElementById("btn-two");
    const btnThree = document.getElementById("btn-three");

    if(btnOne.checked) {
        Tea.style.display = 'block';
    }else if(btnTwo.checked){
        music.style.display = 'block';
    }else if(btnThree.checked){
        doll.style.display = 'block';
    }
    else {
        alert('どれか選んでください')
    }
}

const btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++){

btns[i].addEventListener('click', displayImage);
}

document.addEventListener('DOMContentLoaded', function() {
const todays = document.querySelectorAll('input[name="today"]');
const images = document.querySelectorAll('.image');

todays.forEach(radio => {
// 他のラジオボタンを選択しなおしたとき
radio.addEventListener('change', function() {
// すべての画像を非表示にする
images.forEach(image => {
    image.style.display = 'none';
});

// 選択しなおされたラジオボタンに対応する画像を表示させる
// ラジオボタンのvalueの値を取得
const values = document.getElementById(this.value);
if(values) {
    values.style.display = 'block';
}
});
});
});