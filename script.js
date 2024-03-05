var rows = document.querySelectorAll(".rows");
var h2 = document.querySelector(".rows h2");
var h4 = document.querySelector(".rows h4");

rows.forEach(function (dets) {
  dets.addEventListener("mouseenter", () => {
    dets.firstElementChild.style.transform = "translateX(-15px)";
    dets.firstElementChild.style.opacity = 0.5;
    dets.lastElementChild.style.transform = "translateX(15px)";
    dets.lastElementChild.style.opacity = 0.5;
  });
});

rows.forEach(function (dets) {
  dets.addEventListener("mouseleave", () => {
    dets.firstElementChild.style.transform = "translateX(0px)";
    dets.firstElementChild.style.opacity = 1;
    dets.lastElementChild.style.transform = "translateX(0px)";
    dets.lastElementChild.style.opacity = 1;
  });
});

function pic1() {
  document.querySelector("#r1").addEventListener("mousemove", function () {
    document.querySelector("#slider").style.marginTop = "0%";
  });
}
pic1();

function pic2() {
  document.querySelector("#r2").addEventListener("mousemove", function () {
    document.querySelector("#slider").style.marginTop = "-300px";
  });
}
pic2();

function pic3() {
  document.querySelector("#r3").addEventListener("mousemove", function () {
    document.querySelector("#slider").style.marginTop = "-600px";
  });
}
pic3();

function pic4() {
  document.querySelector("#r4").addEventListener("mousemove", function () {
    document.querySelector("#slider").style.marginTop = "-900px";
  });
}
pic4();

function pic5() {
  document.querySelector("#r5").addEventListener("mousemove", function () {
    document.querySelector("#slider").style.marginTop = "-1200px";
  });
}
pic5();

document.querySelector("#center").addEventListener("mouseenter", function () {
  document.querySelector("#view").style.display = "grid";
  document.querySelector("#photos-cnt").style.display = "grid";
});

document.querySelector("#center").addEventListener("mouseleave", function () {
  document.querySelector("#view").style.display = "none";
  document.querySelector("#photos-cnt").style.display = "none";
});

window.addEventListener("mousemove", (dets) => {
  document.querySelector("#view").style.left = `${dets.clientX}px`;
  document.querySelector("#view").style.top = `${dets.clientY}px`;
  document.querySelector("#photos-cnt").style.left = `${dets.clientX}px`;
  document.querySelector("#photos-cnt").style.top = `${dets.clientY}px`;
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    start: "top 40%",
    scrub: 5,
    // markers:true,
  },
});

tl.to(
  "#ourInsta>h1",
  {
    y: -200,
  },
  "a"
)
  .to(
    "#card1",
    {
      y: 50,
    },
    "a"
  )
  .to(
    "#card2",
    {
      y: -800,
    },
    "a"
  )
  .to(
    "#card3",
    {
      y: -1200,
    },
    "a"
  );

gsap.to("#main", {
  scrollTrigger: {
    trigger: "#image-cnt",
    pin: true,
    // markers:true,
    start: "top top",
    end: "bottom -1000%",
  },
});

gsap.to("#overlay-down", {
  filter: "blur(10px)",
});
setTimeout(function () {
  gsap.to("#overlay-down", {
    filter: "blur(0px)",
  });
}, 1500);
