
$('.js-link-scroll').on('click', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top - 120;
    $('body,html').animate({scrollTop: top}, 1500);
})

$("[data-text-limit]").map(function(i, el ){
    el = $(el);
    let text = el.text();
    let textLimit = el.attr("data-text-limit");
    if( text.length > textLimit * 1){
      text = text.substring(0, textLimit)
      el.text(text + "...");
    }
})

// //? Burger Menu ------------------------------------------------>>>>>>
const body = document.querySelector('body'),
  menuButton = document.querySelector('.burger'),
  menu = document.querySelector('.header-mobile');
  
function closeBurger() {
    menuButton.classList.remove('active');
    menu.classList.remove('active');
    body.style.overflow = '';
}
function openBurger() {
    menuButton.classList.add('active');
    menu.classList.add('active');
    body.style.overflow = 'hidden';
}

if (document.querySelectorAll('.burger').length > 0) {
    menuButton.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            closeBurger();
        } else if (!this.classList.contains('active')) {
             openBurger();
        }
  });
}

const menuLink = document.querySelectorAll('.menu__list-link');
menuLink.forEach((el) =>  {
    el.addEventListener('click', (e) => {
      
    if (el.getAttribute("href") === "#") {
      e.preventDefault();
    } else {
      closeBurger();
       }
    })
})
//? Burger Menu end------------------------------------------------>>>>>>

// //? Select multiplay 
const multiDefault = () => {
    const elements = document.querySelectorAll('.js-select');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
        position:'bottom'
      });
    })
  }
multiDefault();
//   //? Select multiplay END 

// //??? Tabs   -------------------------------------->>>>>>
const tabsBtn = document.querySelectorAll('.js-tabs-btn');
const tabsItem = document.querySelectorAll('.js-tabs-content');
if (document.querySelectorAll('.js-tabs-btn').length > 0) {
    const onTabClick = (item) => {
        item.addEventListener('click', () => {
            let curentBtn = item;
            let tabId = curentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            
            if (!curentBtn.classList.contains('active')){
                tabsBtn.forEach((item) => {
                    
                    item.classList.remove('active');
                })
                tabsItem.forEach((item) => {
                    item.classList.remove('active');
                })
        
                curentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
           
        })
    }
    
    tabsBtn.forEach(onTabClick);
    document.querySelector('.js-tabs-btn').click();
}

const tabsBtnProduct = document.querySelectorAll('.js-tabs-btn-product');
const tabsItemProduct = document.querySelectorAll('.js-tabs-content-product');
if (document.querySelectorAll('.js-tabs-btn-product').length > 0) {
    const onTabClickProduct = (item) => {
        item.addEventListener('click', () => {
            let curentBtn = item;
            let tabId = curentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if (!curentBtn.classList.contains('active')){
                tabsBtnProduct.forEach((item) => {
                    item.classList.remove('active');
                })
                tabsItemProduct.forEach((item) => {
                    item.classList.remove('active');
                })
        
                curentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
           
        })
    }
    
    tabsBtnProduct.forEach(onTabClickProduct);
    document.querySelector('.js-tabs-btn-product').click();
}

// //??? Tabs END   -------------------------------------->>>>>>

// //? Sliders all ---------------------------------->>>>
if (document.querySelectorAll('.swiper-container.hero-slider-container').length > 0) {
    const mySwiper = new Swiper('.swiper-container.hero-slider-container', {
        slidesPerView: 1,
        autoplay: true,
        observer: true,
        effect: "fade",
        parallax: true,
        pagination: {
         el: '.swiper-pagination',
         clickable: true,
        },
    });
}

if (document.querySelectorAll('.brand-slider-container').length > 0) {
    const mySwiper = new Swiper('.brand-slider-container', {
        autoplay: true,
        loop: true,
        spaceBetween: 35,
        observer: true,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            1200: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            650: {
                slidesPerView: 3,
            },
            1: {
                slidesPerView: 2.5,
            },
        },
        navigation: {
            nextEl: ".brand-arrow-next",
            prevEl: ".brand-arrow-prev",
          },
    });
}
function changeColor () {
    let dataTestColor = document.querySelectorAll('.js-slide-hero');
    dataTestColor.forEach(el => {
        let currentAttr = el.getAttribute('data-color');
        if (currentAttr !== 'white') {
             el.style.color= 'black';
        } else {
            el.style.color= 'white';
        }
    }) 
}
changeColor();

let sliderMain = document.querySelectorAll('.main-slider-init');
if (sliderMain) {
    sliderMain.forEach((el) => {
        var mySwiper = new Swiper(el, {
            slidesPerColumnFill: "row",
            observer: true,
            observeSlideChildren: true,
            observeParents: true,
            spaceBetween: 10,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: el.querySelector('.product-arrow-next'),
                prevEl: el.querySelector('.product-arrow-prev'),
            },
            breakpoints: {
                992: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    slidesPerGroup : 4,
                },
                700: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerGroup :3,
                },
                500: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerGroup : 2,
                },
                1: {
                    slidesPerView: 1.05,
                    slidesPerColumn: 1,
                    slidesPerGroup :1,
                }
            },
        })
    })
}

