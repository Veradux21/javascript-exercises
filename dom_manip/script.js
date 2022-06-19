const container = document.querySelector('#container');
//select ID Container

const content0 = document.createElement('p')
content0.textContent = 'Hey I\'m red!'
content0.setAttribute('style','color:red;')
//Add <p> with text and set color red

const content1 = document.createElement('h3')
content1.textContent = "I\'m a blue h3!"
content1.style.cssText = 'color:blue';
//Add h3 with style.cssText styling to assign color blue

const content2 = document.createElement('div')
    const content2a = document.createElement('h1')
    content2a.textContent = "I\'m in a div";
    const content2b = document.createElement('p')
    content2b.textContent = "ME TOO!"

container.appendChild(content0);
container.appendChild(content1);
container.appendChild(content2);
content2.appendChild(content2a);
content2.appendChild(content2b);