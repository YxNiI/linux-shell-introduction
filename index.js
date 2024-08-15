// The carets inside the "pre"-elements, which are inside the "main"-element,
// start blinking when they are in the middle of the viewport.
document.querySelector("main").addEventListener("scroll", function()
{
    document.querySelectorAll("pre").forEach(function(caret)
                                             {
                                                 const caretRect = caret.getBoundingClientRect();
                                                 const caretRectCenter = caretRect.top + caretRect.height / 2;
                                                 const viewportCenter = window.innerHeight / 2;

                                                 if (caretRectCenter >= viewportCenter - 100 && caretRectCenter
                                                      <= viewportCenter + 100)
                                                 {
                                                     caret.classList.add("animate");
                                                 }
                                                 else
                                                 {
                                                     caret.classList.remove("animate");
                                                 }
                                             })
});