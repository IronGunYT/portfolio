function open_modal(param_dict) {
    if(
        'project_name' in param_dict &&
        'project_type' in param_dict &&
        'technologies' in param_dict &&
        'from' in param_dict &&
        'preview' in param_dict &&
        'images' in param_dict
    ){
        let modal = document.querySelector('.modal');
        modal.querySelector('.modal__title').innerHTML = param_dict['project_name'];
        modal.querySelector('[data-modal-row="project"]').innerHTML = param_dict['project_type'];
        modal.querySelector('[data-modal-row="technologies"]').innerHTML = param_dict['technologies'];
        modal.querySelector('[data-modal-row="from"]').innerHTML = param_dict['from'];
        if(param_dict['preview']){
        modal.querySelector('[data-modal-row="preview"]').href = param_dict['preview'];
        // modal.querySelector('[data-modal-row="preview"]').innerHTML = param_dict['preview'];
        }else{
            modal.querySelector('[data-modal-row="preview"]').href = param_dict['preview'];
            modal.querySelector('[data-modal-row="preview"]').innerHTML = "No preview";
        }
        swiper.removeAllSlides();
        let swiper_wrapper = modal.querySelectorAll('.swiper-wrapper');
        let s = "";
        for(let i = 0; i < param_dict['images'].length; i++){
            // s += `<div class="swiper-slide"><img src="${param_dict['images'][i]}" alt="Project image"></div>`;
            swiper.appendSlide(`<div class="swiper-slide"><img src="${param_dict['images'][i]}" alt="Project image"></div>`);
        }
        swiper_wrapper.innerHTML = s;
        console.log('New modal opened')
    }else
        console.error('ERROR: old modal opened');
    document.querySelector('.modal_wrapper').style.display = 'flex';
    setTimeout(function () {
        document.querySelector('.modal_wrapper').style.opacity = '1';
    }, 10);
}

function close_modal() {
    console.log('Modal closed');
    document.querySelector('.modal_wrapper').style.display = 'none';
    document.querySelector('.modal_wrapper').style.opacity = '0';
}

window.onload = function() {
    document.querySelector('.modal_wrapper').addEventListener('click', function (e) {
        if (e.target === this) {
            close_modal();
        }
    });
};
