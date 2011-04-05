/* splitHTML bookmarklet templates*/

/*
	
	Static tag & split
	
	How to use:
		'__F__' should be replaced with the desired tag name (ex: 'F', which is short and available)
  		and replace '__S__' with the condition for splitting the text into fragments (ex: "" for letters, " " for words)

*/

javascript:(function(F,b,s,r){
	s="search";F=Array[r="prototype"].forEach;b=["script","style","canvas","audio","video","img"];
	function R(a){return (a=a.substr(a[s](">")+1)).substr(0,a[s]("<"))};
	HTMLElement[r].H=function(P,C,O){
		r="replace";
		P=this,C=P.childNodes,O=C.length;
		F.call(C,function(c,i){
			if(!(c=C[i+C.length-O]))return;
			i=c.nodeName.toLowerCase();
			if(i=="#text"){
				v=c.nodeValue;u="<__F__>"+v.split("__S__").join("</__F__>__S__<__F__>")+"</__F__>";
				if(~u[s](/\s/))u=u[r](/<__F__>\s*<\/__F__>/g,R);
				if(~v[s](/<|>/))v=v[r](/</g,"&lt;")[r](/>/g,"&gt;");
				P[i="innerHTML"]=P[i][r](v,u)
			}else if(i!="f"&&!!c.H&&!~b.indexOf(i))c.H()
		})
	};
	document.body.H();

	/* Do something here */

}())

/*
	
	Dynamic tag & split
	
	How to use:
		When calling H, first parameter is the tag name, second is split condition.

	Tip:
		If order to keep words intact when splitting every letter, first split every
		word with one tag, which has style set to display:inline-block and then split
		into letters. This'll prevent the words from dividing at the end of lines.

*/

javascript:(function(F,b,s,r){
	s="search";F=Array[r="prototype"].forEach;b=["script","style","canvas","audio","video","img"];
	function R(a){return (a=a.substr(a[s](">")+1)).substr(0,a[s]("<"))};
	HTMLElement[r].H=function(M,N,P,C,O){
		P=this,C=P.childNodes,O=C.length;
		F.call(C,function(c,i){
			r="replace";
			if(!(c=C[i+C.length-O]))return;
			i=c.nodeName.toLowerCase();
			if(i=="#text"){
				v=c.nodeValue;u="<"+M+">"+v.split(N).join("</"+M+">"+N+"<"+M+">")+"</"+M+">";
				if(~u[s](/\s/))u=u[r](RegExp("<"+M+">\\s*<\/"+M+">","g"),R);
				if(~v[s](/<|>/))v=v[r](/</g,"&lt;")[r](/>/g,"&gt;");
				P[i="innerHTML"]=P[i][r](v,u)
			}else if(i!="f"&&!!c.H&&!~b.indexOf(i))c.H(M,N)
		})
	};
	document.body.H("f","");

	/* Do something here */

}())



/* Example of a bit customized version of the dynamic tag & split template: (rotates the letters, keeps words in line) */

javascript:(function(F,b,B,D,T,U,s,r){
	U=navigator.userAgent;D=document;B=D.body;
	T=~U[s="search"](/Chrome|Safari/)?"-webkit-transform":
	 (~U[s](/Opera|Presto/)?"-o-transform":
	 (~U[s](/Firefox|Gecko/)?"-moz-transform":
	 (~U[s](/Trident|MSIE/)?"msTransform":
	 (B.style.transform!==F)?'transform':0)));
	F=Array[r="prototype"].forEach;b=["script","style","canvas","audio","video","img"];
	function R(a){return (a=a.substr(a[s](">")+1)).substr(0,a[s]("<"))};
	HTMLElement[r].H=function(M,N,S,P,C,O){
		r="replace";
		P=this,C=P.childNodes,O=C[U="length"];
		F.call(C,function(c,i){
			if(!(c=C[i+C[U]-O]))return;
			i=c.nodeName.toLowerCase();
			if(i=="#text"){
				v=c.nodeValue;u="<"+M+">"+v.split(N).join("</"+M+">"+N+"<"+M+">")+"</"+M+">";
				if(~u[s](/\s/))u=u[r](RegExp("<"+M+">\\s*<\/"+M+">","g"),R);
				if(~v[s](/<|>/))v=v[r](/</g,"&lt;")[r](/>/g,"&gt;");
				P[i="innerHTML"]=P[i][r](v,u)
			}else if(i!="f"&&!!c.H&&!~b.indexOf(i))c.H(M,N)
		})
	};
	B.H("T"," ");
	B.H("F","");
	s=D.styleSheets;
	if(s[U]==0)B.appendChild(D.createElement("style"));
	s=s[s[U]-1];
	s.insertRule("T{display:inline-block;}",s[U]-1);
	F.call(B.querySelectorAll("F"),function(c,i){c.style.cssText="display:inline-block;"+T+":rotate("+(i*10)%25360+"deg);width:0.9em;"})
}())