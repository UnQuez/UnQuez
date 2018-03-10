<html>
  {% include header.md %}

  <body>
    <div class="main">
      <div class="homepage">
        <div class="homepage-content">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <a class="navbar-brand" href="{{ site.baseurl }}">
                <img src="/img/logo.png" /> UnQuez
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto navbar-right">
                  <li class="nav-item active"><a class="nav-link" href="#"> Home <span class="sr-only">(current)</span></a></li>
                  <li class="nav-item"><a class="nav-link" href="/project">Projects</a></li>
                  <li class="nav-item"><a class="nav-link" href="/team">Teams</a></li>
                  <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
                  <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
              </div>
            </div>
          </nav>

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
