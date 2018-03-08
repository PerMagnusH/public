
        $(function() {
          // this will be executed when the page is loaded
          SC.initialize({
            client_id: 'YOUR_CLIENT_ID',
            redirect_uri: 'http://example.com/callback'
          });
          SC.stream('/tracks/293').then(function(player){
          player.play();
            });
        });
    