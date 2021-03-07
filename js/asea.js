// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂)';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(*´∇｀*)' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});
// 手机侧边栏默认不展开
// var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
// var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
//     "menus_item_child"
// );
// var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
// for (var i = 0; i < menus_item_child.length; i++) {
//     menus_item_child[i].style.display = "none";
//     menus_expand[i].className += " menus-closed";
// }

// // 分类卡片可展开的js部分
// var card_category_list = document.getElementsByClassName(
//     "card-category-list child"
// );
// var item = document.getElementsByClassName("card-category-list-item");
// function toggle(t) {
//     var display = t.parentElement.nextSibling.style.display;
//     if (display == "none") {
//         t.parentElement.nextSibling.style.display = "block";
//         t.parentElement.nextSibling.style.height = "100%";
//         t.className = t.className.replace("fa-chevron-up", "fa-chevron-down");
//     } else {
//         t.parentElement.nextSibling.style.display = "none";
//         t.className = t.className.replace("fa-chevron-down", "fa-chevron-up");
//     }
// // }
// for (var i = 0; i < card_category_list.length; i++) {
//     card_category_list[i].style.display = "none";
//     card_category_list[i].style.transition = "all 1s";
//     card_category_list[i].previousSibling.innerHTML +=
//         '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" onclick="toggle(this)"></i>';
// }
// 去掉banner图
var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
    full_page[0].style.background = "transparent";
}
//shengxiaotubiao
hexo.extend.helper.register('getAnimalIcon', function (year) {
    var index = parseInt(year) % 12;
    var icon = {
        0: 'icon-monkey',
        1: 'icon-rooster',
        2: 'icon-dog',
        3: 'icon-boar',
        4: 'icon-rat',
        5: 'icon-ox',
        6: 'icon-tiger',
        7: 'icon-rabbit',
        8: 'icon-dragon',
        9: 'icon-snake',
        10: 'icon-horse',
        11: 'icon-goat',
    }
    return icon[index]
});