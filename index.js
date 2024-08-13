document.querySelector("main").addEventListener("scroll", function()
{
    document.querySelectorAll("pre").forEach(function(caret)
                                             {
                                                 const caretRect = caret.getBoundingClientRect();
                                                 const caretRectCenter = caretRect.top + caretRect.height / 2;
                                                 const viewportCenter = window.innerHeight / 2;

                                                 if ((caretRectCenter >= viewportCenter - 200 && caretRectCenter
                                                      <= viewportCenter))
                                                 {
                                                     caret.classList.add("animate");
                                                 }
                                                 else
                                                 {
                                                     caret.classList.remove("animate");
                                                 }
                                             })
});