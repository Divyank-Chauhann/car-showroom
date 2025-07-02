/**** SWIPER ****/
var swiper = new Swiper(".myHome", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   Counter Section start 

let valueDisplay = document.querySelectorAll('.num');
let interval = 1000;

valueDisplay.forEach((valueDisplay) => {

      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-value"));

      let duration = Math.floor(interval/endValue);
      let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if(startValue == endValue){
              clearInterval(counter);
          } 
    }, duration);
});

// arrival section

const cars = [
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-1.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "1.2 cr"
    },
    {
        name: "BMW",
        image: "images/arrival/arrival-2.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2024", "Hybrid"],
        price: "2.60 cr"
    },
    {
        name: "Jaguar",
        image: "images/arrival/arrival-3.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "97.93 L"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-1.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "1.2 cr"
    },
    {
        name: "BMW",
        image: "images/arrival/arrival-2.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2024", "Hybrid"],
        price: "2.60 cr"
    },
    {
        name: "Jaguar",
        image: "images/arrival/arrival-3.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "97.93 L"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-1.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "1.2cr"
    },
    {
        name: "BMW",
        image: "images/arrival/arrival-2.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2024", "Hybrid"],
        price: "2.60cr"
    },
    {
        name: "Jaguar",
        image: "images/arrival/arrival-3.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "97.93 L"
    },
];


const carContainer = document.getElementById('car-container');

let displayedCars = 3;
let currentLevel = 1; 

function createCarCard(car) {
    const carCard = document.createElement('div');
    carCard.className = 'arr-col';
    carCard.innerHTML = `
        <div class="image">
            <img src="${car.image}" alt="${car.name}">
        </div>
        <h5>${car.name}</h5>
        <div class="rating">
            <div class="stars">${'★'.repeat(5)}</div>
            <div class="review">
                <span>${car.rating}</span>
            </div>
        </div>
        <div class="features">
            ${car.features.map(feature => `<span><i class='bx bx-label'></i>${feature}</span>`).join('')}
        </div>
        <div class="price">
            <p>${car.price}</p>
            <button>Details</button>
        </div>
    `;
    return carCard;
}

function displayCars() {
    carContainer.innerHTML = '';
    for (let i = 0; i < Math.min(displayedCars, cars.length); i++) {
        carContainer.appendChild(createCarCard(cars[i]));
    }
}

document.getElementById('show-more').addEventListener('click', () => {
    currentLevel++;
    displayedCars = Math.min(displayedCars + 3, cars.length);
    displayCars();
    updateButtons();
    scrollToCarSection();
});

document.getElementById('show-less').addEventListener('click', () => {
    if (currentLevel > 1) {
        currentLevel--;
        displayedCars = Math.max(displayedCars - 3, 3); 
        displayCars();
        updateButtons();
        scrollToCarSection();
    }
});

function updateButtons() {
    document.getElementById('show-less').classList.toggle('hidden', displayedCars === 3);
    document.getElementById('show-more').classList.toggle('hidden', displayedCars >= cars.length);
}

function scrollToCarSection() {
    const arrivalSection = document.querySelector('.arrival');
    arrivalSection.scrollIntoView({ behavior: 'smooth' }); 
}

displayCars();

// Blur effect
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const arrivalSection = document.querySelector('.arrival');

carContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Details') {
        const carCard = e.target.closest('.arr-col');
        const carDetails = carCard.innerHTML;

        modal.innerHTML = carDetails;
        modal.style.display = 'block';
        overlay.style.display = 'block';

        arrivalSection.classList.add('blur');
    }
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    arrivalSection.classList.remove('blur');
});








