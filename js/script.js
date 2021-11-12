document.addEventListener("DOMContentLoaded", function(e) {
    var fecha = $('#datepicker').val();
    console.log(fecha);
    if (fecha == "Seleccionar fecha") {
        document.getElementById("1000").disabled = true;
        document.getElementById("1100").disabled = true;
        document.getElementById("1200").disabled = true;
        document.getElementById("1400").disabled = true;
        document.getElementById("1500").disabled = true;
        document.getElementById("1600").disabled = true;
        document.getElementById("1700").disabled = true;
        document.getElementById("1800").disabled = true;
        document.getElementById("1900").disabled = true;
        document.getElementById("fecha_horario").disabled = true;
    }
});

function activa_boton() {
    document.getElementById("1000").disabled = false;
    document.getElementById("1100").disabled = false;
    document.getElementById("1200").disabled = false;
    document.getElementById("1400").disabled = false;
    document.getElementById("1500").disabled = false;
    document.getElementById("1600").disabled = false;
    document.getElementById("1700").disabled = false;
    document.getElementById("1800").disabled = false;
    document.getElementById("1900").disabled = false;
    // var fecha_prueba = $('#datepicker').val();
    // guardarCookie("fecha_seleccionada", fecha_prueba);
}

function confirmarhorario() {
    window.location.href = "datos.html"
}

function guardarCookie(fecha, valor) {
    document.cookie = fecha + "=" + valor;;
}

function validarDatos() {
    var valor_nombre = document.getElementById("nombre").value;
    var valor_celular = document.getElementById("celular").value;

    if ((valor_nombre == "") && (valor_celular == "") && !(document.getElementById("invalidCheck").checked)) {
        document.getElementById("term_cond").style.color = "red"
        nombre.style.borderColor = "red";
        celular.style.borderColor = "red";
    } else if ((valor_nombre != "") && (valor_celular == "") && (!document.getElementById("invalidCheck").checked)) {
        document.getElementById("term_cond").style.color = "red"
        celular.style.borderColor = "red";
        if (valor_nombre.length <= 3) {
            document.getElementById("error").innerHTML = "Debe ingresar el nombre completo";
            nombre.style.borderColor = "red";
        } else {
            document.getElementById("error").innerHTML = "";
            nombre.style.borderColor = "green";
        }
    } else if ((valor_nombre != "") && (valor_celular != "") && (!document.getElementById("invalidCheck").checked)) {
        document.getElementById("term_cond").style.color = "red";
        if ((valor_nombre.length <= 3) && (valor_celular.length < 9)) {
            document.getElementById("error").innerHTML = "Debe ingresar el nombre completo";
            nombre.style.borderColor = "red";
            document.getElementById("error1").innerHTML = "Debe ingresar un número de celular válido";
            celular.style.borderColor = "red";
        } else if ((valor_nombre.length > 3) && (valor_celular.length < 9)) {
            nombre.style.borderColor = "green";
            document.getElementById("error").innerHTML = "";
            document.getElementById("error1").innerHTML = "Debe ingresar un número de celular válido";
            celular.style.borderColor = "red";
        } else {
            nombre.style.borderColor = "green";
            celular.style.borderColor = "green";
            document.getElementById("error1").innerHTML = "";
            document.getElementById("term_cond").style.color = "red";
        }
    } else if ((valor_nombre == "") && (valor_celular == "") && (document.getElementById("invalidCheck").checked)) {
        document.getElementById("error").innerHTML = "Debe ingresar el nombre completo";
        document.getElementById("error1").innerHTML = "Debe ingresar un número de celular válido";
        nombre.style.borderColor = "red";
        celular.style.borderColor = "red";
    } else {
        document.getElementById("error").style.display = "none";
        document.getElementById("error1").style.display = "none";
        document.getElementById("term_cond").style.color = "green";
        nombre.style.borderColor = "green";
        celular.style.borderColor = "green";
        guardarCookie("nombre_cliente", valor_nombre);
        guardarCookie("celular_cliente", valor_celular);
        window.location.href = "index.html";
        alert("¡Su solicitud fue enviada con éxito!");
    }
}

var hora10 = document.getElementById("1000");
var hora11 = document.getElementById("1100");
var hora12 = document.getElementById("1200");
var hora14 = document.getElementById("1400");
var hora15 = document.getElementById("1500");
var hora16 = document.getElementById("1600");
var hora17 = document.getElementById("1700");
var hora18 = document.getElementById("1800");
var hora19 = document.getElementById("1900");

