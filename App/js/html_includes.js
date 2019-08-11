/*
	R3ditor - html_includes.js
	Por mitosan/mscore/misto_quente/mscorehdr
	Help me - please
*/

// Saves
var DIALOG_SELECT_HP = '<font class="titulo">Alterar HP</font><br>HP atual: <font id="lbl-exchange-HP">???</font><br>Alterar HP para: <input type="number" id="ex-HP-id" class="item-select-mod" min="0" max="200" step="1" placeholder="200">';
var DIALOG_SELECT_IGT = '<font class="titulo">Alterar IGT (In-Game Time)</font><br>Tempo Atual: <font id="lbl-exchange-IGT">???</font><br>Alterar IGT Para: <input type="number" class="item-select-mod" style="width: 100px;" id="ex-IGT-HH" min="0" max="23" step="1" value="" placeholder="Hora (HH)"> : <input type="number" class="item-select-mod" style="width: 100px;" id="ex-IGT-MM" min="0" max="59" step="1" value="" placeholder="Minuto (MM)"> : <input type="number" class="item-select-mod" style="width: 100px;" id="ex-IGT-SS" min="0" max="59" step="1" value="" placeholder="Segundo (SS)">';
var DIALOG_SELECT_ITEM = '<font class="titulo">Alterar Item</font><br>Item Atual: <font id="lbl-exchange-item">???</font><br>Item: <select id="ex-item-id" class="item-select-mod"><option value="00">(00) - Slot Vazio</option><option value="01">(01) - Combat Knife</option><option value="02">(02) - Sigpro SP 2009 handgun</option><option value="03">(03) - Beretta M92F handgun, custom S.T.A.R.S edition</option><option value="04">(04) - Shotgun Benelli M3S</option><option value="05">(05) - Smith & Wesson M629C .44-caliber magnum revolver</option><option value="06">(06) - Hk-p Grenade launcher com balas comuns</option><option value="07">(07) - Hk-p Grenade launcher com balas de fogo</option><option value="08">(08) - Hk-p Grenade launcher com balas de �cido</option><option value="09">(09) - Hk-p Grenade launcher com balas de gelo</option><option value="0a">(0a) - M66 Rocket launcher</option><option value="0b">(0b) - Gatling gun</option><option value="0c">(0c) - Mine thrower</option><option value="0d">(0d) - STI Eagle 6.0</option><option value="0e">(0e) - M4A1 Assault rifle em modo Autom�tico</option><option value="0f">(0f) - M4A1 Assault rifle em modo Manual</option><option value="10">(10) - Western Custom M37 lever action shotgun</option><option value="11">(11) - Sigpro SP 2009 com balas melhoradas</option><option value="12">(12) - Beretta M92F customizada com balas melhoradas</option><option value="13">(13) - Shotgun Benelli M3S com balas melhoradas</option><option value="14">(14) - Mine thrower com balas melhoradas</option><option value="15">(15) - Handgun bullets (9x19 parabellum)</option><option value="16">(16) - Magnum bullets (.44-caliber)</option><option value="17">(17) - Shotgun shells</option><option value="18">(18) - Grenade rounds</option><option value="19">(19) - Flame rounds</option><option value="1a">(1a) - Acid rounds</option><option value="1b">(1b) - Freeze rounds</option><option value="1c">(1c) - Minethrower rounds</option><option value="1d">(1d) - Assault rifle clip (5.56 NATO rounds)</option><option value="1e">(1e) - Enhanced handgun bullets</option><option value="1f">(1f) - Enhanced shotgun shells</option><option value="20">(20) - First aid spray</option><option value="21">(21) - Erva Verde</option><option value="22">(22) - Erva Azul</option><option value="23">(23) - Erva Vermelha</option><option value="24">(24) - 2x Ervas Verdes</option><option value="25">(25) - Mix de Ervas Verdes + Azuis</option><option value="26">(26) - Mix de Ervas Verdes + Vermelhas</option><option value="27">(27) - Mix de tr�s Ervas Verdes</option><option value="28">(28) - Mix de 2x Ervas Verdes + Erva Azul</option><option value="29">(29) - Mix de todas as ervas</option><option value="2a">(2a) - Kit de First aid spray</option><option value="2b">(2b) - Square crank</option><option value="2c">(2c) - (BOTU) Medalh�o na cor Vermelha</option><option value="2d">(2d) - (BOTU) Medalh�o na cor Azul</option><option value="2e">(2e) - (BOTU) Medalh�o na cor Dourada</option><option value="2f">(2f) - Jill\'s S.T.A.R.S card</option><option value="30">(30) - (BOTU) Lata de �leo "Giga Oil"</option><option value="31">(31) - Battery</option><option value="32">(32) - Fire hook</option><option value="33">(33) - Power cable</option><option value="34">(34) - Fuse</option><option value="35">(35) - (BOTU) Mangueira de inc�ndio cortada</option><option value="36">(36) - Oil Additive</option><option value="37">(37) - Brad Vickers\' card case</option><option value="38">(38) - Brad Vicker\' S.T.A.R.S card</option><option value="39">(39) - Machine oil</option><option value="3a">(3a) - Mixed oil</option><option value="3b">(3b) - (BOTU) Correntes</option><option value="3c">(3c) - Wrench</option><option value="3d">(3d) - Iron pipe</option><option value="3e">(3e) - (BOTU) Boca da mangueira de inc�ndio</option><option value="3f">(3f) - Fire hose</option><option value="40">(40) - Tape recorder</option><option value="41">(41) - Lighter oil</option><option value="42">(42) - Lighter (Fechado / Sem flu�do)</option><option value="43">(43) - Lighter (Aberto / Com flu�do)</option><option value="44">(44) - Green gem</option><option value="45">(45) - Blue gem</option><option value="46">(46) - Amber ball</option><option value="47">(47) - Obsidian ball</option><option value="48">(48) - Crystal ball</option><option value="49">(49) - (BOTU) Controle Remoto Sem Pilhas</option><option value="4a">(4a) - (BOTU) Controle Remoto Com Pilhas</option><option value="4b">(4b) - (BOTU) Pilhas Modelo AA</option><option value="4c">(4c) - Gold gear</option><option value="4d">(4d) - Silver gear</option><option value="4e">(4e) - Chronos gear</option><option value="4f">(4f) - Bronze book</option><option value="50">(50) - Bronze compass</option><option value="51">(51) - Vaccine medium</option><option value="52">(52) - Vaccine base</option><option value="53">(53) - Unknown Sigpro SP 2009 handgun</option><option value="54">(54) - Unknown Sigpro SP 2009 handgun</option><option value="55">(55) - Vaccine</option><option value="56">(56) - Unknown Sigpro SP 2009 handgun</option><option value="57">(57) - Unknown Sigpro SP 2009 handgun</option><option value="58">(58) - Medium base</option><option value="59">(59) - Eagle parts A</option><option value="5a">(5a) - Eagle parts B</option><option value="5b">(5b) - M37 parts A</option><option value="5c">(5c) - M37 parts B</option><option value="5d">(5d) - Unknown Sigpro SP 2009 handgun</option><option value="5e">(5e) - Chronos chain</option><option value="5f">(5f) - Rusted crank</option><option value="60">(60) - Card key</option><option value="61">(61) - Gun powder A</option><option value="62">(62) - Gun powder B</option><option value="63">(63) - Gun powder C</option><option value="64">(64) - Gun powder AA</option><option value="65">(65) - Gun powder BB</option><option value="66">(66) - Gun powder AC</option><option value="67">(67) - Gun powder BC</option><option value="68">(68) - Gun powder CC</option><option value="69">(69) - Gun powder AAA</option><option value="6a">(6a) - Gun powder AAB</option><option value="6b">(6b) - Gun powder BBA</option><option value="6c">(6c) - Gun powder BBB</option><option value="6d">(6d) - Gun powder CCC</option><option value="6e">(6e) - Infinite bullets</option><option value="6f">(6f) - Water sample</option><option value="70">(70) - System disk</option><option value="71">(71) - Dummy key</option><option value="72">(72) - Lockpick</option><option value="73">(73) - Warehouse (backdoor) key</option><option value="74">(74) - Sickroom key (room 402)</option><option value="75">(75) - Emblem (S.T.A.R.S) key</option><option value="76">(76) - (BOTU) Molho de chaves com quatro chaves</option><option value="77">(77) - Clock tower (bezel) key</option><option value="78">(78) - Clock tower (winder) key</option><option value="79">(79) - Chronos key</option><option value="7a">(7a) - Unknown Sigpro SP 2009 handgun</option><option value="7b">(7b) - Park (main gate) key</option><option value="7c">(7c) - Park (graveyard) key</option><option value="7d">(7d) - Park (rear gate) key</option><option value="7e">(7e) - Facility key (no barcode)</option><option value="7f">(7f) - Facility key (with barcode)</option><option value="80">(80) - Boutique key</option><option value="81">(81) - Ink ribbon</option><option value="82">(82) - Reloading tool</option><option value="83">(83) - Game inst. A</option><option value="84">(84) - Game inst. B</option><option value="85">(85) - (BOTU) Pote com solu��o ciana</option></select> Quantidade: <input type="number" class="item-select-mod" id="ex-item-quant" min="0" max="255" maxlength="3" minlength="1" placeholder="15"> Atributo: <select id="ex-item-attr" class="item-select-mod"><option value="00">Nenhum</option><option value="01">Muni��o restante na cor verde</option><option value="02">% da muni��o em verde</option><option value="03">Muni��o infinita na cor verde</option><option value="05">Muni��o restante na cor vermelho</option><option value="06">% da muni��o em vermelho</option><option value="07">Muni��o infinita na cor vermelha</option><option value="0d">Muni��o restante na cor azul</option><option value="0e">% da muni��o em azul</option><option value="0f">Muni��o infinita na cor azul</option><option value="16">Atributo Usado Pela M4A1 Assault Rifle da Jill / Carlos</option></select>';
var DIALOG_SELECT_ARMA = '<font class="titulo">Alterar arma (<font id="person-arma">???</font>)</font><br>Arma atual: <font id="lbl-exchange-arma">???</font><br>Nova arma: <select id="ex-arma-id" class="item-select-mod" style="width: 368px;"><option value="00">(00) Nenhuma arma</option><option value="01">(01) Combat Knife</option><option value="02">(02) Sigpro SP 2009 handgun</option><option value="03">(03) Beretta M92F handgun, custom S.T.A.R.S edition</option><option value="04">(04) Shotgun Benelli M3S</option><option value="05">(05) Smith & Wesson M629C .44-caliber magnum revolver</option><option value="06">(06) Hk-p Grenade launcher com balas comuns</option><option value="07">(07) Hk-p Grenade launcher com balas de fogo</option><option value="08">(08) Hk-p Grenade launcher com balas de �cido</option><option value="09">(09) Hk-p Grenade launcher com balas de gelo</option><option value="0a">(0a) M66 Rocket launcher</option><option value="0b">(0b) Gatling gun</option><option value="0c">(0c) Mine thrower</option><option value="0d">(0d) STI Eagle 6.0</option><option value="0e">(0e) M4A1 Assault rifle em modo Autom�tico</option><option value="0f">(0f) M4A1 Assault rifle em modo Manual</option><option value="10">(10) Western Custom M37 lever action shotgun</option><option value="11">(11) Sigpro SP 2009 com balas melhoradas</option><option value="12">(12) Beretta M92F customizada com balas melhoradas</option><option value="13">(13) Shotgun Benelli M3S com balas melhoradas</option><option value="14">(14) Mine thrower com balas melhoradas</option></select><br><br><u>IMPORTANTE</u>: Usar essa fun��o s� faz efeito caso a arma selecionada <u>estiver no invent�rio do personagem</u> e que a arma selecionada esteja <u>no mesmo slot que a arma anterior estava</u>.<br><br>(Ideal para alterar qual arma o Carlos estar� usando ap�s a Jill ser infectada pelo nemesis na Clock Tower)';
var DIALOG_SELECT_ROUPA = '<font class="titulo">Alterar Roupa</font><br>Roupa atual: <font id="lbl-exchange-roupas">???</font><br>Alterar roupa para: <select id="ex-roupa-id" class="item-select-mod"><option value="00">Roupas Normais</option><option value="01">Roupa de motoqueira</option><option value="02">Uniforme S.T.A.R.S</option><option value="03">Disco inferno</option><option value="04">Policial com minisaia</option><option value="05">Jill cosplay de Regina (Dino Crisis)</option><option value="06">Mini-saia azul com top preto e botas</option><option value="07">Roupa social</option></select>';
var DIALOG_SELECT_PERSON = '<font class="titulo">Alterar Personagem</font><br>Personagem Atual: <font id="lbl-exchange-person">???</font><br>Alterar Personagem Principal Para: <select id="ex-person-id" class="item-select-mod"><option value="00">Jill com roupa normal</option><option value="01">Jill com roupa normal + sidepack</option><option value="02">Jill com roupa de motoqueira</option><option value="03">Jill com uniforme da S.T.A.R.S</option><option value="04">Jill com roupa "Disco Inferno"</option><option value="05">Jill com roupa de policial com shortinho</option><option value="06">Jill com a roupa da regina (Dino Crisis)</option><option value="07">Jill com a roupa normal</option><option value="08">Carlos</option><option value="09">Mikhail</option><option value="0a">Nicholai</option><option value="0b">Brad Vickers</option><option value="0c">Dario</option><option value="0f">Tofu</option></select>';
var DIALOG_SELECT_POISON = '<font class="titulo">Alterar Status de Poison</font><br>Est� com Poison: <font id="lbl-exchange-poison">???</font><br>Novo Status: <select id="ex-poison-id" class="item-select-mod"><option value="8f">Envenenado</option><option value="00">Normal</option></select>';
var DIALOG_SELECT_EPILOGO = '<font class="titulo">Alterar Ep�logos</font><br>Ep�logos Desbloqueados: <font id="lbl-exchange-epilogues">???</font><br>Alterar n� de ep�logos desbloqueados para: <select id="ex-epilogues-id" class="item-select-mod"><option value="00">Nenhum</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">Todos</option></select><br><br><u>IMPORTANTE</u>: Para essa altera��o ter efeito, � necess�rio que voc� finalize o game pelo menos uma vez.';
var DIALOG_SELECT_SIDEPACK = '<font class="titulo">Alterar Sidepack (<font id="person-sidepack">???</font>)</font><br>Status: <font id="lbl-exchange-sidepack">???</font><br>Novo status: <select id="ex-sidepack-id" class="item-select-mod"><option value="0a">Obtido</option><option value="08">N�o Obtido</option></select>';
var DIALOG_SELECT_SAVECOUNT = '<font class="titulo">Alterar N� de Saves</font><br>Total de vezes salvas: <font id="lbl-exchange-savecount">???</font><br>Alterar numero de saves para: <input type="number" id="ex-savecount-id" class="item-select-mod" min="0" max="255" step="1" placeholder="0">';
var DIALOG_SELECT_DIFICULDADE = '<font class="titulo">Alterar Dificuldade</font><br>Dificuldade selecionada: <font id="lbl-exchange-dificuldade">???</font><br>Alterar dificuldade para: <select id="ex-dificuldade-id" class="item-select-mod"><option value="01">F�cil</option><option value="00">Dificil</option></select>';

