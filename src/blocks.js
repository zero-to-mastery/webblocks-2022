
    let cards = [
  {
    "name": "Item Quantity Counter",
    "page_link": "./blocks/RitikaAgrawal811/index.html",
    "block_icon": "./blocks/RitikaAgrawal811/icon.png",
    "author_name": "Ritika Agrawal",
    "author_github_url": "https://github.com/Ritika-Agrawal811"
  },
  {
    "name": "HP OMEM Logo",
    "page_link": "./blocks/amulyaprasanth/index.html",
    "block_icon": "./blocks/amulyaprasanth/icon.png",
    "author_name": "amulyaprasanth",
    "author_github_url": "https://github.com/amulyaprasanth/"
  },
  {
    "name": "Flip Card",
    "page_link": "./blocks/arunbohra/index.html",
    "block_icon": "./blocks/arunbohra/icon.png",
    "author_name": "Arun Bohra",
    "author_github_url": "https://github.com/ArunBohra12/"
  },
  {
    "name": "Toggle Switch",
    "page_link": "./blocks/betiniakarandut/index.html",
    "block_icon": "./blocks/betiniakarandut/icon.png",
    "author_name": "Betini",
    "author_github_url": "https://github.com/betiniakarandut/"
  },
  {
    "name": "Movie Component",
    "page_link": "./blocks/christinarepou/index.html",
    "block_icon": "./blocks/christinarepou/icon.png",
    "author_name": "Christina Repou",
    "author_github_url": "https://github.com/ChrRepou/"
  },
  {
    "name": "ZTM Focus",
    "page_link": "./blocks/dmitriifomin/index.html",
    "block_icon": "./blocks/dmitriifomin/icon.png",
    "author_name": "Dmitrii",
    "author_github_url": "https://github.com/Kanadets"
  },
  {
    "name": "Project Card",
    "page_link": "./blocks/godnondsilva/index.html",
    "block_icon": "./blocks/godnondsilva/icon.png",
    "author_name": "Godnon",
    "author_github_url": "https://github.com/godnondsilva/"
  },
  {
    "name": "ZTM Button",
    "page_link": "./blocks/mattcsmith/index.html",
    "block_icon": "./blocks/mattcsmith/icon.png",
    "author_name": "Matt",
    "author_github_url": "https://github.com/MattCSmith/"
  },
  {
    "name": "Ripped Paper Effect",
    "page_link": "./blocks/rachelktyjohnson/index.html",
    "block_icon": "./blocks/rachelktyjohnson/icon.png",
    "author_name": "Rachel",
    "author_github_url": "https://github.com/rachelktyjohnson/"
  },
  {
    "name": "Flash Button",
    "page_link": "./blocks/siddharthsinghvats/index.html",
    "block_icon": "./blocks/siddharthsinghvats/icon.png",
    "author_name": "Siddharth Singh",
    "author_github_url": "https://github.com/siddharthsinghvats/"
  }
]

    
  // +--------------------------------------------------------------------------------+
  // +                                                                                +
  // +                 YOU DO NOT NEED TO CHANGE ANYTHING IN THIS FILE!               +
  // +                                                                                +
  // +--------------------------------------------------------------------------------+
  
  // Creates cards from the array above
  // You don't need to modify this
  let contents = [];
  Shuffle(cards).forEach((c) => {
    contents.push([
      `<li class="card">` +
        `<a href='${c.page_link}' target="_blank">` +
        `<img class="art-image" src='${c.art_icon}' alt='${c.name}' onerror="this.src='https://cdn.discordapp.com/attachments/870676772683919390/891310666596630538/coming-soon-logo_okok.png';"/>` +
        `</a>` +
        `<div class="flex-content">` +
        `<a href='${c.page_link}' target="_blank"><h3 class="art-title">${c.name}</h3></a>` +
        `<p class='author'><a href="${c.author_github_url}" target="_blank"><i class="fab fa-github"></i> ${c.author_name}</a> </p>` +
        `</div>` +
        `</li>`
    ]);
  });
  
  document.getElementById('cards').innerHTML = contents.join('');
  
  function Shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }  
  