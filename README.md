### 地球
1. 参考样例：https://arrivehydrated.cremedelamer.com/


### 已解决问题
1. 地球上的城市经纬度转换到坐标系     
   通过坐标系转换计算，需要注意的问题是城市经纬度的0°是本初子午线，与创建的世界坐标系不一定一致。   
   
2. 拖拽旋转时，地标与地球的旋转不一致，产生偏移？    
出现原因：(1) 频繁触发拖拽，动画冲突导致；(2) 受到地球本身自转速度影响；  
解决：(1)当触发新动画时，停止前一动画； (2) 当拖拽旋转时，禁止地球自转。  
3. 手机上调试出现帧率下降，从60降低到30      
`renderer.setPixelRatio(window.devicePixelRatio)`导致的，直接去除整个动画变模糊，目前暂时保留。   

4. 城市旋转到中心的y轴旋转角度有误   
一开始想复杂了，希望通过三维坐标转换到转动角度，实际上直接通过记录的经纬度计算就可以了。

### 待解决问题
1. dragControl.js对于THREE.Group无效   
2. 城市旋转到中心的y轴旋转角度有误