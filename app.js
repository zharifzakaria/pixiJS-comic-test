const app = new PIXI.Application();

app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);

// create a new Sprite from an image path
const page01 = PIXI.Sprite.from('images/lumberjane_01.jpg');

// center the sprite's anchor point
page01.anchor.set(0.5);

// move the sprite to the center of the screen
page01.x = app.screen.width / 2;
page01.y = app.screen.height / 2;

app.stage.addChild(page01);