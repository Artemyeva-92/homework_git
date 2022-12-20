const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`;
let tableBlock = document.getElementById('tableBlock');
let formNewHero = document.querySelector('#formNewHero');
let comicsInputName = document.querySelector('#comicsInputName');
let comicsSelectType = document.querySelector('#comicsSelectType');
let comicsCheckboxFavourite = document.querySelector('#comicsCheckboxFavourite');

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

tableBlock.append(table);
table.append(thead);
table.append(tbody);
let rowHead = document.createElement('tr');

let nameHead = document.createElement('th');
nameHead.innerHTML = "Name";
let comicsHead = document.createElement('th');
comicsHead.innerHTML = "Comics";
let favouriteHead = document.createElement('th');
favouriteHead.innerHTML = "Favourite";
let actionsHead = document.createElement('th');
actionsHead.innerHTML = "Actions";

rowHead.append(nameHead);
rowHead.append(comicsHead);
rowHead.append(favouriteHead);
rowHead.append(actionsHead);
thead.append(rowHead);

const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    }
    if(obj) options.body = JSON.stringify(obj);
    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.catch(request.statusText);
    return response;
}

(async () => {
    try{
        let getHeroes = await controller(API + `/heroes`);
        getHeroes
            .map(obj => renderHero(obj))
            .join(``);
        let comicsSelect = await controller( API + `/universes`);
        comicsSelectType.innerHTML = comicsSelect
            .map(obj => `<option value="${obj.name}">${obj.name}</option>`)
            .join(``);
        formNewHero.addEventListener('submit', async e =>{
            e.preventDefault();
            let newHero = {
                "name": comicsInputName.value,
                "comics": comicsSelectType.value,
                "favourite": comicsCheckboxFavourite.checked,
            }
            let heroBase = await controller(API + `/heroes`);
            let heroExist = heroBase.find(hero=> hero.name.toUpperCase() === newHero.name.toUpperCase());
            if(heroExist){
                console.log(`користувач з ім'ям ${newHero.name} вже є в базі`);
                return;
            }
            let addedHero = await controller(API + `/heroes`,`POST`, newHero);
            renderHero(addedHero);   
        })} 
    catch(err){
        console.log(`In catch: ${err}`);
    }
})();

const renderHero = hero =>{
    let objHeroNoId = Object.values(hero).splice(1,4);
    let TRs = document.createElement('tr');
    let TDs = document.createElement('td');
    let btnDelete = document.createElement('button');
    btnDelete.innerHTML = `Delete`;
    btnDelete.id = `${hero.id}`;
    btnDelete.addEventListener('click', async()=>{
    await controller(API +`/heroes/${hero.id}`, `DELETE`);
    TRs.remove()
    })
    objHeroNoId.forEach(e => {
        let TDs = document.createElement('td');
        let checkbox = document.createElement(`input`);
        checkbox.setAttribute("type", "checkbox");
        if( e.toString() === 'true'){
        checkbox.setAttribute('checked', true);
        TDs.append(checkbox);
        } else if(e.toString() === 'false') {
            TDs.append(checkbox);
        }  else{
            TDs.innerHTML = `${e}`
        }
        checkbox.addEventListener('change', async ()=>{
            if (checkbox.checked) {
                await controller(API +`/heroes/${hero.id}`, `PUT`, {favourite: `true`});
            } else {
                await controller(API +`/heroes/${hero.id}`, `PUT`, {favourite: `false`});
            }
        });
        TRs.append(TDs);
        tbody.append(TRs);
    })
    TDs.append(btnDelete);
    TRs.append(TDs);
}
