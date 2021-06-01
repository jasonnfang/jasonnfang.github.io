const body = document.querySelector('body');
const btn = document.querySelector('button');
const para = document.querySelector('p');
const title = document.querySelector('h4');

function darkMode (){
    let btnClass = btn.getAttribute('class');
    if (btnClass == 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Light Mode';
        body.style.backgroundColor = '#000';
        para.style.color = '#fbf7f0';
        title.style.color = '#fbf7f0';
        btn.style.color = '#fbf7f0';

    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent = 'Dark Mode';
        body.style.backgroundColor = '#fbf7f0';
        para.style.color = '#000';
        title.style.color = '#000'
        btn.style.color = '#000';
    }
}

btn.addEventListener('click', darkMode);