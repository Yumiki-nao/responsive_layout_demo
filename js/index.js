const Orders = [
    {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status: 'Pending'
    },
    {
        productName: 'CSS Full Course',
        productNumber: '97245',
        paymentStatus: 'Refunded',
        status: 'Declined'
    },
    {
        productName: 'Flex-Box Tutorial',
        productNumber: '36452',
        paymentStatus: 'Paid',
        status: 'Active'
    },
]


// const sideMenu = document.getElementsByClassName('aside-left');
// const menuBtn = document.getElementById('menu-btn');
// const closeBtn = document.getElementById('close-btn');

// const darkMode = document.querySelector('.dark-mode');

// menuBtn.addEventListener('click', () => {
//     sideMenu.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//     sideMenu.style.display = 'none';
// });

// darkMode.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode-variables');
//     darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
//     darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
// })

const btn = document.getElementById('btn');
const closeBtn = document.getElementById('close-btn')
const changeBtn = document.getElementById('change-btn')
const menuBtn = document.getElementById('menu-btn');
const asideLeft = document.getElementById('aside-left')
let isLight = true;

btn.addEventListener('click',()=>{
    if(isLight){
        isLight = false;
        btn.style.transform = 'translateX(2rem)';
        changeBtn.style.backgroundImage='radial-gradient(at left top,rgb(136, 125, 162),rgb(47, 32, 82))';
        document.body.classList.toggle('dark-mode-variables');
    }else{
        isLight = true;
        btn.style.transform = 'translateX(0)';
        changeBtn.style.backgroundImage='radial-gradient(at left top,rgb(201, 216, 255),rgb(0, 140, 255))';
        document.body.classList.toggle('dark-mode-variables');
    }
})

menuBtn.addEventListener('click',()=>{
    asideLeft.style.display='inline-block'
})

closeBtn.addEventListener('click',()=>{
    asideLeft.style.display='none'
})

Orders.forEach(order => {
    console.log(order);
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});