// MSG
var DIALOG_MSG_END = 'Valor Final: <input type="number" class="item-select-mod" min="1" max="10" step="1" placeholder="00" id="msg-fim-id">';
var DIALOG_MSG_START = 'Velocidade do texto a ser exibido (de 1 at� 10): <input type="number" class="item-select-mod" min="1" max="10" step="1" placeholder="2" id="msg-comeco-id"><br>(Info: Quanto menor o numero for, mais r�pido o texto ser� escrito na tela)';
var DIALOG_MSG_EXECSE = 'SE ID: <input type="text" class="item-select-mod" placeholder="00" id="msg-execse-id">';
var DIALOG_MSG_ADDTEXT = '<textarea placeholder="Escreva a sua mensagem aqui!" id="msg-txt-toTrans" class="msg-txt-edit" style="width: 710px;"></textarea><div style="width:98%;"><center>Formata��o de Texto:</center><div class="menu-separador"></div>@ <font class="msg-legenda-sticky">- Enter</font><br>| <font class="msg-legenda-sticky">- Pausa</font><br>* <font class="msg-legenda-sticky">- Yes / No</font><br>{ <font class="msg-legenda-sticky">- Aspas Abindo</font><br>} <font class="msg-legenda-sticky">- Aspas Fechando</font><br>[ ] <font class="msg-legenda-sticky">- Formata��o: Texto Verde</font></div>';
var DIALOG_MSG_ADDCHAR = 'Selecione o Caracter: <select id="msg-char-id" class="item-select-mod"><option value="ea24">S.</option><option value="ea25">T.</option><option value="ea26">A.</option><option value="ea27">R.</option><option value="ea28">;</option></select>';
var DIALOG_MSG_NAMEITEM = 'Item Hex: <input type="text" class="item-select-mod" placeholder="00" id="msg-lblitem-id">';
var DIALOG_MSG_SHOWCAMERA = 'Camera ID: <input type="text" class="item-select-mod" placeholder="00" id="msg-cam-id">';

