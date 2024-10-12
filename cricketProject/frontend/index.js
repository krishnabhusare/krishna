const form = document.getElementById('form');

form.addEventListener('submit',()=>{
    event.preventDefault();
    const name = event.target.name.value;
    const country = event.target.country.value;
    const  birthDate = event.target.birthDate.value;
    const birthPlace = event.target.birthPlace.value;
    const url = event.target.url.value;
    const career = event.target.career.value;

    const obj = {
        name,country,birthDate,birthPlace,url,career
    }
    console.log(obj);

    axios.post('http://localhost:3000/player/add-player',obj);

});


const search = document.getElementById('search');
search.addEventListener('click',()=>{

    const searchName = document.getElementById('searchInput').value;
   
    console.log('searchname',searchName);
  axios.get(`http://localhost:3000/player/get-player/${searchName}`)
  .then(res=>{
    console.log(res.data.allPlayers[0]);
    profile(res.data.allPlayers[0]);
    
  })
  hideForm();
  hideSearch();
    
})


function hideForm(){
    const postDiv = document.getElementById('container');
    postDiv.style.display = 'none';
}

function showForm(){
    const postDiv = document.getElementById('container');
    postDiv.style.display = 'block';
}

function hideSearch(){
    const searchDiv = document.getElementById('searchDiv');
    searchDiv.style.display = 'none';
}
function showSearch(){
    const searchDiv = document.getElementById('searchDiv');
    searchDiv.style.display = 'block';
}

function hideProfile(){
    const getDiv = document.getElementById('getSection');
    getDiv.style.display = 'none';
}
function showProfile(){
    const getDiv = document.getElementById('getSection');
    getDiv.style.display = 'block';
}




function profile(obj){
    const getDiv = document.getElementById('getSection');
    const h1 = document.createElement('h1');
    const h1text = document.createTextNode(`${obj.name}`);
    h1.appendChild(h1text);
    getDiv.appendChild(h1);
    const h3 = document.createElement('h3');
    const h3Text = document.createTextNode(`${obj.country}`);
    h3.appendChild(h3Text);
    getDiv.appendChild(h3);
    h3.style.marginLeft = '70px';

    
    const img = document.createElement('img');
    img.src = `${obj.url}`;
    img.alt = 'photo';
    img.width = '150';
    img.height = '150';
    img.style.marginLeft = '20px'
    img.style.borderRadius = '50%';
    getDiv.appendChild(img);

    const h4 = document.createElement('h4');
    
    const h4Textd = document.createTextNode(`Birth Date: ${obj.birthDate}`);
    h4.appendChild(h4Textd);
    getDiv.appendChild(h4);

    const h4p = document.createElement('h4');

    const h4Textp = document.createTextNode(`Birth Place: ${obj.birthPlace}`);
    h4p.appendChild(h4Textp);
    getDiv.appendChild(h4p);

    const p = document.createElement('p');
    const pText = document.createTextNode(`${obj.career}`);
    p.appendChild(pText);
    getDiv.appendChild(p);

    const updateBtn = document.createElement('button');
    const updateBtnText = document.createTextNode('Update Information');
    updateBtn.appendChild(updateBtnText);
    getDiv.appendChild(updateBtn);

    updateBtn.addEventListener('click',()=>{
            hideProfile();
            showForm();
            showSearch();

            document.getElementById('name').value = obj.name;
            document.getElementById('country').value = obj.country;
            document.getElementById('birthDate').value = obj.birthDate;
            document.getElementById('birthPlace').value = obj.birthPlace;
            document.getElementById('url').value = obj.url;
            document.getElementById('career').value = obj.career;
            
    })
    




}
