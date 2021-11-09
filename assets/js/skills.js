AOS.init();
/* Skills Cards */

const myskills = document.querySelector(".myskills");

// Array of object for projects
const Allskills = [
  { name: "C", image: "assets/images/skills-page/c.png", rating: "" },
  { name: "C++", image: "assets/images/skills-page/c++.png", rating: "" },
  { name: "Java", image: "assets/images/skills-page/Java.png", rating: "" },
  { name: "Python", image: "assets/images/skills-page/python.png", rating: "" },
  { name: "JavaScript", image: "assets/images/skills-page/JS.png", rating: "" },
  { name: "React", image: "assets/images/skills-page/React.png", rating: "" },
  { name: "Redux", image: "assets/images/skills-page/Redux.png", rating: "" },
  { name: "Angular", image: "assets/images/skills-page/Angular.svg", rating: "" },
  { name: "Vue", image: "assets/images/skills-page/Vue.png", rating: "" },
  {
    name: "Machine Learning",
    image: "assets/images/skills-page/ML.png",
    rating: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  Allskills.forEach(({ name, image,rating }) => {
    output += `      
      <div class="mx-5 my-4 g-col-6"> 
      <div class="card">
      <div class="card_img"> 
          <img src="${image}" alt="user-image">
      </div>
      <div class="card_info"> 
          <h2>${name}</h2>
          <h3>${rating}</h3>
      </div>
  </div>
    </div>`;
  });
  myskills.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
