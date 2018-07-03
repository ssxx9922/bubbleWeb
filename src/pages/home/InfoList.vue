<template>
  <div>
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <div class="home-cell" v-for="(item,index) of dataList" v-bind:key="index">
          <div class="home-cell-conent">{{ item.text }}</div>
          <div class="home-cell-info">
            <p>{{ item.time }}</p>
            <div class="home-cell-touch">
              <p class="home-cell-touchtext" @click="touchAction(index,true)"><span class="iconfont home-cell-touchicon">&#xe717;</span>{{ item.favour }}</p>
              <p class="home-cell-touchtext" @click="touchAction(index,false)"><span class="iconfont home-cell-touchicon">&#xe716;</span>{{ item.disfavor }}</p>
            </div>
          </div>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: 'InfoList',
  data () {
    return {
      dataList: [],
      loading: false,
      page: 1
    }
  },
  methods: {
    touchAction (index, direction) {
      var touch = direction ? 'favour' : 'disfavor'
      this.$store.dispatch('infoTouch', {
        id: this.dataList[index].id,
        type: touch
      }).then(response => {
        if (direction) {
          this.dataList[index].favour++
        } else {
          this.dataList[index].disfavor++
        }
      })
    },
    getHomeInfo () {
      this.$store.dispatch('infoListData', {
        page: this.page
      }).then(res => {
        if (res) {
          if (res.page === this.page) {
            this.loading = true
          } else {
            this.loading = false
          }
          if (this.page === 1) {
            this.dataList = res.list
          } else {
            this.dataList = this.dataList.concat(res.list)
          }
          this.$refs.loadmore.onTopLoaded()
        }
      })
    },
    loadTop () {
      this.page = 1
      this.getHomeInfo()
    },
    loadMore () {
      this.page++
      this.getHomeInfo()
    }
  },
  mounted () {
    this.loading = true
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
    .home-cell
      display: flex
      flex-direction: column
      padding: .1rem
      background-color: white
      margin-left: .1rem
      margin-right: .1rem
      margin-bottom: .1rem
      margin-top: .1rem
      border-width: 1px
      border-color: #dbdbdd
      border-style: none none solid none
      .home-cell-info
        display: flex
        flex-direction: row
        justify-content: space-between
        margin-top: .2rem
        color: #A9A9A9
        .home-cell-touch
          text-font: .2rem
          display: flex
          flex-direction: row
          justify-content: flex-end
          .home-cell-touchicon
            margin-right: .1rem
          .home-cell-touchtext
            margin-right: .1rem
      .home-cell-conent
        line-height 140%
        font-size .35rem
</style>
