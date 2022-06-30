---
title: Blog
layout: default
num_excerpts: 5
---
<style>
    a{
        color:blue;
    }
</style>
<br>
<h2 style="text-align:center" title="herramientas eléctricas">Blog</h2>
{% for post in site.posts limit:page.num_excerpts %}
{% include preview.md post=post %}
{% endfor %}

{% if site.posts.size > page.num_excerpts %}

## Post antiguos

<ul>
    {% for post in site.posts offset:page.num_excerpts %}
        <li><a class="btn btn-primary" href="{{ post.url }}" role="button" title="{{ post.title }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endif %}
