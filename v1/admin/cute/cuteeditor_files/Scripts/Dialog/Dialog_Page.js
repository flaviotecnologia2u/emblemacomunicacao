var OxOb91d=["Table1","Table2","inp_title","inp_doctype","inp_description","inp_keywords","PageLanguage","HTMLEncoding","bgcolor","bgcolor_Preview","fontcolor","fontcolor_Preview","Backgroundimage","btnbrowse","TopMargin","BottomMargin","LeftMargin","RightMargin","MarginWidth","MarginHeight","btnok","btncc","editor","window","document","body","head","title","value","innerHTML","DOCTYPE","meta","length","name","keywords","content","description","httpEquiv","content-type","content-language","background","color","style","backgroundColor","bgColor","topMargin","bottomMargin","leftMargin","rightMargin","marginWidth","marginHeight","onclick","","ValidNumber","Please enter a valid color number.","text","childNodes","parentNode","http-equiv","Content-Type","Content-Language","META"];var Table1=Window_GetElement(window,OxOb91d[0],true);var Table2=Window_GetElement(window,OxOb91d[1],true);var inp_title=Window_GetElement(window,OxOb91d[2],true);var inp_doctype=Window_GetElement(window,OxOb91d[3],true);var inp_description=Window_GetElement(window,OxOb91d[4],true);var inp_keywords=Window_GetElement(window,OxOb91d[5],true);var PageLanguage=Window_GetElement(window,OxOb91d[6],true);var HTMLEncoding=Window_GetElement(window,OxOb91d[7],true);var bgcolor=Window_GetElement(window,OxOb91d[8],true);var bgcolor_Preview=Window_GetElement(window,OxOb91d[9],true);var fontcolor=Window_GetElement(window,OxOb91d[10],true);var fontcolor_Preview=Window_GetElement(window,OxOb91d[11],true);var Backgroundimage=Window_GetElement(window,OxOb91d[12],true);var btnbrowse=Window_GetElement(window,OxOb91d[13],true);var TopMargin=Window_GetElement(window,OxOb91d[14],true);var BottomMargin=Window_GetElement(window,OxOb91d[15],true);var LeftMargin=Window_GetElement(window,OxOb91d[16],true);var RightMargin=Window_GetElement(window,OxOb91d[17],true);var MarginWidth=Window_GetElement(window,OxOb91d[18],true);var MarginHeight=Window_GetElement(window,OxOb91d[19],true);var btnok=Window_GetElement(window,OxOb91d[20],true);var btncc=Window_GetElement(window,OxOb91d[21],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxOb91d[22]];var editwin=obj[OxOb91d[23]];var editdoc=obj[OxOb91d[24]];var body=editdoc[OxOb91d[25]];var head=obj[OxOb91d[26]];var title=head.getElementsByTagName(OxOb91d[27])[0];if(title){inp_title[OxOb91d[28]]=title[OxOb91d[29]];} ;inp_doctype[OxOb91d[28]]=obj[OxOb91d[30]];var metas=head.getElementsByTagName(OxOb91d[31]);for(var m=0;m<metas[OxOb91d[32]];m++){if(metas[m][OxOb91d[33]].toLowerCase()==OxOb91d[34]){inp_keywords[OxOb91d[28]]=metas[m][OxOb91d[35]];} ;if(metas[m][OxOb91d[33]].toLowerCase()==OxOb91d[36]){inp_description[OxOb91d[28]]=metas[m][OxOb91d[35]];} ;if(metas[m][OxOb91d[37]].toLowerCase()==OxOb91d[38]){HTMLEncoding[OxOb91d[28]]=metas[m][OxOb91d[35]];} ;if(metas[m][OxOb91d[37]].toLowerCase()==OxOb91d[39]){PageLanguage[OxOb91d[28]]=metas[m][OxOb91d[35]];} ;} ;if(editdoc[OxOb91d[25]][OxOb91d[40]]){Backgroundimage[OxOb91d[28]]=editdoc[OxOb91d[25]][OxOb91d[40]];} ;if(editdoc[OxOb91d[25]][OxOb91d[42]][OxOb91d[41]]){fontcolor[OxOb91d[28]]=editdoc[OxOb91d[25]][OxOb91d[42]][OxOb91d[41]];fontcolor[OxOb91d[42]][OxOb91d[43]]=fontcolor[OxOb91d[28]];fontcolor_Preview[OxOb91d[42]][OxOb91d[43]]=fontcolor[OxOb91d[28]];} ;var body_bgcolor=editdoc[OxOb91d[25]][OxOb91d[42]][OxOb91d[43]]||editdoc[OxOb91d[25]][OxOb91d[44]];if(body_bgcolor){bgcolor[OxOb91d[28]]=body_bgcolor;bgcolor[OxOb91d[42]][OxOb91d[43]]=body_bgcolor;bgcolor_Preview[OxOb91d[42]][OxOb91d[43]]=body_bgcolor;} ;if(Browser_IsWinIE()){if(body[OxOb91d[45]]){TopMargin[OxOb91d[28]]=body[OxOb91d[45]];} ;if(body[OxOb91d[46]]){BottomMargin[OxOb91d[28]]=body[OxOb91d[46]];} ;if(body[OxOb91d[47]]){LeftMargin[OxOb91d[28]]=body[OxOb91d[47]];} ;if(body[OxOb91d[48]]){RightMargin[OxOb91d[28]]=body[OxOb91d[48]];} ;if(body[OxOb91d[49]]){MarginWidth[OxOb91d[28]]=body[OxOb91d[49]];} ;if(body[OxOb91d[50]]){MarginHeight[OxOb91d[28]]=body[OxOb91d[50]];} ;} else {if(body.getAttribute(OxOb91d[45])){TopMargin[OxOb91d[28]]=body.getAttribute(OxOb91d[45]);} ;if(body.getAttribute(OxOb91d[46])){BottomMargin[OxOb91d[28]]=body.getAttribute(OxOb91d[46]);} ;if(body.getAttribute(OxOb91d[47])){LeftMargin[OxOb91d[28]]=body.getAttribute(OxOb91d[47]);} ;if(body.getAttribute(OxOb91d[48])){RightMargin[OxOb91d[28]]=body.getAttribute(OxOb91d[48]);} ;if(body.getAttribute(OxOb91d[18])){MarginWidth[OxOb91d[28]]=body.getAttribute(OxOb91d[49]);} ;if(body.getAttribute(OxOb91d[50])){MarginHeight[OxOb91d[28]]=body.getAttribute(OxOb91d[50]);} ;} ;btnok[OxOb91d[51]]=function btnok_onclick(){try{if(Browser_IsWinIE()){body[OxOb91d[45]]=TopMargin[OxOb91d[28]];body[OxOb91d[46]]=BottomMargin[OxOb91d[28]];body[OxOb91d[47]]=LeftMargin[OxOb91d[28]];body[OxOb91d[48]]=RightMargin[OxOb91d[28]];if(MarginWidth[OxOb91d[28]]){body[OxOb91d[49]]=MarginWidth[OxOb91d[28]];} ;if(MarginHeight[OxOb91d[28]]){body[OxOb91d[50]]=MarginHeight[OxOb91d[28]];} ;} else {body.setAttribute(OxOb91d[45],TopMargin.value);body.setAttribute(OxOb91d[46],BottomMargin.value);body.setAttribute(OxOb91d[47],LeftMargin.value);body.setAttribute(OxOb91d[48],RightMargin.value);body.setAttribute(OxOb91d[49],MarginWidth.value);body.setAttribute(OxOb91d[50],MarginHeight.value);if(body.getAttribute(OxOb91d[45])==OxOb91d[52]){body.removeAttribute(OxOb91d[45]);} ;if(body.getAttribute(OxOb91d[46])==OxOb91d[52]){body.removeAttribute(OxOb91d[46]);} ;if(body.getAttribute(OxOb91d[47])==OxOb91d[52]){body.removeAttribute(OxOb91d[47]);} ;if(body.getAttribute(OxOb91d[48])==OxOb91d[52]){body.removeAttribute(OxOb91d[48]);} ;if(body.getAttribute(OxOb91d[49])==OxOb91d[52]){body.removeAttribute(OxOb91d[49]);} ;if(body.getAttribute(OxOb91d[50])==OxOb91d[52]){body.removeAttribute(OxOb91d[50]);} ;} ;} catch(er){alert(CE_GetStr(OxOb91d[53]));return ;} ;try{editdoc[OxOb91d[25]][OxOb91d[42]][OxOb91d[43]]=bgcolor[OxOb91d[28]];editdoc[OxOb91d[25]][OxOb91d[42]][OxOb91d[41]]=fontcolor[OxOb91d[28]];if(Backgroundimage[OxOb91d[28]]){editdoc[OxOb91d[25]][OxOb91d[40]]=Backgroundimage[OxOb91d[28]];} else {body.removeAttribute(OxOb91d[40]);} ;} catch(er){alert(OxOb91d[54]);return ;} ;if(!title){title=document.createElement(OxOb91d[27]);head.appendChild(title);} ;if(Browser_IsWinIE()){title[OxOb91d[55]]=inp_title[OxOb91d[28]];} else {var Ox336=document.createTextNode(inp_title.value);try{title.removeChild(title[OxOb91d[56]].item(0));} catch(x){} ;title.appendChild(Ox336);} ;for(var m=0;m<metas[OxOb91d[32]];m++){var Ox337=metas[m];if(Ox337){if(Ox337[OxOb91d[33]].toLowerCase()==OxOb91d[34]||Ox337[OxOb91d[33]].toLowerCase()==OxOb91d[36]||Ox337[OxOb91d[33]].toLowerCase()==OxOb91d[38]||Ox337[OxOb91d[33]].toLowerCase()==OxOb91d[39]){Ox337[OxOb91d[57]].removeChild(Ox337);Ox337=null;} ;} ;} ;try{Ox338(OxOb91d[33],OxOb91d[34],inp_keywords.value);Ox338(OxOb91d[33],OxOb91d[36],inp_description.value);Ox338(OxOb91d[58],OxOb91d[59],HTMLEncoding.value);Ox338(OxOb91d[58],OxOb91d[60],PageLanguage.value);} catch(x){} ;function Ox338(Ox339,name,Ox190){var metas=head.getElementsByTagName(OxOb91d[31]);for(var m=0;m<metas[OxOb91d[32]];m++){if(metas[m][OxOb91d[33]].toLowerCase()==name.toLowerCase()){metas[m][OxOb91d[57]].removeChild(metas[m]);} ;} ;if(Ox190!=OxOb91d[52]&&Ox190!=null){var Ox33a=editdoc.createElement(OxOb91d[61]);Ox33a.setAttribute(Ox339,name);Ox33a.setAttribute(OxOb91d[35],Ox190);head.appendChild(Ox33a);} ;} ;Window_SetDialogReturnValue(window,inp_doctype[OxOb91d[28]]+OxOb91d[52]);Window_CloseDialog(window);} ;btnbrowse[OxOb91d[51]]=function btnbrowse_onclick(){function Ox25b(Ox27){if(Ox27){Backgroundimage[OxOb91d[28]]=Ox27;} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox25b,Backgroundimage.value,Backgroundimage);} else {editor.ShowSelectImageDialog(Ox25b,Backgroundimage.value);} ;} ;btncc[OxOb91d[51]]=function btncc_onclick(){Window_CloseDialog(window);} ;fontcolor[OxOb91d[51]]=fontcolor_Preview[OxOb91d[51]]=function fontcolor_onclick(){SelectColor(fontcolor,fontcolor_Preview);} ;bgcolor[OxOb91d[51]]=bgcolor_Preview[OxOb91d[51]]=function bgcolor_onclick(){SelectColor(bgcolor,bgcolor_Preview);} ;