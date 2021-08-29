const app = new PIXI.Application({
    width: 800, 
    height: 600, 
    backgroundColor: 0x181A34, 
    resolution: 1, 
    // resolution: window.devicePixelRatio || 1
});

app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);

const loader = PIXI.Loader.shared; 
loader.add('page', 'images/lumberjane_01.jpg')

loader.load((loader, resources) => {
    const page = resources.page.texture;
    const panel1 = new PIXI.Rectangle(200,130,600,300);
    const panel2 = new PIXI.Rectangle(200,530,300,300);
    
    // panel 1
    page.frame = panel1;
    const spr1 = new PIXI.Sprite(page)
    spr1.position.set(0, 200);
    spr1.alpha = 0;
    app.ticker.add((delta) => {
        spr1.x += 0.6 ;
        spr1.alpha += 0.008;
    });

    // panel 2
    const page2 = new PIXI.Texture(resources.page.texture)
    page2.frame = panel2;
    const spr2 = new PIXI.Sprite(page2)
    spr2.position.set(760, 100);

    spr2.alpha = 0;
    setTimeout(() => {
        app.ticker.add((delta) => {
            spr2.y += 1 ;
            spr2.alpha += 0.008;
        });
        
        
        setTimeout(() => {app.ticker.stop()}, 700);
    
    }, 850);

    app.stage.addChild(spr1, spr2);
});


// loader.onProgress.add(() => {});
loader.onError.add(() => {console.log('Error')});
// loader.onLoad.add(() => {}); 
loader.onComplete.add(() => {console.log('loading complete.')}); 

