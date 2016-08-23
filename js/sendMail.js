$(document).ready(function () {
    /*$("#sendMail").click(function () {
    	var url = 'test2.php';
    	var sendData = $('#form').serialize();
    	/*$.ajax( {
    		url:url,
    		type:'post',
    		data:sendData,
    		success:function (data) {
                //alert(data.unserialize());
    		},
    		error:function (jqXHR,textStatus,errrorThrown) {
    			alert("连接失败");
    		}
    	});
    	$(document).ajaxError(function () {
    		alert('ajax请求发生错误');
    	});
        $.post('test2.php',$('#form').serialize());
    });*/
    
    // Variable to hold request
    var request;

    // Bind to the submit event of our form
    $("#sendMail").click(function(event){

        // Abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");

        // Serialize the data in the form
        var serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);

        // Fire off the request to /form.php
        request = $.ajax({
            url: "http://119.29.138.57/sendMail/sendMail.php",
            type: "post",
            data: serializedData
        });

        // Callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            // Log a message to the console
            //console.log("Hooray, it worked!");
            alert('邮件已发送，我们会在24小时左右回复你，请注意查收');
        });

        // Callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            alert('邮件发送失败，请联系管理员解决');
        });

        // Callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // Reenable the inputs
            //$inputs.prop("disabled", false);
        });

        // Prevent default posting of form
        event.preventDefault();
    });
});