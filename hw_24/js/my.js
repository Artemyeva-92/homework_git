const API = ` https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
let colors=$(`.colors`);

$.ajax({
    url: API,
    method: 'GET',
    dataType: 'json',
    success: data =>{
        console.log(data)
        data.forEach(e=> {
            colors.append(`<div class="${e.img}"></div>`);
            let color = $(`.${e.img}`);
            color.css({
            'width': '30px',
            'height': '40px',
            'background-color': `${e.color}`,
            'margin': '10px'
            });
            
            color.on('click', ()=>{
                if( colors.hasClass('active')){
                $(`.block`).remove();
                colors.before(`<div class="block"><img src="https://mc-astro.github.io/tesla-roadster-colors/img/${e.img}.jpg" alt="${e.title}" style="width:100%">
                <p>${e.title}</p></div>`);
                } else{
                colors.addClass('active');
                colors.before(`<div class="block"><img src="https://mc-astro.github.io/tesla-roadster-colors/img/${e.img}.jpg" alt="${e.title}" style="width:100%">
                <p>${e.title}</p></div>`);
                } 
            });
        });
    },
    error: error => console.log(error)
})

