What are Regular Expressions?
	- Regular expressions are a way to describe patterns in a string data

	- Regular expressions allow you to check a string of characters like an e-mail address or password for patterns






Creating a Regular Expression	
	- There are two ways to create a regular expression in Javascript

	-1) Regular Expression Constructor:
	#syntax
		new RegExp(pattern[, flags])

	## Ex:
		var regexConst = new RegExp('abc');	

	-2) Regular Expression Literal:
	#syntax
		/pattern/flags

	## Ex:
		var regexLiteral = /abc/;

	!! Here the flags are optional
	!! escape the forward slash ( / ) with a backslash ( \ ) if you want to use it as a part of the regex.


Regular Expressions Methods
	-test()
		## Ex:
		var regex = /hello/;
		var str = 'hello world';
		var result = regex.test(str);
		console.log(result);
		// returns true

	-exec()
		
		This method returns an array containing all the matched groups
		## Ex:
		var regex = /hello/;
		var str = 'hello world';
		var result = regex.exec(str);
		console.log(result);
		// returns [ 'hello', index: 0, input: 'hello world' ]
		// 'hello' -> is the matched pattern.
		// index: -> Is where the regular expression starts.
		// input: -> Is the actual string passed.



Special Characters
	-These are special symbols and characters that you have to memorize in order to fully understand the regular expressions.

	Flags
		g — Global search, don’t return after the first match
		
		i — Case-insensitive search	

		!! combine in single RE
		!! order doesn't matter	

	## Ex. 
	var regexGlobal = /abc/g;
						or
	var regexGlobal = new RegExp('abc','g')
	console.log(regexGlobal.test('abc abc'));
	// it will match all the occurence of 'abc', so it won't return 
	// after first match.

	## Ex.
	var regexInsensitive = /abc/i;
						or
	var regexInsensitive = new RegExp('abc','i')
	console.log(regexInsensitive.test('Abc'));
	// returns true, because the case of string characters don't matter 
	// in case-insensitive search.


Character groups:	
	
	-Character set [xyz] 
	#syntax var regex = /[bt]ear/;
	
	## Ex.
	console.log(regex.test('tear'));
	// returns true
	console.log(regex.test('bear'));
	// return true
	console.log(regex.test('fear'));
	// return false


	
	
	-Negated character set [^xyz] 	
	#var regex = /[^bt]ear/;
	
	## Ex.
	console.log(regex.test('tear'));
	// returns false
	console.log(regex.test('bear'));
	// return false
	console.log(regex.test('fear'));
// return true



	-Ranges [a-z]
	# var regex = /[a-z]ear/;
	
	## Ex.
	console.log(regex.test('fear'));
	// returns true
	console.log(regex.test('tear'));
	// returns true





Meta-characters — Meta-characters are characters with a special meaning.	

	- \d — Match any digit character ( same as [0-9] ).

	- \w — Match any word character. A word character is any letter, digit, and underscore. (Same as [a-zA-Z0–9_] ) i.e alphanumeric character.

	- \s — Match a whitespace character (spaces, tabs etc).

	- \t — Match a tab character only.
	
	- \b — Find a match at beginning or ending of a word. Also known as word boundary.
	
	. — (period) Matches any character except for newline.

	!! There are more meta characters





Quantifiers: — symbols that have a special meaning in a regular expression
	- + — Matches the preceding expression 1 or more times.
	
	## Ex
		var regex = /\d+/;
		console.log(regex.test('8'));
		// true
		console.log(regex.test('88899'));
		// true
		console.log(regex.test('8888845'));
		// true


- * —Matches the preceding expression 0 or more times.

	## Ex
		var regex = /go*d/;
		console.log(regex.test('gd'));
		// true
		console.log(regex.test('god'));
		// true
		console.log(regex.test('good'));
		// true



- ? — Matches the preceding expression 0 or 1 time

	## Ex
		var regex = /goo?d/;
		console.log(regex.test('god'));
		// true
		console.log(regex.test('good'));
		// true
		console.log(regex.test('goood'));
		// false


- ^ — Matches the beginning of the string
	
	## Ex
		var regex = /^g/;
		console.log(regex.test('good'));
		// true
		console.log(regex.test('bad'));
		// false


-$ — Matches the end of the string
	
	## Ex
	var regex = /.com$/;
		console.log(regex.test('test@testmail.com'));
		// true
		console.log(regex.test('test@testmail'));
		// false		


-{N} — Matches exactly N occurrences of the preceding regular expression.

	## Ex
	var regex = /go{2}d/;
	console.log(regex.test('good'));
	// true
	console.log(regex.test('god'));
	// false



-{N,} — Matches at least N occurrences of the preceding regular expression.
	
	## Ex
	var regex = /go{2,}d/;
	console.log(regex.test('good'));
	// true
	console.log(regex.test('goood'));
	// true
	console.log(regex.test('gooood'));
	// true



- {N,M} — Matches at least N occurrences and at most M occurrences of the preceding regular 	expression (where M > N).

	## Ex
	var regex = /go{1,2}d/;
	console.log(regex.test('god'));
	// true
	console.log(regex.test('good'));
	// true
	console.log(regex.test('goood'));
	// false



-Alternation X|Y — Matches either X or Y. For example:	

	## Ex
	var regex = /(green|red) apple/;
	console.log(regex.test('green apple'));
	// true
	console.log(regex.test('red apple'));
	// true
	console.log(regex.test('blue apple'));
	// false

- Capturing group (go)
	A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.	

	!! It allows to get a part of the match as a separate item in the result array.
	!! If we put a quantifier after the parentheses, it applies to the parentheses as a whole.

	## Ex
	var regex = /g(go)+/i

	console.log(regex.test('ggogo now'))
	returns true

	console.log(regex.test('gone'))
	returns false

	
	x(?=y) — Matches x only if x is followed by y. Also called positive look ahead. For example:
	var regex = /Red(?=Apple)/;
	console.log(regex.test('RedApple'));
	// true


Practicing Regex:

	-Match any 10 digit number :
	var regex = /\d{10}/ (7896523658)

	var regex = /\d{3}-?\d{3}-?\d{4}/			(789-569-5426)

	var regex = /\d{3}[- ]?\d{3}[- ]?\d{4}/ (598 265 2365)

	var regex =/(\+1 )?\d{3}[- ]?\d{3}[- ]?\d{4}/	(+1 789 523 2365)


-Match Email example	

str.replace('regex', " ")