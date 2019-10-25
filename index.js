// Project: thai-cut-slim
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2018/10/25
// Facebook: http://www.fb.com/comdevx

const fs = require('fs')

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8')
}

let d = require("./dict.txt")
d = d.split('\n')

exports.addon = (l) => {
    d = d.concat(l)
}

exports.cut = (w) => {

    const arr = []

    for (let i = 0; i < w.length;) {

        let sub = []

        d.forEach(v2 => {

            if (w[i] + w[i + 1] === v2[0] + v2[1]) sub.push([v2, v2.length])

        })

        sub.sort((a, b) => b[1] - a[1])

        for (let ii = 0; ii < sub.length; ii++) {

            const l = sub[ii][1] + i
            const s = w.substring(i, l)

            if (sub[ii][0] === s) {

                i = l - 1
                arr.push(s)
                ii = sub.length

            }

        }

        i++

    }

    return arr

}