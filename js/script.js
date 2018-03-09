
        function findGetParameter(parameterName) {
            var result = null,
                tmp = [];
            var items = window.location.href.split("?");
            for (var index = 1; index < items.length; index++) {
                tmp = items[index].split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            }
            return result;
        }
        
        
        function postYourAdd () {
            var iframe = $("#forPostyouradd");
            var track = findGetParameter("track");
            var srcAddr = "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + track + "&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=false";
            iframe.attr("src", srcAddr); 
            if (track !== '410118795')
            {
                $("#postYourAdd").attr("disabled", "disabled");
            }
        }
    