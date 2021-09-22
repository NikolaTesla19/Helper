"use strict"
$(function(){
  $('#i01').click(function(){
      var f01 = document.getElementById('i01');

      var range = document.createRange();
      range.selectNode(f01);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy');
      }

      window.getSelection().removeAllRanges();
  });
  $('#i02').click(function(){
      var f02 = document.getElementById('i02');

      var range = document.createRange();
      range.selectNode(f02);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy');
      }

      window.getSelection().removeAllRanges();
  });
  $('#i03').click(function(){
      var f03 = document.getElementById('i03');

      var range = document.createRange();
      range.selectNode(f03);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy, boss');
      }

      window.getSelection().removeAllRanges();
  });
  $('#i04').click(function(){
      var f04 = document.getElementById('i04');

      var range = document.createRange();
      range.selectNode(f04);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy, boss');
      }

      window.getSelection().removeAllRanges();
  });
  $('#i05').click(function(){
      var f05 = document.getElementById('i05');

      var range = document.createRange();
      range.selectNode(f05);
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
      } catch(err) {
        console.log('Can`t copy, boss');
      }

      window.getSelection().removeAllRanges();
  });
});
