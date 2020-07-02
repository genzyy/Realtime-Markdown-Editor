/* public/script.js */

window.onload = function() {
    var convert = new showdown.Converter()
    var editor = document.getElementById('editor')
    var markdownarea = document.getElementById('markdown')   

    var convertTextAreaToMarkdown = function(){
        var markdownText = editor.value
        html = convert.makeHtml(markdownText)
        markdownarea.innerHTML = html
    };

    editor.addEventListener('input', convertTextAreaToMarkdown)

    convertTextAreaToMarkdown();
};