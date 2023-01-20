var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");


    function hideMeShowForm(){
        $("#me").stop().animate({
            width: "toggle"
        }, {
            duration: 700,
            easing: "easeOutQuint"
        });

        $("table#contactform").stop().animate({
            width: "toggle",
            marginRight: "20px"
        }, {
            duration: 800,
            easing: "easeOutQuint"
        });

        $("#sayhi").stop().animate({
            height: "toggle",
            marginTop: "0px"
        }, {
            duration: 700,
            easing: "easeOutQuint"
        });

        $("#hi").stop().animate({
            height: "toggle",
            left: 0,
            marginTop: "0px"
        }, {
            duration: 700,
            easing: "easeOutQuint"
        });

        $("#dropaline").stop().animate({
            height: "toggle",
            left: 250,
            marginTop: "100px"
        }, {
            duration: 800,
            easing: "easeOutQuint"
        });
    }

    function showMeAndLinks(){

        $("#me").stop().animate({
            width: "toggle"
        },300);

        $("#sayhi").stop().animate({
            height: "toggle",
            marginTop: "50px"
        }, 300);

        $("#hi").stop().animate({
            height: "toggle",
            left: 45,
            marginTop: "90px"
        }, 300);

    }


    // function showMeAndLinks(){
    //
    //     $("#me").stop().animate({
    //         width: "toggle"
    //     }, {
    //         duration: 1000,
    //         easing: "easeOutBounce"
    //     });
    //
    //     $("#sayhi").stop().animate({
    //         height: "toggle",
    //         marginTop: "50px"
    //     }, {
    //         duration: 1000,
    //         easing: "easeOutBounce"
    //     });
    //
    //     $("#hi").stop().animate({
    //         height: "toggle",
    //         left: 45,
    //         marginTop: "90px"
    //     }, {
    //         duration: 1000,
    //         easing: "easeOutBounce"
    //     });
    //
    // }

    // var setupFormValidation = function(){
    //
    //     $("a#submitform").click(function(){
    //         submitForm();
    //     });
    //
    //     $("#simpleform").validate({
    //         errorLabelContainer: $("div#contacterrors"),
    //         rules: {
    //             name: { required: true },
    //             email: { required: true, email:true },
    //             comment: { required: true }
    //         },
    //         messages:{
    //             name: "what was your name again?",
    //             email: "dont believe you... enter a valid email address",
    //             comment: "whats up? comment is empty.."
    //         }
    //     });
    //
    // }

    var submitForm = function(){

        if($("#simpleform").valid()){
            var name = $("input#name").val();
            var email = $("input#email").val();
            var comment =  $("textarea#comment").val();
            var dataString = 'name='+ name + '&email=' + email + '&comment=' + comment;

            //thanksforstoppingby();return false;
            //alert(dataString);return false;

            $.ajax({
                type: "POST",
                url: "php/simpleform-action.php",
                data: dataString,
                success: function(html){
                    //$("#result").html(html); //For error logging
                    thanksforstoppingby();
                }
            });


            return false;

        }else{
            $(".errors").prependTo("div#contacterrors");

        }
    }

    function thanksforstoppingby(){

        $("table#contactform").stop().animate({
            width: "toggle",
            marginRight: "0px"
        }, {
            duration: 500,
            easing: "easeOutQuint"
        });


        $("#me").stop().animate({
            width: "toggle"
        }, {
            duration: 1000,
            easing: "easeOutBounce"
        });

        $("#dropaline").stop().animate({
            height: "toggle",
            left: 0,
            marginTop: "0px"
        }, {
            duration: 700,
            easing: "easeOutQuint"
        });

        $("#thanksforstoppingby").stop().animate({
            height: "toggle",
            left: 45,
            marginTop: "90px"
        }, {
            duration: 1000,
            easing: "easeOutQuint"
        });
    }
}
