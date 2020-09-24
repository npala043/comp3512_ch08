// convert comma-separated values into an array
let countries = csv.split(",");
console.log(countries);

// convert array into delimited string
console.log(countries.join());

// check if these are arrays
console.log(Array.isArray(csv));
console.log(Array.isArray(countries));

//  sort a simple array 
countries.sort();
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element
countries.pop();
console.log(countries);

// add new elements to the front of the array
countries.unshift("Australia","China");
console.log(countries);

// search for element
console.log(countries.includes("Germany"));

// search for element index
console.log(countries.indexOf("Germany"));

// make a new array by extracting from another array
countries.splice(0, 0, "Greece");
console.log(countries);

console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let city of cities) {
   if (city.continent == "NA") {
      console.log(`${city.city}'s continent is NA`);
   }
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let gallery of galleries) {
   if (gallery.location.country == "USA") {
      console.log(`${gallery.name} is located in the USA`)
   }
}

console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let color of colors) {
   if (color.luminance < 75) {
      console.log(`${color.name}'s luminance is <75`);
   }
}

console.log('---------------------');

// use two nested loops - outer: loop thru colors
for (let color of colors) {
   console.log(`${color.name}`);
   let sum = 0;
   for (let value of color.rgb) {
      sum += value;
   }
   console.log(sum);
}

console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property 
*/

document.write(`<ul>`);
for (let gallery of galleries) {
   document.write(`<li><a href="${gallery.url}">${gallery.name}</a></li>`);
}
document.write(`</ul>`);

/* use a loop output using document.write an unordered
   list of color names in the colors array.
   Set the style property of each <li> as follows: 
   1. set the background color to the values in the rgb array using the CSS 
      rgb() function.  This make the background color of the item the same
      as the color name.
   2. Set the text color to white if the luminosity is less than 75. This will 
    make the text color white for the darker colors.  
*/

document.write(`<ul>`);
for (let color of colors) {
   if (color.luminance < 75) {
      document.write(`<li style="background-color:rgb(${color.rgb});color:white;">${color.name}</li>`);
   } else {
      document.write(`<li style="background-color:rgb(${color.rgb});color:black;">${color.name}</li>`);
   }
}
document.write(`</ul>`);