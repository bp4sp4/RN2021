<h1>05/21</h1>
<h2>프로필 카트위치 지정</h2><br>
<h2>item의 수평 정렬 alignItems속성을 이용</h2>

<pre>
<code>
cardImageContainer: {
alignItems: 'center',    
backgroundColor: 'white',
borderWidth: 3,
borderColor: 'black',
width: 120,
height: 120,
borderRadius: 60,
###marginTop: 30,###    
###paddingTop: 15###    
}
</code>
</pre>
<h2>font family지정하기</h2>
<p>1. css와는 다르게 fontFamily 속성에 여러 개의 폰트를 지정할 수 없다.</p>

<p>2. iOS에서는 monospace	옵션을 사용할 수 없으며,사용할 경우 오류가 발생한다.	
      “Unrecognized font family ‘monospace’”</p>

<p>안드로이드에서는 지원하지 않는 폰트가 지정되면 기본 폰트를 사용한다.</p>

<p>기본 폰트 외에 다른 폰트를 사용하려면 Platform	컴포넌트를 이용한다.</p>
<pre>
<code>
    .Platform.select({      
      ios: {
        fontFamily: 'American Typewriter'
    },
    android: {
        fontFamily: 'monospace'
    }
</code>
</pre>




<h1>05/14</h1>

<h2>border 속성</h2>
<p>1. border속성은 크게 borderColor, borderRadius, borderStyle, borderWidth 4가지가있다.</p>
<p>2. 방향은 top부터 시계방향으로 right, bottom,	left순으로 지정한다.

<h2>margin padding 으로 컴포넌트 위치 지정</h2>
<p>1. margin을 이용해서 컴포넌트 사이의 상대적 위치를 정의한다.</p>
<p>2. padding을 이용해서 컴포넌트 테두리로 부터 컴포넌트의 상대적 위치를 정의한다.</p> 

<h2>position을 이용해 컴포넌트 배치하기</h2>
<p>1. position이 absolute로 지정되면,	해당 요소의 위치는 부모요소의 위치를 기준으로 배
치된다.</p>
<p>2. position 속성에는 relative(상대값:기본값)과 absolute(절대값)가 있다.</p>
<p>3. css의 static, fixed는 지원하지 않는다.</p><br>
<pre>
<code>

A, B, C: View style={styles.row}>
D: View style={[styles.tinyExample, {position: 'absolute', right: 0, bottom: 0}]}>
E: Example style={{position: 'absolute', right: 0, bottom: 0}}>
row: {

flex: 1,
flexDirection: ‘row’
},
</code>
</pre>

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

