<script>
  window.addEventListener('load', () => {
    document.querySelectorAll('img').forEach(img => {
      img.onerror = () => {
        img.onerror = null;
        img.src = 'error.png';
      };
    });
  });
</script>
