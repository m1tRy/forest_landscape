$(function() {

  var header = $("#header"),
      introH = 1,
      scrollOffset = $(window).scrollTop();

  /*header*/
    checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if( scrollOffset >= introH && innerWidth >= 1050) {
      header.addClass("fixed"),
      document.body.style.marginTop = '120px';

    } else if ( scrollOffset >= introH && innerWidth < 1049){
      header.addClass("fixed"),
      document.body.style.marginTop = '0',
      document.body.style.marginTop = '73px';
    } else{
      header.removeClass("fixed"),
      document.body.style.marginTop = '0';
    }
  }

  $("#nav_toggle").on("click", function(event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
  });

/* culc*/
let coll = document.getElementsByClassName('btnc');
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = '200px'
            //content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
}



const btn = document.querySelectorAll('.btnc > div');
for (let i = 0; i < btn.length; i++) {

  btn[i].addEventListener('click', function() {
    this.innerHTML =
      (this.innerHTML === 'открыть калькулятор') ? this.innerHTML = 'закрыть калькулятор' : this.innerHTML = 'открыть калькулятор';
  })

}

//culc inner




/* for live for bus*/

$("[data-clic]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('clic');

    $("#btns__ a").removeClass("active");
    $this.addClass("active");

    });




/* csroll hesder*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockId =  $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

        $("html, body").animate({
          scrollTop: blockOffset
        }, 500);
  });


});


//news
fader.addEventListener("input", function () {
  document.querySelector(
    ".line"
  ).style.transform = `translate(-${this.value}px, 0)`;
});



function Sim(sldrId) {

	let id = document.getElementById(sldrId);
	if(id) {
		this.sldrRoot = id
	}
	else {
		this.sldrRoot = document.querySelector('.sim-slider')
	};

	// Carousel objects
	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list');
	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element');
	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element');


	// Initialization
	this.options = Sim.defaults;
	Sim.initialize(this)
};

Sim.defaults = {

	// Default options for the carousel
	loop: true,     // Бесконечное зацикливание слайдера
	auto: true,     // Автоматическое пролистывание
	interval: 8000, // Интервал между пролистыванием элементов (мс)
	arrows: false,   // Пролистывание стрелками
	dots: false      // Индикаторные точки
};

Sim.prototype.elemPrev = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement -= num;
	if(this.currentElement < 0) this.currentElement = this.elemCount-1;


	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

};

Sim.prototype.elemNext = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement += num;
	if(this.currentElement >= this.elemCount) this.currentElement = 0;

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';
};


Sim.initialize = function(that) {

	// Constants
	that.elemCount = that.sldrElements.length; // Количество элементов

	// Variables
	that.currentElement = 0;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function() {
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemNext()
			}
		}, that.options.interval)
	};

	if(that.elemCount >= 1) {   // показать первый элемент
		that.sldrElemFirst.style.opacity = '1';
	};

	if(!that.options.loop) {
		that.options.auto = false; // отключить автопркрутку
	}
	else if(that.options.auto) {   // инициализация автопрокруки
		setAutoScroll();
		that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
	};
};

new Sim();





function Sim1(sldrId) {

	let id = document.getElementById(sldrId);
	if(id) {
		this.sldrRoot = id
	}
	else {
		this.sldrRoot = document.querySelector('.sim-slider1')
	};

	// Carousel objects
	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list1');
	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element1');
	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element1');


	// Initialization
	this.options = Sim1.defaults;
	Sim1.initialize(this)
};

Sim1.defaults = {

	// Default options for the carousel
	loop: true,     // Бесконечное зацикливание слайдера
	auto: true,     // Автоматическое пролистывание
	interval: 6000, // Интервал между пролистыванием элементов (мс)
	arrows: false,   // Пролистывание стрелками
	dots: false      // Индикаторные точки
};

Sim1.prototype.elemPrev = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement -= num;
	if(this.currentElement < 0) this.currentElement = this.elemCount-1;


	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

};

Sim1.prototype.elemNext = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement += num;
	if(this.currentElement >= this.elemCount) this.currentElement = 0;

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';
};


Sim1.initialize = function(that) {

	// Constants
	that.elemCount = that.sldrElements.length; // Количество элементов

	// Variables
	that.currentElement = 0;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function() {
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemNext()
			}
		}, that.options.interval)
	};

	if(that.elemCount >= 1) {   // показать первый элемент
		that.sldrElemFirst.style.opacity = '1';
	};

	if(!that.options.loop) {
		that.options.auto = false; // отключить автопркрутку
	}
	else if(that.options.auto) {   // инициализация автопрокруки
		setAutoScroll();
		that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
	};
};

new Sim1();


function Sim2(sldrId) {

	let id = document.getElementById(sldrId);
	if(id) {
		this.sldrRoot = id
	}
	else {
		this.sldrRoot = document.querySelector('.sim-slider2')
	};

	// Carousel objects
	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list2');
	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element2');
	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element2');


	// Initialization
	this.options = Sim2.defaults;
	Sim2.initialize(this)
};

Sim2.defaults = {

	// Default options for the carousel
	loop: true,     // Бесконечное зацикливание слайдера
	auto: true,     // Автоматическое пролистывание
	interval: 8000, // Интервал между пролистыванием элементов (мс)
	arrows: false,   // Пролистывание стрелками
	dots: false      // Индикаторные точки
};

Sim2.prototype.elemPrev = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement -= num;
	if(this.currentElement < 0) this.currentElement = this.elemCount-1;


	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

};

Sim2.prototype.elemNext = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement += num;
	if(this.currentElement >= this.elemCount) this.currentElement = 0;

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';
};


Sim2.initialize = function(that) {

	// Constants
	that.elemCount = that.sldrElements.length; // Количество элементов

	// Variables
	that.currentElement = 0;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function() {
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemNext()
			}
		}, that.options.interval)
	};

	if(that.elemCount >= 1) {   // показать первый элемент
		that.sldrElemFirst.style.opacity = '1';
	};

	if(!that.options.loop) {
		that.options.auto = false; // отключить автопркрутку
	}
	else if(that.options.auto) {   // инициализация автопрокруки
		setAutoScroll();
		that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
	};
};

new Sim2();




function Sim3(sldrId) {

	let id = document.getElementById(sldrId);
	if(id) {
		this.sldrRoot = id
	}
	else {
		this.sldrRoot = document.querySelector('.sim-slider3')
	};

	// Carousel objects
	this.sldrList = this.sldrRoot.querySelector('.sim-slider-list3');
	this.sldrElements = this.sldrList.querySelectorAll('.sim-slider-element3');
	this.sldrElemFirst = this.sldrList.querySelector('.sim-slider-element3');


	// Initialization
	this.options = Sim3.defaults;
	Sim3.initialize(this)
};

Sim3.defaults = {

	// Default options for the carousel
	loop: true,     // Бесконечное зацикливание слайдера
	auto: true,     // Автоматическое пролистывание
	interval: 6000, // Интервал между пролистыванием элементов (мс)
	arrows: false,   // Пролистывание стрелками
	dots: false      // Индикаторные точки
};

Sim3.prototype.elemPrev = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement -= num;
	if(this.currentElement < 0) this.currentElement = this.elemCount-1;


	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';

};

Sim3.prototype.elemNext = function(num) {
	num = num || 1;

	let prevElement = this.currentElement;
	this.currentElement += num;
	if(this.currentElement >= this.elemCount) this.currentElement = 0;

	this.sldrElements[this.currentElement].style.opacity = '1';
	this.sldrElements[prevElement].style.opacity = '0';
};


Sim3.initialize = function(that) {

	// Constants
	that.elemCount = that.sldrElements.length; // Количество элементов

	// Variables
	that.currentElement = 0;
	let bgTime = getTime();

	// Functions
	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function() {
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval) {
				bgTime = fnTime; that.elemNext()
			}
		}, that.options.interval)
	};

	if(that.elemCount >= 1) {   // показать первый элемент
		that.sldrElemFirst.style.opacity = '1';
	};

	if(!that.options.loop) {
		that.options.auto = false; // отключить автопркрутку
	}
	else if(that.options.auto) {   // инициализация автопрокруки
		setAutoScroll();
		that.sldrList.addEventListener('mouseenter', function() {clearInterval(that.autoScroll)}, false);
		that.sldrList.addEventListener('mouseleave', setAutoScroll, false)
	};
};

new Sim3();
