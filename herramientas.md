---
layout: default
title: Más herramientas
description: Descubre las marcas de herramientas eléctricas y maquinarias de alta calidad que ofrecemos en Ferretería La Cadena. Encuentra marcas reconocidas como Toolcraft, Ingco, BBT, Lincoln y más para variedad de trabajos.
og_description: Descubre las marcas de herramientas eléctricas y maquinarias de alta calidad que ofrecemos en Ferretería La Cadena. Encuentra marcas reconocidas como Toolcraft, Ingco, BBT, Lincoln y más para variedad de trabajos.
---
<section class="bg-img1 txt-center p-lr-15 p-tb-72" >
	<h2 class="ltext-105 cl0 txt-center" style="color:black">
		Más marcas disponibles
	</h2>
</section>
<section >
	<div class="container" style="margin-bottom:5%">
        <!-- INICIO CARRUSEL -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {% for page in site.data.marcas %}
  <div class="col">
    <div class="card h-100 w-100">
      <img src="{{ page.imagen }}" class="card-img-top" alt="..." >
      <div class="card-body">
        <h5 class="card-title"><strong>{{ page.marca }}</strong></h5>
      </div>
    </div>
  </div>
  {% endfor %}
  </div>
    <!---FIN CARRUSEL --->
	</div>
</section>	