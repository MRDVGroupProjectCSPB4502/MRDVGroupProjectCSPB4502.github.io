var index = 0;
var w = window.innerWidth;
var h = window.innerHeight;
var thumbWidth = 1280 / 8;
var thumbHeight = 720 / 8;

// var screenFactor = 1;
let clusters;
var cluster_keys;

var allClusterImageList = [];
var indexMax;

function preload() {
  clusters = loadJSON('clusters.json');
}

function setup() {
  cluster_keys = Object.keys(clusters);
  for (let i = 0; i < cluster_keys.length; i++) {
    const key = cluster_keys[i];
    // console.log(key, clusters[key]);
    var oneClusterList = [];
    for (j = 0; j < clusters[key].length; j++) {
      str1 = '../cover-video/images/'
      url = str1.concat(clusters[key][j]);
      oneClusterList.push(loadImage(url));
    }
    allClusterImageList.push(oneClusterList);
  }
  console.log(allClusterImageList);
  createCanvas(w, h);
  background(255);
  frameRate(30);
}

function draw() {
  background(255, 255, 255, 20);

  // index = index + 1;
  // // if (index == indexMax) {
  // //   index = index - indexMax;
  // // }
  // image(imgList[index], random(w - thumbWidth), random(h - thumbHeight), thumbWidth, thumbHeight);

}