<html>
  {% include header.md %}

  <body>
    <div class="main">
      {% include navbar.md %}
      <div class="page">
      {% if page.image %}
        <div class="page-header" style="background-image: url({{ page.image }})">
      {% elsif page.color %}
        <div class="page-header" style="background-color: {{ page.color }}">
      {% else %}
        <div class="page-header">
      {% endif %}
          <div class="page-header-overlay">
            <h1>{{ page.title }}</h1>
            <p class="blog-author">
              <span class="date">
                <span class="fa fa-calendar"></span> {{ page.date | date_to_long_string }}
              </span>
              {% if post.author %}
              <span class="author">
                <span class="fa fa-user"></span> {{ page.author }}
              </span>
              {% endif %}
              {% if post.tech %}
              <span class="technology">
                <span class="fa fa-cogs"></span> {{ page.tech }}
              </span>
              {% endif %}              
            </p>
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
