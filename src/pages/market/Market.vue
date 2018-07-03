<template>
    <div>
      <mt-header fixed title="行情"></mt-header>
      <MarketList class="marketlist"></MarketList>
      <mt-tabbar fixed v-model="tabbarSelected">
        <mt-tab-item class="tabbar-item-info" id="资讯">
          <span class="iconfont item-font" slot="icon">&#xe75e;</span>
          资讯
        </mt-tab-item>
        <mt-tab-item class="tabbar-item-icon" id="行情">
          <span class="iconfont item-font" slot="icon">&#xe757;</span>
          行情
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>

<script>
import MarketList from './MarketList'
export default {
  name: 'market',
  components: {
    MarketList
  },
  data () {
    return {
      tabbarSelected: ''
    }
  },
  watch: {
    tabbarSelected (val) {
      if (val === '资讯') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .marketlist
    display: flex
    flex-direction: column
    margin-top: 1rem
    margin-bottom: 1rem
  .item-font
    font-size .45rem
  .tabbar-item-info
    color gray
  .tabbar-item-icon
    color #1ea9ea
</style>
