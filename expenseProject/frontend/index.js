const form = document.getElementById('form');


form.addEventListener('submit',()=>{
    event.preventDefault();
    
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    
    
    const obj = {amount,description,category};
    
    axios.post('http://localhost:3000/expense/add-expense',obj);
    showOnScreen(obj);

    event.target.amount.value="";
    event.target.description.value="";
    event.target.category.value="";

});

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:3000/expense/get-expense')
    .then(res=>{
        for(let i=0;i<res.data.allExpense.length;i++){
            showOnScreen(res.data.allExpense[i]);
        }
    })
});




function showOnScreen(obj){
   const ul = document.getElementById('ul');
   const li = document.createElement('li');
   const liText = document.createTextNode(`${obj.amount}--${obj.description}--${obj.category}`);
   li.appendChild(liText);
   ul.appendChild(li);

   const dltBtn = document.createElement('button');
   const dltBtnText = document.createTextNode('Delete');
   dltBtn.appendChild(dltBtnText);
   li.appendChild(dltBtn);

   dltBtn.addEventListener('click',()=>{
    axios.delete(`http://localhost:3000/expense/delete-expense/${obj.id}`);
    ul.removeChild(li);
   })


   const edtBtn = document.createElement('button');
   const edtBtnText = document.createTextNode('Edit');
   edtBtn.appendChild(edtBtnText);
   li.appendChild(edtBtn);
}