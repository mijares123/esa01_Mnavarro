function add(){
	var p=document.getElementById("producto").value;
	var pr=document.getElementById("precio").value;
	var c=document.getElementById("cantidad").value;
	var s=0;
    añadir(p,pr,c,s);
}
function añadir(x,y,z,s){
     var table=document.getElementById("tabla");
		 alert(table.rows.length);
		 for (var i = 0; i <=table.rows.length; i++) {
     	 if(x==table.rows[i].cells[1].innerHTML){
			 alert(p);
				 var n=table.rows[i].cells[2].innerHTML;
				  n=n+y;
					table.rows[i].cells[2].innerHTML=n;
					m=table.rows[i].cells[4].innerHTML;
					m=n*y;
					table.rows[i].cells[2].innerHTML=m;
			 }else{
				 table.innerHTML=table.innerHTML+"<tr><td>"+1+"</td><td>"+x+"</td><td>"+y+"</td><td>"+z+"</td><td>"+s+"</td><td><button onclick='borrar(this)'>borrar</button></td></tr>";
        i=table.length+1;
			 }
			 
     }
	 alert(table.rows[1].cells[1].innerHTML);



}
