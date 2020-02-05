<template>
    <div class="content_main">
      <div class="search_module">
        <input class="search_box" type="text" v-model="searchV" />
        <span class="search_txt" @click="search">搜索</span>
      </div>
      <div class="search_empty"></div>
      <div class="search_result">
        <div v-for="item in 8">
          <div class="search_lf">
            <img class="cource_img" src="http://img2.imgtn.bdimg.com/it/u=40927759,4197255517&fm=26&gp=0.jpg" alt="图片">
            <div>
              <img class="icon" src="../assets/listen_small.png" alt="图标">
              <span>392</span>
            </div>
          </div>
          <div class="search_rg">
            <div class="tt title">
              饭局全攻略，如何两周摆脱饭局困境，从不善到应酬混到风生水起阿里校长教您如何搞定客户
            </div>
            <span class="text">百通电商及2号车库创始人，东南亚活wqreweqr343qr</span>
            <div class="search_b">
              <div class="search_b_l">
                <span>音乐</span>
                <span>社交学</span>
                <span>营销销售</span>
              </div>
              <div class="search_b_r">
                <span class="old_price">¥399</span>
                <div class="new_price">
                  <span>¥</span>
                  <span class="new_num">99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {search} from "../request/api";

  export default {
      name: "Search",
      data(){
        return{
          searchV:''
        }
      },
      methods:{
        search(){
          if(this.searchV.length>0){
            search(this.searchV).then((res) => {
              console.log(res);
            })
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .content_main {

    .search_module {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 140px;
      background: #fff;
      padding: 30px;
      box-sizing: border-box;

      .search_box {
        width:600px;
        height:80px;
        background:rgba(247,248,249,1);
        border-radius:41px;
        padding: 0 30px;
        box-sizing: border-box;
        color: #191E32;
        font-size: 30px;
      }

      .search_txt {
        font-size: 30px;
        color: #F0B544;
      }
    }

    .search_empty {
      width: 100vw;
      height: 140px;
    }

    .search_result {
      padding: 0 30px;
      height: calc(~"100vh-140px");
      overflow-y: scroll;

      >div {
        margin-bottom: 30px;
        display: flex;
        align-items: center;

        .search_lf {
          width: 178px;
          height: 178px;
          position: relative;
          color: #fff;
          display: flex;
          align-items: flex-end;
          font-size: 18px;
          margin-right: 26px;

          >div {
            display: flex;
            align-items: center;
            padding: 0 10px;
          }

          .cource_img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            border-radius: 6px;
          }
          .icon {
            width: 18px;
            height: 18px;
            margin-right: 8px;
          }
        }

        .search_rg {
          display: flex;
          flex-direction: column;
          width: 486px;
          height: 178px;

          .title {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            color: #1B1C31;
            line-height: 42px;
          }

          .text {
            color: #A1A1AA;
            font-size: 24px;
            margin: 10px 0 20px;
            line-height: 33px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .search_b {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .search_b_l {
              color: #9A9BA3;
              font-size: 18px;
              display: flex;
              align-items: center;

              >span {
                padding: 2px 10px;
                background: #F7F8F9;
                border-radius: 2px;
                margin-right: 10px;
              }
            }

            .search_b_r {
              display: flex;
              align-items: center;
              font-size: 18px;

              .old_price {
                text-decoration: line-through;
                color: #A1A1AA;
              }

              .new_price {
                color: #D33848;
                display: flex;
                align-items: center;
                font-weight: bold;

                .new_num {
                  font-size: 24px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
