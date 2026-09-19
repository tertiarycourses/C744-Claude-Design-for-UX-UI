// Run in the browser console on the prototype.
const issues = [];
document.querySelectorAll('button, input, select, a[href]').forEach((el) => {
  const style = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  if (rect.width < 44 || rect.height < 44) issues.push({type:'target-size', element:el.outerHTML.slice(0,80)});
  if (style.outlineStyle === 'none') issues.push({type:'verify-focus-visible', element:el.outerHTML.slice(0,80)});
});
document.querySelectorAll('input,select').forEach((el) => {
  if (!el.labels?.length) issues.push({type:'missing-label', id:el.id});
});
console.table(issues);
