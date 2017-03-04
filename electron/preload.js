var _timeout = 500 //ms
var _id = parseInt(/\d+/g.exec(window.location.href)[0]); 
console.log('the query id is', _id)

spider_start = function () {
    if (localStorage.spiderResults == null) {
        localStorage.spiderResults = "[]";
    }

    localStorage.spider = "1"

    var result = getInfo();
    addToLocalResults(result);
    setTimeout(NextPage, _timeout);
}

var spider_continue = function () {
    if (_id == 100000){
        return localStorage.removeItem("spider"); 
    }

    var result = getInfo();
    addToLocalResults(result);
    setTimeout(NextPage, _timeout);
}

getInfo = function(){
    var id = _id; 
    var name = document.getElementById("q").value; 
    return {q_id:id, q_name:name}
}

NextPage = function(){
    var id = _id
    var href = window.location.href.replace(id,id+1)
    return window.location.href = href 
}

function addToLocalResults(item) {
    if (localStorage.spiderResults == null) {
        return console.info("error when addToLocalResults(), check localStorage.spiderResults");
    }

    var temp = [];
    temp = JSON.parse(localStorage.spiderResults);
    if (typeof (item) == "string") {
        temp.push(item);
    }
    else if (typeof (item) == "object") {
        temp = temp.concat(item);
    }
    else {
        return console.info("unknow typeof ", item);
    }

    localStorage.spiderResults = JSON.stringify(temp);
}

saveToFile = function () {
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    download('results.json', localStorage.spiderResults);
    localStorage.clear();
}


if (localStorage.spider){
    window.onload = spider_continue; 
}
