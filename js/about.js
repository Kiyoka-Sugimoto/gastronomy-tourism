// glossary
const glossaryData = {
  temaki: {
    photo: "./img/about_glossary_book_temaki.png",
    label: "巻き<br>手巻き",
    category: "Traditional Sushi",
    title: "Maki / Temaki",
    text: "Maki, or maki sushi meaning sushi rolls, is one style of sushi. Nigiri, or nigiri sushi meaning hand-pressed sushi, is a different style in the same category.",
    link: "#",
  },

  nigiri: {
    photo: "./img/about_glossary_book_nigiri.png",
    label: "握り",
    category: "Traditional Sushi",
    title: "Nigiri",
    text: "Nigiri is a simple sushi style where you hand-shape rice and top it with sashimi fish like salmon (lax), maguro (tuna), or ebi (shrimp), creating bites such as maguro nigiri or ebi nigiri.",
    link: "#",
  },
  gunkan: {
    photo: "./img/about_glossary_book_gunkan.png",
    label: "軍艦",
    category: "Traditional Sushi",
    title: "Gunkan",
    text: " Gunkan, or gunkan maki, is a type of maki sushi, but instead of rolling everything together, you wrap a strip of nori around hand-shaped rice and add soft toppings on top.",
    link: "#",
  },

  oshi: {
    photo: "./img/about_glossary_book_oshi.png",
    label: "押し",
    category: "Traditional Sushi",
    title: "Oshi",
    text: "Oshi sushi is a classic sushi style that literally means pressed sushi, where rice and toppings are pressed together in a mold to create neat, firm blocks.",
    link: "#",
  },

  chirashi: {
    photo: "./img/about_glossary_book_chirashi.png",
    label: "ちらし",
    category: "Traditional Sushi",
    title: "Chirashi",
    text: "Chirashi sushi is a type of sushi bowl where various toppings are sprinkled over vinegared rice. In Japan, it’s often enjoyed as a colorful, festive dish for celebrations.",
    link: "#",
  },

  kaisen: {
    photo: "./img/about_glossary_book_kaisen.png",
    label: "海鮮丼",
    category: "Traditional Sushi",
    title: "Kaisen Don",
    text: "Kaisendon may look similar to chirashi, but they’re different. Kaisendon is a simple seafood rice bowl topped with sashimi, and you usually add soy sauce when you eat it.",
    link: "#",
  },

  omakase: {
    photo: "./img/about_glossary_book_omakase.png",
    label: "お任せ",
    category: "Traditional Sushi",
    title: "Omakase",
    text: "Omakase is a dining style where you leave your order entirely to the chef. In sushi restaurants, an omakase menu features dishes chosen by the chef.",
    link: "#",
  },

  sashimi: {
    photo: "./img/about_glossary_book_sashimi.png",
    label: "刺身",
    category: "Traditional Sushi",
    title: "Sashimi",
    text: "Sashimi is Japan’s iconic food made of thinly sliced raw fish, such as tuna or salmon, served on its own without rice. Because it has no rice, it is not the same as nigiri sushi.",
    link: "#",
  },

  inari: {
    photo: "./img/about_glossary_book_inari.png",
    label: "いなり",
    category: "Traditional Sushi",
    title: "Inari",
    text: "Inari sushi is a traditional type of sushi made by stuffing tangy sushi rice into sweet, seasoned fried tofu pockets.",
    link: "#",
  },
  california: {
    photo: "./img/about_glossary_book_california.png",
    label: "カリフォルニア<br/>ロール",
    category: "Western Sushi",
    title: "California Roll ",
    text: " California rolls are a U.S.-created twist on Japanese maki, usually made with avocado, cucumber, and imitation crab, with variations that add salmon or cream cheese.",
    link: "#",
    rightBg: "./img/about_glossary_book_rightbg.png",
  },
  spicy: {
    photo: "./img/about_glossary_book_spicy.png",
    label: "スパイシー<br/>ツナロール",
    category: "Western Sushi",
    title: "Spicy Tuna Roll ",
    text: "Spicy tuna rolls are a Western-style sushi featuring a creamy, spicy mix of canned tuna, sriracha, chili oil, rice vinegar, scallions, and mayonnaise, rolled with rice and nori (seaweed).",
    link: "#",
    rightBg: "./img/about_glossary_book_rightbg.png",
  },
  burrito: {
    photo: "./img/about_glossary_book_burrito.png",
    label: "寿司ブリトー",
    category: "Western Sushi",
    title: "Sushi Burrito",
    text: "Sushi burritos blend Japanese and Mexican traditions, creating bold, handheld flavors. They also differ from California rolls, which originated in the United States with distinct ingredients.",
    link: "#",
    rightBg: "./img/about_glossary_book_rightbg.png",
  },
};

