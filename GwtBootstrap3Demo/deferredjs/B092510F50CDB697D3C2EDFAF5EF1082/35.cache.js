function $gc(){}
function Pgc(a,b,c){uhb.call(this,a,b,c,(_Wb(),$Wb))}
function hhc(a){var b;if(!a.i){b=new Ygc(new $gc);a.i=b}return a.i}
function ghc(a){var b;if(!a.g){b=new Pgc(Dgb($hb(a.b)),hhc(a),fhc(a));Vgb((_hb(a.b),b),kib(_hb(a.b)));a.g=b}return a.g}
function Ygc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A;Ohb(this,(a=new pCb,tvb(a,(b=new $xb(Jvc),tvb(b,(c=new kBb,c.b='Project Setup',jBb(c),c.c='basic setup and using custom themes',jBb(c),c)),tvb(b,(d=new sBb,tvb(d,(g=new EBb,DBb(g,(i=new Vyb(3),NCb(i.d,Kvc),i)),g)),tvb(d,(j=new vBb,tvb(j,new Jzb((k=new $nb,k.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new cX(k.b.b)).b)),tvb(j,(n=new amc,gCb(n,(o=new $nb,o.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new cX(o.b.b)).b),zZ(n.ab,Nvc,true),n)),j)),d)),tvb(b,(e=new sBb,tvb(e,(p=new EBb,DBb(p,(q=new Vyb(3),NCb(q.d,'Bootstrap2 Look-a-like Setup'),q)),p)),tvb(e,(r=new vBb,tvb(r,new Jzb((s=new $nb,s.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new cX(s.b.b)).b)),tvb(r,(t=new amc,gCb(t,(u=new $nb,u.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new cX(u.b.b)).b),zZ(t.ab,Nvc,true),t)),r)),e)),tvb(b,(f=new sBb,tvb(f,(v=new EBb,DBb(v,(w=new Vyb(3),NCb(w.d,'Custom Theme'),w)),v)),tvb(f,(x=new vBb,tvb(x,new Jzb((y=new $nb,y.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new cX(y.b.b)).b)),tvb(x,(z=new amc,gCb(z,(A=new $nb,A.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new cX(A.b.b)).b),zZ(z.ab,Nvc,true),z)),x)),f)),b)),a))}
$V(1258,519,Upc,Pgc);$V(1261,524,Vpc,Ygc);$V(1262,1,{},$gc);$V(1269,1,wqc);_.Ab=function xhc(){Djb(this.c,ghc(this.b.b))};var pS=vmb(fvc,'SetupPresenter',1258),rS=vmb(fvc,'SetupView',1261),qS=vmb(fvc,'SetupView_BinderImpl',1262);Aqc(Fm)(35);