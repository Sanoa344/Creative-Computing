var .type1 = document.querySelector('type1');
for (var i = type1.children.length; i >= 0; i--) {
    type1.appendChild(type1.children[Math.random() * i | 0]);
}