## splitHTML


### What is splitHTML?

splitHTML splits the all text nodes of a given element and captures all fragments within new elements of a chosen tag name.

[demo](http://svrv.net/e/xperiments/splitHTML/examples.html)

### And it can be used for what exactly?

It can be used to set a specific property to every fragment (letter/word/etc) or to get the value of one specific or all fragments, like position or width.
For some simple examples of splitHTML in use, see examples.html.

It could also be used in bookmarklets; bookmarklet.js contains both templates and examples for this.

### How to use?

	X.splitHTML(Y,Z);
	Where X is any HTMLElement,
		  Y is the tag name of the element each fragment will be captured within,
		  Z is the where to split each fragment (String, not RegExp);
		  (Y and Z are optional, the default being 'fragment' and '' respectively)

To do something with each fragment, one can use
 
	Fe.call(X.querySelectorAll(Y), function(a,b,c){
		/* do something */
	})
	Where Fe is a shortened version of Array.prototype.forEach
		  X is any HTMLElement with fragments inside
		  Y is the fragments' tag name
		  a is the fragment
		  b is its index number
		  c is X.querySelectorAll(Y)

### Is it cross-browser?

Any browser that have Array.forEach and Node.childNodes should work.

### Any problems I should know about?

It has a tendency -- when splitting every letter -- to be very slow (>10s) on large Wikipedia articles. This might cause the browser to think the script has stopped, but it will finish if you let it wait.
