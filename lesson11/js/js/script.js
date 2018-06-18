window.addEventListener('DOMContentLoaded', function() {

    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1)

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target.className == 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        };
    })

    function nullPlus(data) { 
        if (data < 0) {
            data = '00';
        } else if (data < 10) {
            data = "0" + data;
        };
        return data;
    }

    let deadline = '2018-06-18';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));


        seconds = nullPlus(seconds);
        minutes = nullPlus(minutes);
        hours = nullPlus(hours);

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    function setClock(id, endtime) {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;


        };

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadline);

    let more = document.querySelector('.more'),
        descriptionBtn = document.querySelector('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    descriptionBtn.addEventListener('click', function() {
        this.classList.add('description-btn-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        descriptionBtn.classList.remove('description-btn-splash');
        document.body.style.overflow = '';
    });


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

    let form = document.getElementsByClassName('main-form')[0],
    	input = form.getElementsByTagName('input'),
    	statusMessage = document.createElement('div');
    	statusMessage.classList.add('status');

    	form.addEventListener('submit', function(event) {
    		event.preventDefault();
    		form.appendChild(statusMessage);

    		let request = new XMLHttpRequest();
    		request.open('POST', 'server.php')

    		request.setRequestHeader('Content-Type' , 'application/x-www-form-urlencoded');

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

});


let nav = document.querySelectorAll('[href^="#"]'),
    speed = 0.1;
for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function(e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}