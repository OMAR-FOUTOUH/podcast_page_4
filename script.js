// Create an IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('showing');
        } else {
            entry.target.classList.remove('showing');
        }
    });
  });
  
  // Select all elements with the class 'hidden' using document.querySelectorAll
  const hiddenElements = document.querySelectorAll('.hide');
  const hiddenElements2 = document.querySelectorAll('.hide2');
  // Observe each element in the NodeList
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));

const textElement = document.getElementById('text');
const words = [' Your Platform',' for Easy', 'Podcast Creation.',' Express Your Expertise,', 'Inspire Others, ','and', 'Amplify', 'Your' ,'Voice','!']; // Add your words here
let wordIndex = 0;
let letterIndex = 0;

function showLetter() {
  if (wordIndex < words.length) {
    const word = words[wordIndex];
    if (letterIndex < word.length) {
      textElement.textContent += word[letterIndex];
      letterIndex++;
    } else {
      textElement.textContent += ' ';
      wordIndex++;
      letterIndex = 0;
    }
    setTimeout(showLetter, 25); // Adjust speed here (milliseconds)
  }
}

showLetter();
