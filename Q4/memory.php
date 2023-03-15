<?php
$name = $_GET['name'];
$radio_value = $_GET['radio'];
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>Memory (TP noté APP3)</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="css/style.css" rel="stylesheet" type="text/css" media="screen">
  </head>
  <body>
  <div class="container">
  <h1 class="title"> <?php echo $name; ?> </h1>

  <div id="main">
  <table id="board">
      <tbody>
        <?php
        $taillePlateau  = substr($radio_value, -1);
        for ($i = 0 ; $i < 2; $i++){  
          echo '<tr class="board_row">'; 
          for ($j = 0 ; $j < $taillePlateau; $j++){
            echo '<td class="board_cell" id="cell-'.$i.'.'.$j.'"><img onclick="click_card(this)" src="img/cachee.png" row='.$i.' col='.$j.' class="board_image" id="img-'.$i.'.'.$j.'"></td>';
          }
          echo '</tr>';
        }
    ?>
      </tbody>
    </table>
    <div style="visibility: hidden;" id="countdown_full">
      <div id="countdown"></div>
    </div>
    <script type="text/javascript">
      deal_cards(4);
    </script>

  </div>
</div>

  </body>
</html>