document.getElementById('1000').addEventListener("click", function() {
    if (hora11.classList.contains("active")) {
        hora11.classList.remove("active");
    }
    if (hora12.classList.contains("active")) {
        hora12.classList.remove("active");
    }
    if (hora14.classList.contains("active")) {
        hora14.classList.remove("active");
    }
    if (hora15.classList.contains("active")) {
        hora15.classList.remove("active");
    }
    if (hora16.classList.contains("active")) {
        hora16.classList.remove("active");
    }
    if (hora17.classList.contains("active")) {
        hora17.classList.remove("active");
    }
    if (hora18.classList.contains("active")) {
        hora18.classList.remove("active");
    }
    if (hora19.classList.contains("active")) {
        hora19.classList.remove("active");
    }
    if (!hora10.classList.contains("active")) {
        hora10.classList.toggle("active");
        let hora = hora10.id;
        document.getElementById("fecha_horario").disabled = false;
        // document.getElementById("fecha_horario").disabled = false;
        // guardarCookie("horario_seleccionado", hora);
        // location.reload();
    }
});

document.getElementById('1100').addEventListener("click", function() {
    if (hora10.classList.contains("active")) {
        hora10.classList.remove("active");
    }
    if (hora12.classList.contains("active")) {
        hora12.classList.remove("active");
    }
    if (hora14.classList.contains("active")) {
        hora14.classList.remove("active");
    }
    if (hora15.classList.contains("active")) {
        hora15.classList.remove("active");
    }
    if (hora16.classList.contains("active")) {
        hora16.classList.remove("active");
    }
    if (hora17.classList.contains("active")) {
        hora17.classList.remove("active");
    }
    if (hora18.classList.contains("active")) {
        hora18.classList.remove("active");
    }
    if (hora19.classList.contains("active")) {
        hora19.classList.remove("active");
    }
    if (!hora11.classList.contains("active")) {
        hora11.classList.toggle("active");
        let hora = hora11.id;
        document.getElementById("fecha_horario").disabled = false;
        // guardarCookie("horario_seleccionado", hora);
        // document.getElementById("fecha_horario").disabled = false;
        // location.reload();
    }
});

document.getElementById('1200').addEventListener("click", function() {
    if (hora10.classList.contains("active")) {
        hora10.classList.remove("active");
    }
    if (hora11.classList.contains("active")) {
        hora11.classList.remove("active");
    }
    if (hora14.classList.contains("active")) {
        hora14.classList.remove("active");
    }
    if (hora15.classList.contains("active")) {
        hora15.classList.remove("active");
    }
    if (hora16.classList.contains("active")) {
        hora16.classList.remove("active");
    }
    if (hora17.classList.contains("active")) {
        hora17.classList.remove("active");
    }
    if (hora18.classList.contains("active")) {
        hora18.classList.remove("active");
    }
    if (hora19.classList.contains("active")) {
        hora19.classList.remove("active");
    }
    if (!hora12.classList.contains("active")) {
        hora12.classList.toggle("active");
        let hora = hora12.id;
        document.getElementById("fecha_horario").disabled = false;
        // guardarCookie("horario_seleccionado", hora);
        // document.getElementById("fecha_horario").disabled = false;
        // location.reload();
    }
});
document.getElementById('1400').addEventListener("click", function() {
    if (hora10.classList.contains("active")) {
        hora10.classList.remove("active");
    }
    if (hora12.classList.contains("active")) {
        hora12.classList.remove("active");
    }
    if (hora11.classList.contains("active")) {
        hora11.classList.remove("active");
    }
    if (hora15.classList.contains("active")) {
        hora15.classList.remove("active");
    }
    if (hora16.classList.contains("active")) {
        hora16.classList.remove("active");
    }
    if (hora17.classList.contains("active")) {
        hora17.classList.remove("active");
    }
    if (hora18.classList.contains("active")) {
        hora18.classList.remove("active");
    }
    if (hora19.classList.contains("active")) {
        hora19.classList.remove("active");
    }
    if (!hora14.classList.contains("active")) {
        hora14.classList.toggle("active");
        let hora = hora14.id;
        document.getElementById("fecha_horario").disabled = false;
        //     guardarCookie("horario_seleccionado", hora);
        //     document.getElementById("fecha_horario").disabled = false;
        //     location.reload();
    }
});
document.getElementById('1500').addEventListener("click", function() {
    if (hora10.classList.contains("active")) {
        hora10.classList.remove("active");
    }
    if (hora12.classList.contains("active")) {
        hora12.classList.remove("active");
    }
    if (hora14.classList.contains("active")) {
        hora14.classList.remove("active");
    }
    if (hora11.classList.contains("active")) {
        hora11.classList.remove("active");
    }
    if (hora16.classList.contains("active")) {
        hora16.classList.remove("active");
    }
    if (hora17.classList.contains("active")) {
        hora17.classList.remove("active");
    }
    if (hora18.classList.contains("active")) {
        hora18.classList.remove("active");
    }
    if (hora19.classList.contains("active")) {
        hora19.classList.remove("active");
    }
    if (!hora15.classList.contains("active")) {
        hora15.classList.toggle("active");
        let hora = hora15.id;
        document.getElementById("fecha_horario").disabled = false;
        // guardarCookie("horario_seleccionado", hora);
        // document.getElementById("fecha_horario").disabled = false;
        // location.reload();
    }
});

