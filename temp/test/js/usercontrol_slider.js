// JavaScript Document
$(document).ready(function() {
    //Slider
    $(".slider").each(function() {
        //debugger;
        var minValue = $(this).children(":hidden[id='MinValue']").val();
        var maxValue = $(this).children(":hidden[id='MaxValue']").val();
        var init_From = $(this).children(":hidden[id='InitValueFrom']").val();
        var init_To = $(this).children(":hidden[id='InitValueTo']").val();
        var stepValue = $(this).children(":hidden[id='StepValue']").val();
        var uom = $(this).children(":hidden[id='UOM']").val();
        var range_From = $(this).children(":hidden[id$='_From']")
        var range_To = $(this).children(":hidden[id$='_To']");
        var textSpan = $(this).prev().children(".ui-slider-fieldSpan");
        $(this).slider({
            range: true,
            min: parseInt(minValue),
            max: parseInt(maxValue),
            values: [parseInt(init_From), parseInt(init_To)],
            step: parseInt(stepValue),
            slide: function(e, ui) {
                var value1 = (parseInt(ui.values[1]) >= maxValue) ? maxValue + "+" : parseInt(ui.values[1]);
                var value0 = (ui.values[0] == "") ? minValue : parseInt(ui.values[0]);
                $(range_From).val(value0);
                $(range_To).val(value1);

                $(textSpan).html("");
                $(textSpan).html(value0 + " - " + value1 + uom);
            }
        });

        $(this).fn_SetSiderText();
    });
});


$.fn.fn_SetSiderText = function() {
    if ($(this).hasClass("slider")) {
        var textSpan = $(this).prev().children(".ui-slider-fieldSpan");
        var maxValue = $(this).children(":hidden[id='MaxValue']").val();
        var toValue = $(this).slider("values", 1);
        var uom = $(this).children(":hidden[id='UOM']").val();
        $(textSpan).html($(this).slider("values", 0) + " - " + $(this).slider("values", 1) + (toValue >= maxValue ? "+" : "") + uom);
    }
}