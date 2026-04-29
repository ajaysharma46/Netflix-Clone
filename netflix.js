let currentPosition = 0;

function slide(direction) {
    const track = document.getElementById('track');
    const wrapper = document.querySelector('.slider-wrapper');
    const card = document.querySelector('.card');
    if (!card) return;

    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 15;
    const cardTotalWidth = card.offsetWidth + gap;
    
    // Ensure at least 1 card is considered visible to prevent 0-multiplication
    const visibleCards = Math.max(1, Math.floor(wrapper.offsetWidth / cardTotalWidth));
    const moveAmount = cardTotalWidth * visibleCards;

    const maxScroll = -(track.scrollWidth - wrapper.offsetWidth);

    if (direction === 1) {
        currentPosition -= moveAmount;
        if (currentPosition < maxScroll) currentPosition = maxScroll;
    } else {
        currentPosition += moveAmount;
        if (currentPosition > 0) currentPosition = 0;
    }

    track.style.transform = `translateX(${currentPosition}px)`;

    // Update button visibility
    document.querySelector('.prev-btn').style.display = currentPosition === 0 ? 'none' : 'block';
    document.querySelector('.next-btn').style.display = currentPosition <= maxScroll ? 'none' : 'block';
}

   const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    
    // Optional: Close other items when opening a new one
    /*
    document.querySelectorAll('.accordion-item').forEach(otherItem => {
      if (otherItem !== item) otherItem.classList.remove('active');
    });
    */

    item.classList.toggle('active');
  });
});
