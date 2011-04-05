# splitHTML


### What is splitHTML?

splitHTML splits every text node of a given element and captures all fragments within new elements of a chosen tag name.

[Simple examples of splitHTML in use.](http://svrv.net/e/xperiments/splitHTML/examples.html)

### And it can be used for what exactly?

It can be used to set a specific property to every fragment (letter/word/etc) or to get the value of one specific or all fragments, like the computed position or size. Whether it could be used for anything useful or not, I do not actually know. I can only think of this used in amusing-one-time-and-forgotten-in-bookmarks-bar bookmarklets and single-purpose pages.

For some simple examples of splitHTML in use, see examples.html or the online [demo](http://svrv.net/e/xperiments/splitHTML/examples.html), and see bookmarklet.js for both templates and examples of splitHTML used in bookmarklets.

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

Any browser that has Array.forEach and Node.childNodes should work.

### Any problems one should know about?

It has a tendency -- when splitting every letter -- to be very slow (>10s) on large Wikipedia articles. This might cause the browser to think the script has stopped, but it will finish if you let it wait. There's also one more thing: it seems that in 'p' elements, if there's an 'hX' or 'div' element inside, it won't go any further. I think this has to do with display:block and display:inline, though I haven't had time to look into it any further.

