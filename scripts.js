// Shorthand for document ready event
$(function () {
  function queryComments() {
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/quotes',
      type: "GET",
      data: {
        action: 'query',
        format: 'json',
        list: 'search',
      },
      error: function (status, err) {
          alert(err + " : " + status);
      },
      beforeSend: function() {
        $('.loader').show();
      },
      success: function(resp) {
        let data = resp;
        $('.loader').hide();
        data.forEach((element) => {
          // console.log(element);
          let comments = `<div class="carousel-item ${element.id == 1 ? 'active': ' '}">
          <div class="container pt-5 pb-5">
            <div class="card mb-3 mt-3 background-primary border-0">
              <div class="row no-gutters">
                <div class="col-md-3 text-center">
                  <img
                    src=${element.pic_url}
                    alt="happy male profile"
                    class="rounded-circle"
                    width="150"
                  />
                </div>
                <div class="col-md-9">
                  <div class="card-body">
                    <p class="card-text">
                      &raquo; ${element.text}
                    </p>
                    <p class="card-text font-weight-bold mb-0">${element.name}</p>
                    <p class="card-text font-italic">${element.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
        $('#comments-slide').append(comments);
        });
      }
    });
  }

  queryComments();
});
