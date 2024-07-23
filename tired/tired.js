



function displayImage() {
    const Tea = document.getElementById("tea");
    const music = document.getElementById("cat");
    const doll = document.getElementById('bear');

    const btnOne = document.getElementById('btn-one');
    const btnTwo = document.getElementById("btn-two");
    const btnThree = document.getElementById("btn-three");
    
    const btns = document.getElementsByClassName("btn");

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
