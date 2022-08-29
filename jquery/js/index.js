let f;
let a;

$("#btn1").click(
  (f = () => {
    console.log("you got f!");
  })
);
$("#btn1").click(
  (a = () => {
    console.log("you got a!");
  })
);

$("#btn2").click(() => {
  $("#btn1").off("click", a);
  console.log("del btn1");
});
