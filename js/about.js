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
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },
  gunkan: {
    photo: "./img/about_glossary_book_gunkan.png",
    label: "軍艦",
    category: "Traditional Sushi",
    title: "Gunkan",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  oshi: {
    photo: "./img/about_glossary_book_oshi.png",
    label: "押し",
    category: "Traditional Sushi",
    title: "Oshi",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  chirashi: {
    photo: "./img/about_glossary_book_chirashi.png",
    label: "ちらし",
    category: "Traditional Sushi",
    title: "Chirashi",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  kaisen: {
    photo: "./img/about_glossary_book_kaisen.png",
    label: "海鮮丼",
    category: "Traditional Sushi",
    title: "Kaisen Don",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  omakase: {
    photo: "./img/about_glossary_book_omakase.png",
    label: "お任せ",
    category: "Traditional Sushi",
    title: "Omakase",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  sashimi: {
    photo: "./img/about_glossary_book_sashimi.png",
    label: "刺身",
    category: "Traditional Sushi",
    title: "Sashimi",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  inari: {
    photo: "./img/about_glossary_book_inari.png",
    label: "いなり",
    category: "Traditional Sushi",
    title: "Inari",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },
};

const buttons = document.querySelectorAll(".book-nav__btn");
const photoEl = document.querySelector(".glossary-book__photo");
const labelEl = document.querySelector(".glossary-book__label");
const categoryEl = document.querySelector(".glossary-book__category");
const titleEl = document.querySelector(".glossary-book__title");
const textEl = document.querySelector(".glossary-book__text");
const linkEl = document.querySelector(".glossary-book__detail-btn");

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
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  salmon: {
    photo: "./img/about_dictionary_book_salmon.png",
    label: "サーモン",
    category: "Sea & River Ingredients",
    title: "Salmon",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  hamachi: {
    photo: "./img/about_dictionary_book_hamachi.png",
    label: "鰤",
    subLabel: "はまち",
    category: "Sea & River Ingredients",
    title: "Hamachi",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  unagi: {
    photo: "./img/about_dictionary_book_unagi.png",
    label: "鰻",
    subLabel: "うなぎ",
    category: "Sea & River Ingredients",
    title: "Unagi",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  tako: {
    photo: "./img/about_dictionary_book_tako.png",
    label: "蛸",
    subLabel: "たこ",
    category: "Sea & River Ingredients",
    title: "Tako",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  unii: {
    photo: "./img/about_dictionary_book_unii.png",
    label: "雲丹",
    subLabel: "うに",
    category: "Sea & River Ingredients",
    title: "Unii",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  toro: {
    photo: "./img/about_dictionary_book_toro.png",
    label: "トロ",
    category: "Cuts & Roe",
    title: "Toro",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  ikura: {
    photo: "./img/about_dictionary_book_ikura.png",
    label: "いくら",
    category: "Cuts & Roe",
    title: "Ikura",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  tobiko: {
    photo: "./img/about_dictionary_book_tobiko.png",
    label: "とびこ",
    category: "Cuts & Roe",
    title: "Tobiko",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  su: {
    photo: "./img/about_dictionary_book_su.png",
    label: "寿司酢",
    subLabel: "すしす",
    category: "Essentials",
    title: "Sushi Su",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  wasabi: {
    photo: "./img/about_dictionary_book_wasabi.png",
    label: "山葵",
    subLabel: "わさび",
    category: "Essentials",
    title: "Wasabi",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  nori: {
    photo: "./img/about_dictionary_book_nori.png",
    label: "山葵",
    subLabel: "のり",
    category: "Essentials",
    title: "Nori",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
    link: "#",
  },

  kombu: {
    photo: "./img/about_dictionary_book_kombu.png",
    label: "昆布",
    subLabel: "こんぶ",
    category: "Essentials",
    title: "Kombu",
    text: "Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text  text text text  text text Text text text text  text text text  text text text",
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
