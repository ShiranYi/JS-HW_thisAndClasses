// this
// EX 1
var data = {
    info: "info",
    logInfo: function () {
        console.log(this.info);
    }
}
data.logInfo();

// EX 2
var user = {
    name: "John",
    getNmae: function () {
        return this.name;
    }
}
console.log(user.getNmae());

// EX 3
var mail = {
    port: function () {
        return 225;
    },
    send: function () {
        return "Request to port: " + this.port();
    }
}
console.log(mail.send());

// EX 4
var data = {
    articles: ["article1", "article2", "article3"],
    print: function () {
        var $content = document.getElementById("content");
        for (let i = 0; i < this.articles.length; i++) {
            $content.innerHTML += `<p>` + this.articles[i] + `</p>`;
            
        }
    }
}
data.print();

// EX 5
var ob = {
    name: null,
    setName: function(name){
        this.name = name;
    },
    getName: function(){
        return this.name;
    }
};
ob.setName("Bob");
console.log(ob.getName());

// EX 6
var product = {
    sizes: ["S", "M", "L", "XL", "XXL"],
    print: function () {
        var $sizes = document.getElementById("sizes");
        for (let i = 0; i < this.sizes.length; i++) {
            $sizes.innerHTML += `<option>` + this.sizes[i] + `</option>`;
        }
    }
}
product.print();

// EX 7
var book = {
    name: "Harry Potter",
    author: "Joanne Rowling",
    pages: 220,
    price: 100,
    setBook: function(propery, value) {
        this[propery] = value;
        return this;
    },
    getBook: function(propery) {
        return this[propery];
    }

};
var newBook = book.setBook("name","Harry Potter 2").getBook("name");
console.log(newBook);

// class
// EX 1
function Request(url) {
    this.url = "google.com";
}
var request = new Request();
console.log(request.url);

// EX 2
var Mail = function () {
    this.port = 225;
    this.send = function () {
        return "Mail send by port: " + this.port;
    }
}
var mail = new Mail();
console.log(mail.send());

// EX 3
function Hash() {
    this.key;
    this.setKey = function (key) {
        this.key = key;
    }
    this.getKey = function () {
        return this.key;
    }
}
var hash = new Hash();
hash.setKey("123");
console.log(hash.getKey());

// EX 4
function Http() {
    this.url = "google.com";
    this.protocol = "http";
}
var http = new Http();
delete http.url;
http.protocol = "https";
http.id = "456";
http.message = function () {
    return "Welcome to " + this.protocol + "://" + this.url;
};
console.log(http);

// EX 5
var $nl = document.getElementById("names-list");
function DB() {
    this.names = ["Moshe", "Kobi", "Ron", "Shula", "Niza"];
    this.render = function () {
        for (let i = 0; i < this.names.length; i++) {
            $nl.innerHTML += `<li>` + this.names[i] + `</li>`;
                        
        }
    };
};

var db = new DB();
db.render();

// EX 6
function Person() {
    this.id = "4587193";
    this.name = "Nir";
    this.getName = function() {
        return this.name;
    }
}
var person = new Person();
for (const x in person) {
    if (typeof person[x] != "function") {
        console.log(`${x}: ${person[x]}`);
    }

}

// EX 7
var Mail = function(email) {
    this.email = email;
    this.sendMail = function() {
        return "Mail send to: " + this.email;
    };
};
var mail = new Mail("lolo@xxx.com");
console.log(mail.sendMail());


