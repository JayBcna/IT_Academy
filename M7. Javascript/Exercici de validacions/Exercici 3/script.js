$().ready(function () {
    // Mensaje de campo obligatorio
    let msg = '<p class="text-danger">Camp obligatori</p>';

    // Validación de formulario
    $("#myForm").validate({
        rules: {
            inputName: {
                required: true,
                minlength: 2,
            },
            inputEmail: {
                required: true,
                email: true,
            },
            inputPassword: {
                required: true,
                minlength: 8,
            },
            inputPasswordCheck: {
                required: true,
                minlength: 8,
                equalTo: "#inputPassword",
            },
            inputAddress: {
                required: true,
                minlength: 5,
            },
            inputProvince: {
                required: true,
            },
            inputCity: {
                required: true,
                minlength: 3,
            },
            inputZip: {
                required: true,
                minlength: 5,
            },
            gridCheck: "required",
        },
        messages: {
            inputName: msg,
            inputEmail: {
                required: msg,
                minlength: '<p class="text-danger">Introdueix un email vàlid</p>',
            },
            inputPassword: {
                required: msg,
                minlength: '<p class="text-danger">La contrasenya ha de tenir mínim 8 caràcters, un majúscula i un nombre</p>',
            },
            inputPasswordCheck: {
                required: msg,
                minlength: '<p class="text-danger">La contrasenya ha de tenir mínim 8 caràcters, un majúscula i un nombre</p>',
                equalTo: '<p class="text-danger">Les contrasenyes han de coincidir</p>',
            },
            inputAddress: {
                required: msg,
                minlength: '<p class="text-danger">La direcció ha de tenir mínim 5 caracters</p>',
            },
            inputProvince: {
                required: msg,
            },
            inputCity: {
                required: msg,
                minlength: '<p class="text-danger">La ciutat ha de tenir mínim 3 caracters</p>',
            },
            inputZip: {
                required: msg,
                minlength: '<p class="text-danger">Introdueix un codi postal vàlid</p>',
            },
            gridCheck: '<p class="text-danger">Accepta els termes i condicions per continuar</p>',
        },
        submitHandler: function (form) {
            alert("Formulario enviado");
            return false;
        },
    });
});
