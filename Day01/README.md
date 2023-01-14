# Node.js Day01
<hr style = "background-color: black;">
## Server
<b>Server</b> 는 네트워크를 통하여 클라이언트에게 정보나 서비스를 제공하는 컴퓨터 or 프로그램을 말함.

<div style =" width: 500px;height:200px;background-color: #d2d2d2; display: flex; align-items: center; justify-content: space-evenly">
    <div>client</div>
        <div>
            <p>------req------></p>
            <p><-----res-------</p>
        </div>
    <div>server</div>
</div>

우리가 웹이나 앱을 사용할 때 클라이언트가 서버에 어떠한 <b>요청(request)</b>을 보내면 <b>응답(response)</b>을 하는 것이 서버의 역할이다.
또한 이러한 서비스를 이용할 때 클라이언트의 데이터(ID,Password, Data)와 서비스 데이터가 생성된다. 이 데이터를 어디엔가 저장호고, 그 곳에서 클라이언트로 데이터를 받아와야한다. 이것이 바로 서버이다.

## Event Driven
Event Driven 란 이벤트가 발생할 때 미리 저장해둔 작업을 수행하는 방식을 말한다.
대표적인 이벤트로는 클릭이나 네트워크 요청 등이 있다.
<b>Event Driven 시스템에서는 특정 이벤트가 발생할 때 무엇을 할지 미리 등록해두어야 한다.</b>
이를 <b>Event Listener</b> 에 <b>Callback</b> 함수를 등록한다고 표현한다.
Node.js 도 이러한 방식으로 동작하며, 이벤트가 발생하면 이벤트 리스너에 등록해 둔 콜백 함수를 호출한다. 발생한 이벤트가 없거나 발생했던 이벤트를 모두 처리하면, **노드는 다음 이벤트가 발생할 때 까지 기다린다.**

<div style =" width: 500px;height:200px;background-color: #d2d2d2; display: flex; align-items: center; justify-content: space-evenly">
    <div><b>System</b></div>
        <div>
            <p>---------<b>2.이벤트 발생</b>----------------></p>
            <p><--------<b>3. 등록된 콜백 함수 호출</b>-------</p>
        </div>
    <div><p><b>Event Listener</b></p><p>1. 이벤트 리스너에<br>콜백 함수 등록</p></div>
</div>