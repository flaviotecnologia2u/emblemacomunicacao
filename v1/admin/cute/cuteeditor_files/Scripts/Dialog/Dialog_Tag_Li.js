var OxO2782=["inp_src","box1","box2","box3","box4","box5","box6","box7","box8","box9","inp_start","CustomBullet","nodeName","LI","parentNode","none","decimal","upper-roman","upper-alpha","lower-alpha","lower-roman","disc","circle","square","listStyleType","style","border","solid 2px #708090","listStyleImage","","value","visibility","hidden","length","start","url(\x27","\x27)","visible","UL","OL","document","firstChild","element","solid 2px #ffffff","solid 2px #ECECF6","onclick"];var inp_src=Window_GetElement(window,OxO2782[0],true);var box1=Window_GetElement(window,OxO2782[1],true);var box2=Window_GetElement(window,OxO2782[2],true);var box3=Window_GetElement(window,OxO2782[3],true);var box4=Window_GetElement(window,OxO2782[4],true);var box5=Window_GetElement(window,OxO2782[5],true);var box6=Window_GetElement(window,OxO2782[6],true);var box7=Window_GetElement(window,OxO2782[7],true);var box8=Window_GetElement(window,OxO2782[8],true);var box9=Window_GetElement(window,OxO2782[9],true);var inp_start=Window_GetElement(window,OxO2782[10],true);var CustomBullet=Window_GetElement(window,OxO2782[11],true);OriginalnodeName=element[OxO2782[12]];if(element[OxO2782[12]]&&element[OxO2782[12]]==OxO2782[13]){OriginalnodeName=(element[OxO2782[14]])[OxO2782[12]];} ;var OriginalnodeName,CurrentnodeName,selectedObject;SyncToView=function SyncToView_LI(){if(element[OxO2782[12]]==OxO2782[13]){element=element[OxO2782[14]];} ;switch((element[OxO2782[25]][OxO2782[24]]).toLowerCase()){case OxO2782[15]:selectedObject=box1;break ;;case OxO2782[16]:selectedObject=box2;break ;;case OxO2782[17]:selectedObject=box3;break ;;case OxO2782[18]:selectedObject=box4;break ;;case OxO2782[19]:selectedObject=box5;break ;;case OxO2782[20]:selectedObject=box6;break ;;case OxO2782[21]:selectedObject=box7;break ;;case OxO2782[22]:selectedObject=box8;break ;;case OxO2782[23]:selectedObject=box9;break ;;default:selectedObject=box1;break ;;} ;selectedObject[OxO2782[25]][OxO2782[26]]=OxO2782[27];if(element[OxO2782[25]][OxO2782[28]]==OxO2782[29]){inp_src[OxO2782[30]]=OxO2782[29];CustomBullet[OxO2782[25]][OxO2782[31]]=OxO2782[32];} else {var Ox49;Ox49=element[OxO2782[25]][OxO2782[28]];Ox49=Ox49.substring(4,Ox49[OxO2782[33]]-1);inp_src[OxO2782[30]]=Ox49;} ;} ;SyncTo=function SyncTo_LI(element){switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:try{element.setAttribute(OxO2782[34],inp_start.value);} catch(er){} ;break ;;case box7:;case box8:;case box9:break ;;} ;if(inp_src[OxO2782[30]]){element[OxO2782[25]][OxO2782[28]]=OxO2782[35]+inp_src[OxO2782[30]]+OxO2782[36];} ;} ;function ToggleCustomBullet(){if(CustomBullet[OxO2782[25]][OxO2782[31]]==OxO2782[32]){CustomBullet[OxO2782[25]][OxO2782[31]]=OxO2782[37];} else {CustomBullet[OxO2782[25]][OxO2782[31]]=OxO2782[32];} ;} ;function doClick1(Ox26f){if(element[OxO2782[12]]==OxO2782[13]){element=element[OxO2782[14]];} ;selectedObject=Ox26f;switch(selectedObject){case box1:element[OxO2782[25]][OxO2782[24]]=OxO2782[15];break ;;case box2:element[OxO2782[25]][OxO2782[24]]=OxO2782[16];break ;;case box3:element[OxO2782[25]][OxO2782[24]]=OxO2782[17];break ;;case box4:element[OxO2782[25]][OxO2782[24]]=OxO2782[18];break ;;case box5:element[OxO2782[25]][OxO2782[24]]=OxO2782[19];break ;;case box6:element[OxO2782[25]][OxO2782[24]]=OxO2782[20];break ;;case box7:element[OxO2782[25]][OxO2782[24]]=OxO2782[21];break ;;case box8:element[OxO2782[25]][OxO2782[24]]=OxO2782[22];break ;;case box9:element[OxO2782[25]][OxO2782[24]]=OxO2782[23];break ;;} ;var Ox2fd=false;switch(selectedObject){case box1:;case box2:;case box3:;case box4:;case box5:;case box6:if(OriginalnodeName==OxO2782[38]){OriginalnodeName=OxO2782[39];Ox2fd=true;} ;break ;;case box7:;case box8:;case box9:if(OriginalnodeName==OxO2782[39]){OriginalnodeName=OxO2782[38];Ox2fd=true;} ;break ;;} ;if(Ox2fd){var Ox465=editwin[OxO2782[40]].createElement(OriginalnodeName);while(element[OxO2782[41]]){Ox465.appendChild(element.firstChild);} ;element[OxO2782[14]].insertBefore(Ox465,element);element[OxO2782[14]].removeChild(element);var arg=Window_FindDialogArguments(window);arg[OxO2782[42]]=element=Ox465;} ;box1[OxO2782[25]][OxO2782[26]]=OxO2782[43];box2[OxO2782[25]][OxO2782[26]]=OxO2782[43];box3[OxO2782[25]][OxO2782[26]]=OxO2782[43];box4[OxO2782[25]][OxO2782[26]]=OxO2782[43];box5[OxO2782[25]][OxO2782[26]]=OxO2782[43];box6[OxO2782[25]][OxO2782[26]]=OxO2782[43];box7[OxO2782[25]][OxO2782[26]]=OxO2782[43];box8[OxO2782[25]][OxO2782[26]]=OxO2782[43];box9[OxO2782[25]][OxO2782[26]]=OxO2782[43];selectedObject[OxO2782[25]][OxO2782[26]]=OxO2782[27];inp_src[OxO2782[30]]=OxO2782[29];SyncTo();} ;function doMouseOut(Ox26f){if(Ox26f==selectedObject){Ox26f[OxO2782[25]][OxO2782[26]]=OxO2782[27];} else {Ox26f[OxO2782[25]][OxO2782[26]]=OxO2782[43];} ;} ;function doMouseOver(Ox26f){Ox26f[OxO2782[25]][OxO2782[26]]=OxO2782[44];} ;btnbrowse[OxO2782[45]]=function btnbrowse_onclick(){function Ox25b(Ox27){if(Ox27){inp_src[OxO2782[30]]=Ox27;SyncTo(element);} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox25b,inp_src.value,inp_src);} else {editor.ShowSelectImageDialog(Ox25b,inp_src.value);} ;} ;