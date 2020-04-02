const links = document.querySelectorAll('a');

// links.forEach(item => {
//   if (item.href.includes('://')) {
//     item.style.color = 'orange';
//   }
// });

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue;

  if (!href.includes('://')) continue;

  if (href.startsWith('http://internal.com')) continue;

  link.style.color = 'orange';
}
