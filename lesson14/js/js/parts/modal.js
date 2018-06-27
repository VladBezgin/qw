function modal() {
	 let more = document.querySelector('.more'),
        descriptionBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

function mdalOpen(descrBtn) {

    descrBtn.addEventListener('click', function() {
        this.classList.add('description-btn-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        descrBtn.classList.remove('description-btn-splash');
        document.body.style.overflow = '';
    });
}

mdalOpen(descriptionBtn[0]);
mdalOpen(descriptionBtn[1]);
mdalOpen(descriptionBtn[2]);
mdalOpen(descriptionBtn[3]);


    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Спасибо! Скоро мы с вами свяжемся';
    message.failure = 'Что-то пошло не так...';

    let form1 = document.getElementsByClassName('main-form')[0],
        input1 = form1.getElementsByTagName('input'),
        form2 = document.getElementsByClassName('main-form')[1],
        input2 = form2.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    function formFunction(form, input) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php')

            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);

            request.send(formData);

            request.onreadystatechange = function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                }
            }
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    }

    formFunction(form1, input1);
    formFunction(form2, input2);

}

module.exports = modal;
