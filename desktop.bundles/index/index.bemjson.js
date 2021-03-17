module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    // mods: { theme: 'islands' },
    content: [
        {
            block:'header-OC',
        },
        {
            block:'main-OC',
            tag:'main',
            content:'тут будет бади'
        },
        {
            block:'footer-OC',
            tag:'footer',
            content:'тут будет футер'
        }
    ]
};
