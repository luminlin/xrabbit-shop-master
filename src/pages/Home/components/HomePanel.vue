<script setup>
// 定义prop (主标题和副标题是纯文本)
defineProps({
    // 主标题
    title: {
        type: String
    },
    // 副标题
    subTitle: {
        type: String
    }
})

</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <!-- // 定义插槽 (主体内容是复杂的模版) (这里只有一块插槽，使用默认写法；如果是多块插槽位置则使用具面插槽，更具体) -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>