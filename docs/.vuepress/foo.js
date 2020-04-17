module.exports = [
    // {
    //     title: "Foo",
    //     collapsable: false,
    //     children: prefix('promises', [""])
    // },
    // {
    //     title: "Bar",
    //     collapsable: false,
    //     children: [""]
    // },
];

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`);
}