$(document).ready(function () {
    fetch();
  
    function fetch() {
      let url = "https://covid19.mathdro.id/api";
  
      let data = "";
  
      $.get(url, function (data) {
        
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
      let url = "https://covid19.mathdro.id/api/countries/Indonesia";
  
      let dataindonesia = "";
  
      $.get(url, function (dataindonesia) {
  
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
      let url = "https://covid19.mathdro.id/api/countries/Singapore";
  
      let datasingapore = "";
  
      $.get(url, function (datasingapore) {

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
      let url = "https://covid19.mathdro.id/api/countries/Malaysia";
  
      let datamalaysia = "";
  
      $.get(url, function (datamalaysia) {

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
      let url = "https://covid19.mathdro.id/api/countries/Burma";
  
      let datamyanmar = "";
  
      $.get(url, function (datamyanmar) {
  
        datamyanmar = `
        <td>${Number(datamyanmar.confirmed.value).toLocaleString('en')}</td>
        <td>${Number(datamyanmar.recovered.value).toLocaleString('en')}</td>
        <td>${Number(datamyanmar.deaths.value).toLocaleString('en')}</td>
  
            `;
  
        $("#datamyanmar").html(datamyanmar);
      });
    }
  });
  