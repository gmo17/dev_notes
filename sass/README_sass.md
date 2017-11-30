#SASS SUMMARY

SASS?
Syntatically Awesome Stylesheets or simply know as "SASS" is a stylesheet language, primary coded in Ruby.

Sass is a great tool for writing slim-lined stylesheet with less line of codes hence significantly reducing development time.
Sass also helps developer to avoid repetitions and redundant lines of codes.
This can be achieved by making use of reusable values such as "Varibles", "Mixings" and "Nestings" for a leaner DOM tree.

"Sass mainly consists of two syntaxes:

- The original syntax (.sass) known as "the indented syntax or "Sassy CSS", as the name implies has no curly braces nor semicolons. Indentations serve as code blocks separators with newline characters to separate rules.

EXAMPLE
// Sass style:
$navBg: #3bbfce
$margin: 16px

.navbar
  border-color: $navBg
  color: darken($navBg, 10%)

- The newer syntax (.scss), "SCSS" in the other hand shares some similarities with CSS.
In this instance braces denote code blocks and semicolons separate lines within a block, any valid CSS rule is also valid in SCSS syntax.

EXAMPLE
// In SCSS style:
$navBg: #3bbfce;
$margin: 16px;

.navbar {
  border-color: $navBg;
  color: darken($navBg, 10%);
}

Nested syntax and functions can be used for colour manipulation and apply mathematic logics.



In this brief summary the focus will be on the .scss.

PARTIALS
Partials are SASS or SCSS files containing small snippets of "CSS" codes. They are saved with a preceding underscore "_partials.scss"_. The underscore is optional when to importing a partial file in "SASS". partials are not compile into CSS. A partial file should be imported with "@import" directive when needed.

IMPORT
The import directive aims at helping developers to write small manageable pieces of code and subsequently importing into the program whenever needed by using the "@import" directive.
e.g. if the "_partials.scss"_ partial is need simply do the following:

@import 'partials';//underscore and file extension are not required.

VARIABLES
Variables are used to represent data, this can take numerical or character form.
Variables' role is to act as memory address, whenever a variable is in use within the program it will
point to the value it has been assigned to.
Variables are always defined in a ".scss" with a "$" sign and a ";"

Example
//variable declaration
$navBg: #3bbfce;

//using the attributed value to the "$navBg" variable
aDiv{
  background-color: $navBg;
}

DEFAULT VARIABLE
When the !default flag is added to a variable at it stem and it will not be re-assigned


DATA TYPES
Is the type of data for each data object
1) Numbers - Represents integer types.
2, 10.5

2) Strings - Sequences of characters defined within single or double quotes.
'Tutorialspoint', "Tutorialspoint"

3) Colors - Used for defining color value.
red, #008000, rgb(25,255,204)

4) Booleans - Returns true or false boolean types.
10 > 9 specifies true

5) Nulls - Specifies null value, which is unknown data.
if(val==null) {//statements}

6) Space and Comma - Represents the values, which are separated by spaces or commas.
1px solid #eeeeee, 0 0 0 1px

7) Mapping - Maps from one value to another value.
FirsyKey: frstvalue, SecondKey: secvalue

DIRECTIVES
....

List of directives
1) @import - It imports the SASS or SCSS files, it directly takes the filename to import.
2) @media - It sets the style rule to different media types.
3) @extend - The @extend directive is used to inherit rules and relationships from a selector. In addition to rule(s) being inherited a selector can have its own rules.
4) @at-root - The @at-root directive is a collection of nested rules, which is able to make style block at root of the document.
5) @debug - The @debug directive detects the errors and displays the SassScript expression values to the standard error output stream.
6) @warn - The @warn directive is used to give cautionary advice about the problem; it displays the SassScript expression values to the standard error output stream.
7) @error - The @error directive displays the SassScript expression value as fatal error.


MIXING
Is the action of re-using previously declared pieces of "css" throughout the stylesheet.
Mixins are useful when a code snippet is used by series of selectors through the application.
Multiple values or parameters can be stored in it or function call.
These two directives are needed, "@mixin" to declare it and "@include" to import it.

@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }

CONTROL DIRECTIVES AND EXPRESSIONS
Styling based on conditions or on repetitions with the help of control directives and expressions is supported by SassScript. These control directives are mainly used in conjunction of mixins.

1) if() - Based on the condition, if() function returns only one result from two possible outcomes.
  if( expression, value1, value2 )//if expression is true value1 is displayed else value2.

2) @if - The @if directive accepts SassScript expressions and uses the nested styles whenever the result of the expression is anything other than false or null.
  @if expression { //CSS codes are written here }

2b) @else always used in conjunction with the @if directive and offer an alternative option when the @if fails.
@if expression {
   // CSS codes
} @else if condition {
   // CSS codes
} @else {
   // CSS codes
}

