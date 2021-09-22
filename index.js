var http = require('http');
var fs = require('fs');
var url = require('url');
var XLSX = require('xlsx');
const express = require("express");
const osmosis = require('osmosis');
var formidable = require('formidable');
var util = require('util');



var urltarifi;
    const app = express();

    app.use(express.static(__dirname + "/public"));
    setInterval(function() {
        osmosis
        .get('https://www.belveb.by/individual/kredity/')
        .find('.sq-docs')
        .set(['.col[4] @href'])
        .data(function(data){
          urltarifi = data[0];
          console.log(urltarifi);
          fs.writeFile("public/pars.js", "var urltarifi = 'https://www.belveb.by" + urltarifi + "';", function(error){
            if(error) throw error;
          });
        });
      }, 500000);
    setInterval(function() {
        var now = new Date();
        var workbook = XLSX.readFile('public/kkk.xlsx');
        var sheet_name_list = workbook.SheetNames;
        var depData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[sheet_name_list.length - 1]]);
        console.log("1");
        depData[2].__EMPTY_19 = depData[2].__EMPTY_19.replace(/ /g, "<br>");
        depData[2].__EMPTY_20 = depData[2].__EMPTY_20.replace(/ /g, "<br>");
        depData[2].__EMPTY_21 = depData[2].__EMPTY_21.replace(/ /g, "<br>");
        depData[2].__EMPTY_22 = depData[2].__EMPTY_22.replace(/ /g, "<br>");
        depData[2].__EMPTY_23 = depData[2].__EMPTY_23.replace(/ /g, "<br>");

        depData[2].__EMPTY_36 = depData[2].__EMPTY_36.replace(/ /g, "<br>");
        depData[7].__EMPTY_36 = depData[7].__EMPTY_36.replace(/ /g, "<br>");
        depData[9].__EMPTY_36 = depData[9].__EMPTY_36.replace(/ /g, "<br>");
        depData[11].__EMPTY_36 = depData[11].__EMPTY_36.replace(/ /g, "<br>");

        depData[0].__EMPTY_1 = "<td>" + depData[0].__EMPTY_1 + "</td>";
        depData[0].__EMPTY_3 = "<td>" + depData[0].__EMPTY_3 + "</td>";
        depData[0].__EMPTY_5 = "<td>" + depData[0].__EMPTY_5 + "</td>";
        depData[0].__EMPTY_7 = "<td>" + depData[0].__EMPTY_7 + "</td>";
        depData[0].__EMPTY_9 = "<td>" + depData[0].__EMPTY_9 + "</td>";
        depData[0].__EMPTY_11 = '<td colspan="7" class="di">' + depData[0].__EMPTY_11 + "</td>";
        depData[0].__EMPTY_18 = '<td colspan="6" class="dyo">' + depData[0].__EMPTY_18 + "</td>";
        depData[0].__EMPTY_24 = '<td colspan="6" class="ds">' + depData[0].__EMPTY_24 + "</td>";
        depData[0].__EMPTY_30 = '<td colspan="6" class="dyb">' + depData[0].__EMPTY_30 + "</td>";
        depData[0].__EMPTY_36 = '<td colspan="5" class="dp">' + depData[0].__EMPTY_36 + "</td>";
        depData[0].__EMPTY_42 = "<td>" + depData[0].__EMPTY_37 + "</td>";
        depData[0].__EMPTY_43 = "<td>" + depData[0].__EMPTY_38 + "</td>";
        depData[0].__EMPTY_44 = "<td>" + depData[0].__EMPTY_39 + "</td>";

        depData[1].__EMPTY = '<td >' + depData[1].__EMPTY + "</td>";
        depData[1].__EMPTY_1 = '<td >' + depData[1].__EMPTY_1 + "</td>";
        depData[1].__EMPTY_2 = '<td >' + depData[1].__EMPTY_2 + "</td>";
        depData[1].__EMPTY_3 = '<td >' + depData[1].__EMPTY_3 + "</td>";
        depData[1].__EMPTY_4 = '<td >' + depData[1].__EMPTY_4 + "</td>";
        depData[1].__EMPTY_5 = '<td >' + depData[1].__EMPTY_5 + "</td>";
        depData[1].__EMPTY_6 = '<td >' + depData[1].__EMPTY_6 + "</td>";
        depData[1].__EMPTY_7 = '<td >' + depData[1].__EMPTY_7 + "</td>";
        depData[1].__EMPTY_11 = '<td class="dit">' + depData[1].__EMPTY_11 + "</td>";
        depData[1].__EMPTY_12 = '<td class="dit">' + depData[1].__EMPTY_12 + "</td>";
        depData[1].__EMPTY_13 = '<td class="dit">' + depData[1].__EMPTY_13 + "</td>";
        depData[1].__EMPTY_14 = '<td class="dit">' + depData[1].__EMPTY_14 + "</td>";
        depData[1].__EMPTY_15 = '<td class="dit">' + depData[1].__EMPTY_15 + "</td>";
        depData[1].__EMPTY_16 = '<td class="dit">' + depData[1].__EMPTY_16 + "</td>";
        depData[1].__EMPTY_17 = '<td class="dit">' + depData[1].__EMPTY_17 + "</td>";
        depData[1].__EMPTY_18 = '<td class="dyot">' + depData[1].__EMPTY_18 + "</td>";
        depData[1].__EMPTY_19 = '<td class="dyot">' + depData[1].__EMPTY_19 + "</td>";
        depData[1].__EMPTY_20 = '<td class="dyot">' + depData[1].__EMPTY_20 + "</td>";
        depData[1].__EMPTY_21 = '<td class="dyot">' + depData[1].__EMPTY_21 + "</td>";
        depData[1].__EMPTY_22 = '<td class="dyot">' + depData[1].__EMPTY_22 + "</td>";
        depData[1].__EMPTY_23 = '<td class="dyot">' + depData[1].__EMPTY_23 + "</td>";
        depData[1].__EMPTY_24 = '<td class="dst">' + depData[1].__EMPTY_24 + "</td>";
        depData[1].__EMPTY_25 = '<td class="dst">' + depData[1].__EMPTY_25 + "</td>";
        depData[1].__EMPTY_26 = '<td class="dst">' + depData[1].__EMPTY_26 + "</td>";
        depData[1].__EMPTY_27 = '<td class="dst">' + depData[1].__EMPTY_27 + "</td>";
        depData[1].__EMPTY_28 = '<td class="dst">' + depData[1].__EMPTY_28 + "</td>";
        depData[1].__EMPTY_29 = '<td class="dst">' + depData[1].__EMPTY_29 + "</td>";
        depData[1].__EMPTY_30 = '<td class="dybt">' + depData[1].__EMPTY_30 + "</td>";
        depData[1].__EMPTY_31 = '<td class="dybt">' + depData[1].__EMPTY_31 + "</td>";
        depData[1].__EMPTY_32 = '<td class="dybt">' + depData[1].__EMPTY_32 + "</td>";
        depData[1].__EMPTY_33 = '<td class="dybt">' + depData[1].__EMPTY_33 + "</td>";
        depData[1].__EMPTY_34 = '<td class="dybt">' + depData[1].__EMPTY_34 + "</td>";
        depData[1].__EMPTY_35 = '<td class="dybt">' + depData[1].__EMPTY_35 + "</td>";
        depData[1].__EMPTY_36 = '<td class="dpt">' + depData[1].__EMPTY_36 + "</td>";
        depData[1].__EMPTY_37 = '<td class="dpt">' + depData[1].__EMPTY_37 + "</td>";
        depData[1].__EMPTY_38 = '<td class="dpt">' + depData[1].__EMPTY_38 + "</td>";
        depData[1].__EMPTY_39 = '<td class="dpt">' + depData[1].__EMPTY_39 + "</td>";
        depData[1].__EMPTY_40 = '<td class="dpt">' + depData[1].__EMPTY_40 + "</td>";
        depData[1].__EMPTY_41 = '<td>' + depData[1].__EMPTY_41 + "</td>";
        depData[1].__EMPTY_42 = '<td>' + depData[1].__EMPTY_42 + "</td>";

        depData[2].__EMPTY = "<td>" + depData[2].__EMPTY + "</td>";
        depData[2].__EMPTY_1 = "<td>" + depData[2].__EMPTY_1 + "</td>";
        depData[2].__EMPTY_2 = "<td>" + depData[2].__EMPTY_2 + "</td>";
        depData[2].__EMPTY_3 = "<td>" + depData[2].__EMPTY_3 + "</td>";
        depData[2].__EMPTY_4 = '<td>' + depData[2].__EMPTY_4 + "</td>";
        depData[2].__EMPTY_5 = '<td>' + depData[2].__EMPTY_5 + "</td>";
        depData[2].__EMPTY_6 = '<td>' + depData[2].__EMPTY_6 + "</td>";
        depData[2].__EMPTY_7 = '<td >' + depData[2].__EMPTY_7 + "</td>";
        depData[2].__EMPTY_8 = '<td >' + depData[2].__EMPTY_8 + "</td>";
        depData[2].__EMPTY_9 = '<td >' + depData[2].__EMPTY_9 + "</td>";
        depData[2].__EMPTY_10 = '<td >' + depData[2].__EMPTY_10 + "</td>";
        depData[2].__EMPTY_11 = '<td >' + depData[2].__EMPTY_11 + "</td>";
        depData[2].__EMPTY_12 = '<td >' + depData[2].__EMPTY_12 + "</td>";
        depData[2].__EMPTY_13 = '<td >' + depData[2].__EMPTY_13 + "</td>";
        depData[2].__EMPTY_14 = '<td >' + depData[2].__EMPTY_14 + "</td>";
        depData[2].__EMPTY_15 = '<td class="dyot">' + depData[2].__EMPTY_15 + "</td>";
        depData[2].__EMPTY_16 = '<td class="dyot">' + depData[2].__EMPTY_16 + "</td>";
        depData[2].__EMPTY_17 = '<td class="dyot">' + depData[2].__EMPTY_17 + "</td>";
        depData[2].__EMPTY_18 = '<td class="dyot">' + depData[2].__EMPTY_18 + "</td>";
        depData[2].__EMPTY_19 = '<td class="dyot">' + depData[2].__EMPTY_19 + "</td>";
        depData[2].__EMPTY_20 = '<td class="dyot">' + depData[2].__EMPTY_20 + "</td>";
        depData[2].__EMPTY_21 = '<td class="dst">' + depData[2].__EMPTY_21 + "</td>";
        depData[2].__EMPTY_22 = '<td class="dst">' + depData[2].__EMPTY_22 + "</td>";
        depData[2].__EMPTY_23 = '<td class="dst">' + depData[2].__EMPTY_23 + "</td>";
        depData[2].__EMPTY_24 = '<td class="dst">' + depData[2].__EMPTY_24 + "</td>";
        depData[2].__EMPTY_25 = '<td class="dst">' + depData[2].__EMPTY_25 + "</td>";
        depData[2].__EMPTY_26 = '<td class="dst">' + depData[2].__EMPTY_26 + "</td>";
        depData[2].__EMPTY_27 = '<td class="dybt">' + depData[2].__EMPTY_27 + "</td>";
        depData[2].__EMPTY_28 = '<td class="dybt">' + depData[2].__EMPTY_28 + "</td>";
        depData[2].__EMPTY_29 = '<td class="dybt">' + depData[2].__EMPTY_29 + "</td>";
        depData[2].__EMPTY_30 = '<td class="dybt">' + depData[2].__EMPTY_30 + "</td>";
        depData[2].__EMPTY_31 = '<td class="dybt">' + depData[2].__EMPTY_31 + "</td>";
        depData[2].__EMPTY_32 = '<td class="dybt">' + depData[2].__EMPTY_32 + "</td>";
        depData[2].__EMPTY_33 = '<td class="dpt">' + depData[2].__EMPTY_33 + "</td>";
        depData[2].__EMPTY_34 = '<td class="dpt">' + depData[2].__EMPTY_34 + "</td>";
        depData[2].__EMPTY_35 = '<td class="dpt">' + depData[2].__EMPTY_35 + "</td>";
        depData[2].__EMPTY_36 = '<td class="dpt" style="font-size: 17px">' + depData[2].__EMPTY_36 + "</td>";
        depData[2].__EMPTY_37 = '<td class="dpt">' + depData[2].__EMPTY_37 + "</td>";
        depData[2].__EMPTY_38 = '<td>' + depData[2].__EMPTY_38 + "</td>";
        depData[2].__EMPTY_39 = '<td>' + depData[2].__EMPTY_39 + "</td>";
        depData[2].__EMPTY_40 = '<td>' + depData[2].__EMPTY_40 + "</td>";

        depData[3].__EMPTY_37 = '<td>' + depData[3].__EMPTY_37 + "</td>";

        depData[4].__EMPTY = '<td>' + depData[4].__EMPTY + "</td>";
        depData[4].__EMPTY_1 = '<td>' + depData[4].__EMPTY_1 + "</td>";
        depData[4].__EMPTY_2 = '<td>' + depData[4].__EMPTY_2 + "</td>";
        depData[4].__EMPTY_3 = '<td>' + depData[4].__EMPTY_3 + "</td>";

        depData[5].__EMPTY_36 = '<td>' + depData[5].__EMPTY_36 + "</td>";

        depData[6].__EMPTY = '<td>' + depData[6].__EMPTY + "</td>";
        depData[6].__EMPTY_1 = '<td>' + depData[6].__EMPTY_1 + "</td>";
        depData[6].__EMPTY_2 = '<td>' + depData[6].__EMPTY_2 + "</td>";
        depData[6].__EMPTY_3 = '<td>' + depData[6].__EMPTY_3 + "</td>";

        depData[7].__EMPTY_1 = "<td>" + depData[7].__EMPTY_1 + "</td>";
        depData[7].__EMPTY_6 = '<td>' + depData[7].__EMPTY_6 + "</td>";
        depData[7].__EMPTY_7 = '<td >' + depData[7].__EMPTY_7 + "</td>";
        depData[7].__EMPTY_8 = '<td >' + depData[7].__EMPTY_8 + "</td>";
        depData[7].__EMPTY_9 = '<td >' + depData[7].__EMPTY_9 + "</td>";
        depData[7].__EMPTY_10 = '<td >' + depData[7].__EMPTY_10 + "</td>";
        depData[7].__EMPTY_11 = '<td >' + depData[7].__EMPTY_11 + "</td>";
        depData[7].__EMPTY_12 = '<td >' + depData[7].__EMPTY_12 + "</td>";
        depData[7].__EMPTY_13 = '<td >' + depData[7].__EMPTY_13 + "</td>";
        depData[7].__EMPTY_14 = '<td >' + depData[7].__EMPTY_14 + "</td>";
        depData[7].__EMPTY_15 = '<td class="dyot">' + depData[7].__EMPTY_15 + "</td>";
        depData[7].__EMPTY_16 = '<td class="dyot">' + depData[7].__EMPTY_16 + "</td>";
        depData[7].__EMPTY_17 = '<td class="dyot">' + depData[7].__EMPTY_17 + "</td>";
        depData[7].__EMPTY_18 = '<td class="dyot">' + depData[7].__EMPTY_18 + "</td>";
        depData[7].__EMPTY_19 = '<td class="dyot">' + depData[7].__EMPTY_19 + "</td>";
        depData[7].__EMPTY_20 = '<td class="dyot">' + depData[7].__EMPTY_20 + "</td>";
        depData[7].__EMPTY_21 = '<td class="dst">' + depData[7].__EMPTY_21 + "</td>";
        depData[7].__EMPTY_22 = '<td class="dst">' + depData[7].__EMPTY_22 + "</td>";
        depData[7].__EMPTY_23 = '<td class="dst">' + depData[7].__EMPTY_23 + "</td>";
        depData[7].__EMPTY_24 = '<td class="dst">' + depData[7].__EMPTY_24 + "</td>";
        depData[7].__EMPTY_25 = '<td class="dst">' + depData[7].__EMPTY_25 + "</td>";
        depData[7].__EMPTY_26 = '<td class="dst">' + depData[7].__EMPTY_26 + "</td>";
        depData[7].__EMPTY_27 = '<td class="dybt">' + depData[7].__EMPTY_27 + "</td>";
        depData[7].__EMPTY_28 = '<td class="dybt">' + depData[7].__EMPTY_28 + "</td>";
        depData[7].__EMPTY_29 = '<td class="dybt">' + depData[7].__EMPTY_29 + "</td>";
        depData[7].__EMPTY_30 = '<td class="dybt">' + depData[7].__EMPTY_30 + "</td>";
        depData[7].__EMPTY_31 = '<td class="dybt">' + depData[7].__EMPTY_31 + "</td>";
        depData[7].__EMPTY_32 = '<td class="dybt">' + depData[7].__EMPTY_32 + "</td>";
        depData[7].__EMPTY_33 = '<td class="dpt">' + depData[7].__EMPTY_33 + "</td>";
        depData[7].__EMPTY_34 = '<td class="dpt">' + depData[7].__EMPTY_34 + "</td>";
        depData[7].__EMPTY_35 = '<td class="dpt">' + depData[7].__EMPTY_35 + "</td>";
        depData[7].__EMPTY_36 = '<td class="dpt" style="font-size: 17px">' + depData[7].__EMPTY_36 + "</td>";
        depData[7].__EMPTY_37 = '<td class="dpt">' + depData[7].__EMPTY_37 + "</td>";
        depData[7].__EMPTY_38 = '<td class="dpt">' + depData[7].__EMPTY_38 + "</td>";
        depData[7].__EMPTY_39 = '<td class="dpt">' + depData[7].__EMPTY_39 + "</td>";
        depData[7].__EMPTY_40 = '<td class="dpt">' + depData[7].__EMPTY_40 + "</td>";


        depData[9].__EMPTY_1 = "<td>" + depData[9].__EMPTY_1 + "</td>";
        depData[9].__EMPTY_6 = '<td>' + depData[9].__EMPTY_6 + "</td>";
        depData[9].__EMPTY_7 = '<td >' + depData[9].__EMPTY_7 + "</td>";
        depData[9].__EMPTY_8 = '<td >' + depData[9].__EMPTY_8 + "</td>";
        depData[9].__EMPTY_9 = '<td >' + depData[9].__EMPTY_9 + "</td>";
        depData[9].__EMPTY_10 = '<td >' + depData[9].__EMPTY_10 + "</td>";
        depData[9].__EMPTY_11 = '<td >' + depData[9].__EMPTY_11 + "</td>";
        depData[9].__EMPTY_12 = '<td >' + depData[9].__EMPTY_12 + "</td>";
        depData[9].__EMPTY_13 = '<td >' + depData[9].__EMPTY_13 + "</td>";
        depData[9].__EMPTY_14 = '<td >' + depData[9].__EMPTY_14 + "</td>";
        depData[9].__EMPTY_15 = '<td class="dyot">' + depData[9].__EMPTY_15 + "</td>";
        depData[9].__EMPTY_16 = '<td class="dyot">' + depData[9].__EMPTY_16 + "</td>";
        depData[9].__EMPTY_17 = '<td class="dyot">' + depData[9].__EMPTY_17 + "</td>";
        depData[9].__EMPTY_18 = '<td class="dyot">' + depData[9].__EMPTY_18 + "</td>";
        depData[9].__EMPTY_19 = '<td class="dyot">' + depData[9].__EMPTY_19 + "</td>";
        depData[9].__EMPTY_20 = '<td class="dyot">' + depData[9].__EMPTY_20 + "</td>";
        depData[9].__EMPTY_21 = '<td class="dst">' + depData[9].__EMPTY_21 + "</td>";
        depData[9].__EMPTY_22 = '<td class="dst">' + depData[9].__EMPTY_22 + "</td>";
        depData[9].__EMPTY_23 = '<td class="dst">' + depData[9].__EMPTY_23 + "</td>";
        depData[9].__EMPTY_24 = '<td class="dst">' + depData[9].__EMPTY_24 + "</td>";
        depData[9].__EMPTY_25 = '<td class="dst">' + depData[9].__EMPTY_25 + "</td>";
        depData[9].__EMPTY_26 = '<td class="dst">' + depData[9].__EMPTY_26 + "</td>";
        depData[9].__EMPTY_27 = '<td class="dybt">' + depData[9].__EMPTY_27 + "</td>";
        depData[9].__EMPTY_28 = '<td class="dybt">' + depData[9].__EMPTY_28 + "</td>";
        depData[9].__EMPTY_29 = '<td class="dybt">' + depData[9].__EMPTY_29 + "</td>";
        depData[9].__EMPTY_30 = '<td class="dybt">' + depData[9].__EMPTY_30 + "</td>";
        depData[9].__EMPTY_31 = '<td class="dybt">' + depData[9].__EMPTY_31 + "</td>";
        depData[9].__EMPTY_32 = '<td class="dybt">' + depData[9].__EMPTY_32 + "</td>";
        depData[9].__EMPTY_33 = '<td class="dpt">' + depData[9].__EMPTY_33 + "</td>";
        depData[9].__EMPTY_34 = '<td class="dpt">' + depData[9].__EMPTY_34 + "</td>";
        depData[9].__EMPTY_35 = '<td class="dpt">' + depData[9].__EMPTY_35 + "</td>";
        depData[9].__EMPTY_36 = '<td class="dpt" style="font-size: 17px">' + depData[9].__EMPTY_36 + "</td>";
        depData[9].__EMPTY_37 = '<td class="dpt">' + depData[9].__EMPTY_37 + "</td>";
        depData[9].__EMPTY_38 = '<td class="dpt">' + depData[9].__EMPTY_38 + "</td>";
        depData[9].__EMPTY_39 = '<td class="dpt">' + depData[9].__EMPTY_39 + "</td>";
        depData[9].__EMPTY_40 = '<td class="dpt">' + depData[9].__EMPTY_40 + "</td>";

        depData[11].__EMPTY_1 = "<td>" + depData[11].__EMPTY_1 + "</td>";
        depData[11].__EMPTY_6 = '<td>' + depData[11].__EMPTY_6 + "</td>";
        depData[11].__EMPTY_7 = '<td >' + depData[11].__EMPTY_7 + "</td>";
        depData[11].__EMPTY_8 = '<td >' + depData[11].__EMPTY_8 + "</td>";
        depData[11].__EMPTY_9 = '<td >' + depData[11].__EMPTY_9 + "</td>";
        depData[11].__EMPTY_10 = '<td >' + depData[11].__EMPTY_10 + "</td>";
        depData[11].__EMPTY_11 = '<td >' + depData[11].__EMPTY_11 + "</td>";
        depData[11].__EMPTY_12 = '<td >' + depData[11].__EMPTY_12 + "</td>";
        depData[11].__EMPTY_13 = '<td >' + depData[11].__EMPTY_13 + "</td>";
        depData[11].__EMPTY_14 = '<td >' + depData[11].__EMPTY_14 + "</td>";
        depData[11].__EMPTY_15 = '<td class="dyot">' + depData[11].__EMPTY_15 + "</td>";
        depData[11].__EMPTY_16 = '<td class="dyot">' + depData[11].__EMPTY_16 + "</td>";
        depData[11].__EMPTY_17 = '<td class="dyot">' + depData[11].__EMPTY_17 + "</td>";
        depData[11].__EMPTY_18 = '<td class="dyot">' + depData[11].__EMPTY_18 + "</td>";
        depData[11].__EMPTY_19 = '<td class="dyot">' + depData[11].__EMPTY_19 + "</td>";
        depData[11].__EMPTY_20 = '<td class="dyot">' + depData[11].__EMPTY_20 + "</td>";
        depData[11].__EMPTY_21 = '<td class="dst">' + depData[11].__EMPTY_21 + "</td>";
        depData[11].__EMPTY_22 = '<td class="dst">' + depData[11].__EMPTY_22 + "</td>";
        depData[11].__EMPTY_23 = '<td class="dst">' + depData[11].__EMPTY_23 + "</td>";
        depData[11].__EMPTY_24 = '<td class="dst">' + depData[11].__EMPTY_24 + "</td>";
        depData[11].__EMPTY_25 = '<td class="dst">' + depData[11].__EMPTY_25 + "</td>";
        depData[11].__EMPTY_26 = '<td class="dst">' + depData[11].__EMPTY_26 + "</td>";
        depData[11].__EMPTY_27 = '<td class="dybt">' + depData[11].__EMPTY_27 + "</td>";
        depData[11].__EMPTY_28 = '<td class="dybt">' + depData[11].__EMPTY_28 + "</td>";
        depData[11].__EMPTY_29 = '<td class="dybt">' + depData[11].__EMPTY_29 + "</td>";
        depData[11].__EMPTY_30 = '<td class="dybt">' + depData[11].__EMPTY_30 + "</td>";
        depData[11].__EMPTY_31 = '<td class="dybt">' + depData[11].__EMPTY_31 + "</td>";
        depData[11].__EMPTY_32 = '<td class="dybt">' + depData[11].__EMPTY_32 + "</td>";
        depData[11].__EMPTY_33 = '<td class="dpt">' + depData[11].__EMPTY_33 + "</td>";
        depData[11].__EMPTY_34 = '<td class="dpt">' + depData[11].__EMPTY_34 + "</td>";
        depData[11].__EMPTY_35 = '<td class="dpt">' + depData[11].__EMPTY_35 + "</td>";
        depData[11].__EMPTY_36 = '<td class="dpt" style="font-size: 17px">' + depData[11].__EMPTY_36 + "</td>";
        depData[11].__EMPTY_37 = '<td class="dpt">' + depData[11].__EMPTY_37 + "</td>";
        depData[11].__EMPTY_38 = '<td class="dpt">' + depData[11].__EMPTY_38 + "</td>";
        depData[11].__EMPTY_39 = '<td class="dpt">' + depData[11].__EMPTY_39 + "</td>";
        depData[11].__EMPTY_40 = '<td class="dpt">' + depData[11].__EMPTY_40 + "</td>";

        fs.writeFile("public/deposity.html", '<head><link rel="stylesheet" type="text/css" href="deposity.css" ></head><body><table><tr class="d1 dh1"><td calss="dysl"></td>' +
        depData[0].__EMPTY_11 + depData[0].__EMPTY_18 + depData[0].__EMPTY_24 + depData[0].__EMPTY_30 + depData[0].__EMPTY_36 + "</tr>" +
        '<tr class="dh2"><td class="d3 dysl">Валюта</td>' +
        depData[1].__EMPTY_11 +
        depData[1].__EMPTY_12 +
        depData[1].__EMPTY_13 +
        depData[1].__EMPTY_14 +
        depData[1].__EMPTY_15 +
        depData[1].__EMPTY_16 +
        depData[1].__EMPTY_17 +
        depData[1].__EMPTY_18 +
        depData[1].__EMPTY_19 +
        depData[1].__EMPTY_20 +
        depData[1].__EMPTY_21 +
        depData[1].__EMPTY_22 +
        depData[1].__EMPTY_23 +
        depData[1].__EMPTY_24 +
        depData[1].__EMPTY_25 +
        depData[1].__EMPTY_26 +
        depData[1].__EMPTY_27 +
        depData[1].__EMPTY_28 +
        depData[1].__EMPTY_29 +
        depData[1].__EMPTY_30 +
        depData[1].__EMPTY_31 +
        depData[1].__EMPTY_32 +
        depData[1].__EMPTY_33 +
        depData[1].__EMPTY_34 +
        depData[1].__EMPTY_35 +
        depData[1].__EMPTY_36 +
        depData[1].__EMPTY_37 +
        depData[1].__EMPTY_38 +
        depData[1].__EMPTY_39 +
        depData[1].__EMPTY_40 +
        '</tr><tr><td class="d3 dysl">BYN</td>' +
        depData[2].__EMPTY_11 +
        depData[2].__EMPTY_12 +
        depData[2].__EMPTY_13 +
        depData[2].__EMPTY_14 +
        depData[2].__EMPTY_15 +
        depData[2].__EMPTY_16 +
        depData[2].__EMPTY_17 +
        depData[2].__EMPTY_18 +
        depData[2].__EMPTY_19 +
        depData[2].__EMPTY_20 +
        depData[2].__EMPTY_21 +
        depData[2].__EMPTY_22 +
        depData[2].__EMPTY_23 +
        depData[2].__EMPTY_24 +
        depData[2].__EMPTY_25 +
        depData[2].__EMPTY_26 +
        depData[2].__EMPTY_27 +
        depData[2].__EMPTY_28 +
        depData[2].__EMPTY_29 +
        depData[2].__EMPTY_30 +
        depData[2].__EMPTY_31 +
        depData[2].__EMPTY_32 +
        depData[2].__EMPTY_33 +
        depData[2].__EMPTY_34 +
        depData[2].__EMPTY_35 +
        depData[2].__EMPTY_36 +
        depData[2].__EMPTY_37 +
        depData[2].__EMPTY_38 +
        depData[2].__EMPTY_39 +
        depData[2].__EMPTY_40 +
        '</tr><tr><td class="d3 dysl">USD</td>' +
        depData[7].__EMPTY_11 +
        depData[7].__EMPTY_12 +
        depData[7].__EMPTY_13 +
        depData[7].__EMPTY_14 +
        depData[7].__EMPTY_15 +
        depData[7].__EMPTY_16 +
        depData[7].__EMPTY_17 +
        depData[7].__EMPTY_18 +
        depData[7].__EMPTY_19 +
        depData[7].__EMPTY_20 +
        depData[7].__EMPTY_21 +
        depData[7].__EMPTY_22 +
        depData[7].__EMPTY_23 +
        depData[7].__EMPTY_24 +
        depData[7].__EMPTY_25 +
        depData[7].__EMPTY_26 +
        depData[7].__EMPTY_27 +
        depData[7].__EMPTY_28 +
        depData[7].__EMPTY_29 +
        depData[7].__EMPTY_30 +
        depData[7].__EMPTY_31 +
        depData[7].__EMPTY_32 +
        depData[7].__EMPTY_33 +
        depData[7].__EMPTY_34 +
        depData[7].__EMPTY_35 +
        depData[7].__EMPTY_36 +
        depData[7].__EMPTY_37 +
        depData[7].__EMPTY_38 +
        depData[7].__EMPTY_39 +
        depData[7].__EMPTY_40 +
        '</tr><tr><td class="d3 dysl">EUR</td>' +
        depData[9].__EMPTY_11 +
        depData[9].__EMPTY_12 +
        depData[9].__EMPTY_13 +
        depData[9].__EMPTY_14 +
        depData[9].__EMPTY_15 +
        depData[9].__EMPTY_16 +
        depData[9].__EMPTY_17 +
        depData[9].__EMPTY_18 +
        depData[9].__EMPTY_19 +
        depData[9].__EMPTY_20 +
        depData[9].__EMPTY_21 +
        depData[9].__EMPTY_22 +
        depData[9].__EMPTY_23 +
        depData[9].__EMPTY_24 +
        depData[9].__EMPTY_25 +
        depData[9].__EMPTY_26 +
        depData[9].__EMPTY_27 +
        depData[9].__EMPTY_28 +
        depData[9].__EMPTY_29 +
        depData[9].__EMPTY_30 +
        depData[9].__EMPTY_31 +
        depData[9].__EMPTY_32 +
        depData[9].__EMPTY_33 +
        depData[9].__EMPTY_34 +
        depData[9].__EMPTY_35 +
        depData[9].__EMPTY_36 +
        depData[9].__EMPTY_37 +
        depData[9].__EMPTY_38 +
        depData[9].__EMPTY_39 +
        depData[9].__EMPTY_40 +
        '</tr><tr><td class="d3 dysl">EUR</td>' +
        depData[11].__EMPTY_11 +
        depData[11].__EMPTY_12 +
        depData[11].__EMPTY_13 +
        depData[11].__EMPTY_14 +
        depData[11].__EMPTY_15 +
        depData[11].__EMPTY_16 +
        depData[11].__EMPTY_17 +
        depData[11].__EMPTY_18 +
        depData[11].__EMPTY_19 +
        depData[11].__EMPTY_20 +
        depData[11].__EMPTY_21 +
        depData[11].__EMPTY_22 +
        depData[11].__EMPTY_23 +
        depData[11].__EMPTY_24 +
        depData[11].__EMPTY_25 +
        depData[11].__EMPTY_26 +
        depData[11].__EMPTY_27 +
        depData[11].__EMPTY_28 +
        depData[11].__EMPTY_29 +
        depData[11].__EMPTY_30 +
        depData[11].__EMPTY_31 +
        depData[11].__EMPTY_32 +
        depData[11].__EMPTY_33 +
        depData[11].__EMPTY_34 +
        depData[11].__EMPTY_35 +
        depData[11].__EMPTY_36 +
        depData[11].__EMPTY_37 +
        depData[11].__EMPTY_38 +
        depData[11].__EMPTY_39 +
        depData[11].__EMPTY_40 + "</tr></table></body>", function(error){
          if(error) throw error;
        });
        console.log(now);
    }, 500000);

    app.listen(80);
