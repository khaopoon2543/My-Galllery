import { numberPicColor } from "./picNumbers";
const picscolor = []

var i;
for (i = numberPicColor; i >= 1; i--) {
    picscolor.push({ 'thumbnailURL': "../mylovelypics-color/color (" + i + ").jpeg" });
}

export default picscolor;
        
