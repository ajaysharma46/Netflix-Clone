let currentPosition = 0;

function slide(direction) {
    const track = document.getElementById('track');
    const wrapper = document.querySelector('.slider-wrapper');
    const card = document.querySelector('.card');
    
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 15;
    const cardTotalWidth = card.offsetWidth + gap;

    // Calculate how many full cards can fit in the view
    const visibleCards = Math.floor(wrapper.offsetWidth / cardTotalWidth);
    const moveAmount = cardTotalWidth * visibleCards;
    
    // Max scroll limit (total width of track - visible width)
    const maxScroll = -(track.scrollWidth - wrapper.offsetWidth + 60);

    if (direction === 1) {
        // Move Forward
        currentPosition -= moveAmount;
        if (currentPosition < maxScroll) currentPosition = maxScroll;
    } else {
        // Move Backward
        currentPosition += moveAmount;
        if (currentPosition > 0) currentPosition = 0;
    }

    track.style.transform = `translateX(${currentPosition}px)`;

    // Toggle Button Visibility
    document.querySelector('.prev-btn').style.display = currentPosition === 0 ? 'none' : 'block';
    document.querySelector('.next-btn').style.display = currentPosition <= maxScroll ? 'none' : 'block';
}