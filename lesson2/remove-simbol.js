function removeSimbole(str) {
    str.split(" ").forEach(el => {
        if(!/[^a-zA-Z0-9]/.test(el)){
            console.log(el);
        }
    });
}

module.exports = removeSimbole