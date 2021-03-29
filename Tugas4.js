function proses(){
    var ArrayData = [];
    ArrayData[0] = parseFloat(document.getElementById("firstNum").value);
    ArrayData[1] = parseFloat(document.getElementById("secondNum").value);
    ArrayData[2] = parseFloat(document.getElementById("thirdNum").value);

    for(var i = 0; i <= ArrayData.length - 1; i++){
        for(var j = 0; j <= ArrayData.length - 1; j++){
            if(ArrayData[j] > ArrayData[j + 1]){
                var temp = ArrayData[j];
                ArrayData[j] = ArrayData[j + 1];
                ArrayData[j + 1] = temp;
            }
        }
    }

    var rata = ( ArrayData[0] + ArrayData[1] + ArrayData[2] ) / 3;

    document.getElementById("rataRata").innerHTML = rata;
    document.getElementById("terendah").innerHTML = ArrayData[0];
    document.getElementById("tengah").innerHTML = ArrayData[1];
    document.getElementById("tertinggi").innerHTML = ArrayData[2];
}

function hapus(){
    document.getElementById("firstNum").value = "";
    document.getElementById("secondNum").value = "";
    document.getElementById("thirdNum").value = "";
}