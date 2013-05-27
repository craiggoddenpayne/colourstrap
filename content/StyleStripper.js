$("#GetColours").click(function () {
    var bootstrap = $("#bootstrap").val();
    var re = /#[0-9a-fA-F]{3}(;|,|}|\s)|#[0-9a-fA-F]{6}(;|,|}|\s)|#[0-9a-fA-F]{8}(;|,|}|\s)|rgba\([a-zA-Z0-9,.\s]{0,60}\)/g,
        match;

    var items = [];
    while (match = re.exec(bootstrap)) {
        var value = match[0];
        if (value[0] == "#")
            value = value.substring(0, value.length - 1);

        items[items.length] = value;
    }

    var uniqueItems = items.filter(function(elem, pos) {
        return items.indexOf(elem) == pos;
    });

    for (var item in uniqueItems) {
        $("#output").append(uniqueItems[item] + "\r\n");
    }
});


$("#SortColours").click(function() {
    var input = $("#bootstrap").val();
    var values = [];
    var r = input.split("\n");

    for (var item in r) {
        var value = parseInt(r[item].substring(1, r[item].length), 16);
        values[values.length] = value;
    }

    values = values.sort();

    for (var value in values) {
        $("#output").append("#" + values[value].toString(16) + "\r\n");
    }

});