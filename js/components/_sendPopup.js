var sendForm = {
    data: {},

    getValues: function () {
        this.data.name = $("#appointment_name").val();
        this.data.email = $("#appointment_email").val();
        this.data.phone =  $("#appointment_phone").val(); 
        this.data.kwh = $("#appointment_kwh").val();
        this.data.selected_segment = $("#selected_segment").val();
        
        return this.data;

    },
    resetValues: function () {
        $("#appointment_name").val() = " ",
        $("#appointment_email").val() = " ",
        $("#appointment_phone").val() = " ",
        $("#appointment_kwh").val() = " ",
        $("#selected_segment").val() = " ";

    },
    getName: function () {
        return $("#appointment_name").val();
    },
    getEmail: function() {
        return $("#appointment_email").val();
    },
    getPhone: function () {
        return $("#appointment_phone").val();
    },
    getKwh: function() {
        return $("#appointment_kwh").val();
    },
    getSegment: function () {
       return $("#selected_segment").val();
    },


    validateEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.getEmail());
    },

    validateName: function validateName(name) {
      var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
        return re.test(this.getName());
    },

    validatePhone: function validatePhone(phone) {
      var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        return re.test(this.getPhone);
    },
    
    showThanks: function () {
        document.querySelector(".succsess_popup_container").style.display = "block";
    },


    showValidate: function () {
        that = this;

        if (this.validateName() !== true) {
            
            $("#appointment_name").css("box-shadow", "0 0 12px rgba(255, 123, 123, .7)");
            $('#appointment_name').removeClass("img-background");
            return;

        } else {
            $('#appointment_name').addClass("img-background");
            $("#appointment_name").css("box-shadow", "0 0 24px rgba(0,0,0,.15)");
        }

        if (this.validateEmail() !== true) {
            $("#appointment_email").css("box-shadow", "0 0 12px rgba(255, 123, 123, .7)");
            $('#appointment_email').removeClass("img-background");
            return;

        } else {
            $('#appointment_email').addClass("img-background");
            $("#appointment_email").css("box-shadow", "0 0 24px rgba(0,0,0,.15)");
        }
  

        $.ajax({
            type: 'POST',
            data: JSON.stringify(this.getValues()),
            contentType: 'application/json',
            url: 'https://www.globalgreenbuildings.com/appoitment_send',                      
           // url: 'http://127.0.0.1:3001/appoitment_send',						
            success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));

               that.showThanks();
              
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(xhr, textStatus, errorThrown); 
                return;
            }
        });


        //this.resetValues();

    }

}
$("#appoitment_send").click(function(){ 
    sendForm.showValidate();
 //   console.log(sendForm.getValues());
});
