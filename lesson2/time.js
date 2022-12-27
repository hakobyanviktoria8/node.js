function time() {
    const date = new Date()
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    return `Date is ${h}h ${m}m ${s}s`
}

module.exports = time