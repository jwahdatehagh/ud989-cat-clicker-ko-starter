var initialCats = [
  {
    clickCount: 0,
    name: 'Tabbie',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nickNames: ['Teddy', 'Whinny', 'Catty']
  },
  {
    clickCount: 0,
    name: 'Shiva',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nickNames: ['Shivita', 'Grey Catto']
  },
  {
    clickCount: 0,
    name: 'Igor',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nickNames: ['der Große', 'Kuschaka']
  }
]


var Cat = function(data) {

  // attrs
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nickNames = ko.observableArray(data.nickNames);

  // computed attrs
  this.title = ko.computed(function() {
    var clickCount = this.clickCount();

    return (clickCount < 5) ? 'Infant' :
                                        (clickCount < 10) ? 'Apprentice' : 'Master';

  }, this);
};


var ViewModel = function() {
  var _this = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    _this.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    _this.currentCat().clickCount(_this.currentCat().clickCount() + 1);
  };

  this.setCurrentCat = function(cat) {
    _this.currentCat(cat);
  }



};

ko.applyBindings(new ViewModel());
