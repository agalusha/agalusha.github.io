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
                <a id="Hensley Comedy" href="/" style="padding-top:21px; padding-left:23px; padding-right:23px; padding-bottom:1.22em"><!--style has to be here for some reason-->\
                    <span>\
                        <div class="underlineThing">\
                            <img id="homeIcon" src="images/home.png"/>\
                        </div>\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="About &mdash; Hensley Comedy" href="about-steve">\
                    <span>\
                        <div class="underlineThing">About</div>\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="In Action &mdash; Hensley Comedy" href="steve-in-action">\
                    <span>\
                        <div class="underlineThing">In Action</div>\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Upcoming &mdash; Hensley Comedy" href="upcoming-shows-and-other-news">\
                    <span>\
                        <div class="underlineThing">Upcoming</div>\
                    </span>\
                </a>\
            </li>\
            <!--<li>\
                <a id="Laugh &mdash; Hensley Comedy" href="laugh-with-steve">\
                    <span>\
                        <div class="underlineThing">Laugh</div>\
                    </span>\
                </a>\
            </li>-->\
            <li>\
                <a id="Credentials &mdash; Hensley Comedy" href="credentials">\
                    <span>\
                        <div class="underlineThing">Credentials</div>\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Reviews &mdash; Hensley Comedy" href="reviews">\
                    <span>\
                        <div class="underlineThing">Reviews</div>\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Contact &mdash; Hensley Comedy" href="contact-steve">\
                    <span>\
                        <div class="underlineThing">Contact</div>\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Links &mdash; Hensley Comedy" href="links">\
                    <span>\
                        <div class="underlineThing">Links</div>\
                    </span>\
                </a>\
            </li>\
            <li>\
                <a id="Featured &mdash; Hensley Comedy" href="featured-artists">\
                    <span>\
                        <div class="underlineThing">F</div>\
                    </span>\
                </a>\
            </li>\
        </ul>\
    </div>\
</div>\
\
');

document.getElementById(titleText).classList.add('current')