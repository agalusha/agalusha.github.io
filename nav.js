//if (titleText==='Steve Hensley - Home'){
//    alert(titleText)
//}

var titleText = document.title;
document.write('\
\
<div id="diywebNavigation">\
    <div class="webnavigation">\
        <ul id="mainNav1" class="mainNav1">\
            <li style="height:61.5px;">\
                <a id="Hensley Comedy" href="/" style="padding:0;">\
                    <span>\
                        <img src="images/home.png" style="max-width: 20px; padding: 21px" alt=""/>\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="About &mdash; Hensley Comedy" href="about-steve">\
                    <span>\
                        About\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="In Action &mdash; Hensley Comedy" href="steve-in-action">\
                    <span>\
                        In Action\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Upcoming &mdash; Hensley Comedy" href="upcoming-shows-and-other-news">\
                    <span>\
                        Upcoming\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Laugh &mdash; Hensley Comedy" href="laugh-with-steve">\
                    <span>\
                        Laugh\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Credentials &mdash; Hensley Comedy" href="credentials">\
                    <span>\
                        Credentials\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Reviews &mdash; Hensley Comedy" href="reviews">\
                    <span>\
                        Reviews\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Contact &mdash; Hensley Comedy" href="contact-steve">\
                    <span>\
                        Contact\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Links &mdash; Hensley Comedy" href="links">\
                    <span>\
                        Links\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Featured &mdash; Hensley Comedy" href="featured-artists">\
                    <span>\
                        Featured\
                    </span>\
                </a>\
            </li>\
        </ul>\
    </div>\
</div>\
\
');

document.getElementById(titleText).classList.add('current')