document.getElementById('1600').addEventListener("click", function() {
    if (hora10.classList.contains("active")) {
        hora10.classList.remove("active");
    }
    if (hora12.classList.contains("active")) {
        hora12.classList.remove("active");
    }
    if (hora14.classList.contains("active")) {
        hora14.classList.remove("active");
    }
    if (hora15.classList.contains("active")) {
        hora15.classList.remove("active");
    }
    if (hora11.classList.contains("active")) {
        hora11.classList.remove("active");
    }
    if (hora17.classList.contains("active")) {
        hora17.classList.remove("active");
    }
    if (hora18.classList.contains("active")) {
        hora18.classList.remove("active");
    }
    if (hora19.classList.contains("active")) {
        hora19.classList.remove("active");
    }
    if (!hora16.classList.contains("active")) {
        hora16.classList.toggle("active");
        let hora = hora16.id;
        document.getElementById("fecha_horario").disabled = false;
        // guardarCookie("horario_seleccionado", hora);
        // // document.getElementById("fecha_horario").disabled = false;
        // // location.reload();
    }
});

document.getElementById('1700').addEventListener("click", function() {
    if (hora10.classList.contains("active")) {
        hora10.classList.remove("active");
    }
    if (hora12.classList.contains("active")) {
        hora12.classList.remove("active");
    }
    if (hora14.classList.contains("active")) {
        hora14.classList.remove("active");
    }
    if (hora15.classList.contains("active")) {
        hora15.classList.remove("active");
    }
    if (hora16.classList.contains("active")) {
        hora16.classList.remove("active");
    }
    if (hora11.classList.contains("active")) {
        hora11.classList.remove("active");
    }
    if (hora18.classList.contains("active")) {
        hora18.classList.remove("active");
    }
    if (hora19.classList.contains("active")) {
        hora19.classList.remove("active");
    }
    if (!hora17.classList.contains("active")) {
        hora17.classList.toggle("active");
        let hora = hora17.id;
        document.getElementById("fecha_horario").disabled = false;
        // guardarCookie("horario_seleccionado", hora);
        // document.getElementById("fecha_horario").disabled = false;
        // location.reload();
    }
});

document.getElementById('1800').addEventListener("click", function() {
    if (hora10.classList.contains("active")) {
        hora10.classList.remove("active");
    }
    if (hora12.classList.contains("active")) {
        hora12.classList.remove("active");
    }
    if (hora14.classList.contains("active")) {
        hora14.classList.remove("active");
    }
    if (hora15.classList.contains("active")) {
        hora15.classList.remove("active");
    }
    if (hora16.classList.contains("active")) {
        hora16.classList.remove("active");
    }
    if (hora17.classList.contains("active")) {
        hora17.classList.remove("active");
    }
    if (hora11.classList.contains("active")) {
        hora11.classList.remove("active");
    }
    if (hora19.classList.contains("active")) {
        hora19.classList.remove("active");
    }
    if (!hora18.classList.contains("active")) {
        hora18.classList.toggle("active");
        let hora = hora18.id;
        document.getElementById("fecha_horario").disabled = false;
        // guardarCookie("horario_seleccionado", hora);
        // document.getElementById("fecha_horario").disabled = false;
        // location.reload();
    }
});

document.getElementById('1900').addEventListener("click", function() {
    if (hora10.classList.contains("active")) {
        hora10.classList.remove("active");
    }
    if (hora12.classList.contains("active")) {
        hora12.classList.remove("active");
    }
    if (hora14.classList.contains("active")) {
        hora14.classList.remove("active");
    }
    if (hora15.classList.contains("active")) {
        hora15.classList.remove("active");
    }
    if (hora16.classList.contains("active")) {
        hora16.classList.remove("active");
    }
    if (hora17.classList.contains("active")) {
        hora17.classList.remove("active");
    }
    if (hora18.classList.contains("active")) {
        hora18.classList.remove("active");
    }
    if (hora11.classList.contains("active")) {
        hora11.classList.remove("active");
    }
    if (!hora19.classList.contains("active")) {
        hora19.classList.toggle("active");
        let hora = hora19.id;
        document.getElementById("fecha_horario").disabled = false;
        // guardarCookie("horario_seleccionado", hora);
        // document.getElementById("fecha_horario").disabled = false;
        // location.reload();
    }
});

$(document).ready(function() {
    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $("#datepicker").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: today,
        closeText: 'Cerrar',
        prevText: '<Ant',
        nextText: 'Sig>',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    });
    $('.fa-calendar').click(function() {
        $("#datepicker").focus();
    });
});