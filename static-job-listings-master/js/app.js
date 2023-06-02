const objetos =[
    
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  
  
]

const box = document.querySelector('.box')

window.addEventListener('DOMContentLoaded', function(){
menu(objetos)
})
function menu(menuItem){
    let display = menuItem.map(function(item){
        return `<section class="box">
         <!-- Item Start -->
        
      <div class="linha1">
      <img src=${item.logo} alt="">

        <div class="nov">
          <button class="programa">${item.company}</button>
          <button class="novo">${item.new}</button>
          <button class="featured">${item.featured}</button>
        
          <div class="persona">
            <a href="#">${item.position}</a>
            <article class="input">
              <input type="button" value=${item.role}>
              <input type="button" value=${item.level}>
              <input type="button" value=${item.languages}>
              <input type="button" value=${item.tools}>
              
        
            </article>
          </div>
          <article class="itemRole">
        
            <p>${item.postedAt}</p>
            <div class="cicle"></div>
            <p> ${item.contract}</p>
            <div class="cicle"></div>
        
            <p>${item.location}</p>
        
        
          </article>
        
        </div>
      </div>
        
        
        
        
     </section>`
    })
    display = display.join("")
    box.innerHTML = display
}


//tentei primeiro isso

// function item(){
//     let promise = fetch("data.json")
//     .then((data)=>{
//         return data.json()
//     })
//     .then((objeto)=>{
//         let itens = objeto.map((info)=>{
//  return ` <section class="box">
//  <!-- Item Start -->
//  <img src=${info.logo} alt="">

//  <div class="linha1">
//    <div class="nov">
//      <button class="programa">${info.company}</button>
//      <button class="novo">${info.new}</button>
//      <button class="featured">${info.featured}</button>

//      <div class="persona">
//        <a href="#">${info.position}</a>
//        <article class="input">
//          <input type="button" value=${info.role}>
//          <input type="button" value=${info.level}>
//          <input type="button" value=${info.languages}>
//          <input type="button" value=${info.tools}>
//          <input type="button" value="JavaScript">

//        </article>
//      </div>
//      <article class="itemRole">

//        <p>${info.postedAt}</p>
//        <div class="cicle"></div>
//        <p> ${info.role}</p>
//        <div class="cicle"></div>

//        <p>${info.location}</p>


//      </article>

//    </div>
//  </div>





// </section>`
//         });
//         itens = itens.join("")
//         box.innerHTML = itens
//     })
//     .catch((error)=>console.log('Error: '+ error))
// }



