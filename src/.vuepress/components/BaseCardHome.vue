<template>
  <section>
    <div class="card-btn">
      <a href="/carta" title="carta">Ver carta completa</a>
    </div>
    <div class="row">
      <div class="item" v-for="(prod) in data">
        <h4> {{ prod.title }} </h4>
        <p>{{ prod.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          { title: 'Pescado', description: 'Pescado fresco y variado' },
          { title: 'Carne', description: 'Excelentes carnes gallegas' },
          { title: 'Platos combinados', description: 'Para todos los gustos' },
          { title: 'Empanada Casera', description: 'De carne, bonito, pulpo...' },
          { title: 'Postres Artesanos', description: 'Para los mas golosos' }
        ]
      }
    },
  }
</script>

<style lang="stylus">
  .card-btn {
    position relative
    margin-top 50px
    margin-bottom 50px
    text-align center

    a {
      padding 10px 20px
      margin 20px
      border 3px solid #4a8de2
      text-transform uppercase
      border-radius 4px
    }
  }

  .row {
    display flex
    justify-content center
    flex-wrap wrap

    .item {
      text-align center
      width 100%
      margin 0 1rem 1rem
      padding-bottom 1rem
      border-bottom 1px solid #eaeaea

      h4 {
        margin-bottom 0
        font-size 1.1rem
        text-transform uppercase
      }

      p {
        margin-top 0
        letter-spacing 1.2px
      }
    }
  }

  @media only screen and (min-width: 500px) {
    .row {
      .item {
        width 300px
      }
    }
  }
</style>