<?php

/* echo 'hola soy resp'; */

include('conexion.php');

$query="SELECT * FROM `personas` WHERE 1";
$res=mysqli_query($con,$query);    //variable que acumula datos

$json=array();
while($row=mysqli_fetch_array($res)) {
    $json[]=array(
    'pk'=> $row ["pkpersona"], 
    'dni'=> $row ["dni"],
    'nombre'=> $row ["nombre"],
    'apellido'=> $row ["apellido"],
    'fec'=> $row ["fec_nac"]);
    
    
    /*json= array indexado con array asociativos adentro*/
};

$json_string=json_encode($json);
echo $json_string;



?>