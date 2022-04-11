const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web developer",
        img: "img/img-person4.jpg",
        text: "Lorem ipsum dolor sit amet, deserunt magnam deleniti blanditiis impedit tempore, exercitationem consectetur adipisicing elit. Ea provident maiores eveniet iure  ipsa ut facere. deserunt magnam deleniti blanditiis impedit  elit. "
    },
    {
        id: 2,
        name: "Joseph Stone",
        job: "UX Designer",
        img: "img/img-person2.jpg",
        text: "Lorem ipsum consectetur adipisicing elit. consectetur adipisicing elit. Ea provident maiores eveniet iure Ea provid consectetur adipisicing elit. Ea provident maiores eveniet iure ipsa ut facere."
    },
    {
        id: 3,
        name: "Mathew Jones",
        job: "Software Enginer",
        img: "img/img-person1.jpg",
        text: "Lorem ipsum dolor sit magnam deleniti blanditiis impedit tempore, exercitationem ipsa ut facere. consectetur adipisicing elit. Ea provident maiores eveniet iure  consectetur adipisicing elit "
    },
    {
        id: 4,
        name: "Sarah Lany",
        job: "Game developer",
        img: "img/img-person3.jpg",
        text: "Lorem adipisicing elit. ure deserunt magnam deleniti blanditiis impedit tempore, consectetur adipisicing elit. Ea provident maiores eveniet iure deserunt magnam deleniti  exercitationem ipsa ut facere."
    },
]

// selecionando os items dos autores

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const info = document.getElementById("info")
const job = document.getElementById("job")

const prevBtn = document.querySelector(".prev-btn") 

const nextBtn = document.querySelector(".next-btn")
 
const randomBtn = document.querySelector(".random-btn")
 
// iniciando o item com 0
let currentitem = 0

// carregando item inicial ao fazer load na página
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentitem)
})

// mostrar slides de revisões
function  showPerson(person){
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// Passando o review - next Btn
nextBtn.addEventListener("click",function(){
    currentitem++
    // se o indice for maior que o valor total do array - 1, atribuimos 0 para voltar no primeiro item
    if (currentitem > reviews.length - 1) {
        currentitem =  0
    }
    showPerson(currentitem)
})

// Voltando o review - prev Btn
prevBtn.addEventListener("click", function () {
    currentitem--
    // se o indice(currentitem) for menor que 0, atribuimos ao indice o valor total do array - 1 para ir até o ultimo item da lista
    if (currentitem < 0) {
        currentitem = reviews.length - 1
        console.log(reviews.length)
    }
    showPerson(currentitem)
})

// Mostrando review de forma randômica
randomBtn.addEventListener("click", function () {
    currentitem = Math.floor(Math.random() * reviews.length)
    showPerson(currentitem)
})