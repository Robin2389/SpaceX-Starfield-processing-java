// This program builds the starfield, and the background, and incorporates the mouse movement.

Star[] stars = new Star[800];

PImage starimg;
PImage spaceximg;
float speed;

  
void settings() {
  size(1000, 800);
}

void setup() {

  //  surface.setResizable(true); for C++ I think
  
  for (int i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
  
  size(1000, 800);
  
  /* 
  here is where you load your images, make sure the file names are 
  exactly the same to the ones in the folder where you downloaded 
  your photos 
  */
  starimg = loadImage("stars.jpg");
  spaceximg = loadImage("spacex.png");
}

void draw() {
  speed = map(mouseX, 0, width, 0, 20);
  image(starimg, 0, 0);
  spaceximg.resize(0, 200);  
  image (spaceximg, 100, 300);  // location of spacex logo:
                                // 100 pixels in x, 300 pixes in y
  
  translate(width/2, height/2);
  for (int i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  
  
}
