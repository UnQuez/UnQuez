<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="{{ page.description | default: site.description | smartify }}">
<meta name="author" content="{{ site.authors }}">
<meta name="generator" content="Jekyll v{{ jekyll.version }}">
{% if page.keywords %}
<meta name="keywords" content="{{ page.keywords }}">
{% endif %}
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
<link href="{{ site.url }}/fonts/devicon.min.css" rel="stylesheet">
{% else %}
<link href="/css/unquez-site.css" rel="stylesheet">
<link href="/css/vendor.css" rel="stylesheet">
<link href="/fonts/devicon.min.css" rel="stylesheet">
{% endif %}
<meta name="google-site-verification" content="ACvLkwJueV2_97Z76CYSSgiPMXMQ11eBqxsLhHGdS6Y" />

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-115538224-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-115538224-1');
</script>
</head>
