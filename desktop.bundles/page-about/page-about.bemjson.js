module.exports = {
    block: 'page-about',
    title: 'О платформе',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'page-about.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'page-about.min.js' }],
    content: [
        {
            block:'header-OC',
        },
        {
            block:'main-about',
            tag:'main',
            content:'тут будет бади о платформе'
        },
        {
            block:'footer-OC',
            tag:'footer',
            content:'тут будет футер'
        }
    ]
};
