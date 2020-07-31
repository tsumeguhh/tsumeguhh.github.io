$(function() {
    var convertGrade = function(letterGrade) {
        letterGrade = letterGrade.toUpperCase();
        if(letterGrade == 'A')
            return 4.0;
        else if(letterGrade == 'B')
            return 3.0;
        else if(letterGrade == 'C')
            return 2.0;
        else if(letterGrade == 'D')
            return 1.0;
        else
            return 0.0;
    };
    $("#calculate").click(function() {
        var i = 2;
        var top = 0;
        var bottom = 0;
        if($("#course3_grade").val() != ""){
            if($("#course4_grade").val() != "")
                i = 4;
            else
                i = 3;
        }
        top += (convertGrade($("#course1_grade").val()) * parseInt($("#course1_hours").val()));
        bottom += parseInt($("#course1_hours").val());
        top += (convertGrade($("#course2_grade").val()) * parseInt($("#course2_hours").val()));
        bottom += parseInt($("#course2_hours").val());
        if($("#course3_grade").val() != ""){
            top += (convertGrade($("#course3_grade").val()) * parseInt($("#course3_hours").val()));
            bottom += parseInt($("#course3_hours").val());
        }
        if($("#course4_grade").val() != ""){
            top += (convertGrade($("#course4_grade").val()) * parseInt($("#course4_hours").val()));
            bottom += parseInt($("#course4_hours").val());
        }
        var totalGPA = top/bottom;
        $("#totalGPA").val(totalGPA);
    });
    $("#reset").click(function() {
        $(":text").val("");
    });
})