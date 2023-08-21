const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "C++",
  "Python",
  "React JS",
  "Java",
  "Express",
  "GitHub",
  "Node JS",
  "Canva",
];

var tagCloud = TagCloud(".content", myTags, {
  // radius in px
  radius: 210,

  // animation speed
  // slow, normal, fast
  maxSpeed: "fast",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: false,
});

var color = ["1d1d1f"];
document.querySelector(".content").style.color = color;
