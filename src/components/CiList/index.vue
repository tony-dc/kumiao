<template>
  <div class="cinema_body">
    <Loading v-if="isloading" />
    <Scroller v-else>
      <ul>
        <li v-for="item in cinemaList" :key="item.id">
          <div>
            <span>{{item.nm}}</span>
            <span class="q">
              <span class="price">{{item.sellPrice}}</span> 元起
            </span>
          </div>
          <div class="address">
            <span>{{item.addr}}</span>
            <span>{{item.distance}}</span>
          </div>
          <div class="card">
            <div
              v-for="(itemson,index) in item.tag"
              :key="index"
              v-if="itemson===1"
              :class="index|cardClass"
            >{{index|formatCard}}</div>
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>
<script>
export default {
  name: "CiList",
  data() {
    return {
      cinemaList: [],
      isloading: true,
      beforeId: -1
    };
  },
  mounted() {
    this.getCinemaList();
    // let cityId=this.$store.state.city.id
    // if(cityId===this.beforeId) return
    // this.isloading=true
    // this.$service.get("/ajax/cinemaList?ci="+cityId).then(res => {
    //   this.cinemaList = res.data.cinemas;
    //   this.isloading=false
    //   this.beforeId=cityId
    // });
  },
  methods: {
    async getCinemaList() {
      let cityId = this.$store.state.city.id;
      if (cityId === this.beforeId) return;
      this.isloading = true;
      let result = await this.$api.getcinamedata(cityId);
      if (result) {
        this.cinemaList = result.cinemas;
        this.isloading = false;
        this.beforeId = cityId;
      }
    }
  },
  filters: {
    formatCard(index) {
      let card = [
        { key: "allowRefund", value: "改签" },
        { key: "endorse", value: "退票" },
        { key: "sell", value: "折扣卡" },
        { key: "snack", value: "小吃" }
      ];
      for (let i = 0; i < card.length; i++) {
        if (card[i].key === index) {
          return card[i].value;
        }
      }
      return "";
    },
    cardClass(index) {
      let card = [
        { key: "allowRefund", value: "bl" },
        { key: "endorse", value: "bl" },
        { key: "sell", value: "or" },
        { key: "snack", value: "or" }
      ];
      for (let i = 0; i < card.length; i++) {
        if (card[i].key === index) {
          return card[i].value;
        }
      }
      return "";
    }
  }
};
</script>
<style lang="scss" scoped>
#content .cinema_body {
  position: absolute;
  top: 95px;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow: auto;
  ul {
    padding: 20px;
    li {
      margin-bottom: 20px;
      border-bottom: 1px solid #e6e6e6;
      div {
        margin-bottom: 10px;
        .q {
          font-size: 11px;
          color: #f03d37;
        }
        .price {
          font-size: 18px;
          margin-left: 10px;
        }
      }
      .address {
        font-size: 13px;
        color: #666;
        display: flex;
        justify-content: space-between;
        span:nth-of-type(1) {
          margin: 0;
          padding: 0;
          display: block;
          width: 220px;
          line-height: 1.4em;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span:nth-of-type(2) {
          display: block;
          line-height: 1.4em;
          //  float: right;
        }
      }
      .card {
        display: flex;
        div {
          padding: 0 3px;
          height: 15px;
          line-height: 15px;
          border-radius: 2px;
          color: #f90;
          border: 1px solid #f90;
          font-size: 13px;
          margin-right: 5px;
        }
        div.or {
          color: #f90;
          border: 1px solid #f90;
        }
        div.bl {
          color: #589daf;
          border: 1px solid #589daf;
        }
      }
    }
  }
}
</style>