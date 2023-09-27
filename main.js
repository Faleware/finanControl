const chart = document.querySelector("#chart").getContext('2d');


new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'May', 'jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57838, 46684, 44572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24844, 36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})



const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none'
})


const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child'.classList.toogle('active'));
    themeBtn.querySelector('span:last-child'.classList.toogle('active'));
})

const loginBtn = document.querySelector("#login-btn")

loginBtn.addEventListener('click', () => {
    window.location.href ='home.html'
})