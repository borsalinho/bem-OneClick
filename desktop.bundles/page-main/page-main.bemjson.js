module.exports = {
    block: 'page',
    mix:{ block:'page-main' },
    title: 'Главная страница OneClickYakutia',
    // favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'page-main.min.css' },
    ],
    scripts: [{ elem: 'js', url: 'page-main.min.js' }],
    content: [
        {
            block:'header-OC',
        },
        {
            block:'footer-OC',
        }
    ]
};
