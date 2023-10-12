<?php
include('conexion.php');

$query="SELECT * FROM `personas` WHERE `nombre` LIKE '%".$_POST["dato"]."%'";
$res=mysqli_query($con,$query);    //variable que acumula datos


while($row=mysqli_fetch_array($res)){
    echo '<tr><td>'.$row['pkpersona'].'</td>
    <td>'.$row['dni'].'</td> 
    <td>'.$row['nombre'].'</td>
    <td>'.$row['apellido'].'</td>
    <td>'.$row['fec_nac'].'</td>
    </tr>'; 

};


?>