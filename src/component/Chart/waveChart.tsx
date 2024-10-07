import React from "react";
import ReactECharts from 'echarts-for-react';
export default function WaveChart(){
    const option = {
        series: [
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            // min: 0,
            // max: 100,
            // splitNumber: 12,
            itemStyle: {
              color: '#FFAB91'
            },
            // progress: {
            //   show: false,
            //   width: 50
            // },
      
            pointer: {
              show: false
            },
            axisLine: {
              
            },
            axisTick: {
             show:false
            },
            splitLine: {
              show:false
            },
            axisLabel: {
              // distance: -20,
              // color: '#999',
              fontSize: 10
            },
            anchor: {
              show: false
            },
            title: {
              show: true
            },
            detail: {
              valueAnimation: true,
              width: '20%',
              lineHeight: 40,
              borderRadius: 8,
              offsetCenter: [0, '-15%'],
              fontSize: 25,
              fontWeight: 'bolder',
              formatter: '{value}',
              color: 'inherit'
            },
            data: [
              {
                value: 100,
              }
            ]
          },
      
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            // min: 0,
            // max: 100,
            itemStyle: {
              color: '#FF7A00'
            },
            progress: {
              show: true,
              width: 10
            },
      
            pointer: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            // splitLine: {
            //   show: true
            // },
            axisLabel: {
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 100
              }
            ]
          }
        ]
      };
      return(
       
            <ReactECharts option={option}/>

      )
}