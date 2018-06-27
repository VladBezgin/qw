(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

    let tab = require('../parts/tab.js');
    let modal = require('../parts/modal.js');
    let slider = require('../parts/slider.js');
    let calc = require('../parts/calc.js');
    let timer = require('../parts/timer.js');

    tab();
    modal();
    slider();
    calc();
    timer();
    
});

},{"../parts/calc.js":2,"../parts/modal.js":3,"../parts/slider.js":4,"../parts/tab.js":5,"../parts/timer.js":6}],2:[function(require,module,exports){
function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })

persons.onkeypress = function(e) {
      var chr = getChar(e);
      if (chr == '+' || chr == 'e' || chr == ',' || chr == '.') {
        return false;
      }
    }
    restDays.onkeypress = function(e) {
      var chr = getChar(e);
      if (chr == '+' || chr == 'e' || chr == ',' || chr == '.') {
        return false;
      }
    }
    function getChar(event) {
      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) 
      }
    }
}

module.exports = calc;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
function slider() {
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1
        };
        if (n < 1) {
            slideIndex = slides.length;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        };
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        };

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSliders(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function() {
        plusSliders(-1);
    })

    next.addEventListener('click', function() {
        plusSliders(1);
    })

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    })
}

module.exports = slider;
},{}],5:[function(require,module,exports){
function tab() {
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
}

module.exports = tab;
},{}],6:[function(require,module,exports){
function timer() {
    function nullPlus(data) { 
        if (data < 0) {
            data = '00';
        } else if (data < 10) {
            data = "0" + data;
        };
        return data;
    }

    let deadline = '2018-06-26';

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
}

module.exports = timer;
},{}]},{},[1]);
