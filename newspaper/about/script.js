document.addEventListener('DOMContentLoaded', () => {
  const TIMEOUT_MS = 3000; // milliseconds before infobox auto-closes

  const hotspots = document.querySelectorAll('.person-hotspot');

  hotspots.forEach(hotspot => {
    hotspot._infoTimeoutId = null;

    hotspot.addEventListener('click', () => {
      const infoBox = hotspot.querySelector('.info-box');

      const clearTimeoutFor = (hp) => {
        if (hp._infoTimeoutId) {
          clearTimeout(hp._infoTimeoutId);
          hp._infoTimeoutId = null;
        }
      };

      const nowActive = infoBox.classList.toggle('active');

      hotspots.forEach(otherHotspot => {
        if (otherHotspot !== hotspot) {
          const otherInfo = otherHotspot.querySelector('.info-box');
          if (otherInfo) otherInfo.classList.remove('active');
          clearTimeoutFor(otherHotspot);
        }
      });

      clearTimeoutFor(hotspot);

      if (nowActive) {
        hotspot._infoTimeoutId = setTimeout(() => {
          const ib = hotspot.querySelector('.info-box');
          if (ib) ib.classList.remove('active');
          hotspot._infoTimeoutId = null;
        }, TIMEOUT_MS);
      }
    });
  });
});