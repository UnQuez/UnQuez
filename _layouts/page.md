<html>
  {% include header.md %}

  <body>
    <div class="main">
      {% include navbar.md %}
      <div class="page">
        <div class="page-header" style="background-image: url({{ page.image }})">
          <div class="page-header-overlay">
          <h1>{{ page.title }}</h1>
          <div class="page-lead">{{ page.description }}</div>
          </div>
        </div>
        <div class="page-content">
          {{ content }}
        </div>
      </div>
    </div>
    {% include footer.md %}
  </body>
</html>
