<template>
  <div>
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <mt-cell :title="item.name" v-for="(item,index) of dataList" v-bind:key="index">
        <span class="cell-price">{{ item.price | numFilter }}</span><span class="cell-change" :class="{'cell-change-bkg':item.change < 0}">{{ item.change | percentFilter }}%</span>
        <img slot="icon" :src="item.imageUrl" :onerror="icon" width="24" height="24">
      </mt-cell>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: 'MarketList',
  filters: {
    numFilter (value) {
      let realVal = Number(value).toFixed(2)
      return Number(realVal)
    },
    percentFilter (value) {
      return Number(value) > 0 ? '+' + value : value
    }
  },
  data () {
    return {
      icon: 'this.src="' + require('../../assets/images/erroricon.png') + '"',
      dataList: []
    }
  },
  methods: {
    getMarketInfo () {
      this.$store.dispatch('coinListData').then(response => {
        this.dataList = response.items
        this.$refs.loadmore.onTopLoaded()
      })
    },
    loadTop () {
      this.getMarketInfo()
    }
  },
  mounted () {
    this.getMarketInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .cell-price
    padding-right .1rem
  .cell-change
    width 1.1rem
    padding .1rem
    background-color red
    border-radius 7px
    text-align center
    color white
  .cell-change-bkg
    background-color green
</style>
