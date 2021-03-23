# 轮播图,每个图片都有自己的名字，通过名字的方式控制图片

## 思路

### body中,<div  swiper >   <ul swiper-wrap>  <li display:block swiper-item> 再<img>和<h2>并列
### style,先通用选择器,去掉外边框和内边框以及list属性,再设置img和li的宽高,ul属性中,位置是相对的,li属性中,位置是绝对的,左和上的距离是0,显示效果是none,h2位置是绝对的,颜色等等自己设置,这一步结束之后,会发现只剩下一张图片,并且字也没有了,这个是因为最后一张图片盖掉了其他的图片,我们现在需要做的就是在js中,操作去分别显示他们
### js,通过class名称,获取页面上的标签:var items = document.getElementsByClassName('swiper-item') 利用for循环,默认其他图片全部隐藏,当需要显示时不隐藏


## 最后设置setInterval()控制图片的时间等等


# 每个部分都一定要细心,稍有疏忽都会导致报错