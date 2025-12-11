document.addEventListener('DOMContentLoaded', () => {
  const hotspots = document.querySelectorAll('.person-hotspot');

  hotspots.forEach(hotspot => {
    // 👆 MOBILE/TABLET: Add event listener for tap/click
    hotspot.addEventListener('click', () => {
      const infoBox = hotspot.querySelector('.info-box');

      // Toggle the 'active' class to show/hide the box
      infoBox.classList.toggle('active');

      // (Optional) Close other active boxes when a new person is tapped
      hotspots.forEach(otherHotspot => {
        if (otherHotspot !== hotspot) {
          otherHotspot.querySelector('.info-box').classList.remove('active');
        }
      });
    });
  });
});