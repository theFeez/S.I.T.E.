{"filter":false,"title":"index.php","tooltip":"/index.php","undoManager":{"mark":33,"position":33,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":19},"action":"insert","lines":[" dirname(__FILE__);"],"id":1,"ignore":true}],[{"start":{"row":0,"column":19},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":1,"column":1},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":2,"column":1},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":19},"action":"remove","lines":[" dirname(__FILE__);"],"id":5,"ignore":true},{"start":{"row":0,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["<?php","$dbName =  dirname(__FILE__).\"data/fpdb/Athletics.mdb\";","echo $dbName;","if (!file_exists($dbName)) {","    die(\"Could not find database file.\");","}","$db = new PDO(\"odbc:DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=$dbName; Uid=; Pwd=;\");","","","?>"]}],[{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"insert","lines":["/"],"id":6}],[{"start":{"row":12,"column":2},"end":{"row":12,"column":3},"action":"insert","lines":["/"],"id":7}],[{"start":{"row":12,"column":3},"end":{"row":12,"column":4},"action":"insert","lines":["p"],"id":8}],[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["e"],"id":9}],[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["n"],"id":10}],[{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":["i"],"id":11}],[{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"insert","lines":["s"],"id":12}],[{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"remove","lines":["s"],"id":13}],[{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"remove","lines":["i"],"id":14}],[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"remove","lines":["n"],"id":15}],[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"remove","lines":["e"],"id":16}],[{"start":{"row":12,"column":3},"end":{"row":12,"column":4},"action":"remove","lines":["p"],"id":17}],[{"start":{"row":12,"column":2},"end":{"row":12,"column":3},"action":"remove","lines":["/"],"id":18}],[{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"remove","lines":["/"],"id":19}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"remove","lines":[" "],"id":20}],[{"start":{"row":11,"column":1},"end":{"row":12,"column":0},"action":"remove","lines":["",""],"id":21}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"remove","lines":[" "],"id":22}],[{"start":{"row":10,"column":1},"end":{"row":11,"column":0},"action":"remove","lines":["",""],"id":23}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"remove","lines":[" "],"id":24}],[{"start":{"row":9,"column":2},"end":{"row":10,"column":0},"action":"remove","lines":["",""],"id":25}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["/"],"id":26}],[{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["/"],"id":27}],[{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["p"],"id":28}],[{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":["n"],"id":29}],[{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"remove","lines":["n"],"id":30}],[{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":["e"],"id":31}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["n"],"id":32}],[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["i"],"id":33}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["s"],"id":34}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["\""],"id":46}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["\""],"id":46}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["t"],"id":47}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["s"],"id":48}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["e"],"id":49}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":12},"action":"remove","lines":["$dbName"],"id":50},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"remove","lines":["// "],"id":51}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "],"id":52},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":7},"end":{"row":7,"column":7},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":91,"mode":"ace/mode/php"}},"timestamp":1460824188000,"hash":"af03de9531443a26efe7825ce8cdf719b695b84c"}