<!DOCTYPE html>
<html>
<head>
<title>LeadBoost AI Chat</title>
<style>

body{
font-family: Arial;
background:#f5f5f5;
}

#chat{
width:400px;
margin:50px auto;
background:white;
border-radius:10px;
padding:20px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
}

#messages{
height:300px;
overflow-y:scroll;
border:1px solid #ddd;
padding:10px;
margin-bottom:10px;
}

input{
width:75%;
padding:10px;
}

button{
padding:10px;
}

</style>
</head>

<body>

<div id="chat">

<h2>LeadBoost Assistant</h2>

<div id="messages"></div>

<input id="userInput" placeholder="Type message..." />
<button onclick="sendMessage()">Send</button>

</div>

<script src="script.js"></script>

</body>
</html>
