<template>
  <div>
    <div class="container">
        <svg width="500" height="200" viewBox="0 0 500 200">
            <rect x="0" y='0' width="100" height="50" fill="none" stroke="blue" stroke-width="5" class="rect" transform="translate(10 10)"/>
        </svg>
    </div>
    <div class="container">
        <svg width="50" height="50" viewBox="0 0 440 440">
            <circle fill='none' cx="220" cy='220' r="200" stroke-width="20" stroke="#d1d3d7"/>
            <circle transform="matrix(0 -1 1 0 0 440 )" fill='none' cx="220" cy='220' r="200" stroke-width="20" stroke="blue" class="circle"/>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "SvgAnimation",
  setup(ctx) {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  
  svg{
      border: darkgray 1px solid;
  }
}
.rect{
    stroke-dasharray: 10 20;
}
.circle{
    animation:circle 1s linear infinite
}

@keyframes circle {
    from{
        stroke-dasharray: 10 1257;
    }
    to{
stroke-dasharray:1257 0;
    }
}
</style>>

