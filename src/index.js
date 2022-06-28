import "./sass/main.scss";
import { CLOSE_SVG, CART_ITEM, EMPTY_SIGN, NOTIF } from "./_componentUI";

let initialIndex = Number();

{
  const menuBtn = document.getElementById('menu-btn');
  const navList = document.getElementById('nav-list');
  const background = document.querySelector('.background');

  menuBtn.addEventListener('click', () => {
    navigationSystem();
  })

  function navigationSystem() {
    if (parseInt(menuBtn.dataset.show)) {
      menuBtn.dataset.show = 0;
      menuBtn.classList.remove('close');
      navList.classList.remove('close');
      background.classList.replace('active', 'deactive');
      document.body.style.overflow = 'auto';
    } else {
      menuBtn.dataset.show = 1;
      menuBtn.classList.add('close');
      navList.classList.add('close');
      background.classList.replace('deactive', 'active');
      document.body.style.overflow = 'hidden';
    }
  }
}

{
  const heroImgs = document.querySelectorAll('.hero-img');
  const carousel = document.querySelector('.img-hero-wrapper');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  window.addEventListener('resize', () => {
    if (window.innerWidth > 576) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
    }
  })

  heroImgs.forEach(element => {
    element.addEventListener('click', (element) => {
      const index = parseInt(element.target.children[0].dataset.index);
      const initialLength = carousel.children[0].clientWidth;

      clearActive();
      initialIndex = index;
      element.target.classList.add('active');
      carousel.style.transform = `translateX(-${initialLength * index}px)`;
    })
  })

  nextBtn.addEventListener('click', () => {
    carouselFunction(nextBtn.id);
    carouselBtnSync();
  })

  prevBtn.style.visibility = 'hidden';

  prevBtn.addEventListener('click', () => {
    carouselFunction(prevBtn.id);
    carouselBtnSync();
  })

  function clearActive() {
    heroImgs.forEach(e => e.classList.remove('active'));
  }

  function carouselFunction(type) {
    const initialLength = carousel.children[0].clientWidth;
    const index = type === 'next' ? ++initialIndex : --initialIndex;
    const heroThumbnail = document.querySelector(`img[data-index="${index}"]`);

    clearActive();
    heroThumbnail.parentElement.classList.add('active');
    carousel.style.transform = `translateX(-${initialLength * index}px)`;
  }

  function carouselBtnSync() {
    const maxIndex = carousel.children.length - 1;
    const minIndex = Number();

    prevBtn.style.visibility = 'visible';
    nextBtn.style.visibility = 'visible';

    if (initialIndex >= maxIndex) nextBtn.style.visibility = 'hidden';
    else if (initialIndex === minIndex) prevBtn.style.visibility = 'hidden';
  }
}

{
  const background = document.querySelector('.background');
  const imgCarousel = document.querySelector('.hero-carousel');


  imgCarousel.addEventListener('click', (e) => {
    const img = imgCarousel.children[0].children[initialIndex].src;

    background.className = 'background active hero';
    background.innerHTML = `<div class="background-img-wrapper">${CLOSE_SVG}<img src="${img}"/></div>`;
    document.body.style.overflow = 'hidden';
  })

  background.addEventListener('click', (e) => {
    if (!background.classList.contains('hero')) return;

    background.innerHTML = String();
    background.className = 'background deactive';
    document.body.style.overflow = 'auto';
  })
}

{
  const subBtn = document.querySelector('.sub');
  const addBtn = document.querySelector('.add');
  const buyBtn = document.querySelector('.buy-button');
  let initialAmount = Number();

  subBtn.addEventListener('click', () => {
    calcAmount('sub');
  })

  addBtn.addEventListener('click', () => {
    calcAmount('add');
  })

  buyBtn.addEventListener('click', () => {
    if (initialAmount === 0) return;

    const cart = document.querySelector('.checkout-content');
    const cartBtn = document.querySelector('.cart');

    cart.innerHTML = CART_ITEM(initialAmount);

    if (cartBtn.lastElementChild.classList.contains('notification'))
      cartBtn.lastElementChild.remove();
    cartBtn.innerHTML += NOTIF(initialAmount);

    const deleteBtn = document.querySelector('.delete-btn');
    const checkoutBtn = document.querySelector('.checkout-btn');

    deleteBtn.onclick = deleteBtnHandle;
    checkoutBtn.onclick = checkoutHandle;

    initialAmount = 0;
    render();

    window.scrollTo(0, 0);
  })

  function calcAmount(type) {
    switch (type) {
      case 'sub':
        initialAmount--;
        break;
      case 'add':
        initialAmount++;
        break;
      default: return;
    }

    if (initialAmount <= 0) initialAmount = 0;
    render()
  }
  
  function render() {
    document.querySelector('.amount').textContent = initialAmount;
  }

  function deleteBtnHandle() {
    const cart = document.querySelector('.checkout-content');
    const notif = document.querySelector('.notification');
    const deleteBtn = document.querySelector('.delete-btn');
    const checkoutBtn = document.querySelector('.checkout-btn');

    notif.remove();
    deleteBtn.onclick = null;
    checkoutBtn.onclick = null;
    cart.innerHTML = EMPTY_SIGN;
  }

  function checkoutHandle() {
    alert('/move to another website to pay the product(s)/\nDUMMY');
    document.location.href = document.location.href;
  }
}