# Node.js Day02
<hr style = "background-color: black;">

## Event Loop
**Event Loop** 란  여러 이벤트가 동시에 발생했을 때 어떤 순서로 콜백 함수를 호출할지를 **Event Loop** 가 판단한다. Node.js 는 JavaScript 코드의 맨 위부터 한 줄씩 실행한다. 함수 호출 부분이 발견되면 호출한 함수를 **호출스택(Call Stack)** 에 넣는다.
```js
function a(){
    b();
    console.log("first");
}

function b(){
    c();
    console.log("second");
}

function c(){
    console.log("third");
}

a();
```

위 코드의 실행 순서는 a 함수가 먼저 호출되고, b 함수가 호출도니 뒤, 마지막으로 c 함수가 호출된다. 실행은 호출된 순서와 반대로 실행이 완료된다.
```js
01 third
02 second
03 first
04 anoymous
```
<span style="color: #d1d1d1">_*anymous 함수는 처음 실행 시의 전역 컨텍스트(global contenxt) 를 의미._</span>

정리하자면 **Event Loop** 는 이벤트 발생 시 호출한 콜백 함수들을 관리하고, 호출된 콜백 함수의 실행 순서를 결정하는 역할은 한다고 볼 수 있다. 이 반복은 노드가 종료될 때까지 이벤트 처리를 위한 작업을 반복하므로 **Loop** 라고 부른다.
