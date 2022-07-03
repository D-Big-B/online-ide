let editor;

window.onload = () => {
  editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/c_cpp");
};

const changeLanguage = () => {
  let language = $("#languages").val();

  if (language === "c" || language === "cpp")
    editor.session.setMode("ace/mode/cpp");
  if (language === "php") editor.session.setMode("ace/mode/php");
  if (language === "python") editor.session.setMode("ace/mode/python");
  if (language === "node") editor.session.setMode("ace/mode/javascript");
};

const executeCode = () => {
  $.ajax({
    url: "../app/compiler.php",
    method: "POST",
    data: {
      language: $("#languages").val(),
      code: editor.getSession().getValue(),
    },

    success: function (response) {
      $(".output").text(response);
    },
  });
};
