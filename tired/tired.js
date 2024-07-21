
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");


const Btn = document.getElementsByClassName("btn");

// // btnOneがクリックされたら　のイベント
// Btn.addEventListener('click', () =>{
// // もしbtnOneが選ばれたら画像を表示する
//     if(btnOne.checked) {
//         Tea.style.display = 'block';
//     }else {
//         alert('何も選ばれてません');
//     }
// });

function displayImage() {
    const Tea = document.getElementById("tea");
    const btnOne = document.getElementById('btn-one');

    if(btnOne.checked) {
        Tea.style.display = 'block';
    }else {
        alert('どれか選んでください')
    }
}

Btn.addEventListener('click', displayImage);