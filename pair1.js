// verify if string contains one of the whitelisted items from array
const string = 'veras que o filho teu não foge a luta';
const whitelist = ['fil']

if (whitelist.some(function(item) {
     return string.indexOf(item) >= 0; 
    })) 
{
    console.log('Theres at least one');
} else {
    console.log('Theres no one');
}

console.log(string.includes('fil'));


var string2 = "veras que o filho teu não foge a luta",
    regex =  /filho\b/;

console.log(regex.test(string2));