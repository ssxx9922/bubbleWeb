<template>
    <div>
      <mt-header fixed title="资讯"></mt-header>
      <InfoList class="infolist"></InfoList>
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
import InfoList from './InfoList'
export default {
  name: 'home',
  components: {
    InfoList
  },
  data () {
    return {
      tabbarSelected: ''
    }
  },
  watch: {
    tabbarSelected (val) {
      if (val === '行情') {
        this.$router.push('/market')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .infolist
    display flex
    flex-direction column
    margin-top 1rem
    margin-bottom 1rem
  .item-font
    font-size .45rem
  .tabbar-item-info
    color #1ea9ea
  .tabbar-item-icon
    color gray
</style>
