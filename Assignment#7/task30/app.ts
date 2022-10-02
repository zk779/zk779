var str:any = prompt("Enter the Sring:"),
    tofind:any = prompt("Enter the Sring to find"),
    splitOnFound = str.split(tofind).map(function (culm)
    {
        return this.pos += culm.length + tofind.length
    }, {pos: -tofind.length}).slice(0, -1); // {pos: ...} – Object wich is used as this

console.log(splitOnFound);