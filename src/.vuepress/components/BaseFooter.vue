<template>
  <footer>
    <ul class="footer-list">
      <li> Bar Alimentación Casa Aquilino ©</li>
      <li>
        <a href="tel:+34986627264">98 662 72 64</a>
      </li>
      <li>
        <a href="https://www.facebook.com/barcasaaquilino/" rel="noopener">facebook.com/barcasaaquilino</a>
      </li>
    </ul>
  </footer>
</template>

<style lang="stylus" scoped>
  footer {
    margin-top: 3rem;
    border-top: 2px solid #eaecef;
    padding-top: 3rem;

    .footer-list {
      list-style: none
      padding-left 0
      text-align center


      li {
        position relative
        font-size 0.9rem
        letter-spacing 0.8px
        margin-bottom 0.5rem
        display inline-block
        margin-right 1.2rem
        word-break break-all

        &:not(:last-child):after {
          content "·"
          position: relative
          right -12px
        }
      }
    }

  }
</style>