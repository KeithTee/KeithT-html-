# 小球弹壁

## 核心思路：在body中设置小球的属性，宽高，位置，圆形等等自己想加的属性

## 再在JS中 

### 通过ball.offsetLeft获取小球距离左边缘的距离，判断当这个距离小于0的时候就让它的下一个运动方向为负（改变方向）

### 可以设置一些其他的特效，比如当小球改变方向的时候用随机数改变小球的颜色

## setInterval(,)，这个函数，当右参数的时间足够小的时候，就可以当成是小球挪动，左边是move函数，用来改变小球位置