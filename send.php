<?php
if (isset($_POST['submit'])) {
    $name      = $_POST['name'];
    $email     = $_POST['email'];
    $message   = $_POST['message'];
    $no_wa     = $_POST['noWa'];
    header("location:https://api.whatsapp.com/send?phone=$no_wa&text=Aditya%20Webview%0A%0DNama:%20$name%0AEmail:%20$email%0APesan:%20$message");

}else {
    echo "
     <script>
     window.location=history.go(-1);
     </script>
     ";
}
    ?>