<template>
  <div>
    <div class="content_body">
      <!--    <div class="search_module">-->
      <!--      <router-link to="/Search" class="serachView">-->
      <!--        <img src="../assets/search_icon.png" alt="图标">-->
      <!--        <span>搜索相关课程</span>-->
      <!--      </router-link>-->
      <!--      <a href="tel:13587546889">-->
      <!--        <img class="telphone" src="../assets/listen.png" alt="图标">-->
      <!--      </a>-->
      <!--    </div>-->
      <!--    <div class="search_empty"></div>-->
      <!--    列表-->
      <div class="list_content">
        <Scroll :height="h" :on-reach-bottom="handleReachBottom">
          <div class="list_all" v-for="(item,index) in courseList" :key="index" @click="goDetail(item.type,item.id)">
            <div class="list_wrap">
              <img class="list_img" :src="item.picture" alt="图片">
              <div class="list_bottom">
                <div>
                  <img v-if="item.type == 0" src="../assets/listen_small.png" alt="图标">
                  <img v-if="item.type == 1" src="../assets/play_icon.png" alt="图标">
                  <span>共{{item.count}}节课</span>
                </div>
                <div>
                  <span>销量</span>
                  <span>{{item.sales}}</span>
                </div>
              </div>
            </div>
            <div class="list_tag">
              <span v-for="(i,v) in item.labels" :key="i">{{i}}</span>
            </div>
            <div class="list_info">
              <div class="list_title">{{item.title}}</div>
              <div class="list_price_info">
                <span class="price_old">¥{{item.purchasePrice/100}}</span>
                <span class="font_bold">¥</span>
                <span class="font_bold price_new">{{item.sellPrice/100}}</span>
              </div>
            </div>
            <div class="list_txt">{{item.name}}</div>
          </div>
        </Scroll>
      </div>
    </div>
    <div class="tab_empty"></div>
  </div>
</template>

<script>
  import {getList} from "../request/api";

  export default {
    name: "index",
    data(){
      return{
        value: '',
        courseList:[],
        limit:20,
        page: 1,
        h:0
      }
    },
    created() {
      this.getCourseList(this.limit,this.page)
    },
    methods:{
      getCourseList(limit,page){
        getList(limit,page).then((res) => {
          this.courseList = [...this.courseList,...res.data.data.list];
          this.h = 260 * res.data.data.list.length;
        })
      },
      handleReachBottom() {
        return new Promise(resolve => {
        setTimeout(() => {
          this.page ++;
          this.getCourseList(this.limit,this.page);
          resolve();
        }, 2000);
        });
      },
      goDetail(e,id){
        if(e == 0){
          this.$router.push({path:'./AudioCource',query:{id:id}});
        }else {
          this.$router.push({path:'./VideoCource',query:{id:id}});
        }
      }
    }
  }
</script>
<style scoped lang="less">
  .content_body {

    .search_module {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      position: fixed;
      left: 0;
      top: 0;
      height: 158px;
      padding: 0 30px;
      background: #fff;
      z-index: 2;

      .serachView {
        width: 580px;
        height:58px;
        background:rgba(255,255,255,1);
        box-shadow:0 0 20px 0 rgba(0,0,0,0.1);
        border-radius:28px;
        display: flex;
        align-items: center;
        padding: 12px 30px;
        box-sizing: border-box;
        font-size: 24px;
        color: #A1A1AA;

        >img {
          width: 30px;
          height: 30px;
          margin-right: 30px;
        }
      }

      .telphone {
        width: 40px;
        height: 40px;
      }
    }
    .search_empty {
      height: 158px;
    }

    .list_content {
      padding: 30px 0 0;
      height: 100%;
      box-sizing: border-box;

      .list_all {
        margin-bottom: 44px;
        padding: 0 30px;

        .list_wrap {
          width: 100%;
          height: 386px;
          position: relative;
          left: 0;
          top: 0;

          .list_img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
          }

          .list_bottom {
            position: absolute;
            left: 0;
            top: 329px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            z-index: 1;
            width: 100%;
            font-size: 18px;
            padding: 0 30px;
            box-sizing: border-box;

            >div {
              display: flex;
              align-items: center;
              line-height: 25px;
              >img {
                width: 30px;
                height: 30px;
              }
              >span {
                margin-left: 10px;
              }
            }
          }
        }

        .list_tag {
          margin: 22px 0 15px;
          color: #9A9BA3;
          font-size: 18px;
          display: flex;
          align-items: center;
          width: 100%;

          >span {
            border-radius: 2px;
            background: #F7F8F9;
            padding: 2px 10px;
            margin-right: 10px;
          }
        }

        .list_info {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .list_title {
            width: 420px;
            color: #1B1C31;
            font-size: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 600;
          }

          .list_price_info {
            font-size: 18px;
            color: #D33848;
            vertical-align: bottom;

            .price_old {
              color: #9A9BA3;
              text-decoration: line-through;
            }

            .price_new {
              font-size: 36px;
            }
          }
        }

        .list_txt {
          color: #9A9BA3;
          font-size: 24px;
        }
      }
    }
  }
</style>
