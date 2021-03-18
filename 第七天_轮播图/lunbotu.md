# 轮播图自己的技术理解

## 思路就是，先把n张图片依次放到一个ul中，ul在div中，(将图片的格式全部都清除掉)
## 然后变成水平排列，然后div的border属性，画一个框框，将ul不在div的部分隐藏掉
## 设置动画属性

## body中的元素

###div 是一个块级元素（division）他的内容自动开始新的一行，同时：换行也是<div>固有的唯一格式表现

###ul  是一个无序列表	尽量在用的时候，在style刚开始的时候就把它的格式初始化，即margin=0px , padding=0px , list-style=none;

###li  定义列表项目 可以理解为是ul的上级，li 中分为有序列表(<ol>)和无序列表(<ul>) 在轮播图.html中，li中放ul

###a   是超链接标签 href="#"一般不知道地址的时候就用#号

## animation 6个属性  名字 持续时间 过渡（线性linear/平滑ease） 延迟属性 infinite normal



#重新理一下思路

##先写body部分

###一个大的div，id是swiper
###里面一个ul ，id是swiper-wrap
###里面并列几个li ，class是是wiper-item 
###每一个li里面都有一个a标签放一个图片
###最后重复一下第一个照片


##再写css，写整个*{}里面把padding和margin都0px，还有list-style设置为none

###css中，先写照片的宽度和高度，应该是.swiper-item和swiper-item img 此处，不太明白，以后问清楚了来解释为什么

###再写ul对应的 swiper-wrap , 设置高度，高度应该*（照片张数+1），宽度，位置信息，left，top ，还有animation属性，参考上文的6属性

###还要设置水平属性，float:left，让照片从竖着的横起来

###animation属性下面就要写动画，如果是4张照片，就写（4+1）个，因为最后还要重新将第一张填上

### #swiper，应该写一个边框，border，然后宽，高，位置（relative）margin overflow：hidden，将除了div上的隐藏掉

