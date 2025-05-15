//PRIMEIRO CARROSSEL

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterBegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // console.log(btn.id);
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
})

//As funções a seguir servem para que o carrossel consiga ser mexido com o arrastar do mouse.
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  // console.log(e.pageX);
  if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
}


//Função que ativa o rolamento automático dos cards
const autoPlay = () => {
  if(window.innerWidth < 800) return;
  timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 3500);
}

autoPlay(); //Aqui o rolamento automático é ativado. 

//O script abaixo deixa o carrossel "infinito"
const infiniteScroll = () => {
  if(carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
  } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

  }
  clearTimeout(timeoutId);
  if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
carousel.addEventListener("scroll", infiniteScroll);

//SEGUNDO CARROSSEL


const wrapperDup = document.querySelector(".wrapperDup");
const carouselDup = document.querySelector(".carouselDup");
const arrowBtnsDup = document.querySelectorAll(".wrapperDup i");
const firstCardWidthDup = carouselDup.querySelector(".cardDup").offsetWidth;
const carouselChildrensDup = [...carouselDup.children];

let isDraggingDup = false, startXDup, startScrollLeftDup, timeoutIdDup;

let cardPerViewDup = Math.round(carouselDup.offsetWidth / firstCardWidthDup);

carouselChildrensDup.slice(-cardPerViewDup).reverse().forEach(cardDup => {
  carouselDup.insertAdjacentHTML("afterBegin", cardDup.outerHTML);
});

carouselChildrensDup.slice(0, cardPerViewDup).forEach(cardDup => {
  carouselDup.insertAdjacentHTML("beforeend", cardDup.outerHTML);
});

arrowBtnsDup.forEach(btnDup => {
  btnDup.addEventListener("click", () => {
    // console.log(btn.id);
    carouselDup.scrollLeft += btnDup.id === "left" ? -firstCardWidthDup : firstCardWidthDup;
  })
})

//As funções a seguir servem para que o carrossel consiga ser mexido com o arrastar do mouse.
const dragStartDup = (e) => {
  isDraggingDup = true;
  carouselDup.classList.add("dragging");
  startXDup = e.pageX;
  startScrollLeftDup = carouselDup.scrollLeft;
}

const draggingDup = (e) => {
  // console.log(e.pageX);
  if(!isDraggingDup) return;
  carouselDup.scrollLeft = startScrollLeftDup - (e.pageX - startXDup);
}

const dragStopDup = () => {
  isDraggingDup = false;
  carouselDup.classList.remove("dragging");
}


//Função que ativa o rolamento automático dos cards
const autoPlayDup = () => {
  if(window.innerWidth < 800) return;
  timeoutIdDup = setTimeout(() => carouselDup.scrollLeft += firstCardWidthDup, 3500);
}

autoPlayDup(); //Aqui o rolamento automático é ativado. 

//O script abaixo deixa o carrossel "infinito"
const infiniteScrollDup = () => {
  if(carouselDup.scrollLeft === 0) {
    carouselDup.classList.add("no-transition");
    carouselDup.scrollLeft = carouselDup.scrollWidth - (2 * carouselDup.offsetWidth);
    carouselDup.classList.remove("no-transition");
  } else if(Math.ceil(carouselDup.scrollLeft) === carouselDup.scrollWidth - carouselDup.offsetWidth){
    carouselDup.classList.add("no-transition");
    carouselDup.scrollLeft = carouselDup.offsetWidth;
    carouselDup.classList.remove("no-transition");

  }
  clearTimeout(timeoutIdDup);
  if(!wrapperDup.matches(":hover")) autoPlayDup();
}

carouselDup.addEventListener("mousedown", dragStartDup);
carouselDup.addEventListener("mousemove", draggingDup);
document.addEventListener("mouseup", dragStopDup);
wrapperDup.addEventListener("mouseenter", () => clearTimeout(timeoutIdDup));
wrapperDup.addEventListener("mouseleave", autoPlayDup);
carouselDup.addEventListener("scroll", infiniteScrollDup);