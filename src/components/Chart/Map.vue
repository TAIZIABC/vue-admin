<template>
  <div class="map">
    <div id="map"
         v-loading="loading"
         element-loading-text="拼命加载中"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)"
    ></div>
  </div>
</template>

<script>
    export default {
      name: "Map",
      data(){
        return {
          loading: true
        }
      },
      methods: {
        initMap: function () {
          let that = this;
          // 获取当前位置
          // let lat,lng;
          // if(navigator.geolocation){
          //   navigator.geolocation.getCurrentPosition(position=>{
          //     console.log('success');
          //     lat = position.coords.latitude;
          //     lng = position.coords.longitude;
          //     console.log(lat,lng);
          //   },error => {
          //     console.log(error);
          //     console.log('error');
          //   });
          // }else{
          //   console.log('该浏览器不支持地理位置！');
          // }


          let geolocation = new BMap.Geolocation();
          geolocation.getCurrentPosition(res=>{
            let city = res.address.city;
            let {lat,lng} = res.point;
            let map = new BMap.Map("map");
            map.centerAndZoom(new BMap.Point(lng,lat), 11);
            map.addControl(new BMap.MapTypeControl({
              mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
              ]}));
            map.setCurrentCity(city);
            map.enableScrollWheelZoom(true);
            that.loading = false;
          });
        }
      },
      mounted(){
        this.initMap();
      }
    }

</script>

<style scoped>
  #map{
    width: 100%;
    height: 500px;
  }
</style>
