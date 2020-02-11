const mouseCursor = document.querySelector(".cursor");
const navlinks = document.querySelectorAll(".list li");
const image = document.querySelector(".cover img");

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navlinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('linkGrow');
    link.classList.add('hovered');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('linkGrow');
    link.classList.remove('hovered');
  })
});

image.addEventListener('mouseover', () => {
  mouseCursor.classList.add('imageGray');
});

image.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove('imageGray');
});