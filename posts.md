---
layout: default
title: Blog
num_excerpts: 5
description: Conoce más sobre las herramientas y productos de ferretería en nuestro blog. Encuentra consejos, recomendaciones y tutoriales de uso.
og_description: Conoce más sobre las herramientas y productos de ferretería en nuestro blog. Encuentra consejos, recomendaciones y tutoriales de uso.
---
<style>
    a{
        color:blue;
    }
</style>
<div style="margin-left:7%;margin-right:7%;margin-top:10%;margin-bottom:10%">
<h1 style="text-align:center" title="herramientas eléctricas">Blog</h1>
{% for post in site.posts limit:5 %}
<div class="card mb-3" style="max-width:100%;">
  <div class="row g-0">
    <!--div class="col-md-4">
      <a href="{{ post.url }}" title="Visita el enlace {{ post.title }} para más información.">
        <img src="{{ post.imagenPrincipal }}" class="img-fluid rounded-start" alt="Imagen de proyecto: {{ post.url }}">
      </a>
    </div-->
    <div class="col-md-8">
      <div class="card-body">
        <a href="{{ post.url }}" title="Más información de {{ post.title }} visita el enlace.">
            <h2 class="card-title tituloH3Skills">{{ post.title }}</h2>
        </a>
        <p class="card-text">{{ post.description }}</p>
        {{ post.enlaces }}
        <!--p class="card-text"><small class="text-body-secondary">{{ post.date | date: "%A %B %-d, %Y" }}</small></p-->
      </div>
    </div>
  </div>
</div>
{% endfor %}

{% if site.posts.size > 5 %}
## Post antiguos
<ul>
    {% for post in site.posts %}
        {% if forloop.index > 5 %}
            <li><a class="post-title" href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
        {% endif %}
    {% endfor %}
</ul>
{% endif %}
</div>