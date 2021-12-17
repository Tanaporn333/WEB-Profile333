/*คำสั่งให้ปุ่มเบอร์เก้อทำงาน*/
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click",function(){
  mainNav.classList.toggle('active');
});


