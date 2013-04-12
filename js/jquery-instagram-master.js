// JavaScript Document
 $(document).ready(function () {
  var
    insta_container = $(".instagram")
  , insta_next_url

  insta_container.instagram({
      hash: 'biciurbanachih'
    , clientId : '5def29782b61477a899ba28011dda895'
    , show : 10
    , onComplete : function (photos, data) {
      insta_next_url = data.pagination.next_url
    }
  })

  $('button').bind('click', function(){
    var 
      button = $(this)
    , text = button.text()

    if (button.text() != 'Loading…'){
      button.text('Loading…')
      insta_container.instagram({
          next_url : insta_next_url
        , show : 10
        , onComplete : function(photos, data) {
          insta_next_url = data.pagination.next_url
          button.text(text)
        }
      })
    }       
  }) 
});