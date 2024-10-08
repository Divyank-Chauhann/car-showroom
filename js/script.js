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
        price: "$2,58,743"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-2.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "$2,58,743"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-3.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "$2,58,743"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-1.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "$2,58,743"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-2.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "$2,58,743"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-3.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "$2,58,743"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-1.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "$2,58,743"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-2.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "$2,58,743"
    },
    {
        name: "Mercedes-AMG",
        image: "images/arrival/arrival-3.jpg",
        rating: "5.0 (5.8k Review)",
        features: ["Automatic", "12.65 Km", "Model 2023", "Hybrid"],
        price: "$2,58,743"
    },
];

const carContainer = document.getElementById('car-container');

let displayedCars = 3; // Start with 3 cars
let currentLevel = 1; // Track the current level

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
    carContainer.innerHTML = ''; // Clear existing cards
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
        displayedCars = Math.max(displayedCars - 3, 3); // At least 3 cars shown
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
    arrivalSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
}

// Initial display of cars
displayCars();




