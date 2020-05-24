$(document).ready(function() {

    /**
     * A functon for switching the main part of the page ( hide first, show the other )
     */
    function partSwitch(toClose, toShow) {
        toClose.toggle(300);
        toShow.toggle(600);
        console.log("partSwitch() was called");
    }
    $('#registerPAGE').hide();

    $('#goToRegister').click( function () {
        partSwitch($('#loginPAGE'),$('#registerPAGE'))
    });

    $('#goToLogin').click( function () {
        partSwitch($('#registerPAGE'),$('#loginPAGE'))
    });
})


