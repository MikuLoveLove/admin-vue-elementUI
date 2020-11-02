// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }
module.exports = {
    presets: [["es2015", {modules: false}]],
    plugins: [
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk"
            }
        ]
    ]
}

// "@vue/cli-plugin-babel": "~4.5.0",
//     "@vue/cli-plugin-eslint": "~4.5.0",