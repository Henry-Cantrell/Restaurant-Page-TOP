export function divMaker() {
    const theDiv = document.createElement('div');
    theDiv.id = 'theDiv'
    theDiv.className = 'tabcontent'
    
    const divContent = document.createElement('p');
    divContent.textContent = 'Test'
    
    theDiv.appendChild(divContent);
    
    const theDiv2 = document.createElement('div');
    theDiv2.id = 'theDiv2'
    theDiv2.className = 'tabcontent'
    
    const divContent2 = document.createElement('p');
    divContent2.textContent ='Test 2';
    
    theDiv2.appendChild(divContent2);

    const theDiv3 = document.createElement('div');
    theDiv3.id = 'theDiv3';
    theDiv3.className = 'tabcontent';

    const divcontent3 = document.createElement('p');
    divcontent3.textContent = 'Test 3';
    theDiv3.appendChild(divcontent3);

    const theDiv4 = document.createElement('div');
    theDiv4.id = 'theDiv4';
    theDiv4.className = 'tabcontent';

    const divContent4 = document.createElement('p');
    divContent4.textContent = 'Test 4'
    theDiv4.appendChild(divContent4)
    
    const body = document.getElementById('body');
    body.appendChild(theDiv);
    body.appendChild(theDiv2);
    body.appendChild(theDiv3);
    body.appendChild(theDiv4);
    }