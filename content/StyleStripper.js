$("#GetColours").click(function () {
    var bootstrap = $("#bootstrap").val();
    var re = /#[0-9a-fA-F]{3}(;|,|}|\s)|#[0-9a-fA-F]{6}(;|,|}|\s)|#[0-9a-fA-F]{8}(;|,|}|\s)/g,
        //Need to get the rgb colours selected as well: something like - rgba\([a-zA-Z0-9,\s]{1,60}\
        match;

    var items = [];
    while (match = re.exec(bootstrap)) {
        var value = match[0];
        if (value[0] == "#")
            value = value.substring(0, value.length - 1);

        var shouldAdd = true;
        for (var item in items) {
            if (items[item] == value) {
                shouldAdd = false;
            }
        }
        
        if (shouldAdd) {
            items[items.length] = value;
        }
    }
    
    for (var item in items) {
        $("#output").append(items[item] + "\r\n");
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