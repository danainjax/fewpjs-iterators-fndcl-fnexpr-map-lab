const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

   

const titleCased = () => {
  return tutorials.map( string => {
    const arrayOfStrings = string.split(' ');
    console.log(arrayOfStrings);
    const capitalizedArrayOfStrings =
      arrayOfStrings.map( array => array.charAt(0).toUpperCase() + array.slice(1) );
      console.log(capitalizedArrayOfStrings);
    const newArray = capitalizedArrayOfStrings.join(' ');
    console.log(newArray);
    return newArray;
  });
  
}
