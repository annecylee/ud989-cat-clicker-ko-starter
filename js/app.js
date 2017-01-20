var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    nicknames: ['Tabtab', 'T-Bone','Mr. T']
  },
  {
    clickCount: 0,
    name: 'Lucy',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    nicknames: ['Lu']
  }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if (clicks < 10){
      title = 'Newborn';
    } else if (clicks < 50){
      title  = 'Infant';
    } else if (clicks < 100) {
      title = 'Teen';
    }
    return title
  }, this);
};

var ViewModel = function(){

  var self = this;

  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem))
  });

  this.currentCat = ko.observable(this.catList()[0])

  this.setCurrentCat = function(cat){
    self.currentCat(cat);
  }

  this.incrementCounter = function(){
    this.clickCount(this.clickCount() + 1);
  };

};

ko.applyBindings(new ViewModel());