let sliderProductsArea = document.querySelectorAll('.products-area__slider-init');
if (sliderProductsArea) {
    sliderProductsArea.forEach((el) => {
        var mySwiper = new Swiper(el, {
            slidesPerColumnFill: "column",
            observer: true,
            observeSlideChildren: true,
            observeParents: true,
            spaceBetween: 10,
            navigation: {
                nextEl: el.querySelector('.products-area-arrow-next'),
                prevEl: el.querySelector('.products-area-arrow-prev'),
            },
            breakpoints: {
                1001: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    slidesPerColumn: 3,
                },
                0: {
                    slidesPerView: 1,
                    slidesPerColumn: 3,
                },
            },
        })
    })
}
let sliderProductAny = document.querySelectorAll('.products-slider-container');
if (sliderProductAny) {
    sliderProductAny.forEach((el) => {
        var mySwiper = new Swiper(el, {
            loop: true,
            observer: true,
            observeSlideChildren: true,
            observeParents: true,
            spaceBetween: 10,
            autoplay: {
                delay: 5000,
            },
            breakpoints: {
                1001: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
                790: {
                    slidesPerView: 3,
                },
                475: {
                    slidesPerView: 2,
                },
                1: {
                    slidesPerView: 1.1,
                },
            },
            navigation: {
                nextEl: $(el).closest('.js-parent-slider').find('.products-arrow-next'),
                prevEl: $(el).closest('.js-parent-slider').find('.products-arrow-prev'),
            },
        })
    })
}

let productSliderThumbller = new Swiper(".js-slider-thumbller", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
let productSliderMain = new Swiper(".js-slider-main", {
    autoplay: {
        delay: 5000,
    },
    thumbs: {
      swiper: productSliderThumbller,
    },
    pagination: {
        el: ".product-card__pagination",
        type: "fraction",
      },
    navigation: {
        nextEl: ".product-card__arrow-next",
        prevEl: ".product-card__arrow-prev"
    }
});

// //? Sliders all end ---------------------------------->>>>

// global var 
var bodyGlobal = document.querySelector('body');
// Click our main block
bodyGlobal.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList.contains('js-basket')) {
         basketHide();
    }
    if (target.classList.contains('mega-menu__inner') ) {
        toggleMenu();
    }
    if (target.classList.contains('catalog__nav-inner-body') ) {
        catalog();
    }
});

// ESQ keydown close block
bodyGlobal.addEventListener('keydown', function (e) {
 if (e.keyCode !==27) {
         return;
  }
 if (document.querySelector('.basket.show')){
     basketHide();
 }
 if (document.querySelector('.mega-menu.active')){
     toggleMenu()
 }
 if (document.querySelector('.catalog__nav-inner-body') ) {
    catalog();
}
});
const megaMenu = document.querySelector('.mega-menu');
const menuCatalog = document.querySelector('.js-catalog-toggle');
function toggleMenu() {
    megaMenu.classList.toggle('active');
    bodyGlobal.classList.toggle('hidden');
}
menuCatalog.addEventListener('click', toggleMenu);

