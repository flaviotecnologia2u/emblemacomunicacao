var OxO4f80=["","removeNode","parentNode","firstChild","nodeName","TABLE","length","Can\x27t Get The Position ?","Map","RowCount","ColCount","rows","cells","Unknown Error , pos ",":"," already have cell","rowSpan","colSpan","Unknown Error , Unable to find bestpos","inp_cellspacing","inp_cellpadding","inp_id","inp_border","inp_bgcolor","inp_bordercolor","sel_rules","inp_collapse","inp_summary","btn_editcaption","btn_delcaption","btn_insthead","btn_instfoot","inp_class","inp_width","sel_width_unit","inp_height","sel_height_unit","sel_align","sel_textalign","sel_float","inp_tooltip","onclick","tHead","tFoot","caption","innerHTML","innerText","Unable to delete the caption. Please remove it in HTML source.","display","style","none","disabled","value","cellSpacing","cellPadding","id","border","borderColor","backgroundColor","bgColor","checked","borderCollapse","collapse","rules","summary","className","width","options","selectedIndex","height","align","styleFloat","cssFloat","textAlign","title","bordercolor","0","%","class","CaptionTable"];function ParseFloatToString(Ox1b){var Ox84=parseFloat(Ox1b);if(isNaN(Ox84)){return OxO4f80[0];} ;return Ox84+OxO4f80[0];} ;function Element_RemoveNode(element,Ox3ee){if(element[OxO4f80[1]]){element.removeNode(Ox3ee);return ;} ;var p=element[OxO4f80[2]];if(!p){return ;} ;if(Ox3ee){p.removeChild(element);return ;} ;while(true){var Ox135=element[OxO4f80[3]];if(!Ox135){break ;} ;p.insertBefore(Ox135,element);} ;p.removeChild(element);} ;function Table_GetTable(Ox3a){for(;Ox3a!=null;Ox3a=Ox3a[OxO4f80[2]]){if(Ox3a[OxO4f80[4]]==OxO4f80[5]){return Ox3a;} ;} ;return null;} ;function Table_GetCellPositionFromMap(Ox3e7,Ox3ec){for(var Oxbf=0;Oxbf<Ox3e7[OxO4f80[6]];Oxbf++){var Ox3ea=Ox3e7[Oxbf];for(var Oxf1=0;Oxf1<Ox3ea[OxO4f80[6]];Oxf1++){if(Ox3ea[Oxf1]==Ox3ec){return {rowIndex:Oxbf,cellIndex:Oxf1};} ;} ;} ;throw ( new Error(-1,OxO4f80[7]));} ;function Table_GetCellMap(Ox3f2){return Table_CalculateTableInfo(Ox3f2)[OxO4f80[8]];} ;function Table_GetRowCount(Ox3a){return Table_CalculateTableInfo(Ox3a)[OxO4f80[9]];} ;function Table_GetColCount(Ox3a){return Table_CalculateTableInfo(Ox3a)[OxO4f80[10]];} ;function Table_CalculateTableInfo(Ox3a){var Ox3f2=Table_GetTable(Ox3a);var Ox3fc=Ox3f2[OxO4f80[11]];for(var Oxae=Ox3fc[OxO4f80[6]]-1;Oxae>=0;Oxae--){var Ox3fd=Ox3fc.item(Oxae);if(Ox3fd[OxO4f80[12]][OxO4f80[6]]==0){Element_RemoveNode(Ox3fd,true);continue ;} ;} ;var Ox3fe=Ox3fc[OxO4f80[6]];var Ox3ff=0;var Ox400= new Array(Ox3fc.length);for(var Ox401=0;Ox401<Ox3fe;Ox401++){Ox400[Ox401]=[];} ;function Ox402(Oxae,Ox135,Ox3ec){while(Oxae>=Ox3fe){Ox400[Ox3fe]=[];Ox3fe++;} ;var Ox403=Ox400[Oxae];if(Ox135>=Ox3ff){Ox3ff=Ox135+1;} ;if(Ox403[Ox135]!=null){throw ( new Error(-1,OxO4f80[13]+Oxae+OxO4f80[14]+Ox135+OxO4f80[15]));} ;Ox403[Ox135]=Ox3ec;} ;function Ox404(Oxae,Ox135){var Ox403=Ox400[Oxae];if(Ox403){return Ox403[Ox135];} ;} ;for(var Ox401=0;Ox401<Ox3fc[OxO4f80[6]];Ox401++){var Ox3fd=Ox3fc.item(Ox401);var Ox405=Ox3fd[OxO4f80[12]];for(var Ox406=0;Ox406<Ox405[OxO4f80[6]];Ox406++){var Ox3ec=Ox405.item(Ox406);var Ox407=Ox3ec[OxO4f80[16]];var Ox408=Ox3ec[OxO4f80[17]];var Ox403=Ox400[Ox401];var Ox409=-1;for(var Ox40a=0;Ox40a<Ox3ff+Ox408+1;Ox40a++){if(Ox407==1&&Ox408==1){if(Ox403[Ox40a]==null){Ox409=Ox40a;break ;} ;} else {var Ox40b=true;for(var Ox40c=0;Ox40c<Ox407;Ox40c++){for(var Ox40d=0;Ox40d<Ox408;Ox40d++){if(Ox404(Ox401+Ox40c,Ox40a+Ox40d)!=null){Ox40b=false;break ;} ;} ;} ;if(Ox40b){Ox409=Ox40a;break ;} ;} ;} ;if(Ox409==-1){throw ( new Error(-1,OxO4f80[18]));} ;if(Ox407==1&&Ox408==1){Ox402(Ox401,Ox409,Ox3ec);} else {for(var Ox40c=0;Ox40c<Ox407;Ox40c++){for(var Ox40d=0;Ox40d<Ox408;Ox40d++){Ox402(Ox401+Ox40c,Ox409+Ox40d,Ox3ec);} ;} ;} ;} ;} ;var Ox27={};Ox27[OxO4f80[9]]=Ox3fe;Ox27[OxO4f80[10]]=Ox3ff;Ox27[OxO4f80[8]]=Ox400;for(var Oxae=0;Oxae<Ox3fe;Oxae++){var Ox403=Ox400[Oxae];for(var Ox135=0;Ox135<Ox3ff;Ox135++){} ;} ;return Ox27;} ;var inp_cellspacing=Window_GetElement(window,OxO4f80[19],true);var inp_cellpadding=Window_GetElement(window,OxO4f80[20],true);var inp_id=Window_GetElement(window,OxO4f80[21],true);var inp_border=Window_GetElement(window,OxO4f80[22],true);var inp_bgcolor=Window_GetElement(window,OxO4f80[23],true);var inp_bordercolor=Window_GetElement(window,OxO4f80[24],true);var sel_rules=Window_GetElement(window,OxO4f80[25],true);var inp_collapse=Window_GetElement(window,OxO4f80[26],true);var inp_summary=Window_GetElement(window,OxO4f80[27],true);var btn_editcaption=Window_GetElement(window,OxO4f80[28],true);var btn_delcaption=Window_GetElement(window,OxO4f80[29],true);var btn_insthead=Window_GetElement(window,OxO4f80[30],true);var btn_instfoot=Window_GetElement(window,OxO4f80[31],true);var inp_class=Window_GetElement(window,OxO4f80[32],true);var inp_width=Window_GetElement(window,OxO4f80[33],true);var sel_width_unit=Window_GetElement(window,OxO4f80[34],true);var inp_height=Window_GetElement(window,OxO4f80[35],true);var sel_height_unit=Window_GetElement(window,OxO4f80[36],true);var sel_align=Window_GetElement(window,OxO4f80[37],true);var sel_textalign=Window_GetElement(window,OxO4f80[38],true);var sel_float=Window_GetElement(window,OxO4f80[39],true);var inp_tooltip=Window_GetElement(window,OxO4f80[40],true);function insertOneRow(Ox501,Ox2e7){var Ox3fd=Ox501.insertRow(-1);for(var i=0;i<Ox2e7;i++){Ox3fd.insertCell();} ;} ;btn_insthead[OxO4f80[41]]=function btn_insthead_onclick(){if(element[OxO4f80[42]]){element.deleteTHead();} else {var Ox503=Table_GetColCount(element);var Ox504=element.createTHead();insertOneRow(Ox504,Ox503);} ;} ;btn_instfoot[OxO4f80[41]]=function btn_instfoot_onclick(){if(element[OxO4f80[43]]){element.deleteTFoot();} else {var Ox503=Table_GetColCount(element);var Ox506=element.createTFoot();insertOneRow(Ox506,Ox503);} ;} ;btn_editcaption[OxO4f80[41]]=function btn_editcaption_onclick(){var Ox508=element[OxO4f80[44]];if(Ox508!=null){var Ox177=editor.EditInWindow(Ox508.innerHTML,window);if(Ox177!=null&&Ox177!==false){Ox508[OxO4f80[45]]=Ox177;} ;} else {var Ox508=element.createCaption();if(Browser_IsGecko()){Ox508[OxO4f80[45]]=Caption;} else {Ox508[OxO4f80[46]]=Caption;} ;} ;} ;btn_delcaption[OxO4f80[41]]=function btn_delcaption_onclick(){if(element[OxO4f80[44]]!=null){alert(OxO4f80[47]);} ;} ;UpdateState=function UpdateState_Table(){if(Browser_IsGecko()){btn_insthead[OxO4f80[45]]=element[OxO4f80[42]]?Delete:Insert;btn_instfoot[OxO4f80[45]]=element[OxO4f80[43]]?Delete:Insert;} else {btn_insthead[OxO4f80[46]]=element[OxO4f80[42]]?Delete:Insert;btn_instfoot[OxO4f80[46]]=element[OxO4f80[43]]?Delete:Insert;} ;if(element[OxO4f80[44]]!=null){if(Browser_IsGecko()){btn_editcaption[OxO4f80[45]]=Edit;} else {btn_editcaption[OxO4f80[46]]=Edit;} ;btn_editcaption[OxO4f80[49]][OxO4f80[48]]=OxO4f80[50];btn_delcaption[OxO4f80[51]]=false;} else {if(Browser_IsGecko()){btn_editcaption[OxO4f80[45]]=Insert;} else {btn_editcaption[OxO4f80[46]]=Insert;} ;btn_delcaption[OxO4f80[51]]=true;} ;} ;var t_inp_width=OxO4f80[0];var t_inp_height=OxO4f80[0];SyncToView=function SyncToView_Table(){inp_cellspacing[OxO4f80[52]]=element.getAttribute(OxO4f80[53])||OxO4f80[0];inp_cellpadding[OxO4f80[52]]=element.getAttribute(OxO4f80[54])||OxO4f80[0];inp_id[OxO4f80[52]]=element.getAttribute(OxO4f80[55])||OxO4f80[0];inp_border[OxO4f80[52]]=element.getAttribute(OxO4f80[56])||OxO4f80[0];inp_bordercolor[OxO4f80[52]]=element.getAttribute(OxO4f80[57])||OxO4f80[0];inp_bordercolor[OxO4f80[49]][OxO4f80[58]]=inp_bordercolor[OxO4f80[52]];inp_bgcolor[OxO4f80[52]]=element.getAttribute(OxO4f80[59])||element[OxO4f80[49]][OxO4f80[58]]||OxO4f80[0];inp_bgcolor[OxO4f80[49]][OxO4f80[58]]=inp_bgcolor[OxO4f80[52]];inp_collapse[OxO4f80[60]]=element[OxO4f80[49]][OxO4f80[61]]==OxO4f80[62];sel_rules[OxO4f80[52]]=element.getAttribute(OxO4f80[63])||OxO4f80[0];inp_summary[OxO4f80[52]]=element.getAttribute(OxO4f80[64])||OxO4f80[0];inp_class[OxO4f80[52]]=element[OxO4f80[65]];if(element.getAttribute(OxO4f80[66])){t_inp_width=element.getAttribute(OxO4f80[66]);} else {if(element[OxO4f80[49]][OxO4f80[66]]){t_inp_width=element[OxO4f80[49]][OxO4f80[66]];} ;} ;if(t_inp_width){inp_width[OxO4f80[52]]=ParseFloatToString(t_inp_width);for(var i=0;i<sel_width_unit[OxO4f80[67]][OxO4f80[6]];i++){var Ox2b=sel_width_unit[OxO4f80[67]][i][OxO4f80[52]];if(Ox2b&&t_inp_width.indexOf(Ox2b)!=-1){sel_width_unit[OxO4f80[68]]=i;break ;} ;} ;} ;if(element.getAttribute(OxO4f80[69])){t_inp_height=element.getAttribute(OxO4f80[69]);} else {if(element[OxO4f80[49]][OxO4f80[69]]){t_inp_height=element[OxO4f80[49]][OxO4f80[69]];} ;} ;if(t_inp_height){inp_height[OxO4f80[52]]=ParseFloatToString(t_inp_height);for(var i=0;i<sel_height_unit[OxO4f80[67]][OxO4f80[6]];i++){var Ox2b=sel_height_unit[OxO4f80[67]][i][OxO4f80[52]];if(Ox2b&&t_inp_height.indexOf(Ox2b)!=-1){sel_height_unit[OxO4f80[68]]=i;break ;} ;} ;} ;sel_align[OxO4f80[52]]=element[OxO4f80[70]];if(Browser_IsWinIE()){sel_float[OxO4f80[52]]=element[OxO4f80[49]][OxO4f80[71]];} else {sel_float[OxO4f80[52]]=element[OxO4f80[49]][OxO4f80[72]];} ;sel_textalign[OxO4f80[52]]=element[OxO4f80[49]][OxO4f80[73]];inp_tooltip[OxO4f80[52]]=element[OxO4f80[74]];} ;SyncTo=function SyncTo_Table(element){if(Browser_IsWinIE()){element[OxO4f80[57]]=inp_bordercolor[OxO4f80[52]];} else {element.setAttribute(OxO4f80[75],inp_bordercolor.value);} ;if(inp_bgcolor[OxO4f80[52]]){if(element[OxO4f80[49]][OxO4f80[58]]){element[OxO4f80[49]][OxO4f80[58]]=inp_bgcolor[OxO4f80[52]];} else {element[OxO4f80[59]]=inp_bgcolor[OxO4f80[52]];} ;} else {element.removeAttribute(OxO4f80[59]);} ;element[OxO4f80[49]][OxO4f80[61]]=inp_collapse[OxO4f80[60]]?OxO4f80[62]:OxO4f80[0];element[OxO4f80[63]]=sel_rules[OxO4f80[52]]||OxO4f80[0];element[OxO4f80[64]]=inp_summary[OxO4f80[52]];element[OxO4f80[65]]=inp_class[OxO4f80[52]];element[OxO4f80[53]]=inp_cellspacing[OxO4f80[52]];element[OxO4f80[54]]=inp_cellpadding[OxO4f80[52]];var Ox276=/[^a-z\d]/i;if(Ox276.test(inp_id.value)){alert(ValidID);return ;} ;element[OxO4f80[55]]=inp_id[OxO4f80[52]];if(inp_border[OxO4f80[52]]==OxO4f80[0]){element[OxO4f80[56]]=OxO4f80[76];} else {element[OxO4f80[56]]=inp_border[OxO4f80[52]];} ;if(inp_width[OxO4f80[52]]==OxO4f80[0]){element.removeAttribute(OxO4f80[66]);element[OxO4f80[49]][OxO4f80[66]]=OxO4f80[0];} else {try{t_inp_width=inp_width[OxO4f80[52]];if(sel_width_unit[OxO4f80[52]]==OxO4f80[77]){t_inp_width=inp_width[OxO4f80[52]]+sel_width_unit[OxO4f80[52]];} ;if(element[OxO4f80[49]][OxO4f80[66]]&&element[OxO4f80[66]]){element[OxO4f80[49]][OxO4f80[66]]=t_inp_width;element[OxO4f80[66]]=t_inp_width;} else {if(element[OxO4f80[49]][OxO4f80[66]]){element[OxO4f80[49]][OxO4f80[66]]=t_inp_width;} else {element[OxO4f80[66]]=t_inp_width;} ;} ;} catch(x){} ;} ;if(inp_height[OxO4f80[52]]==OxO4f80[0]){element.removeAttribute(OxO4f80[69]);element[OxO4f80[49]][OxO4f80[69]]=OxO4f80[0];} else {try{t_inp_height=inp_height[OxO4f80[52]];if(sel_height_unit[OxO4f80[52]]==OxO4f80[77]){t_inp_height=inp_height[OxO4f80[52]]+sel_height_unit[OxO4f80[52]];} ;t_inp_height=inp_height[OxO4f80[52]]+sel_height_unit[OxO4f80[52]];if(element[OxO4f80[49]][OxO4f80[69]]&&element[OxO4f80[69]]){element[OxO4f80[49]][OxO4f80[69]]=t_inp_height;element[OxO4f80[69]]=t_inp_height;} else {if(element[OxO4f80[49]][OxO4f80[69]]){element[OxO4f80[49]][OxO4f80[69]]=t_inp_height;} else {element[OxO4f80[69]]=t_inp_height;} ;} ;} catch(x){} ;} ;element[OxO4f80[70]]=sel_align[OxO4f80[52]];if(Browser_IsWinIE()){element[OxO4f80[49]][OxO4f80[71]]=sel_float[OxO4f80[52]];} else {element[OxO4f80[49]][OxO4f80[72]]=sel_float[OxO4f80[52]];} ;element[OxO4f80[49]][OxO4f80[73]]=sel_textalign[OxO4f80[52]];element[OxO4f80[74]]=inp_tooltip[OxO4f80[52]];if(element[OxO4f80[74]]==OxO4f80[0]){element.removeAttribute(OxO4f80[74]);} ;if(element[OxO4f80[64]]==OxO4f80[0]){element.removeAttribute(OxO4f80[64]);} ;if(element[OxO4f80[65]]==OxO4f80[0]){element.removeAttribute(OxO4f80[65]);} ;if(element[OxO4f80[65]]==OxO4f80[0]){element.removeAttribute(OxO4f80[78]);} ;if(element[OxO4f80[55]]==OxO4f80[0]){element.removeAttribute(OxO4f80[55]);} ;if(element[OxO4f80[70]]==OxO4f80[0]){element.removeAttribute(OxO4f80[70]);} ;if(element[OxO4f80[63]]==OxO4f80[0]){element.removeAttribute(OxO4f80[63]);} ;} ;inp_bgcolor[OxO4f80[41]]=function inp_bgcolor_onclick(){SelectColor(inp_bgcolor);} ;inp_bordercolor[OxO4f80[41]]=function inp_bordercolor_onclick(){SelectColor(inp_bordercolor);} ;if(!Browser_IsWinIE()){Window_GetElement(window,OxO4f80[79],true)[OxO4f80[49]][OxO4f80[48]]=OxO4f80[50];} ;