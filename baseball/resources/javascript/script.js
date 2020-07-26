let washingtonButton = document.getElementById('washington');
console.log(washingtonButton);
let washingtonModal = document.getElementById('washington_modal');
console.log(washingtonModal);
let washingtonClose = document.getElementById('washington_close');
let backgroundMap = document.getElementById('big_map')
//let washColor = washingtonButton.background

washingtonButton.onclick = () => {
    console.log('washington clicked')
    washingtonModal.style.display = "block";
    //washingtonModal.style.position = "fixed";
    console.log(washingtonModal);
    //backgroundMap.src = "../images/favicon-32x32_rotunda.png";
    //washingtonButton.style.color = 'red';
}

washingtonClose.onclick = () => {
    washingtonModal.style.display = "none";
}
/*window.onclick = () => {
    washingtonModal.style.display = "none";
}*/