'use strict';
require(['component/mainPage/mainPage'], (Page) => {
    let page = new Page();
    document.body.innerHTML = page;
    page.afterRender();
});