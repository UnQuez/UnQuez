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
              {% if page.author %}
              <span class="author">
                <span class="fa fa-user"></span> {{ page.author }}
              </span>
              {% endif %}
              {% if page.tech %}
              <span class="technology">
                <span class="fa fa-cogs"></span> {{ page.tech }}
              </span>
              {% endif %}              
            </p>
          </div>
        </div>
        <div class="page-content">
          <div class="content-area blog-area post-detail" id="main-content">
            {{ content }}
            <div class="clearfix">
              {% if page.comments %}
              <div id="disqus_thread"></div>
  <script>

  /**
  *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
  *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
  /*
  var disqus_config = function () {
  this.page.url = 'https://http-unquez-com.disqus.com';  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = 'http-unquez-com'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  */
  (function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://http-unquez-com.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
  </script>
  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
                              
              {% endif %}
            </div>
          </div>
        </div>
      </div>
    </div>
    {% include footer.md %}
  </body>
</html>