// RDT
var RDT_EDIT_MAP = '<option value="a4">Uptown Map</option><option value="a9">Police Station Map</option><option value="a5">Downtown Map</option><option value="a6">Clock Tower Map</option><option value="aa">Hospital Map</option><option value="a7">Park Map</option><option value="a8">Dead Factory Map</option>';
var RDT_EDIT_ITEM = '<option value="00">(00) - Slot Vazio</option><option value="01">(01) - Combat Knife</option><option value="02">(02) - Sigpro SP 2009 handgun</option><option value="03">(03) - Beretta M92F handgun, custom S.T.A.R.S edition</option><option value="04">(04) - Shotgun Benelli M3S</option><option value="05">(05) - Smith & Wesson M629C .44-caliber magnum revolver</option><option value="06">(06) - Hk-p Grenade launcher com balas comuns</option><option value="07">(07) - Hk-p Grenade launcher com balas de fogo</option><option value="08">(08) - Hk-p Grenade launcher com balas de �cido</option><option value="09">(09) - Hk-p Grenade launcher com balas de gelo</option><option value="0a">(0a) - M66 Rocket launcher</option><option value="0b">(0b) - Gatling gun</option><option value="0c">(0c) - Mine thrower</option><option value="0d">(0d) - STI Eagle 6.0</option><option value="0e">(0e) - M4A1 Assault rifle em modo Autom�tico</option><option value="0f">(0f) - M4A1 Assault rifle em modo Manual</option><option value="10">(10) - Western Custom M37 lever action shotgun</option><option value="11">(11) - Sigpro SP 2009 com balas melhoradas</option><option value="12">(12) - Beretta M92F customizada com balas melhoradas</option><option value="13">(13) - Shotgun Benelli M3S com balas melhoradas</option><option value="14">(14) - Mine thrower com balas melhoradas</option><option value="15">(15) - Handgun bullets (9x19 parabellum)</option><option value="16">(16) - Magnum bullets (.44-caliber)</option><option value="17">(17) - Shotgun shells</option><option value="18">(18) - Grenade rounds</option><option value="19">(19) - Flame rounds</option><option value="1a">(1a) - Acid rounds</option><option value="1b">(1b) - Freeze rounds</option><option value="1c">(1c) - Minethrower rounds</option><option value="1d">(1d) - Assault rifle clip (5.56 NATO rounds)</option><option value="1e">(1e) - Enhanced handgun bullets</option><option value="1f">(1f) - Enhanced shotgun shells</option><option value="20">(20) - First aid spray</option><option value="21">(21) - Erva Verde</option><option value="22">(22) - Erva Azul</option><option value="23">(23) - Erva Vermelha</option><option value="24">(24) - 2x Ervas Verdes</option><option value="25">(25) - Mix de Ervas Verdes + Azuis</option><option value="26">(26) - Mix de Ervas Verdes + Vermelhas</option><option value="27">(27) - Mix de tr�s Ervas Verdes</option><option value="28">(28) - Mix de 2x Ervas Verdes + Erva Azul</option><option value="29">(29) - Mix de todas as ervas</option><option value="2a">(2a) - Kit de First aid spray</option><option value="2b">(2b) - Square crank</option><option value="2c">(2c) - (BOTU) Medalh�o na cor Vermelha</option><option value="2d">(2d) - (BOTU) Medalh�o na cor Azul</option><option value="2e">(2e) - (BOTU) Medalh�o na cor Dourada</option><option value="2f">(2f) - Jill\'s S.T.A.R.S card</option><option value="30">(30) - (BOTU) Lata de �leo "Giga Oil"</option><option value="31">(31) - Battery</option><option value="32">(32) - Fire hook</option><option value="33">(33) - Power cable</option><option value="34">(34) - Fuse</option><option value="35">(35) - (BOTU) Mangueira de inc�ndio cortada</option><option value="36">(36) - Oil Additive</option><option value="37">(37) - Brad Vickers\' card case</option><option value="38">(38) - Brad Vicker\' S.T.A.R.S card</option><option value="39">(39) - Machine oil</option><option value="3a">(3a) - Mixed oil</option><option value="3b">(3b) - (BOTU) Correntes</option><option value="3c">(3c) - Wrench</option><option value="3d">(3d) - Iron pipe</option><option value="3e">(3e) - (BOTU) Boca da mangueira de inc�ndio</option><option value="3f">(3f) - Fire hose</option><option value="40">(40) - Tape recorder</option><option value="41">(41) - Lighter oil</option><option value="42">(42) - Lighter (Fechado / Sem flu�do)</option><option value="43">(43) - Lighter (Aberto / Com flu�do)</option><option value="44">(44) - Green gem</option><option value="45">(45) - Blue gem</option><option value="46">(46) - Amber ball</option><option value="47">(47) - Obsidian ball</option><option value="48">(48) - Crystal ball</option><option value="49">(49) - (BOTU) Controle Remoto Sem Pilhas</option><option value="4a">(4a) - (BOTU) Controle Remoto Com Pilhas</option><option value="4b">(4b) - (BOTU) Pilhas Modelo AA</option><option value="4c">(4c) - Gold gear</option><option value="4d">(4d) - Silver gear</option><option value="4e">(4e) - Chronos gear</option><option value="4f">(4f) - Bronze book</option><option value="50">(50) - Bronze compass</option><option value="51">(51) - Vaccine medium</option><option value="52">(52) - Vaccine base</option><option value="53">(53) - Unknown Sigpro SP 2009 handgun</option><option value="54">(54) - Unknown Sigpro SP 2009 handgun</option><option value="55">(55) - Vaccine</option><option value="56">(56) - Unknown Sigpro SP 2009 handgun</option><option value="57">(57) - Unknown Sigpro SP 2009 handgun</option><option value="58">(58) - Medium base</option><option value="59">(59) - Eagle parts A</option><option value="5a">(5a) - Eagle parts B</option><option value="5b">(5b) - M37 parts A</option><option value="5c">(5c) - M37 parts B</option><option value="5d">(5d) - Unknown Sigpro SP 2009 handgun</option><option value="5e">(5e) - Chronos chain</option><option value="5f">(5f) - Rusted crank</option><option value="60">(60) - Card key</option><option value="61">(61) - Gun powder A</option><option value="62">(62) - Gun powder B</option><option value="63">(63) - Gun powder C</option><option value="64">(64) - Gun powder AA</option><option value="65">(65) - Gun powder BB</option><option value="66">(66) - Gun powder AC</option><option value="67">(67) - Gun powder BC</option><option value="68">(68) - Gun powder CC</option><option value="69">(69) - Gun powder AAA</option><option value="6a">(6a) - Gun powder AAB</option><option value="6b">(6b) - Gun powder BBA</option><option value="6c">(6c) - Gun powder BBB</option><option value="6d">(6d) - Gun powder CCC</option><option value="6e">(6e) - Infinite bullets</option><option value="6f">(6f) - Water sample</option><option value="70">(70) - System disk</option><option value="71">(71) - Dummy key</option><option value="72">(72) - Lockpick</option><option value="73">(73) - Warehouse (backdoor) key</option><option value="74">(74) - Sickroom key (room 402)</option><option value="75">(75) - Emblem (S.T.A.R.S) key</option><option value="76">(76) - (BOTU) Molho de chaves com quatro chaves</option><option value="77">(77) - Clock tower (bezel) key</option><option value="78">(78) - Clock tower (winder) key</option><option value="79">(79) - Chronos key</option><option value="7a">(7a) - Unknown Sigpro SP 2009 handgun</option><option value="7b">(7b) - Park (main gate) key</option><option value="7c">(7c) - Park (graveyard) key</option><option value="7d">(7d) - Park (rear gate) key</option><option value="7e">(7e) - Facility key (no barcode)</option><option value="7f">(7f) - Facility key (with barcode)</option><option value="80">(80) - Boutique key</option><option value="81">(81) - Ink ribbon</option><option value="82">(82) - Reloading tool</option><option value="83">(83) - Game inst. A</option><option value="84">(84) - Game inst. B</option><option value="85">(85) - (BOTU) Pote com solu��o ciana</option></select>';
var RDT_EDIT_FILE = '<option value="a0">Clock Tower Poster Card</option><option value="9b">Photo A</option><option value="89">Marvin\'s Report</option><option value="8a">David\'s Memo</option><option value="96">Fax From Kendo</option><option value="87">Mercenary\'s Diary</option><option value="8b">City Guide</option><option value="9c">Photo B</option><option value="9d">Photo C</option><option value="8c">Reporter\'s Memo</option><option value="95">Mechanic\'s Memo</option><option value="97">Manager\'s Report</option><option value="88">Business Fax</option><option value="86">Dario\'s Memo</option><option value="8d">Operation Instruction</option><option value="8f">Art Picture Postercard</option><option value="8e">Mercenary\'s Pocketbook</option><option value="92">Director\'s Diary</option><option value="9f">Photo D</option><option value="98">Medical Instruction Manual</option><option value="9e">Photo E</option><option value="91">Written Order To The Supervisors</option><option value="90">Supervisor\'s Report</option><option value="99">Fax From H. Q.</option><option value="93">Manager\'s Diary</option><option value="94">Security Manual</option><option value="9a">Incinerator Manual</option><option value="a2">Classified Photo File</option>';