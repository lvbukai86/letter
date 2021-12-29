$('.addButton')
.on('click',()=>{
    let url = window.prompt('请问你要添加的网站是什么?')
    if(url.indexOf('http')!=0){
        url='https://'+url
    }
    
    const $siteList=$('.siteList')
    const $lastLi =$('.lost')
    const $li= $(`<li>
    <a href="${url}">
                <div class="site">
                    <div class="logo">${url[0]}</div>
                    <div class="link">${url}</div>
                </div>
    </a>
    </li>`).insertBefore( $lastLi)
})