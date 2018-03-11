<html>
  {% include header.md %}

  <body>
    <div class="main">
      {% include navbar.md %}
      <div class="page">
        <div class="page-header" style="background-image: url(/img/njs.jpg)">
          <div class="page-header-overlay">
          <h1>{{ page.title }}</h1>
          <div class="page-lead">
            Page {{ paginator.page }} / {{ paginator.total_pages }} <br>
          </div>
          </div>
        </div>
        <div class="page-content">
          <div class="content-area blog-area" id="main-content">
            {{ content }}
          </div>
        </div>
      </div>
    </div>
    {% include footer.md %}
  </body>
</html>
