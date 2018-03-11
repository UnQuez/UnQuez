<html>
  {% include header.md %}

  <body>
    <div class="main">
      <div class="homepage">
        <div class="homepage-content">
          {% include navbar.md %}

          {{ content }}
        </div>
      </div>
    </div>
    <footer class="site-footer">
      <p>
        &copy; 2018 <a href="{{ site.baseurl }}">UnQuez</a> <br />
        Website Design by <a href="https://yusril.js.org" target="_blank">Yusril Herlian Syah</a> <br/>
        Logo Design by <a href="https://www.linkedin.com/in/mochammad-rafli-afriliansyah-146a6998/" target="_blank">Mochammad Rafli Afriliansyah</a> <br />
      </p>
    </footer>

    <script src="/js/vendor.js"></script>
    <script src="/js/unquez-site.js"></script>

  </body>
</html>
