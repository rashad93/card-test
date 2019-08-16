<?php

header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE,OPTIONS");
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");

$_POST = json_decode($rest_json, true);

if( isset($_POST['player']) && !empty($_POST['player']) ){
	
	// init final data array
	$jsondata = array();
	// init cardpool which total up to 52
	$cardsuits = ['S', 'H', 'D', 'C'];
	$cardnumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'X', 'J', 'Q', 'K'];
	$cardspool = array();
	foreach($cardsuits as $cardsuit){
		foreach($cardnumbers as $cardnumber){
			
			$finalcard = $cardsuit.'-'.$cardnumber;
			array_push($cardspool, $finalcard);
		}
		
	}
	
	// check for number of players
	$players = $_POST['player'];
	$cardperplayer = floor(52/$players);
	
	// if number of players are more than 52
	if( $cardperplayer < 1 ){
		$newplayers = 52;
		$newcardperplayer = 1 ;
		for ($x = 0; $x<$newplayers; $x++) {
			$firstarray = array();
			for($i=0; $i<$newcardperplayer; $i++ ){
				
				$value = array_rand($cardspool);
				array_push($firstarray, $cardspool[$value]);	
				unset($cardspool[$value]);
				
			}	
			$firstarray = implode(',', $firstarray);
			$b = $x+1;
			$secondarray = array();
			$secondarray['id'] = $b;
			$secondarray['data'] = $firstarray;
			array_push($jsondata,$secondarray);
			
			}
		
		echo json_encode($jsondata);
		//http_response_code(406);
		
	}else{
		for ($x = 0; $x<$players; $x++) {
			$firstarray = array();
			for($i=0; $i<$cardperplayer; $i++ ){
				
				$value = array_rand($cardspool);
				array_push($firstarray, $cardspool[$value]);	
				unset($cardspool[$value]);
				
			}	
			$firstarray = implode(',', $firstarray);
			$b = $x+1;
			$secondarray = array();
			$secondarray['id'] = $b;
			$secondarray['data'] = $firstarray;
			array_push($jsondata,$secondarray);
			
		}
		
		// check if cardspool is empty, if not then distribute the remaining cards starting from the first player until the pool is empty
		if( count($cardspool) !== 0 ){
			$count = count($cardspool);
			for($c = 0 ; $c<$count; $c++){
				$value = array_rand($cardspool);
				$testvar = explode(',',$jsondata[$c]['data']);
				array_push($testvar, $cardspool[$value]);
				$jsondata[$c]['data'] = implode(',',$testvar);
				unset($cardspool[$value]);
			}
			
		}
		
		echo json_encode($jsondata);
		
	}
}
	
	

?>
