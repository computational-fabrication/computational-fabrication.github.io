$(document).ready(function() {
    // all custom jQuery will go here
    $('#stylized_fab_toggle').click(function(){
        $("#stylized_fab").toggle();
    });
    $('#percept_fab_toggle').click(function(){
        $("#percept_fab").toggle();
    });
    $('#robogami_toggle').click(function(){
        $("#robogami").toggle();
    });
    $('#surfcuit_toggle').click(function(){
        $("#surfcuit").toggle();
    });
});

function myFunction(selectObject) {
    var value = selectObject.value;
    var dEU = 'inline';
    var dUS = 'none';
    var dA = 'none';
    switch(value) {
        case '1':
            dEU = 'none';
            dUS = 'inline';
            break;
        case '2':
            dEU = 'none';
            dA = 'inline';
            break;
    }
    var eus = document.getElementsByClassName('t_EU');
    for(i = 0; i < eus.length; i++) {
        eus[i].style.display = dEU;
    }
    var uss = document.getElementsByClassName('t_US');
    for(i = 0; i < uss.length; i++) {
        uss[i].style.display = dUS;
    }
    var as = document.getElementsByClassName('t_A');
    for(i = 0; i < as.length; i++) {
        as[i].style.display = dA;
    }
    var sels = document.getElementsByClassName('selector');
    for(i = 0; i < sels.length; i++) {
        sels[i].value = value;
    }
}