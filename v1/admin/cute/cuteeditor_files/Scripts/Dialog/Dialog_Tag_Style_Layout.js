var OxO6ebf=["","sel_position","sel_display","sel_float","sel_clear","tb_top","sel_top_unit","tb_height","sel_height_unit","tb_left","sel_left_unit","tb_width","sel_width_unit","tb_cliptop","sel_cliptop_unit","tb_clipbottom","sel_clipbottom_unit","tb_clipleft","sel_clipleft_unit","tb_clipright","sel_clipright_unit","sel_overflow","tb_zindex","sel_pagebreakbefore","sel_pagebreakafter","outer","div_demo","cssText","style","value","position","display","styleFloat","cssFloat","clear","left","top","width","height","length","tb_","sel_","_unit","selectedIndex","options","right","bottom","clip","tb_clip","sel_clip","currentStyle","overflow","zIndex","pageBreakBefore","pageBreakAfter"];function ParseFloatToString(Ox1b){var Ox84=parseFloat(Ox1b);if(isNaN(Ox84)){return OxO6ebf[0];} ;return Ox84+OxO6ebf[0];} ;var sel_position=Window_GetElement(window,OxO6ebf[1],true);var sel_display=Window_GetElement(window,OxO6ebf[2],true);var sel_float=Window_GetElement(window,OxO6ebf[3],true);var sel_clear=Window_GetElement(window,OxO6ebf[4],true);var tb_top=Window_GetElement(window,OxO6ebf[5],true);var sel_top_unit=Window_GetElement(window,OxO6ebf[6],true);var tb_height=Window_GetElement(window,OxO6ebf[7],true);var sel_height_unit=Window_GetElement(window,OxO6ebf[8],true);var tb_left=Window_GetElement(window,OxO6ebf[9],true);var sel_left_unit=Window_GetElement(window,OxO6ebf[10],true);var tb_width=Window_GetElement(window,OxO6ebf[11],true);var sel_width_unit=Window_GetElement(window,OxO6ebf[12],true);var tb_cliptop=Window_GetElement(window,OxO6ebf[13],true);var sel_cliptop_unit=Window_GetElement(window,OxO6ebf[14],true);var tb_clipbottom=Window_GetElement(window,OxO6ebf[15],true);var sel_clipbottom_unit=Window_GetElement(window,OxO6ebf[16],true);var tb_clipleft=Window_GetElement(window,OxO6ebf[17],true);var sel_clipleft_unit=Window_GetElement(window,OxO6ebf[18],true);var tb_clipright=Window_GetElement(window,OxO6ebf[19],true);var sel_clipright_unit=Window_GetElement(window,OxO6ebf[20],true);var sel_overflow=Window_GetElement(window,OxO6ebf[21],true);var tb_zindex=Window_GetElement(window,OxO6ebf[22],true);var sel_pagebreakbefore=Window_GetElement(window,OxO6ebf[23],true);var sel_pagebreakafter=Window_GetElement(window,OxO6ebf[24],true);var outer=Window_GetElement(window,OxO6ebf[25],true);var div_demo=Window_GetElement(window,OxO6ebf[26],true);UpdateState=function UpdateState_Layout(){div_demo[OxO6ebf[28]][OxO6ebf[27]]=element[OxO6ebf[28]][OxO6ebf[27]];} ;SyncToView=function SyncToView_Layout(){sel_position[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[30]];sel_display[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[31]];if(Browser_IsWinIE()){sel_float[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[32]];} else {sel_float[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[33]];} ;sel_clear[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[34]];var arr=[OxO6ebf[35],OxO6ebf[36],OxO6ebf[37],OxO6ebf[38]];for(var Oxe8=0;Oxe8<arr[OxO6ebf[39]];Oxe8++){var Ox8d=arr[Oxe8];var Ox3a=document.getElementById(OxO6ebf[40]+Ox8d);var Ox49=document.getElementById(OxO6ebf[41]+Ox8d+OxO6ebf[42]);Ox49[OxO6ebf[43]]=0;if(ParseFloatToString(element[OxO6ebf[28]][Ox8d])){Ox3a[OxO6ebf[29]]=ParseFloatToString(element[OxO6ebf[28]][Ox8d]);for(var i=0;i<Ox49[OxO6ebf[44]][OxO6ebf[39]];i++){var Ox2b=Ox49[OxO6ebf[44]][i][OxO6ebf[29]];if(Ox2b&&element[OxO6ebf[28]][Ox8d].indexOf(Ox2b)!=-1){Ox49[OxO6ebf[43]]=i;break ;} ;} ;} ;} ;var arr=[OxO6ebf[35],OxO6ebf[36],OxO6ebf[45],OxO6ebf[46]];for(var Oxe8=0;Oxe8<arr[OxO6ebf[39]];Oxe8++){var Ox8d=arr[Oxe8];var Ox4e0=OxO6ebf[47]+Ox8d.charAt(0).toUpperCase()+Ox8d.substring(1);var Ox3a=document.getElementById(OxO6ebf[48]+Ox8d);var Ox49=document.getElementById(OxO6ebf[49]+Ox8d+OxO6ebf[42]);Ox49[OxO6ebf[43]]=0;var Ox4e1;if(Browser_IsWinIE()){Ox4e1=element[OxO6ebf[50]][Ox4e0];} else {Ox4e1=element[OxO6ebf[28]][Ox4e0];} ;if(ParseFloatToString(Ox4e1)){Ox3a[OxO6ebf[29]]=ParseFloatToString(Ox4e1);for(var i=0;i<Ox49[OxO6ebf[44]][OxO6ebf[39]];i++){var Ox2b=Ox49[OxO6ebf[44]][i][OxO6ebf[29]];if(Ox2b&&Ox4e1.indexOf(Ox2b)!=-1){Ox49[OxO6ebf[43]]=i;break ;} ;} ;} ;} ;sel_overflow[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[51]];tb_zindex[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[52]];sel_pagebreakbefore[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[53]];sel_pagebreakafter[OxO6ebf[29]]=element[OxO6ebf[28]][OxO6ebf[54]];} ;SyncTo=function SyncTo_Layout(element){element[OxO6ebf[28]][OxO6ebf[30]]=sel_position[OxO6ebf[29]];element[OxO6ebf[28]][OxO6ebf[31]]=sel_display[OxO6ebf[29]];if(Browser_IsWinIE()){element[OxO6ebf[28]][OxO6ebf[32]]=sel_float[OxO6ebf[29]];} else {element[OxO6ebf[28]][OxO6ebf[33]]=sel_float[OxO6ebf[29]];} ;element[OxO6ebf[28]][OxO6ebf[34]]=sel_clear[OxO6ebf[29]];var arr=[OxO6ebf[35],OxO6ebf[36],OxO6ebf[37],OxO6ebf[38]];for(var Oxe8=0;Oxe8<arr[OxO6ebf[39]];Oxe8++){var Ox8d=arr[Oxe8];var Ox3a=document.getElementById(OxO6ebf[40]+Ox8d);if(ParseFloatToString(Ox3a.value)){element[OxO6ebf[28]][Ox8d]=ParseFloatToString(Ox3a.value)+document.all(OxO6ebf[41]+Ox8d+OxO6ebf[42])[OxO6ebf[29]];} else {element[OxO6ebf[28]][Ox8d]=OxO6ebf[0];} ;} ;var arr=[OxO6ebf[35],OxO6ebf[36],OxO6ebf[45],OxO6ebf[46]];for(var Oxe8=0;Oxe8<arr[OxO6ebf[39]];Oxe8++){var Ox8d=arr[Oxe8];var Ox4e0=OxO6ebf[47]+Ox8d.charAt(0).toUpperCase()+Ox8d.substring(1);var Ox3a=document.getElementById(OxO6ebf[48]+Ox8d);if(ParseFloatToString(Ox3a.value)){element[OxO6ebf[28]][Ox4e0]=ParseFloatToString(Ox3a.value)+document.all(OxO6ebf[49]+Ox8d+OxO6ebf[42])[OxO6ebf[29]];} else {element[OxO6ebf[28]][Ox4e0]=OxO6ebf[0];} ;} ;element[OxO6ebf[28]][OxO6ebf[51]]=sel_overflow[OxO6ebf[29]];element[OxO6ebf[28]][OxO6ebf[52]]=ParseFloatToString(tb_zindex.value);element[OxO6ebf[28]][OxO6ebf[53]]=sel_pagebreakbefore[OxO6ebf[29]];element[OxO6ebf[28]][OxO6ebf[54]]=sel_pagebreakafter[OxO6ebf[29]];} ;