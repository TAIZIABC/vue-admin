<template>
  <section class="chart-container">
    <el-row class="row_list" :gutter="10">
      <el-col :span="4">
        <div class="item_list user-count">
          <p class="list_number">323</p><p>访问量</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="item_list online-count">
          <p class="list_number">523</p><p>在线人数</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="item_list new-msg">
          <p class="list_number">243</p><p>未读消息</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="item_list new-user">
          <p class="list_number">432</p><p>新增用户</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="item_list error-login">
          <p class="list_number">132</p><p>异常登入</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="item_list hurt-count">
          <p class="list_number">632</p><p>攻击次数</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="chart">
        <div id="chartColumn" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12" class="chart">
        <div id="chartBar" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12" class="chart">
        <div id="chartLine" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12" class="chart">
        <div id="chartPie" style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="24" class="chart">
        <div id="dynamicChart" style="width:100%; height:400px;"></div>
      </el-col>

    </el-row>
  </section>
</template>

<script>
  import echarts from 'echarts'

  export default {
    data() {
      return {
        chartColumn: null,
        chartBar: null,
        chartLine: null,
        chartPie: null,
        dynaChart: null,
        timer: null
      }
    },

    methods: {
      drawColumnChart() {
        this.chartColumn = echarts.init(document.getElementById('chartColumn'));
        this.chartColumn.setOption({
          title: { text: 'Column Chart' },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      drawBarChart() {
        this.chartBar = echarts.init(document.getElementById('chartBar'));
        this.chartBar.setOption({
          title: {
            text: 'Bar Chart',
            subtext: '数据来自网络'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['2011年', '2012年']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
              name: '2012年',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
          ]
        });
      },
      drawLineChart() {
        this.chartLine = echarts.init(document.getElementById('chartLine'));
        this.chartLine.setOption({
          title: {
            text: 'Line Chart'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
      },
      drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('chartPie'));
        this.chartPie.setOption({
          title: {
            text: 'Pie Chart',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },
      drawDynaChart(){
        this.dynaChart = echarts.init(document.getElementById('dynamicChart'));
        let option = {
          title: {
            text: '动态数据',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56'
              }
            }
          },
          legend: {
            data:['最新成交价', '预购队列']
          },
          toolbox: {
            show: true,
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: {
            show: false,
            start: 0,
            end: 100
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: (function (){
                var now = new Date();
                var res = [];
                var len = 10;
                while (len--) {
                  res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                  now = new Date(now - 2000);
                }
                return res;
              })()
            },
            {
              type: 'category',
              boundaryGap: true,
              data: (function (){
                var res = [];
                var len = 10;
                while (len--) {
                  res.push(10 - len - 1);
                }
                return res;
              })()
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: '价格',
              max: 30,
              min: 0,
              boundaryGap: [0.2, 0.2]
            },
            {
              type: 'value',
              scale: true,
              name: '预购量',
              max: 1200,
              min: 0,
              boundaryGap: [0.2, 0.2]
            }
          ],
          series: [
            {
              name:'预购队列',
              type:'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data:(function (){
                let res = [];
                let len = 10;
                while (len--) {
                  res.push(Math.round(Math.random() * 1000));
                }
                return res;
              })()
            },
            {
              name:'最新成交价',
              type:'line',
              data:(function (){
                let res = [];
                let len = 0;
                while (len < 10) {
                  res.push((Math.random()*10 + 5).toFixed(1) - 0);
                  len++;
                }
                return res;
              })()
            }
          ]
        };

        let count = 11;
        let that = this;
        this.timer = setInterval(function (){
          let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

          let data0 = option.series[0].data;
          let data1 = option.series[1].data;
          data0.shift();
          data0.push(Math.round(Math.random() * 1000));
          data1.shift();
          data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

          option.xAxis[0].data.shift();
          option.xAxis[0].data.push(axisData);
          option.xAxis[1].data.shift();
          option.xAxis[1].data.push(count++);

          that.dynaChart.setOption(option);
        }, 2100);
      },
      drawCharts() {
        this.drawColumnChart();
        this.drawBarChart();
        this.drawLineChart();
        this.drawPieChart();
        this.drawDynaChart();
      },
    },

    mounted: function () {
      this.drawCharts()
    },
    updated: function () {
      this.drawCharts()
    },
    destroyed: function () {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>
  .chart-container {
    width: 100%;
    float: left;
  }
  .item_list{
    text-align: center;
    font-size: 14px;
    border-radius: 6px;
    padding: 15px 0;
    color: #fff;
    cursor: pointer;
  }
  .item_list:hover{
    opacity: 0.7;
  }
  .list_number{
    font-size:16px;
    font-weight:bold;
  }
  .user-count{
    background-color:#18a689;
  }
  .online-count{
    background-color:#99CC00;
  }
  .new-msg{
    background-color:#33CC99;
  }
  .new-user{
    background-color:#3b5999;
  }
  .error-login{
    background-color:#FF9900;
  }
  .hurt-count{
    background-color:#0099CC;
  }

  .chart {
    padding: 30px 20px;
  }
</style>
