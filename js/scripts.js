window.onload=iniciar;//cuando se haya cargado completamente llame a al funcion iniciar
function iniciar() {
    var btnCalcular=document.getElementById('btnCalcular');
    btnCalcular.addEventListener("click",clickBtnCalcular);
}
function clickBtnCalcular() {
    var txtPeso=document.getElementById('txtPeso');
    var peso=txtPeso.value;
    var txtAltura=document.getElementById('txtAltura');
    var altura=txtAltura.value;
    var imc=peso/(altura*altura);
    alert("su imc es: "+Math.round(imc));
}
/* ciclos
while(){

};
do{

}while();
for(var i=0;i<10;i++){

}
*/