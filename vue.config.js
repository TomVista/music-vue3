const path = require('path')

module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.jsx$|\.tsx$/,
                    use: ["@ant-design-vue/vue-jsx-hot-loader"],
                },
            ],
        },

        resolve: {
            alias: {
                '@styles': path.resolve(__dirname, 'src', 'styles'),
                '@icon': path.resolve(__dirname, 'src', 'assets', 'icon'),
            }
        },
        stats: {
            all: true,
        },
    }
}