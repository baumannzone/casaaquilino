<template>
  <div class="card-products">
    <section class="product-group" v-for="(data, group) in products">
      <h1 class="product-group-title">{{ data.title }}</h1>
      <div class="product-item" v-for="product in data.products">
        <div class="block-1">
          <h3 class="product-name">
            {{ product.name }}
          </h3>
          <p class="product-description" v-if="product.description">
            {{ product.description }}
          </p>
        </div>
        <div>
          <div class="block-2">
            <p class="price">
              {{ product.price }}
            </p>
            <p class="price" v-if="product.price2">
              {{ product.price2 }}
            </p>
          </div>
        </div>
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

    .product-item {
      display flex
      justify-content space-between

      .product-name {
        margin 0
      }

      .product-description {
        margin-top 0
      }

      .price {
        font-family monospace
        font-size 20px
        text-align right
        margin-top 0
      }
    }
  }
</style>