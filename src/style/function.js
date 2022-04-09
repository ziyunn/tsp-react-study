const defaultSize = 16;

const calcRem = (size) =>{
    return size/defaultSize;
};

const calclH = (lh,font) =>{
    return lh/font;
};

export { calcRem,calclH }