const buttons = document.querySelectorAll(".book-nav__btn");
const photoEl = document.querySelector(".glossary-book__photo");
const labelEl = document.querySelector(".glossary-book__label");
const categoryEl = document.querySelector(".glossary-book__category");
const titleEl = document.querySelector(".glossary-book__title");
const textEl = document.querySelector(".glossary-book__text");
const linkEl = document.querySelector(".glossary-book__detail-btn");
const rightBgEl = document.querySelector(".glossary-book__right-bg");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.book;
    const data = glossaryData[key];

    // left
    photoEl.src = data.photo;
    labelEl.innerHTML = data.label;

    // right
    categoryEl.textContent = data.category;
    titleEl.textContent = data.title;
    textEl.textContent = data.text;
    linkEl.href = data.link;

    if (data.rightBg) {
      rightBgEl.style.display = "block";
      rightBgEl.style.backgroundImage = `url(${data.rightBg})`;
    } else {
      rightBgEl.style.display = "none";
      rightBgEl.style.backgroundImage = "none";
    }

    buttons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});

// dictionary
const dictionaryData = {
  maguro: {
    photo: "./img/about_dictionary_book_maguro.png",
    label: "鮪",
    subLabel: "まぐろ",
    category: "Sea & River Ingredients",
    title: "Maguro",
    text: "Maguro, or tuna in English, is a favorite sushi fish. In Japan, people often use maguro sushi to judge the quality of a sushi bar or restaurant.",
    link: "#",
  },

  salmon: {
    photo: "./img/about_dictionary_book_salmon.png",
    label: "サーモン",
    category: "Sea & River Ingredients",
    title: "Salmon",
    text: "Salmon is one of Japan’s most popular sushi fish. Sashimi-quality salmon is perfect for nigiri and rolls, enjoyed both raw and lightly seared as aburi.",
    link: "#",
  },

  hamachi: {
    photo: "./img/about_dictionary_book_hamachi.png",
    label: "鰤",
    subLabel: "はまち",
    category: "Sea & River Ingredients",
    title: "Hamachi",
    text: "Hamachi is the Japanese name for yellowtail, a classic and popular sushi fish enjoyed in both nigiri and maki.",
    link: "#",
  },

  unagi: {
    photo: "./img/about_dictionary_book_unagi.png",
    label: "鰻",
    subLabel: "うなぎ",
    category: "Sea & River Ingredients",
    title: "Unagi",
    text: "Unagi is the Japanese term for freshwater eel, and its tender, cooked nigiri sushi topped with sweet unagi sauce is incredibly delicious.",
    link: "#",
  },

  tako: {
    photo: "./img/about_dictionary_book_tako.png",
    label: "蛸",
    subLabel: "たこ",
    category: "Sea & River Ingredients",
    title: "Tako",
    text: "Tako, which means octopus in Japanese, is a classic sushi ingredient. Sliced tako arms are commonly used for nigiri sushi and are also popular in delicious sushi rolls.",
    link: "#",
  },

  unii: {
    photo: "./img/about_dictionary_book_unii.png",
    label: "雲丹",
    subLabel: "うに",
    category: "Sea & River Ingredients",
    title: "Unii",
    text: "Uni in sushi refers to sea urchin in Japanese, and the rich, acquired taste of uni sushi made with its roe continues to fascinate sushi lovers.",
    link: "#",
  },

  toro: {
    photo: "./img/about_dictionary_book_toro.png",
    label: "トロ",
    category: "Cuts & Roe",
    title: "Toro",
    text: "Toro is the fatty part of tuna in Japanese, and toro sushi and sashimi are served as some of the premium maguro dishes in restaurants.",
    link: "#",
  },

  ikura: {
    photo: "./img/about_dictionary_book_ikura.png",
    label: "いくら",
    category: "Cuts & Roe",
    title: "Ikura",
    text: "Ikura is salmon roe used in sushi, especially rolls, and it is a classic Japanese topping loved for its bright color, popping texture, and rich flavor.",
    link: "#",
  },

  tobiko: {
    photo: "./img/about_dictionary_book_tobiko.png",
    label: "とびこ",
    category: "Cuts & Roe",
    title: "Tobiko",
    text: "Tobiko is flying fish roe used in sushi rolls, and its crunchy pop and mild, salty flavor make it a fun favorite among sushi lovers.",
    link: "#",
  },

  su: {
    photo: "./img/about_dictionary_book_su.png",
    label: "寿司酢",
    subLabel: "すしす",
    category: "Essentials",
    title: "Sushi Su",
    text: "Sushi su is the Japanese term for vinegar used as the essential seasoning in sushi rice, giving it a light, tangy flavor that defines the taste of sushi.",
    link: "#",
  },

  wasabi: {
    photo: "./img/about_dictionary_book_wasabi.png",
    label: "山葵",
    subLabel: "わさび",
    category: "Essentials",
    title: "Wasabi",
    text: "Wasabi means Japanese horseradish, and its spicy green paste is an essential condiment for sushi and sashimi, adding a sharp kick and fresh flavor.",
    link: "#",
  },

  nori: {
    photo: "./img/about_dictionary_book_nori.png",
    label: "山葵",
    subLabel: "のり",
    category: "Essentials",
    title: "Nori",
    text: "Nori is the Japanese word for edible seaweed, commonly used to wrap nori maki, or sushi rolls, adding a light crunch, ocean flavor, and a classic sushi look",
    link: "#",
  },

  kombu: {
    photo: "./img/about_dictionary_book_kombu.png",
    label: "昆布",
    subLabel: "こんぶ",
    category: "Essentials",
    title: "Kombu",
    text: "Kombu is the Japanese word for dark green edible kelp, known for its deep umami flavor that makes Japanese dishes, including sushi, taste richer and more delicious.",
    link: "#",
  },
};

