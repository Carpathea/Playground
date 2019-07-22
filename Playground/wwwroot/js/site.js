// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    SetUpCodeMirrors();

    SetUpTutorials();

    $("#next").click(function () {
        var divs = $('div[id^="page-"]');

        for (var i = 0; i < divs.length; i++) {
            if (divs.eq(i).is(":visible")) {
                console.log(i);
                if (i === divs.length - 1) {
                    i = 0;
                    divs.eq(i).show();
                    divs.eq(divs.length - 1).hide();
                }
                else {
                    divs.eq(i).hide();
                    divs.eq(i + 1).show();
                }
                return false;
            }
        }
    });

    $("#previous").click(function () {
        var divs = $('div[id^="page-"]');
        for (var i = 0; i < divs.length; i++) {
            if (divs.eq(i).is(":visible")) {
                console.log(i);
                if (i === 0) {
                    divs.eq(divs.length - 1).show();
                    divs.eq(0).hide();
                }
                else {
                    divs.eq(i).hide();
                    divs.eq(i - 1).show();
                }
                return false;
            }
        }
    });

    $("#create").click(function () {
        $("#iframe").contents().find("body").html("");
        var htmlEditor = $('.CodeMirror')[0].CodeMirror;
        var cssEditor = $('.CodeMirror')[2].CodeMirror;
        $("#iframe").contents().find("body").html(htmlEditor.getValue());
        $('#iframe').contents().find("head")
                .append($("<style type='text/css'>" + cssEditor.getValue() + "</style>"));
    });
});

function SetUpCodeMirrors() {
    var editor = CodeMirror.fromTextArea(document.getElementById('htmlEditor'), {
        mode: 'xml',
        lineNumbers: true,
        htmlMode: true,
        theme: "ambiance"
    });
    var jsEditor = CodeMirror.fromTextArea(document.getElementById('jsEditor'), {
        mode: 'javascript',
        lineNumbers: true,
        theme: "ambiance"
    });
    var cssEditor = CodeMirror.fromTextArea(document.getElementById('cssEditor'), {
        mode: 'css',
        lineNumbers: true,
        theme: "ambiance"
    });
    CodeMirror.keyMap.default["Shift-Tab"] = "indentLess";
    CodeMirror.keyMap.default["Tab"] = "indentMore";
    editor.save();
    jsEditor.save();
    cssEditor.save();
}

function SetUpTutorials() {
    var divs = $('div[id^="page-"]');
    for (var i = 1; i < divs.length; i++) {
            divs.eq(i).hide();
    }
}
