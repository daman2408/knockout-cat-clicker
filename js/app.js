var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.nickNames = ko.observableArray(
        ['Damo', 'Damian Marley', 'Dam City']
    );

    this.age = ko.computed(function() {
        if (this.clickCount() <= 2) {
            return "kitten"
        } else if (this.clickCount() > 2 && this.clickCount() <= 6) {
            return "teenager"
        } else if (this.clickCount() > 6 && this.clickCount() < 10) {
            return "adult"
        } else {
            return "oldie"
        }
    }, this);
}

var viewModel = function() {

    var self = this;
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new viewModel());
