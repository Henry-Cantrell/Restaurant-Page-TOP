export function buttonMaker() {

    const button = document.createElement('button');
    button.textContent = 'Button';
    button.addEventListener('click', () => {showThis('theDiv')});
    
    const button2 = document.createElement('button');
    button2.textContent = 'Button 2';
    button2.addEventListener('click', () => {showThis('theDiv2')});

    const button3 = document.createElement('button');
    button3.textContent = 'Button 3';
    button3.addEventListener('click', () => {showThis('theDiv3')});

    const button4 = document.createElement('button');
    button4.textContent = 'Button 4';
    button4.addEventListener('click', () => {showThis('theDiv4')});
    
    const body = document.getElementById('body');
    body.appendChild(button);
    body.appendChild(button2);
    body.appendChild(button3);
    body.appendChild(button4);
}

export function showThis(divChoice) {
    const divA = document.getElementById(divChoice);
    divA.style.display = 'block';
    
    let elementCheck = document.getElementsByTagName('div');
    
    for (var i=0; i<elementCheck.length; i++){
        if (elementCheck[i].id != divChoice) {
            let checker = document.getElementById(elementCheck[i].id);
            checker.style.display = 'none';
        }
    }}