let jokesCategories = document.querySelector('#jokesCategories');
let jokesList = document.querySelector('#jokesList');

const getFile = url => fetch(url)
    .then(data => data.ok ? data.json(): Promise.reject(data.statusText));

getFile(`https://api.chucknorris.io/jokes/categories`)
    .then(data =>
            data.forEach(() => {
                jokesCategories.innerHTML = data.map(e => `<option value="${e}">${e}</option>`).join('');              
            }))
    .catch(err => console.log(err));

jokesCategories.addEventListener('change', ()=>{
    getFile(`https://api.chucknorris.io/jokes/random?category=${jokesCategories.value}`)
        .then(data => {
            document
                .querySelector(`option[value="${jokesCategories.value}"]`)
                .setAttribute("disabled", true);
            let liItem = document.createElement('li');
            liItem.innerHTML = `<p>Category: <b>${data.categories[0]}</b></p>
                <p>${data.value}</p>`;
            let removeJoke = document.createElement(`button`);
            removeJoke.innerHTML = `Remove joke`;
            removeJoke.addEventListener(`click`, ()=>{
                liItem.remove();
                document
                    .querySelector(`option[value="${data.categories[0]}"]`)
                    .removeAttribute("disabled", false);
            });
            liItem.append(removeJoke);
            jokesList.append(liItem);
        })
        .catch(err=> console.log(err))
});
