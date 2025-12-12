// Car Liting Data
const carData = [
    {
        title: "Toyota Camry New",
        subtitle: "3.5 D5 PowerPulse Momentum 5dr AW...",
        miles: "20 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$40,000",
        image: "http://images.unsplash.com/photo-1657872737697-737a2d123ef2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "Great Price"
    },
    {
        title: "BMW M5 Competition",
        subtitle: "4.4L V8 TwinPower Turbo 600hp...",
        miles: "15 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$110,000",
        image: "https://images.unsplash.com/photo-1666274238725-6419037e9e3d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "Hot Deal"
    },
    {
        title: "Tesla Model S Plaid",
        subtitle: "Tri Motor All-Wheel Drive Platform...",
        miles: "396 Range",
        fuel: "Electric",
        transmission: "Automatic",
        price: "$89,990",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=600&auto=format&fit=crop",
        badge: "Eco Friendly"
    },
    {
        title: "Ford Mustang GT",
        subtitle: "5.0L Ti-VCT V8 Engine 450hp RWD...",
        miles: "30 Miles",
        fuel: "Petrol",
        transmission: "Manual",
        price: "$55,000",
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=600&auto=format&fit=crop",
        badge: "Best Seller"
    },
    {
        title: "Audi RS7 Sportback",
        subtitle: "4.0 TFSI V8 Quattro Tiptronic...",
        miles: "12 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$118,500",
        image: "https://images.unsplash.com/photo-1655284345297-32ac916ce235?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "Luxury"
    },
    {
        title: "Porsche 911 Carrera",
        subtitle: "3.0L Twin-Turbo Flat-6 Rear Engine...",
        miles: "8 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$106,000",
        image: "https://images.unsplash.com/photo-1680530943583-9b0db80fac69?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "Sports"
    },
    {
        title: "Mercedes G-Class",
        subtitle: "G 63 AMG 4MATIC+ V8 Biturbo...",
        miles: "10 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$179,000",
        image: "https://images.unsplash.com/photo-1669428800842-5f1d3645cef2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "Premium"
    },
    {
        title: "Land Rover Defender",
        subtitle: "110 P400 X MHEV AWD 3.0L...",
        miles: "18 Miles",
        fuel: "Hybrid",
        transmission: "Automatic",
        price: "$85,000",
        image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=600&auto=format&fit=crop",
        badge: "Off-Road"
    }
];


function getBadgeColor(text) {
    if(text.includes('Price')) return '#449e48';
    if(text.includes('Hot')) return '#e11d48';
    if(text.includes('Eco')) return '#059669';
    if(text.includes('Luxury')) return '#7c3aed';
    if(text.includes('Sports')) return '#f59e0b';
    return '#2563eb'; 
}

function toggleBookmark(btn) {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('bi-bookmark')) {
        icon.classList.remove('bi-bookmark');
        icon.classList.add('bi-bookmark-fill');
        icon.style.color = '#4f46e5';
    } else {
        icon.classList.remove('bi-bookmark-fill');
        icon.classList.add('bi-bookmark');
        icon.style.color = '#333';
    }
}

// Render Cards
function renderCards() {
    const container = document.getElementById('card-grid');
    
    let generatedHTML = "";

    carData.forEach(car => {
        
        let fuelIcon = 'bi-fuel-pump';
        if(car.fuel === 'Electric') fuelIcon = 'bi-lightning-charge';
        if(car.fuel === 'Hybrid') fuelIcon = 'bi-ev-station';

        const cardHTML = `
            <div class="card">
                <div class="image-container">
                    <span class="badge" style="background-color: ${getBadgeColor(car.badge)}">
                        ${car.badge}
                    </span>
                    <button class="bookmark-btn" onclick="toggleBookmark(this)">
                        <i class="bi bi-bookmark"></i>
                    </button>
                    <img src="${car.image}" alt="${car.title}">
                </div>

                <div class="content">
                    <h2 class="title">${car.title}</h2>
                    <p class="subtitle">${car.subtitle}</p>
                    
                    <hr class="divider">

                    <div class="specs-row">
                        <div class="spec-item">
                            <i class="bi bi-speedometer2"></i>
                            <span>${car.miles}</span>
                        </div>

                        <div class="spec-item">
                            <i class="bi ${fuelIcon}"></i>
                            <span>${car.fuel}</span>
                        </div>

                        <div class="spec-item">
                            <i class="bi bi-diagram-3"></i>
                            <span>${car.transmission}</span>
                        </div>
                    </div>

                    <hr class="divider">

                    <div class="footer">
                        <span class="price">${car.price}</span>
                        <a href="#" class="details-link">
                            Bid Now 
                            <i class="bi bi-arrow-up-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        generatedHTML += cardHTML;
    });

    container.innerHTML = generatedHTML;
}

renderCards();