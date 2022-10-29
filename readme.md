## To do

1. ability to set the password length
2. Add “copy-on-click”
3. Toggle “symbols” and “numbers” on/off
4. Make it responsive(mobile view) probably try to add padding to the conatiner instead of adding padding to every element

## Learnings

1. properties like font or color are inherited by child elements (not form elements).
2. [copy to clipboard](https://stackabuse.com/how-to-copy-to-clipboard-in-javascript-with-the-clipboard-api/)
3. Never skip the heading level. It means that headings should always be in logical order. So, start from h1, h2, h3, and so on.

   > I believe skipping heading levels was considered acceptable but not ideal under WCAG1, but WCAG2 is stricter in this regard. As one example, screen readers will announce the heading level and the skipped number would make it seem like the user had missed some hidden content when they haven't. There shouldn't be any need to skip a level if CSS is used to style the way you'd like.

4. Avoid using br for presentational purposes. instead use a p tag

5. Never use the HTML event handler attributes. It is never a good idea to mix up HTML and JavaScript. It's best to keep them separated.
