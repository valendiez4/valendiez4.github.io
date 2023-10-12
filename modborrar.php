<?php
include('conexion.php');
$id=$_POST['id_borrar'];
$query="DELETE FROM `personas` WHERE pkpersona= $id";
$res=mysqli_query($con,$query);


if ($res) {
    echo 'ok';
} else {
    echo 'error';
}

?>







