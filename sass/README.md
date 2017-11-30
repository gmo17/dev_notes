#SASS summary

Sass?
Syntatically Awesome Stylesheets or simply know as "SASS" is a stylesheet language, primary coded in Ruby.

Sass is a great tool for writing slim-lined stylesheet with less line of codes hence significantly reducing development time.
Sass also helps developer to avoid repetitions and redundant lines of codes.
This can be achieved by making use of reusable values such as "Varibles", "Mixings" and "Nestings" for a leaner DOM tree.

"Sass consists of two syntaxes:

- The original syntax (.sass) known as "the indented syntax or "Sassy CSS", as the name implies has no curly braces nor semicolons. Indentations serve as code blocks separators with newline characters to separate rules.

EXAMPLE
// Sass style:
$primary-color: #3bbfce
$margin: 16px

.content-navigation
  border-color: $primary-color
  color: darken($primary-color, 10%)

.border
  padding: $margin/2
  margin:  $margin/2
  border-color: $primary-color

- The newer syntax (.scss), "SCSS" in the other hand shares some similarities with CSS.
In this instance braces denote code blocks and semicolons separate lines within a block, any valid CSS rule is also valid in SCSS syntax.

EXAMPLE
// In SCSS style:
$primary-color: #3bbfce;
$margin: 16px;

.content-navigation {
  border-color: $primary-color;
  color: darken($primary-color, 10%);
}

.border {
  padding: $margin / 2;
  margin: $margin / 2;
  border-color: $primary-color;
}

Nested syntax and useful functions can be used for colour manipulation and apply mathematic logics.


// Post compilation:
.content-navigation {
  border-color: #3bbfce;
  color: #2b9eab;
}

.border {
  padding: 8px;
  margin: 8px;
  border-color: #3bbfce;
}


In this summary we will focus on the .scss.

IMPORT
Directives  @import, @mixin and @include are easily recognisable as they are always preceded with by the @ character.
They role is ...

When used in "SCSS" quotations are needed example:
@import "Varibles.sass";



DATA TYPE
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

LISTS

MAPS

VARIABLES
Variables are used to represent data, this can take numerical or characters form.
Variables role is to act as memory address, whenever a variable is in use within the program it will
point to the value it has been assigned.
Variables are always defined in a ".scss" with a "$" sign and a ";"

Example
//variable declaration
$primary-color: #3bbfce;

//using the attributed value to the "$primary-color" variable
aDiv{
  background-color: $primary-color;
}

DEFAULT VARIABLE
When the !default flag is added to a variable at it stem it will not be re-assigned


MIXING
Is the action of re-using "CSS" throughout the stylesheet.
Mixins are useful when a group of re-usable through the application is required.
Multiple values or parameters can stored in it or call functions hence avoid writing repetitive codes.



NESTING
Nesting is the amalgamation of different login structures, multiple selectors
can be added into a selector.
In the font example "font" is used as namespace

EXAMPLE
//.css
.container h1{
  font-size: 25px;
  color:#E45456;
}
.container p{
  font-size: 25px;
  color:#3C7949;
}
.container, .box h1{
  font-size: 25px;
  color:#E45456;
}
.container p{
  font-size: 25px;
  color:#3C7949;
}

The container class has been used four times under the traditional "CSS", where as
in ".scss" it is listed once and contains all selectors that are related to it (see below).
The exercise here is to avoid repetitions the container class.

//.scss
.container{
  h1{
    font-size: 25px;
    color:#E45456;
  }
  p{
    font-size: 25px;
    color:#3C7949;
  }
  .box{
    h1{
      font-size: 25px;
      color:#E45456;
    }
    p{
      font-size: 25px;
      color:#3C7949;
    }
  }
}


REFERENCING THE PARENT SELECTOR
The ampersand sign is used to state where the parent select is to be inserted.
This is another way to stop repetitions as the parent selector in this instance a
is only mentioned once and subsequently replaced by the ampersand.

a{
font-size: 20px;
    &:hover { background-color: yellow; }
}


PLACEHOLDER SELECTORS
Placeholder selector can be implemented using a class or an id selector.
The "#" or "." traditionally used in "CSS" replaced with "%". A place holder can be extended into a selctor by simply using the @extend directive hence the .sec_para inheriting the .first_para's attributes.

EXAMPLE
//.scss
.frst_para {
   color: green;
}
.sec_para {
   @extend .frst_para;
   font-size:20px;
}

//.css
.frst_para, .sec_para {
  color: green;
}
.sec_para {
  font-size: 20px;
}

FUNCTIONS
Functions are supported within "SASS" and take as arguments reserved keywords

INTERPOLATION
.....
#{$name} //name represent variable or property name




CONTROL DIRECTIVES AND EXPRESSIONS
Here styling on based on conditions or on repetitions with the help of control directives and expressions, supported by SassScript. These control directives and are mainly used in conjunction of mixins.

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

5) @while - It takes SassScript expressions and until the statement evaluates to false it iteratively outputs nested styles.
  while(condition) {
    // CSS codes
  }

LIST OF DIRECTIVES AND DEFINITION
...

1) @import - It imports the SASS or SCSS files, it directly takes the filename to import.
2) @media - It sets the style rule to different media types.
3) @extend - The @extend directive is used to inherit rules and relationships from a selector. In addition to rule(s) being inherited a selector can have its own rules.
4) @at-root - The @at-root directive is a collection of nested rules, which is able to make style block at root of the document.
5) @debug - The @debug directive detects the errors and displays the SassScript expression values to the standard error output stream.
6) @warn - The @warn directive is used to give cautionary advice about the problem; it displays the SassScript expression values to the standard error output stream.
7) @error - The @error directive displays the SassScript expression value as fatal error.

PARTIALS
Partials
Partials are SASS or SCSS files, preceded with an underscore "_partials.scss"/_/. The underscore is optional in order to import a partial file in "SASS". SASS files are not compile into CSS files.

INTERACTIVE SHELL
SassScript is a small "SASS" extension used to do some computations in conjunction with "Mixins".
To use the SassScript in the terminal simply run this line of code:
$ sass -i
>> 4px * 4
//output
>> 16px


EXAMPLE
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


  https://www.tutorialspoint.com/sass/sass_tutorial.pdf
