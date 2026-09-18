const out = document.getElementById("out");

let triangle_char = '#';
for (let i = 1; i < 8; i++) {
  out.textContent += triangle_char.repeat(i) + '\n';
}
