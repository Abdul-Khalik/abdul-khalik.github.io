$(document).ready(function () {
    fetch();
  
    function fetch() {    
      let data = "";
  
      $.get("https://covid19.mathdro.id/api", function (data) {
        
        data = `
            <td>${Number(data.confirmed.value).toLocaleString('en')}</td>
            <td>${Number(data.recovered.value).toLocaleString('en')}</td>
            <td>${Number(data.deaths.value).toLocaleString('en')}</td>
  
            `;
  
        $("#data").html(data);
      });
    }
  
    fetch1();
  
    function fetch1() {
      let dataindonesia = "";
  
      $.get("https://covid19.mathdro.id/api/countries/Indonesia", function (dataindonesia) {
  
        dataindonesia = `
        <td>${Number(dataindonesia.confirmed.value).toLocaleString('en')}</td>
        <td>${Number(dataindonesia.recovered.value).toLocaleString('en')}</td>
        <td>${Number(dataindonesia.deaths.value).toLocaleString('en')}</td>
  
            `;
  
        $("#dataindonesia").html(dataindonesia);
      });
    }
  
    fetch2();
  
    function fetch2() {
      let datasingapore = "";
  
      $.get("https://covid19.mathdro.id/api/countries/Singapore", function (datasingapore) {

        datasingapore = `
            <td>${datasingapore.confirmed.value}</td>
            <td>${datasingapore.recovered.value}</td>
            <td>${datasingapore.deaths.value}</td>
  
            `;
  
        $("#datasingapore").html(datasingapore);
      });
    }
  
    fetch3();
  
    function fetch3() {
      let datamalaysia = "";
  
      $.get("https://covid19.mathdro.id/api/countries/Malaysia", function (datamalaysia) {

        datamalaysia = `
        <td>${Number(datamalaysia.confirmed.value).toLocaleString('en')}</td>
        <td>${Number(datamalaysia.recovered.value).toLocaleString('en')}</td>
        <td>${Number(datamalaysia.deaths.value).toLocaleString('en')}</td>
  
            `;
  
        $("#datamalaysia").html(datamalaysia);
      });
    }
  
    fetch4();
  
    function fetch4() {  
      let datamyanmar = "";
  
      $.get("https://covid19.mathdro.id/api/countries/Burma", function (datamyanmar) {
  
        datamyanmar = `
        <td>${Number(datamyanmar.confirmed.value).toLocaleString('en')}</td>
        <td>${Number(datamyanmar.recovered.value).toLocaleString('en')}</td>
        <td>${Number(datamyanmar.deaths.value).toLocaleString('en')}</td>
  
            `;
  
        $("#datamyanmar").html(datamyanmar);
      });
    }
  });