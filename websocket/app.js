window.onload = function() {

    // Get references to elements on the page.
    let form = document.getElementById('message-form');
    let messageField = document.getElementById('message');
    let messagesList = document.getElementById('messages');
    let socketStatus = document.getElementById('status');
    let closeBtn = document.getElementById('close');

    // The rest of the code in this tutorial will go here...

    let socket = new WebSocket('ws://echo.websocket.org');
    socket.onopen = function(event) {
        // console.log('state is: ' + socket.readyState);
        socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;
        socketStatus.className = 'open';
    };

    socket.onerror = function(error) {
        console.log('Websocket error: ' + error)
    };

    form.onsubmit = function(e){
        e.preventDefault();

        let message = messageField.value;
        socket.send(message);

        messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message + '</li>';
        messageField.value = '';

        return false
    };

    socket.onmessage = function(event) {
        let message = event.data;
        messagesList.innerHTML += '<li class="received"><span>Received:</span>' + message + '</li>';
    };

    socket.onclose = function(event) {
        socketStatus.innerHTML = 'Disconnected from WebSocket';
        socketStatus.className = 'closed';
    };

    closeBtn.onclick = function(e) {
        e.preventDefault();
        socket.close();

        return false;
    }

};