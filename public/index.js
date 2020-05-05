var mode = "height";


// Event Handlers

$("#scale-button").click(() => {
    scaleCalculator();
});

$("#16_9_Button").click(() => {
    $("#original-width").val("1920");
    $("#original-height").val("1080");
});

$("#4_3_Button").click(() => {
    $("#original-width").val("1600");
    $("#original-height").val("1200");
});

$("#3_2_Button").click(() => {
    $("#original-width").val("2560");
    $("#original-height").val("1700");
});

$("#21_9_Button").click(() => {
    $("#original-width").val("3440");
    $("#original-height").val("1440");
});

$("#16_10_Button").click(() => {
    $("#original-width").val("1900");
    $("#original-height").val("1200");
});

$('#scalerForm input[name=scalerSelector]').on('change', function () {
    mode = $('input[name=scalerSelector]:checked', '#scalerForm').val();
    if (mode === "height") {
        $("#scaler-new-value-label").fadeToggle("slow", () => {
            $("#scaler-new-value-label").text("New Height");
            $("#scaler-new-value-label").fadeIn("slow");
        });
    } else {
        $("#scaler-new-value-label").fadeToggle("slow", () => {
            $("#scaler-new-value-label").text("New Width");
            $("#scaler-new-value-label").fadeIn("slow");
        });
    }
});


// Main Function

function scaleCalculator() {
    $("*").removeClass("is-invalid");
    $("*").removeClass("is-valid");
    let originalHeight = Number($("#original-height").val());
    let originalWidth = Number($("#original-width").val());
    let newValue = Number($("#scaler-new-value").val());
    if (originalWidth <= 0) {
        $("#original-width").addClass("is-invalid");
        return;
    } else {
        $("#original-width").addClass("is-valid");
    };
    if (originalHeight <= 0) {
        $("#original-height").addClass("is-invalid");
        return;
    } else {
        $("#original-height").addClass("is-valid");
    };
    if (newValue <= 0) {
        $("#scaler-new-value").addClass("is-invalid");
        return;
    } else {
        $("#scaler-new-value").addClass("is-valid");
    };
    if (mode === "height") {
        let newWidth = (newValue * originalWidth) / originalHeight;
        $("#result-width").text(Math.round(newWidth * 100) / 100);
        $("#result-height").text(newValue);
        $("#result-container").fadeIn("slow");
    } else {
        let newHeight = (newValue * originalHeight) / originalWidth;
        $("#result-width").text(Math.round(newHeight * 100) / 100);
        $("#result-height").text(newHeight);
        $("#result-container").fadeIn("slow");
    }
}