// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    // Initialize CodeMirror editor with a nice html5 canvas demo. 	
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
    editor.save();
    jsEditor.save();
    cssEditor.save();

    $("#create").click(function () {
        $("#iframe").contents().find("body").html("");
        var editor = $('.CodeMirror')[0].CodeMirror;
        $("#iframe").contents().find("body").html(editor.getValue());
    });
});


