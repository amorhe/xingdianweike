<template>
    <div>
      <div class="content_main">
        <div class="typeList">
          <div :class="index==tabIndex?'activetab':''" v-for="(item,index) in typeList" :key="index" @click="tabClick(index,item.id)">{{item.name}}</div>
        </div>
        <div class="list_content">
          <div class="list_all" v-for="(item,index) in courseList" :key="index" @click="item.type==1?$router.push({path:'./VideoCource',query:{id:item.id}}):$router.push({path:'./AudioCource',query:{id:item.id}})">
            <div class="list_wrap">
              <img class="list_img" :src="item.picture" alt="图片">
              <div class="list_bottom">
                <div>
                  <img v-if="item.type==0" src="../assets/listen_small.png" alt="图标">
                  <img v-if="item.type==1" src="../assets/play_icon.png" alt="图标">
                  <span>共{{item.count}}节课</span>
                </div>
                <div>
                  <span>销量</span>
                  <span>{{item.sales}}</span>
                </div>
              </div>
            </div>
            <div class="list_tag">
              <span v-for="(i,v) in item.labels">{{i}}</span>
            </div>
            <div class="list_info">
              <div class="list_title">{{item.title}}</div>
              <div class="list_price_info">
                <span class="font_bold">¥</span>
                <span class="font_bold price_new">{{item.sellPrice}}</span>
              </div>
            </div>
            <div class="list_txt">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="tab_empty"></div>
    </div>
</template>

<script>
  import {typeList,courses} from "../request/api";

  export default {
      name: "Type",
      data(){
        return{
          typeList:[],
          tabIndex:0,
          limit:20,
          page:1,
          courseList:[]
        }
      },
    created() {
        this.getlist(this.limit,this.page);
    },
    methods:{
        tabClick(index,id) {
          this.tabIndex = index;
          this.courses(id,this.limit,this.page)
        },
        getlist(){
          typeList().then((res) => {
            this.typeList = res.data.data.list;
            this.courses(res.data.data.list[0].id,this.limit,this.page)
          })
        },
        courses(id,limit,page){
          courses(id,limit,page).then((res) => {
              console.log(res)
              this.courseList = res.data.data.list;
            })
          }
        }
    }
</script>

<style scoped lang="less">
  .content_main {
    padding: 0 30px 0 0;
    display: flex;
    justify-content: space-between;

    .typeList {
      width: 240px;
      @val: 120px;
      height: calc(~"100vh - @{val}");
      overflow-y: scroll;
      padding-left: 30px;
      box-sizing: border-box;
      font-size: 30px;
      font-weight: bold;
      background:rgba(255,255,255,1);
      box-shadow:0 20px 20px 0 rgba(0,0,0,0.05);

      >div {
        margin-bottom: 36px;
      }
    }

    .activetab {
      font-size: 40px;
      color: #F0B544;
    }

    .list_content {
      width: 450px;
      @val: 120px;
      max-height: calc(~"100vh - @{val}");
      overflow-y: scroll;

      .list_all {
        width: 100%;
        margin-top: 44px;

        .list_wrap {
          width: 100%;
          height: 252px;
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
            bottom: 10px;
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
                width: 24px;
                height: 24px;
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
            max-width: 380px;
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
