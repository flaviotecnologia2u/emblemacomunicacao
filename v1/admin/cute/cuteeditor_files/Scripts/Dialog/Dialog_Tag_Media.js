var OxO8cdf=["outer","btnbrowse","inp_src","onclick","value","cssText","style","src","FileName"];var outer=Window_GetElement(window,OxO8cdf[0],true);var btnbrowse=Window_GetElement(window,OxO8cdf[1],true);var inp_src=Window_GetElement(window,OxO8cdf[2],true);btnbrowse[OxO8cdf[3]]=function btnbrowse_onclick(){function Ox25b(Ox27){if(Ox27){inp_src[OxO8cdf[4]]=Ox27;} ;} ;editor.SetNextDialogWindow(window);editor.ShowSelectFileDialog(Ox25b,inp_src.value);} ;UpdateState=function UpdateState_Media(){outer[OxO8cdf[6]][OxO8cdf[5]]=element[OxO8cdf[6]][OxO8cdf[5]];outer.mergeAttributes(element);if(element[OxO8cdf[7]]){outer[OxO8cdf[8]]=element[OxO8cdf[8]];} else {outer.removeAttribute(OxO8cdf[8]);} ;} ;SyncToView=function SyncToView_Media(){inp_src[OxO8cdf[4]]=element[OxO8cdf[8]];} ;SyncTo=function SyncTo_Media(element){element[OxO8cdf[8]]=inp_src[OxO8cdf[4]];} ;