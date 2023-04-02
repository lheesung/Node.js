# Node.js Day08
<hr style = "background-color: black;">

## AJAX
<b>AJAX<span style="color: grey;">(Asynchronous Js And XML)</span></b> 는 비동기적 웹 서비스를 개발할때 사용되는 기법이다. AJAX 의 X 는 XML 을 뜻하기는 하지만 요즘은 XML 대신 JSON 을 더 많이 사용한다. AJAX 는 한 마디로 페이지의 이동 없이 서버의 요청을 보내고 응답을 받는 기술이라고 할 수 있다.
보통 AJAX 요청은 jQuery 혹은 axios 와 같은 라이브러리를 이용한다(대개의 경우 axios를 사용).
<div style="background: #d2d2d2;color: black; padding: 5px">index.html</div>
```html
<sript src="https://unpkg.com/axios/dist/axios.min.js"></sript>

<script>
    // reference: https://unpkg.com/browse/axios@1.2.3/dist/
</script>
```

<div style="background: #d2d2d2;color: black; padding: 5px">app.js</div>

```js
axios.get(/*요청을 보낼 주소*/)
    .then((result) => {
        console.log(result);
        console.log(result.data);
    })
    .catch((error) => {
        console.error(error);
    });
```

<div style="background: #d2d2d2;color: black; padding: 5px">app.js (await 방식)</div>

```js
(async () => {
    try{
        const answer = await axios.get(/*요청을 보낼 주소*/);
        console.log(answer);
        console.log(answer.data);
    }
    catch (error){
        console.error(error);
    }
})();
```

<div style="background: #d2d2d2;color: black; padding: 5px">app.js (Post 방식의 요청)</div>

```js
(async () => {
    try{
        const answer = await axios.post(/*요청을 보낼 주소*/, {
            id: 'lheesung',
            age: 18,
        });
        console.log(answer);
        console.log(answer.data);
    }
    catch(error){
        console.error(error);
    }
})();
```