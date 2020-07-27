const locations = ['washington', 'pittsburgh', 'cleveland', 'detroit', 'chicagocubs', 'stlouis', 'kansascity', 'minnesota', 'toronto', 'boston',
 'philadelphia', 'baltimore', 'miami', 'tampa', 'atlanta', 'denver', 'houston', 'arlington', 'phoenix', 'sandiego', 'losangeles', 'anaheim', 
 'seattle', 'oakland', 'sanfrancisco', 'yankees', 'cincinnati', 'chicagosox', 'milwaukee', 'mets']
let buttons = [];
let modals = [];
let closes = [];
for (let i=0; i < 30; i++) {
    let locName = locations[i];
    console.log(locName);
    buttons.push(locations[i]);
    console.log(buttons);
    modals.push(locations[i]+'_modal');
    console.log(modals);
    closes.push(locations[i]+'_close');
    //console.log(closes);
    //let 'locName'+'Button' = document.getElementById(locName);
    //console.log(locName+'Button');
}

for (let i=0; i < 30; i++) {
    buttons[i] = document.getElementById(buttons[i]);
    console.log(buttons);
    modals[i] = document.getElementById(modals[i]);
    console.log(modals);
    closes[i] = document.getElementById(closes[i]);
    console.log(closes);
}

for (let i=0; i < 30; i++) {
    buttons[i].onclick = () => {
        modals[i].style.display = "block";
    }
    closes[i].onclick = () => {
        modals[i].style.display = "none";
    }
}



//Code below here works to create a single box for the Washington Nationals. Use it as a guide to create boxes for everyone else.
/*let washingtonButton = document.getElementById('washington');
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