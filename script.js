// MOVIE DATA (use real images if you want)
const movies = [
  { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg" },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525" },
  { title: "Crimson Tide", img: "https://images.cdn-files-a.com/uploads/2058276/2000_5ca271aada963.jpg" },
  { title: "Last Frontier", img: "https://m.media-amazon.com/images/I/61+AveYL+YL._AC_UF894,1000_QL80_.jpg" },
  { title: "Skyfalling", img: "https://i.pinimg.com/736x/4d/b4/10/4db4109f3d0576e328a948855027a025.jpg" },
  { title: "Ghost Line", img: "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg" },
  { title: "Infinity Run", img: "https://i.pinimg.com/736x/9d/0f/70/9d0f7042c01b22b1fe03b9b7d8639235.jpg" },
  { title: "Nova Rising", img: "https://creativereview.imgix.net/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1728&h=2560" },
];

// LOAD POSTERS
const slider = document.getElementById('slider');

movies.forEach(movie => {
  const div = document.createElement('div');
  div.classList.add('poster');
  div.style.backgroundImage = `url(${movie.img})`;
  div.title = movie.title;
  slider.appendChild(div);
});

// SLIDER CONTROL LOGIC
let scrollAmount = 0;
const slideWidth = 250; // roughly the poster + gap

document.getElementById('nextBtn').addEventListener('click', () => {
  if (scrollAmount < (movies.length - 4) * slideWidth) {
    scrollAmount += slideWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= slideWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});