<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="{{ page.description | default: site.description | smartify }}">
<meta name="author" content="{{ site.authors }}">
<meta name="generator" content="Jekyll v{{ jekyll.version }}">

<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
<link rel="icon" href="/favicon.ico" type="image/x-icon">

<title>
  {%- if page.title -%}
    {{ page.title | smartify }} · {{ site.title | smartify }}
  {%- else -%}
    {{ site.title | smartify }} · {{ site.description | smartify }}
  {%- endif -%}
</title>

<!-- Bootstrap core CSS -->
{% if site.github %}
<link href="{{ site.url }}/css/unquez-site.css" rel="stylesheet">
<link href="{{ site.url }}/css/vendor.css" rel="stylesheet">
{% else %}
<link href="/css/unquez-site.css" rel="stylesheet">
<link href="/css/vendor.css" rel="stylesheet">
{% endif %}
