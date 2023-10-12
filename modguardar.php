<?php

include('conexion.php');
/* echo $_POST ['postDNI']; */

$query="INSERT INTO `personas`(`dni`, `nombre`, `apellido`, `fec_nac`) VALUES ('".$_POST["postDNI"]."','".$_POST["postNOMBRE"]."','".$_POST["postAPELLIDO"]."','".$_POST["postFEC_NAC"]."')";
$res=mysqli_query($con,$query);

if ($res) {
    echo 'ok';
} else {
    echo 'error';
}

?>