const $siteList = $('.siteList');
const $lastLi = $('.lost');
const x = localStorage.getItem('x');
const xObject = JSON.parse(x);
const hashMap = xObject || [
    {
        logo: "A",
        url: "https://www.acfun.cn"
    },
    {
        logo: "B",
        url: "https://www.bilibili.com"
    }
];
console.log(hashMap);
const simplifyUrl = (url)=>{
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '') // 删除 / 开头的内容
    ;
};
const render = ()=>{
    //$siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index)=>{
        const $li = $(`<li>
          <div class="site">
            <div class="logo">${node.logo}</div>
            <div class="link">${simplifyUrl(node.url)}</div>
            <div class="close">
              <svg class="icon">
                <use xlink:href="#icon-close"></use>
              </svg>
            </div>
          </div>
        </li>`).insertBefore($lastLi);
    });
};
render();
$('.addButton').on('click', ()=>{
    let url = window.prompt('请问你要添加的网站是什么?');
    if (url.indexOf('http') != 0) url = 'https://' + url;
    hashMap.push({
        logo: simplifyUrl(url)[0].toUpperCase(),
        url: url
    });
    render();
});
window.onbeforeunload = ()=>{
    const string = JSON.stringify(hashMap);
    localStorage.setItem('x', string);
};
$(document).on('keypress', (e)=>{
    const { key  } = e;
    for(let i = 0; i < hashMap.length; i++)if (hashMap[i].logo.toLowerCase() === key) window.open(hashMap[i].url);
});

//# sourceMappingURL=index.65c7a1e5.js.map
