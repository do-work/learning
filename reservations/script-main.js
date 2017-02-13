
$(function(){

    //jQuery for both jQuery UI datepicker's
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

    //general 1-9 loop for various buttons. pass in class name
    function numLoop(className, loopValue){
        var boxNum = '';
        for(i=1; i<=loopValue; i++){
            boxNum += "<option val='" + i + "'>" + i + "</option>";
            $('.'+className).html(boxNum);
        }
    }
    //roomInfo html template that gets appended upon roomQty selection
    function appendHtml(){
        var roomHtml = "<ul class='list-unstyled list-inline'><li id='listRoomNum'>Room</li>";
        roomHtml += "<li>Adults";
        roomHtml += "<select class='adultQty'></select></li>";
        roomHtml += "<li>Children";
        roomHtml += "<select class='childrenQty'></select></li></ul>";
        $('.roomInfo').append(roomHtml);
    }

    //room qty loop for each room
    $('.roomQty').on('click ', function(){
        var roomQtyNum = $('.roomQty').val();

        for(i=0; i<roomQtyNum; i++){
            appendHtml();
        }
        numLoop("adultQty", 9);
        numLoop("childrenQty", 9);
    });

    numLoop("roomQty", 9);

});



