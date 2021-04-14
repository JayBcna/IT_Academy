// Formulario
const form = document.getElementById("form");
const input = document.querySelectorAll(".form-control");

// Expresiones regulares para la validación
const exp = {
    fullName: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,'-]+$/u,

    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

    // Min 8 caracteres, 1 en mayúsculas, y 1 número
    pwd: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
};

// Boolean de cada campo
const fields = {
    fullname: false,
    email: false,
    pwd: false,
};

// Validación de formulario.
const validacion = (e) => {
    switch (e.target.name) {
        case "fullName":
            validarInput(exp.fullName, e.target, "inputName");
            break;
        case "email":
            validarInput(exp.email, e.target, "inputEmail");
            break;
        case "pwd":
            validarInput(exp.pwd, e.target, "inputPassword");
            validarPwd2();
            break;
        case "pwdCheck":
            validarPwd2();
            break;
        default:
            break;
    }
};

// Validación de cada campo
const validarInput = (expr, inpt, field) => {
    if (expr.test(inpt.value)) {
        document.getElementById(field).classList.add("is-valid");
        document.getElementById(field).classList.remove("is-invalid");
        document.querySelector(`.warning_${field}`).style.display = "none";
        fields[field] = true;
    } else {
        document.getElementById(field).classList.add("is-invalid");
        document.querySelector(`.warning_${field}`).style.display = "block";
        fields[field] = false;
    }
};

// // Validación del campo 'Confirma la contraseña'
const validarPwd2 = () => {
    const pwd1 = document.getElementById("inputPassword");
    const pwd2 = document.getElementById("inputPasswordCheck");

    if (pwd1.value !== pwd2.value || pwd2.value.length == 0) {
        document.getElementById("inputPasswordCheck").classList.add("is-invalid");
        document.querySelector(".warning_inputPasswordCheck").style.display = "block";
        fields["inputPassword"] = false;
    } else {
        document.getElementById("inputPasswordCheck").classList.add("is-valid");
        document.getElementById("inputPasswordCheck").classList.remove("is-invalid");
        document.querySelector(".warning_inputPasswordCheck").style.display = "none";
        fields["inputPassword"] = true;
    }
};

// Checkbox para visualizar la contraseña
function pwdReveal() {
    var x = document.getElementById("inputPassword");
    var y = document.getElementById("inputPasswordCheck");

    if (x.type === "password" || y.type === "password") {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}

// Ejecución de validación en cada tecla de usuario o salto de campo.
input.forEach((inpt) => {
    inpt.addEventListener("blur", validacion);
    // inpt.addEventListener("keyup", validacion);
});

// Mensaje envío formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (fields.fullname || fields.fullname == "") {
        document.querySelector(".warning_sentFail").style.display = "block";
        setTimeout(() => {
            document.querySelector(".warning_sentFail").style.display = "none";
        }, 3500);
    } else {
        form.reset();
        document.querySelector(".warning_sentSuccess").style.display = "block";
        setTimeout(() => {
            document.querySelector(".warning_sentSuccess").style.display = "none";
        }, 3500);
    }
});