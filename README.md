# router-history
测试前端路由history的使用方法

<h1>h5的history关于前端路由用到了3个新属性</h1>
1. histroy.pushState(data,title,url)
2. histroy.replaceState(data,title,url)
3. popstate事件

点击下面的两个数字，会看到浏览器url的跳转，同时看到数字的修改，按下后退前进，都可以进行回到上一个状态;

每次点击，都会将浏览器当前的url以及一些data通过pushState进行保存，这样，在前进后退的时候可以看到url的改变;

主要作用就是解决单页应用中无法进行保存状态的问题。这样，通过url的更改，可以在popstate事件中对原有元素进行还原（通过传递的data）;

[demo](http://blog.xiaoboma.com/router-history)
