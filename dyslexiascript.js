// Dropdown toggle for chapters
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    const chapterList = e.target.nextElementSibling;
    chapterList.style.display = chapterList.style.display === 'block' ? 'none' : 'block';
  });
});

// Automatically read the question and answer on page load
const questionText = document.getElementById('question').textContent;
const answerText = document.getElementById('answer').textContent;
const speakerBtn = document.getElementById('speakerBtn');

// Function to read text using SpeechSynthesis
const readText = (text) => {
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

// Automatically read question and answer on page load
window.onload = () => {
  readText(`${questionText} ${answerText}`);
};

// Repeat question and answer on speaker icon click
speakerBtn.addEventListener('click', () => {
  readText(`${questionText} ${answerText}`);
});

// Hover to read each word
const words = document.querySelectorAll('.word');
words.forEach(word => {
  word.addEventListener('mouseover', () => {
    readText(word.dataset.word);
  });
});

// Adding dynamic lectures and question types
const lessons = document.querySelectorAll('.lesson');
const chapters = document.querySelectorAll('.chapter');
const moduleTitle = document.getElementById('moduleTitle');

lessons.forEach(lesson => {
  lesson.addEventListener('click', (e) => {
    lessons.forEach(l => l.classList.remove('active'));
    e.currentTarget.classList.add('active');
    // Update chapters based on selected lesson
    // Additional logic can be added here
  });
});

chapters.forEach(chapter => {
  chapter.addEventListener('click', (e) => {
    chapters.forEach(c => c.classList.remove('active'));
    e.currentTarget.classList.add('active');
    // Change module content based on chapter selection
    // Example: This can be dynamic with server data
    if (e.currentTarget.dataset.chapter === "chapter1") {
      moduleTitle.textContent = "Introduction to Basic Words";
    } else if (e.currentTarget.dataset.chapter === "chapter2") {
      moduleTitle.textContent = "Simple Vocabulary";
    }
  });
});
