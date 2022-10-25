const users = [
  { first: 'Cristobal', last: 'Flatley' }, 
  { first: 'Janet', last: 'Murphy' }, 
  { first: 'Jaylen', last: 'Langosh' }, 
  { first: 'Rosina', last: 'Hilpert' }, 
  { first: 'Glenda', last: 'Osinski' }, 
  { first: 'Anabelle', last: 'Lang' }, 
  { first: 'Esta', last: 'Schulist' }, 
  { first: 'Aurelio', last: 'Kovacek' }, 
  { first: 'Maud', last: 'Feeney' }, 
  { first: 'Willie', last: 'Legros' }, 
  { first: 'Ayden', last: 'Sauer' }, 
  { first: 'Samson', last: 'Howe' }, 
  { first: 'Rhett', last: 'Stiedemann' }, 
  { first: 'Matt', last: 'Botsford' }, 
  { first: 'Sandrine', last: 'Barrows' }, 
  { first: 'Raheem', last: 'Pacocha' }, 
  { first: 'Casimir', last: 'Stiedemann' }, 
  { first: 'Franco', last: 'Rau' }, 
  { first: 'Hilbert', last: 'Herman' }, 
  { first: 'Glennie', last: 'Doyle' }, 
  { first: 'Citlalli', last: 'Schroeder' }, 
  { first: 'Camryn', last: 'Brown' }, 
  { first: 'Dina', last: 'Halvorson' }, 
  { first: 'August', last: 'Dickinson' }, 
  { first: 'Manuel', last: 'Hane' }, 
  { first: 'Sabrina', last: 'Mertz' }, 
  { first: 'Immanuel', last: 'Kulas' }, 
  { first: 'Nayeli', last: 'Rippin' }, 
  { first: 'Chelsie', last: 'Boehm' }, 
  { first: 'Candido', last: 'Volkman' }, 
  { first: 'Jamey', last: "O'Conner" }, 
  { first: 'Armand', last: 'Durgan' }, 
  { first: 'Larue', last: 'Bruen' }, 
  { first: 'Amira', last: 'Bergnaum' }, 
  { first: 'Else', last: 'Beahan' }, 
  { first: 'Ole', last: 'Littel' }, 
  { first: 'Max', last: 'Rogahn' }, 
  { first: 'Owen', last: 'Kirlin' }, 
  { first: 'Helena', last: 'Lowe' }, 
  { first: 'Johathan', last: 'Collier' }, 
  { first: 'Spencer', last: 'Medhurst' }, 
  { first: 'Treva', last: 'Torphy' }, 
  { first: 'Harmon', last: 'Rolfson' }, 
  { first: 'Demarcus', last: 'Kub' }, 
  { first: 'Aglae', last: 'Shields' }, 
  { first: 'Lambert', last: 'Stracke' }, 
  { first: 'Alana', last: 'Hartmann' }, 
  { first: 'Fannie', last: 'Stehr' }, 
  { first: 'Susanna', last: 'Ratke' }, 
  { first: 'Isabell', last: 'Bailey' }, 
  { first: 'Jaydon', last: 'Gaylord' }, 
  { first: 'Myrtice', last: 'Conroy' }, 
  { first: 'Mason', last: 'Goyette' }, 
  { first: 'Kirstin', last: 'Jacobi' }, 
  { first: 'Willow', last: 'Bergnaum' }, 
  { first: 'Jo', last: 'Kovacek' }, 
  { first: 'Johnson', last: 'Cummings' }, 
  { first: 'Rebecca', last: 'Rolfson' }, 
  { first: 'Pasquale', last: 'Lebsack' }, 
  { first: 'Kali', last: 'Sipes' }, 
  { first: 'Dereck', last: 'Langworth' }, 
  { first: 'Joaquin', last: 'King' }, 
  { first: 'Madaline', last: 'Nitzsche' }, 
  { first: 'Jolie', last: 'Jenkins' }, 
  { first: 'Kobe', last: 'Pfannerstill' }, 
  { first: 'Willow', last: 'Ortiz' }, 
  { first: 'Breanne', last: 'Wyman' }, 
  { first: 'Teresa', last: 'Champlin' }, 
  { first: 'Jasmin', last: 'Jones' }, 
  { first: 'Bailey', last: 'Cruickshank' }, 
  { first: 'Antwan', last: 'Friesen' }, 
  { first: 'Tanner', last: 'Mayer' }, 
  { first: 'Meagan', last: 'Barrows' }, 
  { first: 'Brandt', last: 'Quigley' }, 
  { first: 'Johathan', last: 'Reynolds' }, 
  { first: 'Rosella', last: 'Baumbach' }, 
  { first: 'Gregg', last: 'Hagenes' }, 
  { first: 'Angela', last: 'Schmeler' }, 
  { first: 'Arno', last: 'Kozey' }, 
  { first: 'Leopold', last: 'Legros' }, 
  { first: 'Demarco', last: 'Ryan' }, 
  { first: 'Jovani', last: 'Anderson' }, 
  { first: 'Lea', last: 'Murphy' }, 
  { first: 'Nathan', last: 'Beatty' }, 
  { first: 'Audrey', last: 'Schamberger' }, 
  { first: 'Franco', last: 'Quitzon' }, 
  { first: 'Montana', last: 'Haley' }, 
  { first: 'Angelita', last: 'Goyette' }, 
  { first: 'Nayeli', last: 'Kassulke' }, 
  { first: 'Abelardo', last: 'Kling' }, 
  { first: 'Brannon', last: 'Beier' }, 
  { first: 'Katheryn', last: 'Koepp' }, 
  { first: 'Kasandra', last: 'McClure' }, 
  { first: 'Scotty', last: 'VonRueden' }, 
  { first: 'Phyllis', last: 'Okuneva' }, 
  { first: 'Yasmine', last: 'Price' }, 
  { first: 'April', last: 'Marks' }, 
  { first: 'Ewald', last: 'Trantow' }, 
  { first: 'Kirstin', last: 'Tromp' }, 
  { first: 'Marcia', last: 'Hane' }]

const input = document.querySelector('input');
const ul = document.querySelector('ul');

const displaySuggestions = (target) => {
  target = target.toLowerCase();
  return users.filter(user => user.last.toLowerCase().includes(target)).map(item => {
    const last = item.last.toLowerCase();
    const startIndex = last.indexOf(target);
    const endIndex = startIndex + target.length;
    const before = last.slice(0, startIndex);
    const liContent = `<span class="highlight">${last.slice(startIndex, endIndex)}</span>`;
    const after = last.slice(endIndex);
    return before + liContent + after;
  })
}

input.addEventListener('keyup', (e) => {
  const suggestions = !e.target.value ? [] : displaySuggestions(e.target.value);

  ul.innerHTML = '';
  suggestions.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
  })
})