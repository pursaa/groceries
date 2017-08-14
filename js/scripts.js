$(document).ready(function(){
  var items = ["first-item", "second-item", "third-item", "fourth-item"];
  var inputItems = [];
  $("form").submit(function(event){
    event.preventDefault();
    items.forEach(function(item) {
      // debugger;
      var userItem = $("input#" + item).val();
      inputItems.push(userItem);
    });

    inputItems.sort();
    var inputItemsCap = inputItems.map(function(item){
      return item.toUpperCase();
    });
    console.log(inputItemsCap);
    $("form").hide();
    $(".list").show();
    inputItemsCap.forEach(function(item){
      var positions = ["first", "second", "third", "fourth"];
      positions.forEach(function(position) {
        $("#" + position).text(item);
      });
    });
  });
});
