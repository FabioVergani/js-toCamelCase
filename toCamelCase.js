 
toCamelCase=(function(a,b,c){function f(s){var p='replace';return (b.test(s)?s[p](c,function(m,b){return b?'\u0020'+b:''}).toLowerCase():s)[p](a,function(m,i){return i.toUpperCase()})};f.pattern={divide:a,separate:b,split:c};return f})(/\s(\w)/g,/[\W_]/,/[\W_]+(.|$)/g);












//==================
var test=[
'thisIsAString',
'this is a string',
'this_is_a_string',
'this.is.a.string',
'This Is a String',
'THIS_IS_A_STRING',
'This is a string.',
'This is a string.Dude',
'this-Is-A-String',
'this-is-a-string',
'this-is-a_string',
'this-is.a-string',
'This   Is a-String',
'THIS-IS_A_STRING',
'This is a-string.',	
'This    is a string-.Dude'
];

console.clear();
console.dir(toCamelCase);
test.forEach(function(x){console.log(x,'\t\t\t\t\t>',toCamelCase(x))});
