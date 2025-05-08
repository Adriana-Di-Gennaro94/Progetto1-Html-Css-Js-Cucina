// pulsante x chiusura navbar
document.addEventListener('DOMContentLoaded', () => {
      const closeBtn = document.getElementById('closeNavbar');
      const collapseEl = document.getElementById('navbarSupportedContent');
  
      collapseEl.addEventListener('shown.bs.collapse', () => {
          closeBtn.style.display = 'block'; // Mostra il bottone quando la navbar è aperta
      });
  
      collapseEl.addEventListener('hidden.bs.collapse', () => {
          closeBtn.style.display = 'none'; // Nasconde il bottone alla chiusura
      });
  
      closeBtn.addEventListener('click', () => {
          collapseEl.classList.remove('show'); // Chiude manualmente la navbar
          closeBtn.style.display = 'none'; // Nasconde il pulsante
      });
});

// ricerca form navbar
document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('searchInput');
      const searchBtn = document.getElementById('searchBtn');
      const recipeCards = document.querySelectorAll(".card"); // Seleziona tutte le card
  
      searchBtn.addEventListener('click', () => {
          const searchTerm = searchInput.value.toLowerCase(); // Testo cercato
  
          recipeCards.forEach(card => {
              const title = card.querySelector(".card-title").textContent.toLowerCase();
              const description = card.querySelector(".card-text").textContent.toLowerCase();
  
              if (title.includes(searchTerm) || description.includes(searchTerm)) {
                  card.style.display = "block"; // Mostra la card corrispondente
              } else {
                  card.style.display = "none"; // Nasconde le altre card
              }
          });
  
          // Se il campo di ricerca è vuoto, ricompaiono tutte le card
          if (searchTerm === "") {
              recipeCards.forEach(card => card.style.display = "block");
          }
      });
  
      // Ricarica tutte le card automaticamente quando il campo è svuotato
      searchInput.addEventListener("input", () => {
          if (searchInput.value === "") {
              recipeCards.forEach(card => card.style.display = "block");
          }
      });
  });
  
  
  