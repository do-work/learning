
$(function(){

    //teleport API hook for search by city-IN PROGRESS
    $('#location').autocomplete({
        source: function(request, response){
            $.ajax({
                url: 'https://api.teleport.org/api/cities/?search=',
                type: 'GET',
                dataType: 'json',
                data: {
                    term: request.term
                },
                success: function (data) {
                    response(data._embedded);
                    console.log(data._embedded)
                }
            });
        },
        minLength: 4,
        select: function(event, ui){
        }
    });


    //jQuery UI datepicker's
    $(".checkIn").datepicker({
        minDate: 0,
    //adjusts checkout time once checkIn time is selected
    }).on("change", function(){
        var checkOutMinDate = $(".checkIn").datepicker('getDate');
        checkOutMinDate.setDate(checkOutMinDate.getDate()+1);
        $(".checkOut").datepicker({
            minDate: checkOutMinDate
        });
    });

    //select options html builder for numbers only
    function buildOptionsHtmlBlock(loopValue){
        var boxNum = '';
        for(i=1; i<=loopValue; i++){
            boxNum += "<option val='" + i + "'>" + i + "</option>";
        }
        return boxNum;
    }

    //roomInfo select boxes html block
    function buildRoomInfoHtmlBlock(){
        var roomHtml = "<li class='list-unstyled'>Adults";
        roomHtml += "<select class='adultQty'></select></li>";
        roomHtml += "<li class='list-unstyled'>Children";
        roomHtml += "<select class='childrenQty'></select></li>";
        return roomHtml;
    }

    //room number html block
    function buildRoomNumBlock(i){
        var listRoomVal = "<ul class='list-inline'></ul><li class='list-unstyled'>Room " + i + "</li>";
        return listRoomVal;
    }

    //populate the room qty select box passing in value
    $('.roomQty').append(buildOptionsHtmlBlock(9));

    //save selected room qty
    $('.roomQty').on('click ', function(){
        $('.roomInfo').empty();
        var roomQtyNum = $('.roomQty').val();

        //loops and appends room info for amount of rooms selected
        for(i=1; i<=roomQtyNum; i++){
            $('.roomInfo').append(buildRoomNumBlock(i),
                buildRoomInfoHtmlBlock() );
        }
        $('.adultQty, .childrenQty' ).append(buildOptionsHtmlBlock(9));
    });
});



