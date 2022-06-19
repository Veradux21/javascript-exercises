const btn = document.querySelector('#btn');
btn.onclick = () => ("Hello World");
//btn onclick arrow function

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert("Hellow World");
});

//Using Named function
function alertFunction(){
    alert("YAY! You did it!");
}

btnfnct.onclick = alertFunction;
btnfnct1.addEventListener('click', alertFunction);

//Callback events
const btnCallback = document.querySelector('#btnCallback');
btnCallback.addEventListener('click', alertFunction);
btnCallback.addEventListener('click', function(e) {
    console.log(e/* .target */);
    e.target.style.background = 'blue';
});

//Group of node listeners
const group = document.querySelectorAll('.group');
group.forEach((group)=>{
    group.addEventListener('click', () => {
        alert(group.id);
    });
});