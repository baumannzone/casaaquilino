<template>
  <div class="card-products">
    <section class="product-group" v-for="(data, group) in products">
      <header>
        <h1 :id="data.id" class="product-group-title">{{ data.title }}</h1>
        <div class="col-1-2" v-if="data.col1 && data.col2">
          <h4>{{ data.col1 }}</h4>
          <h4>{{ data.col2 }}</h4>
        </div>
      </header>
      <div class="product-item" v-for="(product, idx) in data.products">
        <div class="block-1">
          <h3 class="product-name">
            <small v-if="data.showIndex"> {{ idx + 1 }} - </small>
            {{ product.name }}
          </h3>
          <p class="product-description" v-if="product.description">
            {{ product.description }}
          </p>
        </div>
        <div class="block-2">
          <div class="price-cont">
            <p class="price">
              {{ product.price }}<small>€</small>
            </p>
          </div>
          <div class="price-cont-2" v-if="product.price2">
            <p class="price">
              {{ product.price2 }}<small>€</small>
            </p>
          </div>
        </div>
      </div>
      <div class="product-notes" v-if="data.notes">
        <ul class="unstyled-list">
          <li v-for="note in data.notes">
            <b>{{ note.name }}:</b>
            <span> {{ note.description }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import products from "./products";

  export default {
    name: 'CardProducts',
    data() {
      return {
        products
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .card-products {
    .product-group {
      padding-bottom 30px
      margin-bottom 30px
      border-bottom 1px solid #eaecef
    }

    header {
      display flex
      justify-content space-between
      align-items center

      .product-group-title {
        padding-top 60px
      }

      .col-1-2 {
        display flex
        justify-content right

        h4:first-child {
          margin-right 20px
        }
      }
    }


    .product-item {
      display flex
      justify-content space-between

      .product-name {
        margin 0

        small {
          width: 37px;
          color #777
          text-align right
          display inline-block
        }
      }

      .product-description {
        margin-top 0
      }


      .block-2 {
        display flex
        justify-content flex-end
      }

      .price-cont {
        width 84px
      }

      .price-cont-2 {
        width 85px
        margin-left 20px
      }

      .price {
        font-family 'Roboto Mono', monospace
        font-size 20px
        text-align right
        margin-top 0
      }
    }

    .product-notes {
    }
  }
</style>