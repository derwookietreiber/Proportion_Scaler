$("#scale-button").click(() => {
    scaleCalculator();
})

function scaleCalculator(){
    $("*").removeClass("is-invalid");
    var originalHeight = Number($("#original-height").val());
    var originalWidth = Number($("#original-width").val());
    var newHeight = Number($("#new-height").val());
    var newWidth = Number($("#new-width").val());
    if(originalHeight <= 0){
        $("#original-height").addClass("is-invalid");
        return;
    };
    if(originalWidth <= 0){
        $("#original-width").addClass("is-invalid");
        return;
    };
    if(newHeight <= 0 && newWidth <= 0){
        $("#new-height").addClass("is-invalid");
        $("#new-height").val("");
        $("#new-width").addClass("is-invalid");
        $("#new-width").val("");
        return;
    };
    if(newHeight !== 0 && newWidth !== 0){
        $("#new-width").addClass("is-invalid");
        $("#new-width").val("");
        $("#new-height").addClass("is-invalid");
        $("#new-height").val("");
        return;
    };
    if(newHeight !== 0){
        newWidth = (newHeight * originalWidth) / originalHeight;
        $("#new-width").val(newWidth);
        $("#new-width").addClass("is-valid");
    } else {
        newHeight = (newWidth * originalHeight) / originalWidth;
        $("#new-height").val(newHeight);
        $("#new-height").addClass("is-valid");
    }
}