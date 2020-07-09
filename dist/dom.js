export const synthesizeDOMRect = (...rects) => {
    const totalObj = rects.reduce((total, rect) => {
        const { x, y, width, height } = rect;
        total.x += x;
        total.y += y;
        total.width += width;
        total.height += height;
        return total;
    }, { x: 0, y: 0, width: 0, height: 0 });
    return new DOMRect(totalObj.x, totalObj.y, totalObj.width, totalObj.height);
};
