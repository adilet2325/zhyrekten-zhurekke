// Элементтер
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const formCard = document.getElementById('formCard');
const joinForm = document.getElementById('joinForm');
const cancelBtn = document.getElementById('cancelBtn');
const questionBlock = document.getElementById('questionBlock');
const noBlock = document.getElementById('noBlock');
const sentBlock = document.getElementById('sentBlock');
const formMsg = document.getElementById('formMsg');

// Иә
yesBtn.addEventListener('click', () => {
  questionBlock.classList.add('hidden');
  noBlock.classList.add('hidden');
  sentBlock.classList.add('hidden');
  formCard.classList.remove('hidden');
});

// Жоқ
noBtn.addEventListener('click', () => {
  questionBlock.classList.add('hidden');
  formCard.classList.add('hidden');
  sentBlock.classList.add('hidden');
  noBlock.classList.remove('hidden');
});

// Артқа
cancelBtn.addEventListener('click', () => {
  formCard.classList.add('hidden');
  questionBlock.classList.remove('hidden');
});

// Жіберу (демо)
joinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  formCard.classList.add('hidden');
  sentBlock.classList.remove('hidden');

  joinForm.reset();
});