3) @for - The @for directive allows you to generate styles in a loop. The @for directive offers two possibilities "through" and "to"
  @for $var from <start> through <end> //range includes starting and end value.
  @for $var from <start> to <end> //range includes starting and before end value.

4) @each - In @each directive, a variable is defined which contains the value of each item in a list.
    @each $var in <list or map> //each item
    @each $var1, $var2, $var3 ... in <list> //each item has multiple rules
    @each $var1, $var2 in <map> //as above

5) @while - It takes SassScript expressions until the statement evaluates to false it iteratively outputs nested styles.
  while(condition) {
    // CSS codes
  }

EXTEND
Allows the sharing of a selector's attributes in another word inheriting its attributes.
To inherit from a selector simply use "@extend" directive.

.divs {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.aDiv {
  @extend .divs;
  border-color: #999;
}


LISTS
List are as the name implies a list of items similar to an array.
Lists can be commas separated and in quotes for special characters or space in between two words.

List of function lists
length($list)	Returns the length of a list.
nth($list, $n)	Returns a specific item in a list.
set-nth($list, $n, $value)	Replaces the nth item in a list.
join($list1, $list2, [$separator])	Joins together two lists into one.
append($list1, $val, [$separator])	Appends a single value onto the end of a list.
zip($lists…)	Combines several lists into a single multidimensional list.
index($list, $value)	Returns the position of a value within a list.
list-separator(#list)	Returns the separator of a list.

Accessing individual items in the list:

first item nth():
nth($list_name, 1)// output first item.

last item nth():
nth($list_name, -1)// output first item.


MAPS
Maps are a list of associated key value pairs data and they can be of any type.
These values are accessible by "map-get", or looped through with "@each" directive.

// Defining a map
$colors: (
  'brand': hotpink,
  'grey': silver,
  'black': #333,
);

// Accessing specific value
body {
  color: map-get($colors, 'black');
}

// Iterating over a map
@each $color-name, $color in $colors {
  .living-styleguide::before {
    content: quote($color-name);
    color: $color;
  }
}


NESTING
Nesting is the amalgamation of different logic structures, multiple selectors
can be added into one selector. Each nesting should be kept to a minimum to avoid overloading a selector for ease of maintenance.
In the font example, "font" is used as namespace.

  EXAMPLE
  //.scss
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li { display: inline-block; }

    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }
  //Once compiled (.css) this will result in each selector being preceded with the namespce "nav" e.g. nav ul{ }


REFERENCING THE PARENT SELECTOR
The ampersand sign is used to state where the parent select is to be inserted.
This is another way to avoid repetitions as the parent selector in this instance
is only mentioned once and subsequently replaced by the ampersand.

  a{
  font-size: 20px;
      &:hover { background-color: yellow; }
  }


PLACEHOLDER SELECTORS
Placeholder selectors are similar to class selectors the preceding "." is replaced with "%".
They will only be compiled if they were extended, to avoid reducing code being populated.

  %box {
    transition: background-color ease 0.5s;
    margin-left: 0 .7em;
  }

  .error-box {
    @extend %box;
    //error styling goes here
  }

  .info-box {
    @extend %box;
    //info styling goes here
  }

FUNCTIONS
Functions are supported within "SASS" and take as arguments reserved keywords

INTERPOLATION
Interplation is the substitution or insertion of a word by a variable

  $age: 38;
  @error "She is #{$age} years old!";

  #{$name} //name represent variable or property name


INTERACTIVE SHELL
SassScript is a small "SASS" extension used to do some computations in conjunction with "Mixins".
To use the SassScript in the terminal simply run this line of code:
  $ sass -i
  >> 4px * 4
  //output
  >> 16px


WATCH
A SASS file can be watched by running the following line of code:

$ sass --watch style.scss:style.css
Output: >>> Sass is watching for changes.
  write style.css
  write style.css.map
Subsequently these items are created:
  style.css
  style.css.map
  /.sass-cache


 A SASS PROJECT
1) Create a project's directory
2) In it add these folders:
  /lib/sass
3) Create a .scss file
  sass/style.scss

4) Open up the terminal and cd into the sass directory,
then run the following line of code.
$ sass --watch style.scss:style.css
Output: >>> Sass is watching for changes.
  write style.css
  write style.css.map
Subsequently these items are created:
  style.css
  style.css.map
  /.sass-cache

RESOURCES
http://sass-lang.com/guide
https://www.tutorialspoint.com/sass/sass_tutorial.pdf
https://www.sitepoint.com/sass-reference/maps/
