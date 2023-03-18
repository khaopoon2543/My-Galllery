import { numberPicLine } from "./picNumbers";
const picsline = []

var i;
for (i = numberPicLine; i >= 1; i--) {
    picsline.push({ 'thumbnailURL': "../mylovelypics-line/line (" + i + ").jpeg" });
}

export default picsline;
        
