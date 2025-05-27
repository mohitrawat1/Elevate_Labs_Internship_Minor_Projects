const btn = document.getElementById('btn');
const input = document.getElementById('tasks');
const list = document.getElementById('tasklist');

btn.addEventListener('click',()=>{
    const listInput = input.value.trim();
    if(listInput == ""){
        alert("Plese eneter an input");
        return;
    }
    const li = document.createElement('li');
    li.textContent = listInput;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.addEventListener('click',()=>{
        list.removeChild(li);
    });
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value='';
});