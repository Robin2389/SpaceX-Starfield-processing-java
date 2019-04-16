// This program builds the starfield, and the background, and incorporates the mouse movement.

Star[] stars = new Star[800];

PImage img;
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
  img = loadImage("stars.jpg");
}

void draw() {
  speed = map(mouseX, 0, width, 0, 20);
  image(img, 0, 0);
  
  translate(width/2, height/2);
  for (int i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  
  
}
