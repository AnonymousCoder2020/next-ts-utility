export default (sec, by) => {
    const res = [sec];
    for (const unit of by) {
        const last = res[res.length - 1];
        const carry = Math.floor(last / unit);
        if (carry <= 0)
            break;
        const remainder = last % unit;
        res[res.length - 1] = remainder;
        res.push(carry);
    }
    return res;
};
