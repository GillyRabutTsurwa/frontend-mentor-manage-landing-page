const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.35,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((currentEntry) => {
    if (currentEntry.isIntersecting) {
      console.log(currentEntry);
      console.log(currentEntry.target);
      currentEntry.target.classList.add("observer-fade-in");

      // NOTE: individual card appearance has to go here. Maybe I will put this in the next branch.
      // IDEA: try targeting the cards by doing currentEntry.target.children or something along those lines

      // stop observing once observed
      observer.unobserve(currentEntry.target);
    }
  });
}, options);

sections.forEach((currentSection) => {
  observer.observe(currentSection);
});

// NOTE: this is the code we will use for the individual card appearance effect that I am planning to do in the next branch.
// boîtes.forEach((boîteActuelle, index) => {
//     setTimeout(() => {
//         boîteActuelle.classList.add("afficher");
//     }, 150 * (index + 1)); //NOTE:IMPORTANT: index + 1 is the key ingredient
// });
