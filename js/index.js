/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    redirectBloggerLinks();

    $(document).ready(function(){
        $(".post-content").fitVids();
    
        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });
        
        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });    
    });

    function redirectBloggerLinks() {
        var search = window.location.search;
        if (search.startsWith('?blogger=')) {
            var expression = /(?:http:\/\/blog.stvjam.es\/\?blogger=http:\/\/stephenjamescode.blogspot.co.uk)(.*)/g;
            var matches = expression.exec(window.location.href);

            if (matches && matches.length === 2) {
                window.location.href = matches[1].replace(/\.html$/g, '') + '/';
            } 
        }
    }    

}(jQuery));