let timeout;
$(document).ready(function () {
    $('.mega-menu__list > li > .tab-open').on('mouseenter', function () {
        let thisElement = $(this);
        if (timeout != null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            $(".mega-menu__content > .tab-content").removeClass('tab-active');
            $(".mega-menu__content > .tab-content[data-id='" + thisElement.attr('data-id') + "']").addClass("tab-active");
            $(".mega-menu__list > li >.tab-open").removeClass('opened');
            thisElement.parent().find(".tab-open").addClass('opened');
        }, 250);
    });

    $('.mega-menu__list > li > .tab-open').on('mouseleave', function () {
        if (timeout != null) {
            clearTimeout(timeout);
            timeout = null;
        }
    });
});

// Show and close basket
const basket = document.querySelector('.js-basket');
const basketBtnClose = document.querySelector('.js-close-basket');
const btnOpenBasket = document.querySelector('.js-open-basket');
const basketShow = () => {
    basket.classList.add('show');
    bodyGlobal.classList.add('hidden');
}
const basketHide = () => {
    basket.classList.remove('show');
    bodyGlobal.classList.remove('hidden');
}
btnOpenBasket.addEventListener('click', basketShow);
basketBtnClose.addEventListener('click', basketHide);


// Catalog
$('.nav-catalog__content .js-wrapper-catalog:not(:first)').hide();
$('.nav-catalog__content .js-btn-catalog:first').addClass('open');
$('.nav-catalog__content .js-btn-catalog').on('click', function(){
    $(this).toggleClass('open');
    $(this).next('.js-wrapper-catalog').toggle('swing');
 });




 const btnGrowItem = document.querySelector('.js-filter-grow-item');
 const btnGrowSmallItem = document.querySelector('.js-filter-grow-small-item');
 const btnDefaultItem = document.querySelector('.js-filter-default');
 const filterBtn = document.querySelectorAll('.filter__btn');

 const growItem = () => {
    let catalogRow = document.querySelector('.content-catalog__row');
    catalogRow.classList.add('grow-item');
    catalogRow.classList.remove('grow-small-item');
}
const growSmallItem = () => {
   let catalogRow = document.querySelector('.content-catalog__row');
   catalogRow.classList.add('grow-small-item');
   catalogRow.classList.remove('grow-item')
}
const defaultItem = () => {
   let catalogRow = document.querySelector('.content-catalog__row');
   catalogRow.classList.remove('grow-item')
   catalogRow.classList.remove('grow-small-item');
}
 if (filterBtn.length > 0) {
    filterBtn.forEach(el => {
        el.addEventListener('click', (e) => {
           e.preventDefault();
           filterBtn.forEach(item => item.classList.remove('active'))
           if (el.classList.contains('active')) {
               el.classList.remove('active')
           } else {
               el.classList.add('active');
           }
        })
    })
    document.querySelector('.filter__btn').click();
    btnGrowItem.addEventListener('click', growItem);
    btnGrowSmallItem.addEventListener('click', growSmallItem);
    btnDefaultItem.addEventListener('click', defaultItem);
 }
 const catalogBtnShow = document.querySelector('.js-catalog-btn-show');
 const catalogShow = document.querySelector('.js-catalog-show'); 
 const catalog = () => {
    catalogShow.classList.toggle('show');
    bodyGlobal.classList.toggle('hidden');
 }
 if (catalogShow) {
     catalogBtnShow.addEventListener('click', catalog)
 }



 const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}
// Основная функция
function initRatings() {
    let ratingActive, ratingValue;
    // Пробегаемся по всем рейтингам на странице
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }
    //Инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();
    }
  
    //Инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
        }
    //Изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;    
    }
}