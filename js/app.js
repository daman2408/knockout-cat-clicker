var initialPuppies = [
  {
   name: "Rocko",
   image: "http://images21.freeadspets.com/2016/02/12/FreeAdsPets.com-2-dogs-breed-doberman-pinscher-gender-female-age-young-red-doberman-puppies-10-weeks-old-kansas-city.JPG",
   count: 0,
   nickNames: ['Rocky', 'Rocku', 'Son']
 },

 {
   name: "Ralph",
   image:"http://www.petmd.com/sites/default/cache/imagecache/node-gallery-display/shutterstock_19820554-slide1.jpg",
   count: 0,
   nickNames: ['tiny', 'lol']
 },

 {
   name: "Nitro",
   image: "http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-15.jpg",
   count: 0,
   nickNames: ['Fluffy', 'Gebra']
 },

 {
   name: "Rex",
   image: "https://pixabay.com/static/uploads/photo/2015/09/25/21/26/chihuahua-puppy-958203_960_720.jpg",
   count: 0,
   nickNames: ['MEsslem', "Furry"]
 },

 {
   name: "Frank",
   image: "http://i3.mirror.co.uk/incoming/article6944344.ece/ALTERNATES/s615/Illegal-trade-of-designer-puppies-sold-to-UK-buyers.jpg",
   count: 0,
   nickNames: ['Eddie', 'Taco Bell', 'Nacho']
 }
]


var Cat = function(data) {

    this.clickCount = ko.observable(data.count);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.image);
    this.nickNames = ko.observable(data.nickNames);

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

    this.puppies = ko.observableArray([]);
    initialPuppies.forEach(function(puppyItem) {
      self.puppies.push(new Cat(puppyItem));
    });


    this.currentCat = ko.observable( this.puppies()[0] );

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCurrentCat = function(puppy) {
      self.currentCat(puppy);
    }
}

ko.applyBindings(new viewModel());
