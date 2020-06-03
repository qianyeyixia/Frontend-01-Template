# 每周总结可以写在这里

## 课堂练习

写出选择器优先级

div#a.b.c[id=x]   [0,1,3,1]

#a:not(#b) [0,2,0,0]

#.a [0,0,1,0]

div.a [0,0,1,1]

## 选择器优先级

类型选择器 < 类选择器 < id选择器 < 通配选择器 |关系选择符



## 排版

### 盒模型

margin
padding
border
width
box-sizing

### 文档流
从左到右， 从上到下

float 破坏文档流排列


> +inline 属性
flex inline-flex
table inline-table
grid inline-grid
block inline-block
inline
run-in

> flex 弹性盒子布局