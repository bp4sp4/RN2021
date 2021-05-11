<h1>05/07<h1>
<h2>1. 어려웠던 부분</h2>
<pre>
<code>
    import React from 'react'
    ...
    ...
    ...
    AppRegistry.registerComponent(MyApp, () => Midterm);
</code>
</pre>
 <b>AppRegistry.registerComponent(앱이름, ()=> 시작 컴포넌트)</b>
 <h2>2. 구조분해할당</h2>
 [객체에서 변수를 재할당하는 방법]
<pre>
<code>
  const foobar = {
     foo:1000,
     bar:500
 }
 </pre>
</code>
-- 구조분해 할당 없이 변수명 재할당

 const woo = foobar.foo

-- 구조분해 할당을 이용하는 방법

<pre>
<code>
 const {foo:woo} = foobar
 console.log(woo) //1000
 console.log{foobar} // let basket = {foo. 1000, bar:500}
</pre>
</code>
-- React에서 자주 사용되는 구조분해 할당
<pre>
<code>
 this.state= (
     foo:100,
     bar:200
 }
 const(foo,bar) = this.state;
</pre>
</code>
<h1>04/02<h1>

React Native

