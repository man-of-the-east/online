// Created by iWeb 3.0.4 local-build-20151201

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke(),stroke_1:new IWPhotoFrame([IWCreateImage('Projects_files/GraphPaper_01.png'),IWCreateImage('Projects_files/GraphPaper_02.png'),IWCreateImage('Projects_files/GraphPaper_01_1.png'),IWCreateImage('Projects_files/GraphPaper_01_2.png'),IWCreateImage('Projects_files/GraphPaper_09.png'),IWCreateImage('Projects_files/GraphPaper_08.png'),IWCreateImage('Projects_files/GraphPaper_07.png'),IWCreateImage('Projects_files/GraphPaper_01_3.png')],null,0,0.600000,90.000000,0.000000,90.000000,0.000000,89.000000,11.000000,89.000000,7.000000,11.000000,11.000000,11.000000,11.000000,'Projects_files/graphpaper_tape.png',new IWPoint(0.500000,0),new IWSize(155,47),0.300000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Projects_files/ProjectsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
