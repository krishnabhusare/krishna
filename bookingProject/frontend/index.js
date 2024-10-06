const form = document.getElementById('form');

form.addEventListener('submit',()=>{
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = {name,email,phone};
    axios.post('http://localhost:3000/user/add-user',obj);

     showOnScreen(obj);
    event.target.name.value ="";
    event.target.email.value ="";
    event.target.phone.value = "";
    
});

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:3000/user/get-user')
    .then(res=>{
       
        for(let i=0;i<res.data.allUsers.length;i++){
            showOnScreen(res.data.allUsers[i]);
        };
        
    })
});




function showOnScreen(obj){
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    const liText = document.createTextNode(`${obj.name}--${obj.email}--${obj.phone}`);
    li.appendChild(liText);
    ul.appendChild(li);

    const dltBtn = document.createElement('button');
    const dltBtnText = document.createTextNode('Delete');
    dltBtn.appendChild(dltBtnText);
    li.appendChild(dltBtn);

    dltBtn.addEventListener('click',()=>{
        axios.delete(`http://localhost:3000/user/delete-user/${obj.id}`);
       ul.removeChild(li);
    });


    const edtBtn = document.createElement('button');
    const edtBtnText = document.createTextNode('Edit');
    edtBtn.appendChild(edtBtnText);
    li.appendChild(edtBtn);
};






