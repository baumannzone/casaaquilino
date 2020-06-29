<template>
  <header class="base-header">
    <h1 class="title">
      BAR ALIMENTACIÓN CASA AQUILINO
    </h1>
    <h3 class="tagline">
      Tapas variadas, empanada casera, comida tradicional
    </h3>
  </header>
</template>

<style lang="stylus">
  .base-header {
    min-height 200px
    color white
    text-align center
    background-image: url("/img/header.jpg");
    background-position 50%
    background-size cover
    padding 0 20px

    .title {
      padding-top 50px
      font-weight: bold
      text-shadow: 0 0 8px #000;
    }

    .tagline {
      text-shadow: 0 0 5px #222;
      padding-bottom 20px
    }
  }
</style>