const dictSection = document.querySelector(".dictionary");
const dictBook = dictSection.querySelector(".dictionary-book");

const dictButtons = dictSection.querySelectorAll(".dictionary-nav__btn");
const dictPhotoEl = dictBook.querySelector(".dictionary-book__photo");
const dictSubLabelEl = dictBook.querySelector(".dictionary-book__label--sub");
const dictLabelEl = dictBook.querySelector(".dictionary-book__label");
const dictCategoryEl = dictBook.querySelector(".dictionary-book__category");
const dictTitleEl = dictBook.querySelector(".dictionary-book__title");
const dictTextEl = dictBook.querySelector(".dictionary-book__text");
const dictLinkEl = dictBook.querySelector(".dictionary-book__detail-btn");

dictButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.book;
    const data = dictionaryData[key];

    // left
    dictPhotoEl.src = data.photo;

    // subLabel
    if (data.subLabel) {
      dictSubLabelEl.style.display = "block";
      dictSubLabelEl.innerHTML = data.subLabel;
    } else {
      dictSubLabelEl.style.display = "none";
    }

    dictLabelEl.innerHTML = data.label;

    //
    if (data.label.length >= 3) {
      dictLabelEl.classList.add("small");
    } else {
      dictLabelEl.classList.remove("small");
    }

    // right
    dictCategoryEl.textContent = data.category;
    dictTitleEl.textContent = data.title;
    dictTextEl.textContent = data.text;
    dictLinkEl.href = data.link;

    dictButtons.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});
